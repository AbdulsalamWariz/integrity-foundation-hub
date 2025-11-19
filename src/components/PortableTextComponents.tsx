import React from "react";
import { PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// --- Helpers ---
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

// --- Components ---

const ImageComponent = ({ value }: any) => {
    if (!value?.asset?._ref) return null;

    const style = value.style || "full-width";
    let className = "my-6 rounded-lg overflow-hidden";

    if (style === "float-left") {
        className += " float-left mr-6 mb-4 max-w-[50%]";
    } else if (style === "gallery") {
        // Simplified gallery view for single image, or could be grid if multiple
        className += " mx-auto";
    } else {
        className += " w-full";
    }

    return (
        <figure className={className}>
            <img
                src={urlFor(value).width(800).fit("max").auto("format").url()}
                alt={value.alt || "Article image"}
                className="w-full h-auto object-cover"
            />
            {value.caption && (
                <figcaption className="mt-2 text-sm text-center text-muted-foreground">
                    {value.caption}
                </figcaption>
            )}
        </figure>
    );
};

const CodeComponent = ({ value }: any) => {
    return (
        <div className="my-6 rounded-lg overflow-hidden text-sm">
            {value.language && (
                <div className="bg-muted px-4 py-2 text-xs font-mono text-muted-foreground uppercase border-b">
                    {value.language}
                </div>
            )}
            <SyntaxHighlighter
                language={value.language || "text"}
                style={vscDarkPlus}
                customStyle={{ margin: 0, borderRadius: 0 }}
            >
                {value.code || ""}
            </SyntaxHighlighter>
        </div>
    );
};

const FileComponent = ({ value }: any) => {
    if (!value?.asset?._ref) return null;

    // Construct file URL (assuming standard Sanity production dataset)
    // Pattern: https://cdn.sanity.io/files/<projectId>/<dataset>/<filename>.<ext>
    // We can use a helper or just rely on the fact that we might need to fetch it or use a known pattern if not provided.
    // However, without the file asset metadata loaded, we can't easily guess the extension.
    // Ideally, the query should fetch `asset->{url}`.
    // If the query only returns `_ref`, we can't build the URL easily without the project config and file extension.
    // BUT, for `file` types, usually we want to expand the asset in the GROQ query.
    // Assuming the GROQ query will be updated to expand `asset`.

    // If `asset` is just a ref, we might have a broken link unless we update the query.
    // For now, let's assume the asset IS expanded or we have a URL.
    // If not, we'll render a placeholder or try to build it if we had the filename.

    // Let's assume the GROQ query will fetch `asset->{url, originalFilename}`.
    const fileUrl = value.asset?.url;

    if (!fileUrl) return null;

    return (
        <div className="my-6">
            <Button asChild variant="outline">
                <a href={fileUrl} download target="_blank" rel="noopener noreferrer">
                    {value.caption || "Download File"}
                </a>
            </Button>
        </div>
    );
};

const CTAComponent = ({ value }: any) => {
    return (
        <Card className="my-8 bg-muted/50 border-primary/20">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                    <h3 className="text-xl font-semibold mb-2">{value.headline}</h3>
                </div>
                <Button asChild size="lg">
                    {/* Assuming there's no URL field in the schema description, we might need one. 
              For now, I'll default to # or check if there's a url property I missed.
              The prompt says "You may need to decide where this button links to".
              I'll assume a `url` field exists or default to contact.
          */}
                    <Link to={value.url || "/contact"}>{value.buttonText || "Learn More"}</Link>
                </Button>
            </CardContent>
        </Card>
    );
};

const EmbedHTMLComponent = ({ value }: any) => {
    if (!value?.sourceURL) return null;

    // Simple check for YouTube
    const isYouTube = value.sourceURL.includes("youtube.com") || value.sourceURL.includes("youtu.be");

    if (isYouTube) {
        // Extract video ID (naive)
        let videoId = "";
        if (value.sourceURL.includes("v=")) {
            videoId = value.sourceURL.split("v=")[1]?.split("&")[0];
        } else if (value.sourceURL.includes("youtu.be/")) {
            videoId = value.sourceURL.split("youtu.be/")[1];
        }

        if (videoId) {
            return (
                <div className="my-6 aspect-video rounded-lg overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            );
        }
    }

    // Generic fallback or other embeds
    return (
        <div className="my-6 p-4 border rounded bg-muted/20">
            <div className="text-sm text-muted-foreground mb-2">Embedded Content</div>
            <a
                href={value.sourceURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
            >
                {value.sourceURL}
            </a>
        </div>
    );
};

export const components: PortableTextComponents = {
    types: {
        image: ImageComponent,
        code: CodeComponent,
        file: FileComponent,
        ctaBlock: CTAComponent,
        embedHTML: EmbedHTMLComponent,
    },
    marks: {
        internalLink: ({ value, children }: any) => {
            const slug = value?.slug?.current;
            return (
                <Link to={`/editorial/${slug}`} className="text-primary hover:underline">
                    {children}
                </Link>
            );
        },
        link: ({ value, children }: any) => {
            const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
            return (
                <a
                    href={value?.href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-primary hover:underline"
                >
                    {children}
                </a>
            );
        },
    },
    block: {
        h2: ({ children }: any) => (
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">{children}</h3>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className="mb-4 leading-relaxed text-base sm:text-lg">{children}</p>
        ),
    },
};

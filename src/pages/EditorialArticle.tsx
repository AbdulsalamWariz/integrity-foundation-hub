import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/client";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

// Minimal Portable Text renderer for common blocks/marks
function renderPortableText(blocks: any): React.ReactNode {
  if (!blocks) return null;
  return blocks.map((block: any, i: number) => {
    if (block._type === "block") {
      const children = (block.children || []).map((child: any, idx: number) => {
        let text: React.ReactNode = child.text;
        if (child.marks && child.marks.length) {
          child.marks.forEach((mark: string) => {
            // basic handling for strong/em
            if (mark === "strong") text = <strong key={idx}>{text}</strong>;
            if (mark === "em") text = <em key={idx}>{text}</em>;
          });
        }
        return <React.Fragment key={idx}>{text}</React.Fragment>;
      });
      return (
        <p key={i} className="mb-3 sm:mb-4 text-sm sm:text-base break-words overflow-hidden leading-relaxed">
          {children}
        </p>
      );
    }

    if (block._type === "image") {
      const url = block.asset?._ref ? undefined : block.asset?.url || block.url;
      // If asset ref is present, Sanity returns object refs; for simplicity try asset.url
      return (
        <img key={i} src={url} alt={block.alt || ""} className="my-3 sm:my-4 w-full h-auto rounded-md object-cover max-w-full" />
      );
    }

    // fallback: JSON stringify
    return (
      <pre key={i} className="whitespace-pre-wrap text-sm text-muted-foreground">{JSON.stringify(block)}</pre>
    );
  });
}

const queryBySlug = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  mainImage{asset-> {url}},
  body
}`;

const EditorialArticle: React.FC = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editorial-article", slug],
    queryFn: async () => {
      const res = await client.fetch(queryBySlug, { slug });
      return res;
    },
    enabled: !!slug,
  });

  return (
    <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      <Header />
      <main className="px-3 sm:px-4 py-6 sm:py-12 w-full">
        <div className="max-w-3xl mx-auto w-full mb-4 sm:mb-6 px-0">
          <Link to="/editorial" className="text-xs sm:text-sm text-muted-foreground hover:underline inline-block break-words">← Back to Editorial</Link>
        </div>

        {isLoading && <p className="text-muted-foreground">Loading…</p>}
        {isError && <p className="text-destructive">Failed to load article.</p>}

        {data && (
          <div className="max-w-3xl mx-auto w-full px-0">
            <Card className="border-none shadow-lg w-full">
              <CardContent className="p-4 sm:p-6 w-full overflow-hidden">
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-2 break-words">{data.title}</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">{data.publishedAt?.slice(0,10)}</p>
                {data.mainImage?.asset?.url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={data.mainImage.asset.url} alt={data.title} className="mt-4 sm:mt-6 w-full h-auto rounded-md object-cover" />
                )}

                <div className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground break-words overflow-hidden">
                  {renderPortableText(data.body)}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default EditorialArticle;

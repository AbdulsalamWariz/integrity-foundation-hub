import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
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
        <p key={i} className="mb-3">
          {children}
        </p>
      );
    }

    if (block._type === "image") {
      const url = block.asset?._ref ? undefined : block.asset?.url || block.url;
      // If asset ref is present, Sanity returns object refs; for simplicity try asset.url
      return (
        <img key={i} src={url} alt={block.alt || ""} className="my-4 w-full rounded-md" />
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link to="/editorial" className="text-sm text-muted-foreground hover:underline">← Back to Editorial</Link>
        </div>

        {isLoading && <p className="text-muted-foreground">Loading…</p>}
        {isError && <p className="text-destructive">Failed to load article.</p>}

        {data && (
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
              <p className="text-sm text-muted-foreground">{data.publishedAt?.slice(0,10)}</p>
              {data.mainImage?.asset?.url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={data.mainImage.asset.url} alt={data.title} className="mt-4 w-full rounded-md" />
              )}

              <div className="mt-6 text-muted-foreground">
                {renderPortableText(data.body)}
              </div>

              <div className="mt-6">
                <Button asChild>
                  <a href="mailto:?subject=Interesting article&body=I thought you'd like this article: " className="text-sm">Share via Email</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default EditorialArticle;

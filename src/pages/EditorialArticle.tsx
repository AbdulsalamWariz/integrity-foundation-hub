import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/client";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { PortableText } from "@portabletext/react";
import { components } from "@/components/PortableTextComponents";

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
                <p className="text-xs sm:text-sm text-muted-foreground">{data.publishedAt?.slice(0, 10)}</p>
                {data.mainImage?.asset?.url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={data.mainImage.asset.url} alt={data.title} className="mt-4 sm:mt-6 w-full h-auto rounded-md object-cover" />
                )}

                <div className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground break-words overflow-hidden">
                  <PortableText value={data.body} components={components} />
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

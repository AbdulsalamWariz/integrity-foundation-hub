import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import { client } from "@/sanity/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type SanityArticle = {
  _id: string;
  title?: string;
  excerpt?: string;
  bodyText?: string;
  publishedAt?: string;
  slug?: string;
  mainImage?: string | null;
};

const query = `*[_type in ["post","article","editorial"] && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "excerpt": coalesce(excerpt, pt::text(body)[0...300]),
  "bodyText": pt::text(body),
  publishedAt,
  "slug": slug.current,
  "mainImage": mainImage.asset->url
}`;

const Editorial = () => {
  const [openArticle, setOpenArticle] = useState<SanityArticle | null>(null);

  const { data, isLoading, isError } = useQuery<SanityArticle[]>({
    queryKey: ["editorial-articles"],
    queryFn: async () => {
      const res = await client.fetch(query);
      return res as SanityArticle[];
    },
  });

  // (debug removed)

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header in link-mode so it renders Links (no onNavClick) */}
      <Header />

      <main className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Editorial</h1>
          <p className="text-muted-foreground mt-2">Opinions, commentary, and curated articles from the Foundation.</p>
        </header>

        {isLoading && <p className="text-muted-foreground">Loading articles…</p>}
        {isError && <p className="text-destructive">Failed to load articles.</p>}

        {/* debug info removed */}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.map((article) => (
            <Card key={article._id} className="border-none shadow-md">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{article.publishedAt?.slice(0, 10)}</p>
                <p className="mt-3 text-muted-foreground">{article.excerpt}</p>
                <div className="mt-4 flex gap-3">
                  {/* Link to detail route (also keep dialog-read if you still want) */}
                  <a href={`/editorial/${article.slug}`} className="text-sm font-medium text-primary hover:underline">
                    Read more
                  </a>

                  <Button variant="ghost" size="sm">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Editorial;

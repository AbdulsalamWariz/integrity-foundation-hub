import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { client } from "@/sanity/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

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
  "mainImage": coalesce(mainImage.asset->url, image.asset->url)
}`;

export default function EditorialClean() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery<SanityArticle[]>({
    queryKey: ["editorial-articles"],
    queryFn: async () => {
      const res = await client.fetch(query);
      return res as SanityArticle[];
    },
  });

  const filtered = useMemo(() => {
    if (!data) return [] as SanityArticle[];
    const q = search.trim().toLowerCase();
    if (!q) return data;
    return data.filter((a) => {
      return (
        (a.title || "").toLowerCase().includes(q) ||
        (a.excerpt || "").toLowerCase().includes(q) ||
        (a.bodyText || "").toLowerCase().includes(q)
      );
    });
  }, [data, search]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Editorial</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Opinions, commentary and curated articles from the Foundation — thoughtful pieces on
            education, ethics and youth empowerment.
          </p>
        </header>

        <div className="mb-6">
          <Label htmlFor="search" className="mb-2">Search articles</Label>
          <div className="relative max-w-xl">
            <svg className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or content…"
              className="pl-10"
            />
          </div>
        </div>

        {isLoading && <p className="text-muted-foreground">Loading articles…</p>}
        {isError && <p className="text-destructive">Failed to load articles.</p>}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <Card key={article._id} className="border-none shadow-md overflow-hidden flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={article.mainImage || logo}
                  alt={article.title || "Article image"}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{article.publishedAt?.slice(0, 10)}</p>
                <p className="mt-3 text-muted-foreground flex-1" style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>{article.excerpt}</p>
                <div className="mt-4">
                  <Link to={`/editorial/${article.slug}`} className="text-sm font-medium text-primary hover:underline">
                    Read more
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}

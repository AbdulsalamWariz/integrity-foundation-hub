import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.png";

type SanityProject = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: string | null;
};

const query = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "excerpt": coalesce(excerpt, pt::text(body)[0...200]),
  "mainImage": coalesce(mainImage.asset->url, image.asset->url)
}`;

const Projects = () => {
  const { data, isLoading, isError } = useQuery<SanityProject[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await client.fetch(query);
      return res as SanityProject[];
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-16 flex-1">
        <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A showcase of current and past projects run by the Olorunyomi Babatunde Foundation.
        </p>

        {isLoading && <p className="text-muted-foreground">Loading projects…</p>}
        {isError && <p className="text-destructive">Failed to load projects.</p>}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.map((project) => (
            <Card key={project._id} className="border-none shadow-md overflow-hidden flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={project.mainImage || logo}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground flex-1" style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {project.excerpt}
                </p>
                <Link to={`/projects/${project.slug}`} className="inline-block mt-4 text-primary hover:underline">
                  Learn more
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

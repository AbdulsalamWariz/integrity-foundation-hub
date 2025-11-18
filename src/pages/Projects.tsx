import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-16 flex-1">
        <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A showcase of current and past projects run by the Olorunyomi Babatunde Foundation.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold">Academic Integrity Program</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Workshops and resources to promote academic honesty in secondary schools.
          </p>
          <Link to="/projects/academic-integrity" className="inline-block mt-4 text-primary hover:underline">
            Learn more
          </Link>
        </article>

        <article className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold">Ethical Leadership Fellowship</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A mentorship and training program for young leaders across Nigeria.
          </p>
          <Link to="/projects/leadership-fellowship" className="inline-block mt-4 text-primary hover:underline">
            Learn more
          </Link>
        </article>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

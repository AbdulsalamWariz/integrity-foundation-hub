import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Building2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-students.jpg";

const Index = () => {
  const coreAims = [
    {
      icon: Target,
      title: "Change Mindsets",
      description:
        "Sensitise schools and communities about the harms of exam malpractice and the value of academic honesty.",
    },
    {
      icon: Users,
      title: "Empower Youth",
      description:
        "Deliver life-skills, leadership, and entrepreneurship training so students can pursue legitimate paths to success.",
    },
    {
      icon: Building2,
      title: "Influence Systems",
      description:
        "Work with educators, parents, and community leaders to strengthen policies and practices that support integrity in education.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 61, 108, 0.85), rgba(15, 61, 108, 0.85)), url(${heroImage})`,
            }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building a Future of <span className="text-secondary">Integrity</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Promoting academic honesty and ethical leadership among Nigeria's young people
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="donate" size="lg" asChild>
                <Link to="/support">Support Our Mission</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why We Exist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Academic integrity is the bedrock of meaningful learning and social trust. When young
                people are supported to succeed through skill, perseverance and integrity, communities
                benefit from stronger leaders, entrepreneurs and citizens. OBF exists to shift mindsets,
                strengthen institutions, and support young people to thrive honestly.
              </p>
            </div>
          </div>
        </section>

        {/* Three Core Aims */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our Three Core Aims
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreAims.map((aim, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                      <aim.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{aim.title}</h3>
                    <p className="text-muted-foreground">{aim.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Goal */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Goal</h2>
              <p className="text-xl leading-relaxed">
                To end exam malpractice and foster a culture of integrity among Nigeria's young people
                while providing them with the skills and support to pursue ethical success.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-secondary text-secondary-foreground rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Creating Change</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Every donation helps us reach more students, empower more youth, and strengthen more
                communities. Together, we can build a future of integrity.
              </p>
              <Button variant="donate" size="lg" asChild>
                <Link to="/support" className="inline-flex items-center gap-2">
                  Make a Donation <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

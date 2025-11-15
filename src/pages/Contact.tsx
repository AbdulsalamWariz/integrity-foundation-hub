import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@obf.org",
      link: "mailto:info@obf.org",
    },
    {
      icon: Users,
      title: "Partner With Us",
      content: "Interested in collaboration? Get in touch!",
      link: "mailto:info@obf.org",
    },
    {
      icon: Phone,
      title: "Volunteer",
      content: "Join our team of dedicated volunteers",
      link: "mailto:info@obf.org",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We'd love to hear from you. Whether you want to volunteer, partner, or learn more about
              our work.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                        <method.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                      <p className="text-muted-foreground mb-4">{method.content}</p>
                      <a
                        href={method.link}
                        className="text-primary hover:text-primary-light font-semibold transition-colors"
                      >
                        Contact Us →
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Main Contact Card */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center gap-3 text-lg">
                        <Mail className="h-5 w-5 text-primary" />
                        <a
                          href="mailto:info@obf.org"
                          className="text-primary hover:text-primary-light transition-colors"
                        >
                          info@obf.org
                        </a>
                      </div>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        Whether you're interested in volunteering, sponsoring a school visit, partnering
                        with us, or simply learning more about our work, we're here to help. Send us an
                        email and we'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ways to Support */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Ways to Get Involved
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Volunteer</h3>
                    <p className="text-muted-foreground mb-4">
                      Join our team of dedicated volunteers helping to spread the message of academic
                      integrity across schools and communities.
                    </p>
                    <a
                      href="mailto:info@obf.org"
                      className="text-secondary hover:text-secondary-dark font-semibold transition-colors"
                    >
                      Learn More →
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Partner With Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Organizations, schools, and community groups can partner with us to expand our
                      reach and impact.
                    </p>
                    <a
                      href="mailto:info@obf.org"
                      className="text-secondary hover:text-secondary-dark font-semibold transition-colors"
                    >
                      Get in Touch →
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Sponsor a School Visit</h3>
                    <p className="text-muted-foreground mb-4">
                      Help us reach more students by sponsoring outreach programmes and sensitization
                      campaigns in schools.
                    </p>
                    <a
                      href="mailto:info@obf.org"
                      className="text-secondary hover:text-secondary-dark font-semibold transition-colors"
                    >
                      Sponsor Now →
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Donate</h3>
                    <p className="text-muted-foreground mb-4">
                      Your financial support directly funds our programmes and helps us create lasting
                      change in communities.
                    </p>
                    <a
                      href="/support"
                      className="text-accent hover:text-accent/90 font-semibold transition-colors"
                    >
                      Support Our Work →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
                <p className="text-xl mb-6 opacity-90">
                  Follow us on social media for updates, stories, and ways to get involved
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href="#"
                    className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary-dark transition-all font-semibold"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary-dark transition-all font-semibold"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary-dark transition-all font-semibold"
                  >
                    Instagram
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

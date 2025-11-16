import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, PieChart, Shield, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Support = () => {
  const fundAllocation = [
    {
      category: "School Outreach & Sensitization",
      percentage: 40,
      description: "Direct school visits, workshops, and awareness campaigns",
    },
    {
      category: "Youth Empowerment & Skills Training",
      percentage: 35,
      description: "Leadership training, entrepreneurship programs, and mentorship",
    },
    {
      category: "Programme Administration & Safeguarding",
      percentage: 15,
      description: "Operational costs and child protection measures",
    },
    {
      category: "Monitoring, Evaluation & Learning",
      percentage: 10,
      description: "Impact assessment and continuous improvement",
    },
  ];

  const faqs = [
    {
      question: "Is my donation tax deductible?",
      answer:
        "[Add local/region tax guidance here if applicable].",
    },
    {
      question: "How do I get a receipt?",
      answer:
        "After donating on GoFundMe, you'll receive an automated email receipt. For receipts from OBF, email: contact@obf.org.",
    },
    {
      question: "Can I support OBF in other ways?",
      answer:
        "Yes — volunteer, sponsor a school visit, or partner with us. Contact: contact@obf.org.",
    },
    {
      question: "How can I track the impact of my donation?",
      answer:
        "We provide regular updates through our newsletter and social media. You can also request a detailed impact report by emailing info@obf.org.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Work</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Help us champion academic integrity and empower the next generation
            </p>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <DollarSign className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
                    <p className="text-lg text-muted-foreground">
                      Donations to OBF fund school outreach programmes, youth skills training, and
                      community engagement activities that reduce exam malpractice and build pathways to
                      honest success. Every donation helps change a life.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Button variant="donate" size="lg" className="text-lg px-12" asChild>
                      <a
                        href="https://gofundme.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Donate via GoFundMe
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fund Allocation */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <PieChart className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How Your Gift Will Be Used</h2>
                <p className="text-lg text-muted-foreground">
                  Transparency is at the heart of everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fundAllocation.map((item, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground flex-1">{item.category}</h3>
                        <div className="text-3xl font-bold text-accent ml-4">{item.percentage}%</div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                      <div className="mt-4 w-full bg-muted-foreground/20 rounded-full h-2">
                        <div
                          className="bg-secondary h-2 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Your Support Matters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-none shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                      <TrendingUp className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Proven Impact</h3>
                    <p className="text-muted-foreground">
                      We've reached over 10,000 students with measurable changes in attitudes towards
                      academic integrity.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                      <Shield className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Full Transparency</h3>
                    <p className="text-muted-foreground">
                      Every naira is tracked and reported. We provide detailed updates on how funds are
                      used.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                      <DollarSign className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Direct Impact</h3>
                    <p className="text-muted-foreground">
                      75% of your donation goes directly to programmes that change lives and build
                      integrity.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Gift Makes a Difference</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in building a future where integrity is the foundation of success
            </p>
            <Button variant="donate" size="lg" className="text-lg px-12" asChild>
              <a href="https://gofundme.com" target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </Button>
          </div>
        </section>

        {/* FAQs (moved to be the last section before the footer) */}
        <section id="faq" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-primary">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;

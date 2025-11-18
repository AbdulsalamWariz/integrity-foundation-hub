import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  Building2, 
  GraduationCap, 
  Heart, 
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import { useLocation, useEffect } from "react";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-students.jpg";
import mrsBabatunde from "@/assets/mrs-babatunde.png";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();
  useEffect(() => {
    const state = (location && (location as any).state) || {};
    const target = state?.scrollTo;
    if (target && typeof target === "string") {
      // small timeout to allow the page to render
      setTimeout(() => {
        scrollToSection(target);
        // clear the state so repeated visits don't auto-scroll
        // replace history state without scroll info
        try {
          window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
        } catch (e) {
          // ignore
        }
      }, 120);
    }
  }, [location]);

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

  const boardMembers = [
    {
      name: "Professor Oyelade Olutunji Sunday",
      role: "Chairman, Board of Trustees",
      bio: "An accomplished entrepreneur and respected community leader with decades of experience in business development and organisational governance. His leadership brings stability, foresight, and strategic guidance to the Foundation.",
      image: undefined,
    },
    {
      name: "Olorunyomi Emmanuel Babatunde",
      role: "Trustee",
      bio: "An entrepreneur and visionary whose passion for youth development and academic integrity inspired the establishment of OBF. With years of experience in community engagement and business leadership.",
      image: undefined,
    },
    {
      name: "Ifeoluwa Olaitan Babatunde",
      role: "Treasurer and Trustee",
      bio: "A seasoned accountant with vast experience in financial management and internal controls. She oversees the Foundation's treasury, ensuring transparency, accountability, and compliance with non-profit financial standards.",
      image: mrsBabatunde,
    },
    {
      name: "Sikiru Akinyeye Ahmed",
      role: "Trustee",
      bio: "A lecturer and education professional with a strong commitment to youth development and ethical learning environments. His academic background enhances the Foundation's ability to design impactful school-based programmes.",
      image: undefined,
    },
    {
      name: "Funwape Oyinkansola Motunrayo",
      role: "Trustee",
      bio: "An entrepreneur with a strong background in business operations and community development. She brings innovative thinking and organisational skills to OBF's governance structures and project planning processes.",
      image: undefined,
    },
    {
      name: "Olalekan Samson Babatunde",
      role: "Secretary, Non-Trustee",
      bio: "An educator with experience in school administration and youth mentoring. As Secretary, he supports the Board by managing documentation, correspondence, and governance processes.",
      image: undefined,
    },
  ];

  const getAvatarUrl = (name: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff`;

  const sdgs = [
    {
      icon: GraduationCap,
      title: "SDG 4 — Quality Education",
      description:
        "We promote equitable, inclusive and quality education by addressing factors that undermine learning — including exam malpractice — and by supporting skills development.",
    },
    {
      icon: Heart,
      title: "SDG 3 — Good Health and Well-being",
      description:
        "Through value-based education and youth empowerment, we support mental well-being and the creation of healthier, more resilient communities.",
    },
    {
      icon: TrendingUp,
      title: "SDG 1 — No Poverty",
      description:
        "By equipping young people with entrepreneurship skills and alternative pathways to success, we reduce the risk that poverty drives resort to dishonest practices.",
    },
  ];

  // Programs section intentionally removed to meet exact page order

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
      answer: "[Add local/region tax guidance here if applicable].",
    },
    {
      question: "How do I get a receipt?",
      answer:
        "After donating on GoFundMe, you'll receive an automated email receipt. For receipts from OBF, email: info@obf.org.",
    },
    {
      question: "Can I support OBF in other ways?",
      answer:
        "Yes — volunteer, sponsor a school visit, or partner with us. Contact: info@obf.org.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavClick={scrollToSection} />
      {/* Scroll to section when navigated with state (e.g., from other routes) */}
      <main className="flex-1">
        {/* HERO: Restored as the first visible section */}
        <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
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
              <Button variant="donate" size="lg" onClick={() => scrollToSection("support")}>Support Our Mission</Button>
              <Button variant="secondary" size="lg" onClick={() => scrollToSection("about")}>Learn More</Button>
            </div>
          </div>
        </section>

        {/* SECTION 1: About Us */}
        <section id="about" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Olorunyomi Babatunde Foundation (OBF) is a non-profit organisation dedicated to
                promoting academic honesty and ethical leadership among adolescents and young people. We
                design and implement school outreach campaigns, community sensitisation programmes, and
                youth empowerment initiatives that reduce exam malpractice and open alternative,
                honourable pathways to success.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OBF works with educators, parents, community and religious leaders to create lasting,
                systemic change in the culture of learning across communities.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Mission Statement */}
        <section id="mission" className="py-16 bg-background">
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

        {/* SECTION 3: Our Goal */}
        <section id="goal" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Goal</h2>
              <p className="text-lg leading-relaxed">
                To end exam malpractice and foster a culture of integrity among Nigeria’s young people while
                providing them with the skills and support to pursue ethical success.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: Three Core Aims */}
        <section id="aims" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Three Core Aims
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

        {/* SECTION 5: Vision & Mission */}
        <section id="vision-mission" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Vision & Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">Vision:</span> A future where every young person pursues education and success with
                integrity, skill and dignity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Mission:</span> We promote academic honesty and equip young people with life skills,
                ethical leadership training and practical alternatives to dishonest academic practices.
                Through school outreach, stakeholder engagement and targeted programmes, we change
                mindsets, strengthen institutions, and open real pathways to personal and community
                development.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Aims and Objectives (Detailed) */}
        <section id="aims-detailed" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Aims and Objectives</h2>
              {/* Collapsible details */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="aims-detailed">
                  <AccordionTrigger className="text-lg">
                    Click to read the detailed objectives
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-6 text-lg text-muted-foreground">
                      <li>
                        <span className="font-semibold text-foreground">Promote academic honesty and integrity:</span> Through sensitization campaigns,
                        school outreach programmes and value-based education, we work to change mindsets and
                        discourage exam malpractice among adolescents and young people.
                      </li>
                      <li>
                        <span className="font-semibold text-foreground">Empower youth with skills and alternatives:</span> We deliver life skills, ethical
                        leadership training, and entrepreneurship support that reduce reliance on dishonest
                        academic shortcuts and encourage responsible citizenship.
                      </li>
                      <li>
                        <span className="font-semibold text-foreground">Engage stakeholders for systemic reform:</span> We collaborate with educators, parents,
                        religious and community leaders to strengthen ethical standards in educational
                        institutions and support community-led integrity movements.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* SECTION 7-9: OUR BOARD OF TRUSTEES -> Governance Statement -> Trustee Profiles */}
        <section id="board" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">OUR BOARD OF TRUSTEES</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h3 className="text-xl font-semibold mb-2">Governance Statement</h3>
              <p className="text-muted-foreground">
                The Board meets quarterly, approves the annual strategy and budget, and ensures the Foundation maintains
                high standards of governance and safeguarding.
              </p>
            </div>
            {/* Collapsible trustee profiles */}
            <div className="max-w-5xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="trustees">
                  <AccordionTrigger className="text-lg">
                    Click to view the Trustee profiles
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {boardMembers.map((member, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-16 w-16">
                                <AvatarImage src={member.image ?? getAvatarUrl(member.name)} alt={member.name} />
                                <AvatarFallback>
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .slice(0, 2)
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                                <p className="text-sm text-secondary font-semibold mb-3">{member.role}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* SECTION 10: OUR SUSTAINABLE DEVELOPMENT GOALS (SDGs) */}
        <section id="sdg" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">OUR SUSTAINABLE DEVELOPMENT GOALS (SDGs)</h2>
            {/* Collapsible SDGs */}
            <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
              <AccordionItem value="sdgs">
                <AccordionTrigger className="text-lg">
                  Click to view our SDG alignment
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sdgs.map((sdg, index) => (
                      <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                            <sdg.icon className="h-8 w-8 text-secondary" />
                          </div>
                          <h3 className="text-lg font-bold mb-3 text-foreground">{sdg.title}</h3>
                          <p className="text-sm text-muted-foreground">{sdg.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 11-12: Support Our Work — Donate to OBF + How your gift will be used */}
        <section id="support" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Support Our Work — Donate to OBF</h2>
              
              {/* Make a Donation */}
              <Card className="border-none shadow-lg mb-12 bg-background/10">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                      <DollarSign className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Donations to OBF fund school outreach programmes, youth skills training, and
                      community engagement activities that reduce exam malpractice and build pathways to
                      honest success. Every donation helps change a life.
                    </p>
                    <Button variant="secondary" size="lg" className="text-lg px-12" asChild>
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

              {/* How your gift will be used: */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">How your gift will be used:</h3>
                <Accordion type="single" collapsible className="w-full">
                  {fundAllocation.map((fund, index) => (
                    <AccordionItem key={index} value={`fund-${index}`}>
                      <AccordionTrigger className="text-base hover:no-underline">
                        <div className="flex justify-between w-full items-center">
                          <span className="font-semibold">{fund.category}</span>
                          <span className="font-bold text-secondary ml-4">{fund.percentage}%</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 mt-4">
                          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-secondary h-full rounded-full transition-all"
                              style={{ width: `${fund.percentage}%` }}
                            />
                          </div>
                          <p className="text-sm text-primary-foreground/80">{fund.description}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section intentionally omitted to comply with requested exact order */}
        
        {/* SECTION 12: FAQs (moved to be the last section before the footer) */}
        <section id="faq" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

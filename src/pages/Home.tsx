import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  Building2, 
  GraduationCap, 
  Heart, 
  TrendingUp,
  BookOpen,
  Lightbulb,
  Users2,
  Mail,
  Phone,
  DollarSign,
  ArrowDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-students.jpg";
import schoolOutreachImg from "@/assets/school-outreach.jpg";
import youthEmpowermentImg from "@/assets/youth-empowerment.jpg";
import communityEngagementImg from "@/assets/community-engagement.jpg";

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    },
    {
      name: "Olorunyomi Emmanuel Babatunde",
      role: "Trustee",
      bio: "An entrepreneur and visionary whose passion for youth development and academic integrity inspired the establishment of OBF. With years of experience in community engagement and business leadership.",
    },
    {
      name: "Ifeoluwa Olaitan Babatunde",
      role: "Treasurer and Trustee",
      bio: "A seasoned accountant with vast experience in financial management and internal controls. She oversees the Foundation's treasury, ensuring transparency, accountability, and compliance with non-profit financial standards.",
    },
    {
      name: "Sikiru Akinyeye Ahmed",
      role: "Trustee",
      bio: "A lecturer and education professional with a strong commitment to youth development and ethical learning environments. His academic background enhances the Foundation's ability to design impactful school-based programmes.",
    },
    {
      name: "Funwape Oyinkansola Motunrayo",
      role: "Trustee",
      bio: "An entrepreneur with a strong background in business operations and community development. She brings innovative thinking and organisational skills to OBF's governance structures and project planning processes.",
    },
    {
      name: "Olalekan Samson Babatunde",
      role: "Secretary, Non-Trustee",
      bio: "An educator with experience in school administration and youth mentoring. As Secretary, he supports the Board by managing documentation, correspondence, and governance processes.",
    },
  ];

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

  const programs = [
    {
      icon: BookOpen,
      title: "School Outreach & Sensitization",
      description:
        "We visit schools across communities to engage students directly on the importance of academic integrity. Through interactive presentations, workshops, and peer-to-peer discussions, we address the root causes of exam malpractice and inspire students to value honest learning.",
      image: schoolOutreachImg,
      impact: [
        "Direct engagement with thousands of students",
        "Changed attitudes towards exam malpractice",
        "Increased awareness of consequences",
        "Built culture of academic honesty",
      ],
    },
    {
      icon: Lightbulb,
      title: "Youth Empowerment & Skills Training",
      description:
        "We equip young people with practical life skills, leadership capabilities, and entrepreneurship training. By providing legitimate alternatives to academic shortcuts, we help students see that success built on integrity is both achievable and sustainable.",
      image: youthEmpowermentImg,
      impact: [
        "Leadership development workshops",
        "Entrepreneurship skill-building",
        "Mentorship programmes",
        "Career guidance and planning",
      ],
    },
    {
      icon: Users2,
      title: "Stakeholder Engagement & Systems Influence",
      description:
        "We work with educators, parents, community leaders, and religious leaders to create systemic change. By strengthening institutional policies and community support systems, we help build an ecosystem that naturally promotes integrity and honest achievement.",
      image: communityEngagementImg,
      impact: [
        "Teacher training on academic integrity",
        "Parent engagement sessions",
        "Policy development support",
        "Community-wide integrity campaigns",
      ],
    },
  ];

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavClick={scrollToSection} />
      <main className="flex-1">
        {/* SECTION 1: Hero Section */}
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
              <Button 
                variant="donate" 
                size="lg"
                onClick={() => scrollToSection("support")}
              >
                Support Our Mission
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </Button>
            </div>
            <div className="mt-12 animate-bounce">
              <ArrowDown className="mx-auto h-8 w-8 text-secondary" />
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

        {/* SECTION 3: Three Core Aims */}
        <section id="aims" className="py-16 bg-muted">
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

        {/* SECTION 4: Our Goal */}
        <section id="goal" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Goal</h2>
              <p className="text-lg leading-relaxed">
                We aim to reach 100,000+ students and build a community of 50,000+ supporters across
                Nigeria's schools and communities. By combining direct youth engagement with systems-level
                influence, we will create lasting cultural change around academic integrity and ethical
                excellence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: About OBF */}
        <section id="about" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                About Olorunyomi Babatunde Foundation
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

        {/* SECTION 6: Why We Exist (Extended) */}
        <section id="why" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                The Challenge We're Addressing
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Exam malpractice is endemic in Nigerian schools. Many young people resort to cheating
                    not out of laziness, but because they feel trapped — lacking the skills, confidence,
                    or hope to succeed honestly. This perpetuates cycles of low-quality learning and
                    undermines social trust.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just tell young people not to cheat. We equip them with the life skills,
                    mentorship, and pathways they need to see integrity as the best choice. We also work
                    with institutions to strengthen policies and practices that prevent malpractice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Board Members */}
        <section id="board" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Board of Trustees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {boardMembers.map((member, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-sm text-secondary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: SDG Alignment */}
        <section id="sdg" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Alignment with UN Sustainable Development Goals
            </h2>
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
          </div>
        </section>

        {/* SECTION 9: Programs */}
        <section id="programs" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Programs</h2>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-muted-foreground">
                Our programmes work together to create lasting change — from shifting individual
                mindsets to strengthening the systems that shape educational experiences.
              </p>
            </div>

            <div className="space-y-16">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                          <program.icon className="h-7 w-7 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">{program.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {program.description}
                        </p>
                        <div>
                          <p className="font-semibold text-foreground mb-3">Impact:</p>
                          <ul className="space-y-2">
                            {program.impact.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-secondary font-bold mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: Support / Donations */}
        <section id="support" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Support Our Work</h2>
              
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

              {/* Fund Allocation */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">How Your Donation is Used</h3>
                <div className="space-y-4">
                  {fundAllocation.map((fund, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{fund.category}</span>
                        <span className="font-bold text-secondary">{fund.percentage}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-secondary h-full rounded-full transition-all"
                          style={{ width: `${fund.percentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-primary-foreground/80 mt-1">{fund.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: Contact */}
        <section id="contact" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
            
            <div className="max-w-5xl mx-auto">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                      <Mail className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-4">info@obf.org</p>
                    <a
                      href="mailto:info@obf.org"
                      className="text-primary hover:text-primary font-semibold transition-colors"
                    >
                      Send Email →
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                      <Users className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
                    <p className="text-muted-foreground mb-4">Interested in collaboration?</p>
                    <a
                      href="mailto:info@obf.org"
                      className="text-primary hover:text-primary font-semibold transition-colors"
                    >
                      Get in Touch →
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                      <Phone className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                    <p className="text-muted-foreground mb-4">Join our team</p>
                    <a
                      href="mailto:info@obf.org"
                      className="text-primary hover:text-primary font-semibold transition-colors"
                    >
                      Get Involved →
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Main Message Box */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h3>
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-3 text-lg">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href="mailto:info@obf.org"
                        className="text-primary hover:text-primary-dark transition-colors font-semibold"
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
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

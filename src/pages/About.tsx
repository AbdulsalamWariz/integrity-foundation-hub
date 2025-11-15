import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Dedicated to promoting academic honesty and ethical leadership among adolescents and
              young people
            </p>
          </div>
        </section>

        {/* About OBF */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Olorunyomi Babatunde Foundation
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

        {/* Why We Exist */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Exist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Academic integrity is the bedrock of meaningful learning and social trust. When young 
                people are supported to succeed through skill, perseverance and integrity, communities 
                benefit from stronger leaders, entrepreneurs and citizens. OBF exists to shift mindsets, 
                strengthen institutions, and support young people to thrive honestly.
              </p>
            </div>
          </div>
        </section>

        {/* Our Goal */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Goal</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To end exam malpractice and foster a culture of integrity among Nigeria's young people 
                while providing them with the skills and support to pursue ethical success.
              </p>
              <h3 className="text-2xl font-bold mb-6">Three Core Aims</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-primary">Change Mindsets</h4>
                    <p className="text-muted-foreground">
                      Sensitise schools and communities about the harms of exam malpractice and the 
                      value of academic honesty.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-secondary">Empower Youth</h4>
                    <p className="text-muted-foreground">
                      Deliver life-skills, leadership, and entrepreneurship training so students can 
                      pursue legitimate paths to success.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-accent">Influence Systems</h4>
                    <p className="text-muted-foreground">
                      Work with educators, parents, and community leaders to strengthen policies and 
                      practices that support integrity in education.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A future where every young person pursues education and success with integrity,
                    skill and dignity.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We promote academic honesty and equip young people with life skills, ethical
                    leadership training and practical alternatives to dishonest academic practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Aims & Objectives */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Aims and Objectives
            </h2>
            <div className="max-w-5xl mx-auto space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    1. Promote academic honesty and integrity
                  </h3>
                  <p className="text-muted-foreground">
                    Through sensitization campaigns, school outreach programmes and value-based
                    education, we work to change mindsets and discourage exam malpractice among
                    adolescents and young people.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">2. Empower youth with skills and alternatives</h3>
                  <p className="text-muted-foreground">
                    We deliver life skills, ethical leadership training, and entrepreneurship support
                    that reduce reliance on dishonest academic shortcuts and encourage responsible
                    citizenship.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    3. Engage stakeholders for systemic reform
                  </h3>
                  <p className="text-muted-foreground">
                    We collaborate with educators, parents, religious and community leaders to
                    strengthen ethical standards in educational institutions and support community-led
                    integrity movements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SDGs */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Our Sustainable Development Goals
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              OBF aligns its programmes to the following SDGs to ensure measurable impact and global
              alignment
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sdgs.map((sdg, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <sdg.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{sdg.title}</h3>
                    <p className="text-muted-foreground">{sdg.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Our Board of Trustees
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                The Olorunyomi Babatunde Foundation is guided by a diverse Board of Trustees that brings
                together experience in education, law, community engagement and youth development. The
                Board provides strategic oversight, ensures accountability, and steers the Foundation
                toward impactful programmes and sustainable growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {boardMembers.map((member, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-primary">{member.name}</h3>
                      <p className="text-sm font-semibold text-secondary mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-bold mb-2">Governance Statement</h3>
                <p className="text-muted-foreground">
                  The Board meets quarterly, approves the annual strategy and budget, and ensures the
                  Foundation maintains high standards of governance and safeguarding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

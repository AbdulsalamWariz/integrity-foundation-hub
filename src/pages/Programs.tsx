import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Lightbulb, Users2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import schoolOutreachImg from "@/assets/school-outreach.jpg";
import youthEmpowermentImg from "@/assets/youth-empowerment.jpg";
import communityEngagementImg from "@/assets/community-engagement.jpg";

const Programs = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive initiatives designed to promote academic integrity and empower youth across
              Nigeria
            </p>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
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
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Key Impact Areas:</h4>
                          <ul className="space-y-2">
                            {program.impact.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-secondary font-bold mt-1">•</span>
                                <span>{item}</span>
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

        {/* Impact Stats */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Reach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg">Schools Reached</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-lg">Students Engaged</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg">Youth Empowered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Help Us Expand Our Impact
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Your support enables us to reach more schools, empower more youth, and create lasting
                  change in communities across Nigeria.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/support"
                    className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Support Our Programs
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary-dark h-11 px-8 rounded-md font-semibold transition-all"
                  >
                    Partner With Us
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

export default Programs;

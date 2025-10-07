import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Codezen Tech Solutions",
      location: "Mumbai, Maharashtra, India",
      period: "April 2024 - July 2025",
      description: "A software development company specializing in delivering scalable technology solutions",
      achievements: [
        "Developed scalable modules like Referral System, Dynamic Pricing, and Discount Logic, boosting user acquisition by 20% and average order value by 15%",
        "Reduced API response time by up to 40% through performance profiling and optimization",
        "Built a real-time notification system using stateless Node.js functions, integrated with AWS SNS and Firebase FCM, achieving 99.9% delivery success rate",
        "Independently led backend development for a major client's platform, from onboarding to post-deployment support",
      ],
    },
    {
      title: "Associate Software Developer",
      company: "Chicmic Technologies LLP",
      location: "Mohali, Punjab, India",
      period: "February 2023 - January 2024",
      description: "A technology services company that focuses on software development and solutions",
      achievements: [
        "Completed hands-on training in React.js, Node.js, and web technologies, delivering 5+ fully functional demo projects",
        "Developed the backend for an in-house canteen management app, increasing operational efficiency through inventory automation",
        "Built a Node.js backend for a gaming platform supporting 10,000+ user records with real-time game data storage",
        "Increased login conversions by 25% through social login integration",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">My professional journey</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="glass-effect shadow-card p-6 md:p-8 hover:shadow-glow transition-smooth"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/20 mt-1">
                        <Briefcase className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-lg text-accent font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                  </div>

                  <div className="flex flex-col gap-2 md:text-right">
                    <Badge variant="outline" className="w-fit border-accent/50 text-accent">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground md:justify-end">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

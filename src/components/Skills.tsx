import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Database, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Core Concepts",
      skills: [
        "C",
        "C++",
        "Python",
        "Ruby",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "OOP",
        "DBMS",
        "Data Structures",
        "Algorithms",
        "SDLC",
        "API Design",
        "RESTful API",
        "Agile (Scrum, Kanban)",
      ],
    },
    {
      icon: Layers,
      title: "Frameworks & Tools",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Django",
        "Ruby on Rails",
        "Spring Boot",
        "Git",
        "GitHub",
        "Jira",
        "Confluence",
        "Postman",
        "VS Code",
        "IntelliJ IDEA",
      ],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS Lambda", "AWS S3", "AWS EC2", "AWS CloudWatch", "AWS SNS", "Firebase FCM", "Linux", "Windows"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg">My technical toolkit</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="glass-effect shadow-card p-6 hover:shadow-glow transition-smooth"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-accent/30 hover:border-accent hover:bg-accent/10 transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

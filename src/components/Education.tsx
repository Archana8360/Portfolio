import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E. in Information Technology",
      institution: "Panjab University, UIET Hoshiarpur",
      location: "Hoshiarpur, India",
      period: "2019 - 2023",
      grade: "CGPA 8.7 / 10.0",
      highlight: true,
    },
    {
      degree: "Class XII",
      institution: "Government Model Sr. Sec. School",
      location: "Chandigarh",
      period: "2018 - 2019",
      grade: "Percentage 77.2 / 100",
    },
    {
      degree: "Class X",
      institution: "St. Soldiers School",
      location: "Panchkula",
      period: "2017 - 2018",
      grade: "CGPA 10 / 10",
      highlight: true,
    },
  ];

  const certifications = [
    {
      title: "Web Application using Apache, PHP",
      institution: "National Institute of Electronics & Information Technology",
    },
    {
      title: "Android Application Development",
      institution: "National Institute of Electronics & Information Technology",
    },
    {
      title: "Python",
      institution: "Centre for Development of Advanced Computing, India",
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-lg">Academic background and credentials</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-accent" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className={`glass-effect shadow-card p-6 hover:shadow-glow transition-smooth ${
                      edu.highlight ? "border-accent/30" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-accent font-medium mb-2">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                      <div className="flex flex-col gap-2 md:text-right md:items-end">
                        <Badge variant="outline" className="w-fit border-accent/50 text-accent">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.period}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`w-fit ${edu.highlight ? "bg-accent/20 text-accent" : ""}`}
                        >
                          <Award className="w-3 h-3 mr-1" />
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="glass-effect shadow-card p-6 hover:shadow-glow transition-smooth group"
                  >
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.institution}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

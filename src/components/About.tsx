import { Card } from "@/components/ui/card";
import { Briefcase, Code, Award, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "2+" },
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Award, label: "LeetCode Problems", value: "400+" },
    { icon: MapPin, label: "Location", value: "Chandigarh" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="glass-effect shadow-card p-6 text-center hover:shadow-glow transition-smooth hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="glass-effect shadow-card p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a <span className="text-foreground font-medium">passionate Software Developer</span> with over 2 years
                of experience specializing in <span className="text-foreground font-medium">full-stack development</span>,
                API design, and system optimization. My journey in tech has been driven by a constant desire to learn and
                build solutions that make a real impact.
              </p>
              <p>
                Throughout my career, I've had the opportunity to work on diverse projects ranging from{" "}
                <span className="text-foreground font-medium">enterprise order management systems</span> to{" "}
                <span className="text-foreground font-medium">real-time notification platforms</span>. I take pride in
                writing clean, efficient code and collaborating with cross-functional teams to deliver exceptional user
                experiences.
              </p>
              <p>
                When I'm not coding, you'll find me solving algorithmic challenges on LeetCode (400+ problems solved!),
                exploring new technologies, or contributing to open-source projects. I believe in continuous learning and
                staying updated with the latest industry trends.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

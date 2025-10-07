import { Card } from "@/components/ui/card";
import { Trophy, Code, Award, TrendingUp } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "400+ Problems Solved",
      description: "Solved over 400 algorithmic challenges on LeetCode and GeeksforGeeks",
      color: "text-purple-400",
    },
    {
      icon: Award,
      title: "Employee of the Month",
      description: "Recognized for outstanding performance at Codezen Tech Solutions",
      color: "text-yellow-400",
    },
    {
      icon: TrendingUp,
      title: "Top 300 Rank",
      description: "Secured a Top 300 rank in GeeksforGeeks Job-A-Thon coding competition",
      color: "text-green-400",
    },
    {
      icon: Trophy,
      title: "TCS Certifications",
      description: "Cleared TCS NQT Digital/Ninja and TCS Cognitive Skills assessments",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg">Recognitions and milestones</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="glass-effect shadow-card p-8 hover:shadow-glow transition-smooth group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-lg bg-primary/20 group-hover:scale-110 transition-smooth">
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Business Center",
      subtitle: "End-to-End Order Management System for Popular Paints",
      description:
        "Built a fully-featured Business Center module enabling users to create orders, track delivery status, and manage dispatch logistics with comprehensive dashboards and automated workflows.",
      highlights: [
        "RESTful APIs for bulk data imports and S3 image uploads",
        "Multi-step order processing workflows",
        "Sales, Dealer Visit, and CRM Dashboards with data visualization",
        "Automated Dispatch Flow with MIS report parsing",
        "Flexible Coupons & Schemes engine with role-based access",
      ],
      tags: ["Node.js", "Express.js", "MongoDB", "AWS S3", "REST API"],
    },
    {
      title: "User Engagement System",
      subtitle: "Real-Time Notifications for Larsen & Toubro: L&T India",
      description:
        "Built a robust real-time notification system using stateless Node.js functions triggered by user actions and scheduled events.",
      highlights: [
        "Integrated AWS SNS and Firebase FCM for push notifications",
        "High concurrency and multi-platform delivery support",
        "Message queueing and fallback logic",
        "99.99% delivery success rate under heavy loads",
      ],
      tags: ["Node.js", "AWS SNS", "Firebase FCM", "Real-time", "Event-driven"],
    },
    {
      title: "Referral & Dynamic Pricing Engine",
      subtitle: "Dynamic Pricing Engine for Siesto Green",
      description:
        "Designed and implemented a modular referral system with dynamic pricing that adjusted in real-time based on multiple factors.",
      highlights: [
        "Unique referral codes and reward tracking",
        "Real-time pricing based on user type, location, and promotions",
        "Optimized database queries with effective MongoDB indexing",
        "Cross-functional collaboration for seamless UX",
      ],
      tags: ["Node.js", "MongoDB", "Dynamic Pricing", "Referral System", "API Design"],
    },
    {
      title: "RideSharing App",
      subtitle: "Capstone Project",
      description:
        "Built a comprehensive ride-sharing application backend with location-based services and real-time features.",
      highlights: [
        "Ride booking and location-based search",
        "Real-time chat functionality",
        "OTP and email verification",
        "Scheduled jobs using Rails 7",
      ],
      tags: ["Ruby on Rails", "PostgreSQL", "Real-time", "Location Services"],
      github: "https://github.com/Archana8360",
    },
    {
      title: "Twitter Clone",
      subtitle: "Capstone Project",
      description:
        "Developed a Twitter-like social media platform with core social networking features and secure authentication.",
      highlights: [
        "User registration and authentication with JWT",
        "Tweet creation, liking, and following features",
        "RESTful API design",
        "Secure backend implementation",
      ],
      tags: ["Spring Boot", "PostgreSQL", "JWT", "REST API", "Java"],
      github: "https://github.com/Archana8360",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">Some of my notable work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-effect shadow-card p-6 hover:shadow-glow transition-smooth group"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-secondary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.github && (
                    <div className="flex gap-3 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline transition-smooth"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline transition-smooth"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

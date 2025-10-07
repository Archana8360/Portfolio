import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github, Code2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aachauhan98@gmail.com",
      href: "mailto:aachauhan98@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8360227606",
      href: "tel:+918360227606",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chandigarh, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Archana8360",
      color: "hover:text-purple-400",
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com",
      color: "hover:text-orange-400",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's connect and discuss opportunities
            </p>
          </div>

          <Card className="glass-effect shadow-card p-8 md:p-12">
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth group"
                  >
                    <div className="p-3 rounded-full bg-primary/20 mb-4 group-hover:shadow-glow transition-smooth">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-sm font-medium text-foreground">{info.value}</div>
                  </a>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Connect with me</h3>
                  <p className="text-muted-foreground">Find me on these platforms</p>
                </div>

                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg glass-effect hover:shadow-glow transition-smooth group ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center pt-8 border-t border-border">
                <Button
                  size="lg"
                  className="bg-gradient-primary shadow-glow transition-smooth hover:scale-105"
                  onClick={() => window.location.href = 'mailto:aachauhan98@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send me an email
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

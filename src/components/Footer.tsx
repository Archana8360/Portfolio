const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Archana Chauhan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-accent">React</span> and{" "}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

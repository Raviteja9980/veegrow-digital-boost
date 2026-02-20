const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border bg-card">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-heading font-bold text-gradient">
          VeeGrow
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Veegrow Digital. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Home", "About", "Services", "Team", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

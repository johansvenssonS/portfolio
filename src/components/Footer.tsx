const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Johan Svensson Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

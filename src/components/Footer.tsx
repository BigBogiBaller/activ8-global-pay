import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Activ8Pay" className="h-8 w-auto" />
            <span className="text-lg font-bold text-primary-foreground">Activ8Pay</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <span>©2024 Activ8Pay</span>
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

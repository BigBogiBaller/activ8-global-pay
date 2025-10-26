import { Link } from "react-router-dom";
import logo from "@/assets/activ8pay-logo-new.png";
const Footer = () => {
  return <footer className="bg-[#0E3156] py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Activ8Pay" className="h-32 w-auto" />
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <span>©2024 Activ8Pay</span>
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0E3156] backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Company Name */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Activ8Pay" className="h-40 w-auto mt-8" />
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <button onClick={() => scrollToSection("solutions")} className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Solutions
            </button>
            <button onClick={() => scrollToSection("about")} className="text-primary-foreground hover:text-accent transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection("industries")} className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Industries
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-primary-foreground hover:text-accent transition-colors font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("solutions")} className="text-primary-foreground hover:text-accent transition-colors font-medium text-left">
                Solutions
              </button>
              <button onClick={() => scrollToSection("about")} className="text-primary-foreground hover:text-accent transition-colors font-medium text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection("industries")} className="text-primary-foreground hover:text-accent transition-colors font-medium text-left">
                Industries
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-primary-foreground hover:text-accent transition-colors font-medium text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-primary-foreground hover:text-accent transition-colors font-medium text-left">
                Contact Us
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
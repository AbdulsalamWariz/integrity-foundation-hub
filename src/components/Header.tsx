import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  onNavClick?: (id: string) => void;
}

const Header = ({ onNavClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Programs", id: "programs" },
    { label: "Support Us", id: "support" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    if (onNavClick) {
      onNavClick(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Olorunyomi Babatunde Foundation logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-sm object-cover"
            />
            <span className="">Olorunyomi Babatunde Foundation</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.label}
              </button>
            ))}
            <Button variant="donate" size="sm" onClick={() => handleNavClick("support")}>
              Donate Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <Button variant="donate" size="sm" className="w-full" onClick={() => handleNavClick("support")}>
              Donate Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

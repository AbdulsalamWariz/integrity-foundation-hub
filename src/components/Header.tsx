import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

interface HeaderProps {
  onNavClick?: (id: string) => void;
}

const Header = ({ onNavClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Support Us", id: "support" },
    { label: "FAQ", id: "faq" },
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

  const navigate = useNavigate();

  const handleRouteNav = (id: string) => {
    // Navigate to home and pass scroll target in state so Home can scroll after navigation
    navigate("/", { state: { scrollTo: id } });
    setIsMenuOpen(false);
  };

  const isAnchorMode = typeof onNavClick === "function";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          {isAnchorMode ? (
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
          ) : (
            <Link
              to="/"
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Olorunyomi Babatunde Foundation logo"
                className="h-16 w-16 md:h-20 md:w-20 rounded-sm object-cover"
              />
              <span className="">Olorunyomi Babatunde Foundation</span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {isAnchorMode
              ? navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.label}
                  </button>
                ))
              : navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleRouteNav(item.id)}
                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.label}
                  </button>
                ))}

            {/* Editorial link should always be visible and navigate to the route */}
            <Link
              to="/editorial"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              Editorial
            </Link>

            {/* Our Projects route */}
            <Link
              to="/projects"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              Our Projects
            </Link>

            {isAnchorMode ? (
              <Button variant="donate" size="sm" onClick={() => handleNavClick("support")}>
                Donate Now
              </Button>
            ) : (
              <button onClick={() => handleRouteNav("support")}>
                <Button variant="donate" size="sm">
                  Donate Now
                </Button>
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3">
            {isAnchorMode
              ? navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))
              : navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleRouteNav(item.id);
                    }}
                    className="block w-full text-left py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}

            <Link
              to="/editorial"
              className="block w-full text-left py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Editorial
            </Link>

            <Link
              to="/projects"
              className="block w-full text-left py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Projects
            </Link>

            {isAnchorMode ? (
              <Button variant="donate" size="sm" className="w-full" onClick={() => handleNavClick("support")}>
                Donate Now
              </Button>
            ) : (
              <button
                onClick={() => {
                  handleRouteNav("support");
                }}
              >
                <Button variant="donate" size="sm" className="w-full">
                  Donate Now
                </Button>
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

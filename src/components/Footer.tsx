import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">OBF</h3>
            <p className="text-sm text-primary-foreground/80">
              Promoting academic honesty and ethical leadership among Nigeria's youth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-secondary transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-secondary transition-colors">
                  Support Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@obf.org"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@obf.org
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-primary-foreground/80">
            © 2025 Olorunyomi Babatunde Foundation. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-secondary transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

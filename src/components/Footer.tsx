import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <img
                  src="/logo.png" // replace with your actual logo path
                  alt="Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="text-lg font-heading font-extrabold tracking-tight">
                  THULANYATHI
                </span>
                <span className="block text-[10px] font-medium tracking-[0.2em] text-primary-foreground/60">
                  PTY LTD
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A 100% South African owned company delivering sustainable
              infrastructure and logistics solutions since 2017.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Clients", to: "/clients" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Civil Engineering",
                "Construction",
                "Logistics",
                "Power Backup Installation",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <a
                  href="tel:+27614647084"
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  +27 61 464 7084
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <a
                  href="mailto:nyathi@thulanyathi.co.za"
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  nyathi@thulanyathi.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Thulanyathi Pty LTD. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-primary-foreground/50">
              Director: Mr M Mhlanga
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

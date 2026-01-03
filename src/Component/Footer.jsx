import React from "react";
import { Link } from "react-router";
import {
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co.com/HL8J61bT/Plate-Share-removebg-preview.png"
                alt="PlateShare Logo"
                className="w-10 h-10 rounded-full brightness-110 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-tight">
                PlateShare
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Connecting surplus food with those in need. Join our mission to eliminate food waste and nourish our community, one plate at a time.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF size={18} />, link: "https://web.facebook.com/aminur.rahman4078", color: "hover:bg-blue-600" },
                { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/aminur-rahman4078", color: "hover:bg-blue-700" },
                { icon: <FaXTwitter  size={18} />, link: "https://x.com/Aminur4078", color: "hover:bg-black" },
                { icon: <FaGithub size={18} />, link: "https://github.com/aminur-tech", color: "hover:bg-gray-800" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 ${social.color} hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Available Foods", path: "/available-foods" },
                { name: "Add Food", path: "/dashboard/add-food" },
                { name: "Manage My Foods", path: "/dashboard/manage-my-foods" },
                { name: "My Food Requests", path: "/dashboard/my-food-request" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span>Satkhira, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <span>+8801327694078</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>aminur.programme@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe to receive updates on food availability in your area.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-orange-600 rounded-lg hover:bg-orange-500 transition-colors">
                <Send size={16} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {currentYear} <span className="text-slate-300 font-medium">PlateShare</span>.
            Empowering communities through sustainable sharing.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
            <a href="#" className="hover:text-orange-500">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-300" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-400" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-400" },
  ];

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ Icon, href, label, color }, index) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className={`text-gray-400 ${color} transition-all duration-300 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-500`}
        >
          <Icon size={24} />
          <span className="sr-only">{label}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;

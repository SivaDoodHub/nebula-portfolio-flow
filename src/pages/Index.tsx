import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/40" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left Side: Details and Buttons */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Siva
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Mern Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8">
            MERN Stack Developer focused on delivering fast, scalable, and user-friendly web applications with MongoDB, Express, React, and Node.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Projects
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </motion.div>
        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end items-center"
        >
          <img
            src="/siva.jpeg"
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover object-top shadow-lg border-4 border-purple-400 bg-gray-900"
          />
        </motion.div>
        {/* Floating Card (unchanged) */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-20 left-24 hidden lg:block"
        >
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center"
          >
            {/* <div className="text-2xl font-bold text-purple-400">2</div>
            <div className="text-sm text-gray-300">Years Exp</div> */}
        {/* </motion.div> */}

      </div >
    </motion.div >
  );
};

export default Index;

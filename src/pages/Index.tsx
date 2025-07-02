
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Photo and Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto max-w-xs mb-8"
          />
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Passionate full-stack developer crafting innovative digital experiences
              with cutting-edge technologies and creative problem-solving. I specialize 
              in building scalable web applications that make a real impact.
            </p>
            <p className="text-md text-gray-400 mb-8">
              With expertise in React, Node.js, and modern web technologies, I transform 
              ideas into powerful digital solutions. Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-sm text-gray-300">Years Exp</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-sm text-gray-300">Technologies</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Available</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <SocialLinks />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Index;

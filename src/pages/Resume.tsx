import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    // In a real app, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/Mern_stack.png';
    link.download = 'Mern_stack.png';
    link.click();
  };

  const handleImageDownload = () => {
    const link = document.createElement('a');
    link.href = '/html-learning.png';
    link.download = 'html-learning-certificate.png';
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen pt-24 pb-12 z-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              My Resume
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center"
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Professional Resume</h2>
            <p className="text-gray-300 mb-6">
              Complete overview of my professional experience, skills, and achievements
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Preview Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">Resume Preview</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src="/Mern_stack.png"
                      alt="Resume Preview"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </motion.div>

        {/* Resume Preview Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-400">Mern Stack Junior Developer</h4>
                <p className="text-sm text-gray-400">Flatcube Solutions • March-2024 - May-2025</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400">Junior Developer</h4>
                <p className="text-sm text-gray-400">Business Core Solutions • Sep-2023 -Feb-2024</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400">Trainee</h4>
                <p className="text-sm text-gray-400">Business Core Solutions • Jul2023 - Aug-2024</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-400">B.E Electronics and Communication Engineering</h4>
                <p className="text-sm text-gray-400">KSR College of Engineering • 2018 - 2022</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400">Java Certified(offline)</h4>
                <p className="text-sm text-gray-400">Qspiders Institute • 2022</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400">HTML Certified</h4>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <span>Great Learning • 2022</span>
                  <img
                    src="/html-learning.png"
                    alt="HTML"
                    className="w-5 h-5  cursor-pointer hover:scale-110 transition-transform duration-200"
                    onClick={handleImageDownload}
                    title="Click to download certificate"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;

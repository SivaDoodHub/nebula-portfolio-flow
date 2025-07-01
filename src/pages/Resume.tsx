
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handleDownload = () => {
    // In a real app, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf';
    link.download = 'YourName-Resume.pdf';
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

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Resume (PDF)
            </Button>
          </motion.div>
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
                <h4 className="font-semibold text-blue-400">Senior Frontend Developer</h4>
                <p className="text-sm text-gray-400">TechCorp • 2022 - Present</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400">Full Stack Developer</h4>
                <p className="text-sm text-gray-400">StartupXYZ • 2020 - 2022</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400">Junior Developer</h4>
                <p className="text-sm text-gray-400">WebAgency • 2019 - 2020</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-400">B.S. Computer Science</h4>
                <p className="text-sm text-gray-400">University Name • 2015 - 2019</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400">AWS Certified</h4>
                <p className="text-sm text-gray-400">Amazon Web Services • 2021</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400">React Certification</h4>
                <p className="text-sm text-gray-400">Meta • 2020</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;

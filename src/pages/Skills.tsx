
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-800" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-cyan-600" },
        { name: "Framer Motion", level: 85, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-emerald-600" },
        { name: "Python", level: 82, color: "from-yellow-500 to-orange-500" },
        { name: "PostgreSQL", level: 85, color: "from-indigo-500 to-purple-600" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-800" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 93, color: "from-gray-600 to-gray-800" },
        { name: "Docker", level: 78, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 75, color: "from-orange-500 to-red-600" },
        { name: "Three.js", level: 70, color: "from-purple-600 to-indigo-700" }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen pt-24 pb-12 z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.8 }}
              className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h2>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.2 + (categoryIndex * 0.1) + (skillIndex * 0.1), 
                      duration: 0.6 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        className="text-gray-400 text-sm"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative">
                      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: 0.8 + (categoryIndex * 0.1) + (skillIndex * 0.1),
                            duration: 1.2,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years of Experience", value: "3+", color: "text-blue-400" },
            { label: "Projects Completed", value: "50+", color: "text-green-400" },
            { label: "Technologies Mastered", value: "20+", color: "text-purple-400" },
            { label: "Client Satisfaction", value: "100%", color: "text-pink-400" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
              className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;

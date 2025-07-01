
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      description: "Open source projects and contributions",
      icon: Github,
      stats: "200+ repositories, 1k+ contributions",
      url: "https://github.com/yourusername",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-500 hover:to-gray-700"
    },
    {
      name: "LeetCode",
      description: "Problem solving and algorithmic challenges",
      icon: () => (
        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
          LC
        </div>
      ),
      stats: "500+ problems solved, Contest Rating: 1800+",
      url: "https://leetcode.com/yourusername",
      color: "from-orange-500 to-red-600",
      hoverColor: "hover:from-orange-400 hover:to-red-500"
    },
    {
      name: "CodePen",
      description: "Frontend experiments and demos",
      icon: () => (
        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white font-bold text-xs">
          CP
        </div>
      ),
      stats: "100+ pens, 50k+ views",
      url: "https://codepen.io/yourusername",
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-400 hover:to-emerald-500"
    },
    {
      name: "Stack Overflow",
      description: "Helping the developer community",
      icon: () => (
        <div className="w-6 h-6 bg-orange-400 rounded flex items-center justify-center text-white font-bold text-xs">
          SO
        </div>
      ),
      stats: "5k+ reputation, 200+ answers",
      url: "https://stackoverflow.com/users/youruserid",
      color: "from-orange-400 to-yellow-500",
      hoverColor: "hover:from-orange-300 hover:to-yellow-400"
    },
    {
      name: "HackerRank",
      description: "Competitive programming challenges",
      icon: () => (
        <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">
          HR
        </div>
      ),
      stats: "5-star rating in multiple domains",
      url: "https://hackerrank.com/yourusername",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:from-green-500 hover:to-green-700"
    },
    {
      name: "Codewars",
      description: "Coding kata and skill improvement",
      icon: () => (
        <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">
          CW
        </div>
      ),
      stats: "2 kyu rank, 1000+ kata completed",
      url: "https://codewars.com/users/yourusername",
      color: "from-red-600 to-red-800",
      hoverColor: "hover:from-red-500 hover:to-red-700"
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
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with me on various coding platforms and see my contributions to the developer community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden h-full">
                <CardHeader className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${profile.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <profile.icon />
                  </motion.div>
                  
                  <CardTitle className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                    {profile.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {profile.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center space-y-4">
                  <div className="text-sm text-gray-400 bg-gray-700/50 rounded-lg p-3">
                    {profile.stats}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => window.open(profile.url, '_blank')}
                      className={`w-full bg-gradient-to-r ${profile.color} ${profile.hoverColor} text-white font-semibold transition-all duration-300`}
                    >
                      Visit Profile
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">Combined Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Commits", value: "2,500+", color: "text-green-400" },
              { label: "Problems Solved", value: "1,000+", color: "text-blue-400" },
              { label: "Repositories", value: "200+", color: "text-purple-400" },
              { label: "Community Points", value: "15k+", color: "text-yellow-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                className="text-center"
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CodingProfiles;

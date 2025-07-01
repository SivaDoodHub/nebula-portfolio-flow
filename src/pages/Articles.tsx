
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Articles = () => {
  const articles = [
    {
      title: "Building Scalable React Applications",
      description: "Best practices for creating maintainable and scalable React applications with modern tools.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop"
    },
    {
      title: "The Power of TypeScript in Modern Development",
      description: "How TypeScript can improve your development workflow and catch bugs before they happen.",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop"
    },
    {
      title: "Advanced Animation Techniques with Framer Motion",
      description: "Creating stunning animations and micro-interactions that enhance user experience.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop"
    },
    {
      title: "Optimizing Web Performance",
      description: "Strategies and techniques for building lightning-fast web applications.",
      date: "2023-12-25",
      readTime: "7 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      title: "API Design Best Practices",
      description: "Building robust and developer-friendly APIs that scale with your application.",
      date: "2023-12-18",
      readTime: "9 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop"
    },
    {
      title: "The Future of Web Development",
      description: "Exploring emerging technologies and trends that will shape the future of web development.",
      date: "2023-12-11",
      readTime: "5 min read",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Featured Articles
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-white group-hover:text-teal-400 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {article.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <motion.div
                    className="text-teal-400 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Read More →
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Articles;

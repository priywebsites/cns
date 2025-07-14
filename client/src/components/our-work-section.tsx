import { motion } from "framer-motion";
import { Camera, Scissors, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import work1 from "@assets/Screen Shot 2025-07-14 at 5.01.39 PM_1752530572027.png";
import work2 from "@assets/Screen Shot 2025-07-14 at 5.01.16 PM_1752530573526.png";
import work3 from "@assets/Screen Shot 2025-07-14 at 5.01.00 PM_1752530574846.png";

const workImages = [
  {
    src: work1,
    title: "Premium Fade Cut",
    description: "Precision fade with detailed line work"
  },
  {
    src: work2,
    title: "Modern Taper Fade",
    description: "Clean taper with perfect blending"
  },
  {
    src: work3,
    title: "Classic Straight Razor",
    description: "Traditional shaving techniques"
  }
];

export default function OurWorkSection() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="work" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6"
          >
            <Camera className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See the quality and precision that sets us apart. Every cut, every detail, crafted to perfection.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {workImages.map((work, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-white/90 text-sm">{work.description}</p>
                  <div className="flex items-center mt-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-white/80 text-sm ml-2">Premium Quality</span>
                  </div>
                </motion.div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{work.title}</h3>
                      <p className="text-gray-600 text-sm">{work.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="bg-blue-600 rounded-full p-2"
                    >
                      <Scissors className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 text-lg mb-6">
            Ready to experience our premium service?
          </p>
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl"
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
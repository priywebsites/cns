import { motion } from "framer-motion";
import { Calendar, Scissors, Sparkles, Users, Crown, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    title: "Haircut + Beard",
    description: "Complete styling with haircut and beard grooming",
    price: "$40",
    duration: "35 mins",
    icon: Scissors,
  },
  {
    title: "Beard Shaping",
    description: "Expert beard grooming and precise shaping",
    price: "$25",
    duration: "25 mins",
    icon: Sparkles,
  },
  {
    title: "Eyebrows",
    description: "Professional eyebrow trimming and shaping",
    price: "$5",
    duration: "5 mins",
    icon: Users,
  },
  {
    title: "Home Haircuts for Kids",
    description: "Convenient at-home haircut service for children",
    price: "$50",
    duration: "30 mins",
    icon: Gift,
  },
  {
    title: "Taper Fade and Fade",
    description: "Modern fade cuts with precision styling",
    price: "$30",
    duration: "30 mins",
    icon: Crown,
  },
  {
    title: "Kids Haircut",
    description: "Gentle and fun haircuts for children in-shop",
    price: "$25",
    duration: "30 mins",
    icon: Gift,
  },
  {
    title: "Ear Waxing",
    description: "Professional ear cleaning and waxing service",
    price: "$5",
    duration: "10 mins",
    icon: Sparkles,
  },
  {
    title: "Male Haircut",
    description: "Professional men's haircut with styling",
    price: "$30",
    duration: "40 mins",
    icon: Scissors,
  },
  {
    title: "Adult Home Haircuts",
    description: "Premium at-home haircut service for adults",
    price: "$80",
    duration: "40 mins",
    icon: Crown,
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the finest barbering services with our skilled professionals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={service.title} 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="perspective-1000"
              >
                <Card className="h-full overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group transform-gpu">
                  <motion.div 
                    className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6"
                    whileHover={{ 
                      background: "linear-gradient(135deg, rgb(219 234 254), rgb(191 219 254))"
                    }}
                  >
                    <motion.div 
                      className="absolute top-4 right-4 bg-blue-600 rounded-full p-3"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: index * 0.2 
                      }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div 
                      className="mt-8 text-center"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <motion.div 
                        className="text-4xl font-bold text-blue-600 mb-2"
                        whileHover={{ scale: 1.1, color: "#1d4ed8" }}
                      >
                        {service.price}
                      </motion.div>
                      <div className="text-sm text-blue-500 font-medium">
                        {service.duration}
                      </div>
                    </motion.div>
                  </motion.div>
                  <CardContent className="p-8 text-center">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <Button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

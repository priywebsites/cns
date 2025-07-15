import { motion } from "framer-motion";
import { Calendar, Phone, ChevronDown, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import storefrontImage from "@assets/Screen Shot 2025-07-14 at 5.00.24 PM_1752530448716.png";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${storefrontImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 gradient-overlay opacity-50" />

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-white/20"
      >
        <Scissors className="h-12 w-12" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [15, -15, 15],
          rotate: [0, -3, 3, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-10 text-white/20"
      >
        <Sparkles className="h-16 w-16" />
      </motion.div>
      
      {/* Additional floating elements */}
      <motion.div
        animate={{ 
          x: [-30, 30, -30],
          y: [-10, 10, -10],
          rotate: [0, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-20 text-blue-300/20"
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Scissors className="h-8 w-8" />
        </motion.div>
      </motion.div>
      
      <motion.div
        animate={{ 
          x: [20, -20, 20],
          y: [20, -20, 20],
          rotate: [0, -360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/3 left-20 text-blue-200/20"
      >
        <Sparkles className="h-10 w-10" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow"
          >
            Cut & Shave
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-4 text-shadow"
          >
            Premium Barbershop Experience
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/80 mb-8 text-shadow"
          >
            Plano's Most Trusted Barber Shop • 5.0 Stars • 661+ Reviews
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("tel:+17739838169")}
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToServices}
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
}

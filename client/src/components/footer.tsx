import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Phone, Scissors } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer ref={ref} className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Cut & Shave Barber Shop</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Plano's premier barbershop providing exceptional grooming services with 
              a modern touch. Quality, precision, and customer satisfaction are our priorities.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.google.com/maps/place/Cut+and+Shave+Barber+shop/@33.0377708,-99.1347023,8z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
              >
                <MapPin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "services", "work", "about", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-white/80 hover:text-white transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <div>
                  <div>1210 E Parker Rd</div>
                  <div>Plano, TX 75074</div>
                </div>
              </li>
              <li className="pt-2">
                <a
                  href="tel:+17739838169"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (773) 983-8169
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 mt-8 pt-8 text-center"
        >
          <p className="text-white/60">
            &copy; 2024 Cut & Shave Barber Shop. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

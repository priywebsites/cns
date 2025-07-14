import { motion } from "framer-motion";
import { Award, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Cut and Shave barbershop interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">661+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Cut & Shave
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Located in the heart of Plano, Texas, Cut & Shave has been providing 
              exceptional barbering services to our community. Our team of skilled 
              professionals combines traditional techniques with modern styling to 
              deliver the perfect look for every client.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 661 five-star reviews, we pride ourselves on creating a 
              welcoming atmosphere where quality meets comfort. Every cut, every 
              shave, every detail is crafted with precision and care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center"
              >
                <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">5.0 Star Rating</h4>
                  <p className="text-gray-600">661+ Reviews</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center"
              >
                <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Barbers</h4>
                  <p className="text-gray-600">Skilled Professionals</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center"
              >
                <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Quality</h4>
                  <p className="text-gray-600">Top-tier Service</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center"
              >
                <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Convenient Hours</h4>
                  <p className="text-gray-600">7 Days a Week</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              >
                Visit Us Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

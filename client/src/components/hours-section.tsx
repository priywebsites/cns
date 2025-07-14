import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const hours = [
  { day: "Monday", time: "9:00 AM - 8:00 PM" },
  { day: "Tuesday", time: "9:00 AM - 8:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 8:00 PM" },
  { day: "Thursday", time: "9:00 AM - 8:00 PM" },
  { day: "Friday", time: "7:30 AM - 8:00 PM" },
  { day: "Saturday", time: "7:30 AM - 8:00 PM" },
  { day: "Sunday", time: "7:30 AM - 8:00 PM" },
];

export default function HoursSection() {
  const { ref, isVisible } = useScrollAnimation();

  const getCurrentDayIndex = () => {
    const today = new Date().getDay();
    return today === 0 ? 6 : today - 1; // Convert Sunday (0) to index 6, Monday (1) to index 0, etc.
  };

  const currentDayIndex = getCurrentDayIndex();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Business Hours
          </h2>
          <p className="text-xl text-gray-600">We're here when you need us</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-50 rounded-3xl shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className={`flex justify-between items-center py-4 px-2 rounded-xl transition-all ${
                        index === currentDayIndex
                          ? "bg-blue-100 border border-blue-200"
                          : "hover:bg-white"
                      }`}
                    >
                      <span
                        className={`text-lg font-semibold ${
                          index === currentDayIndex ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {schedule.day}
                        {index === currentDayIndex && (
                          <span className="ml-2 text-sm bg-blue-600 text-white px-2 py-1 rounded-full">
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className={`text-lg font-medium ${
                          index === currentDayIndex ? "text-blue-600" : "text-blue-600"
                        }`}
                      >
                        {schedule.time}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 text-center"
                >
                  <div className="flex items-center justify-center text-gray-600 mb-4">
                    <Clock className="h-5 w-5 mr-2" />
                    <p>Walk-ins welcome or book online for guaranteed time</p>
                  </div>
                  <Button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Appointment
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

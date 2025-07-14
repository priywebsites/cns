import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, Calendar, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  const getCurrentDayHours = () => {
    const today = new Date().getDay();
    const hours = {
      0: "7:30 AM - 8:00 PM", // Sunday
      1: "9:00 AM - 8:00 PM", // Monday
      2: "9:00 AM - 8:00 PM", // Tuesday
      3: "9:00 AM - 8:00 PM", // Wednesday
      4: "9:00 AM - 8:00 PM", // Thursday
      5: "7:30 AM - 8:00 PM", // Friday
      6: "7:30 AM - 8:00 PM", // Saturday
    };
    return hours[today as keyof typeof hours];
  };

  const openMaps = () => {
    const address = "1210 E Parker Rd, Plano, TX 75074";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600">Located in the heart of Plano, Texas</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white rounded-3xl shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-600 text-white rounded-full p-3 mr-4 mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        1210 E Parker Rd<br />
                        Plano, TX 75074<br />
                        United States
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-600 text-white rounded-full p-3 mr-4 mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a
                        href="tel:+17739838169"
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        (773) 983-8169
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-600 text-white rounded-full p-3 mr-4 mt-1">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Today's Hours</h4>
                      <p className="text-gray-600">{getCurrentDayHours()}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-600 text-white rounded-full p-3 mr-4 mt-1">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Rating</h4>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-600">5.0 (661 reviews)</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 space-y-4"
                >
                  <Button
                    onClick={() => window.open("https://booksy.com/en-us/rwg/1139205_barber-cut-shave_barber-shop_36433_plano", '_blank')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-full font-semibold transition-all hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Online Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={openMaps}
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 px-6 rounded-full font-semibold transition-all hover:scale-105"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Get Directions
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white rounded-3xl shadow-xl overflow-hidden h-full min-h-[500px]">
              <div className="w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.0123456789!2d-96.6957375!3d33.0377708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19982e6272b5%3A0xcd89ac70c2b8e9b1!2sCut%20and%20Shave%20Barber%20shop!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cut and Shave Barber Shop Location"
                  className="rounded-3xl"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

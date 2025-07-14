import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reviews = [
  {
    name: "Michael R.",
    role: "Regular Customer",
    rating: 5,
    text: "Excellent service and great attention to detail. The barbers here really know what they're doing. Highly recommend!",
  },
  {
    name: "David L.",
    role: "Local Resident",
    rating: 5,
    text: "Best barbershop in Plano! Clean, professional, and the staff is incredibly friendly. My go-to place for haircuts.",
  },
  {
    name: "James T.",
    role: "Satisfied Customer",
    rating: 5,
    text: "Amazing experience every time. They really listen to what you want and deliver exactly that. Top-notch service!",
  },
];

export default function ReviewsSection() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="flex text-yellow-400 text-2xl">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-white text-xl font-semibold ml-2">5.0 out of 5</span>
          </div>
          <p className="text-xl text-white/80">Based on 661+ Google Reviews</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div key={review.name} variants={itemVariants}>
              <Card className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

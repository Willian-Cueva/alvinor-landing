import { features } from "@/seed/seed";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white" id="nosotros">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-700 text-3xl md:text-4xl font-bold mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos destacamos por ofrecer productos de la más alta calidad y un
            servicio excepcional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-gray-700 text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";
import { categories } from "@/seed/seed";
import { motion } from "framer-motion";
import { ChevronRight, Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import cx from "clsx";

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("glass");
  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de materiales de construcción de alta
            calidad para tus proyectos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={cx(
                "p-4 rounded-lg transition-all",
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  width={50}
                  height={50}
                  className="mb-2 rounded-full bg-white p-1"
                />
                <span className="text-sm md:text-base font-medium text-center">
                  {category.name}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products[activeCategory].map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-primary font-bold text-lg mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-primary font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center">
                  Ver Detalles <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex bg-blue-500 items-center bg-primary hover:bg-blue-500/90 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105"
          >
            Solicitar Cotización <ChevronRight className="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

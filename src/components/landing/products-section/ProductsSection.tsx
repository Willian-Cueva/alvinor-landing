"use client";
import { categories } from "@/seed/seed";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const ProductsSection = () => {
  const [activeHover, setActiveHover] = useState<String | null>(null);
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="relative aspect-square overflow-hidden"
              onHoverStart={() => setActiveHover(category.id)}
              onHoverEnd={() => setActiveHover(null)}
            >
              {/* Background Image with Hover Effects */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={
                  activeHover === category.id
                    ? {
                        scale: 1.2,
                        filter: "brightness(0.5)",
                        transition: { duration: 0.3,  },
                      }
                    : {
                        scale: 1,
                        filter: "brightness(1)",
                        transition: { duration: 0.3, },
                      }
                }
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300"
                />
              </motion.div>

              {/* Hover Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4"
                animate={
                  activeHover === category.id
                    ? {
                        opacity: 1,
                        transition: { duration: 0.3, delay: 0.1 },
                      }
                    : {
                        opacity: 0,
                        transition: { duration: 0.3 },
                      }
                }
              >
                <motion.h3
                  className="text-white mb-4"
                  initial={{ y: 15, opacity: 0 }}
                  animate={
                    activeHover === category.id
                      ? {
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.3, delay: 0.1 },
                        }
                      : {
                          y: -15,
                          opacity: 0,
                          transition: { duration: 0.3 },
                        }
                  }
                >
                  <div className="text-2xl font-bold font-serif">{category.category}</div>
                  <div className="font-normal">{category.name}</div>
                </motion.h3>

                <motion.button
                  className="border border-white text-white px-6 py-2 rounded-md bg-transparent"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    activeHover === category.id
                      ? {
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.3 },
                        }
                      : {
                          scale: 0,
                          opacity: 0,
                          transition: { duration: 0.3 },
                        }
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Cotizar
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
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
        </div> */}

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

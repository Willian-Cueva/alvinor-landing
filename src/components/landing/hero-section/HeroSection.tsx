import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {ChevronDown} from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <Image
          src="/hero.jpg"
          alt="Materiales de construcción"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Materiales de Construcción de Alta Calidad
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Ofrecemos los mejores materiales para tus proyectos de construcción
            y arquitectura
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#productos"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105"
            >
              Ver Productos
            </Link>
            <Link
              href="#contacto"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105 text-black"
            >
              Contáctanos
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Link href="#productos" aria-label="Scroll down">
          <ChevronDown className="h-10 w-10 text-white" />
        </Link>
      </div>
    </section>
  );
};

"use client";

import Link from "next/link";
import { useUIManage } from "@/manage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import cx from "clsx";

export const TopMenu = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMenuOpen = useUIManage((state) => state.isMenuOpen);
  const toggleMenuOpen = useUIManage((state) => state.toggleMenuOpen);
  const closeMenu = useUIManage((state) => state.closeMenu);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrollY > 50 ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">MC</span>
          </div> */}
          <span
            className={cx(
              "font-bold text-xl",
              scrollY > 50 ? "text-primary text-gray-700" : "text-white"
            )}
          >
            Distribuidora Alvinor
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {["Inicio", "Productos", "Nosotros", "Proyectos", "Contacto"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cx(
                  "font-medium transition-colors hover:text-primary",
                  scrollY > 50 ? "text-gray-700" : "text-white"
                )}
              >
                {item}
              </Link>
            )
          )}
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={() => {
            toggleMenuOpen();
          }}
          aria-label="Toggle menu"
        >
          <span className={scrollY > 50 ? "text-primary" : "text-white"}>
            ☰
          </span>
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={cx(
            "md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            {["Inicio", "Productos", "Nosotros", "Proyectos", "Contacto"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={cx(
                    "block py-2 text-gray-700 hover:text-primary"
                  )}
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};


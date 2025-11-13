"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.section
      id="home"
      className="flex flex-col max-h-svh md:flex-row items-center justify-center px-4 md:px-11 py-8 relative bg-[#e8d8ff]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.section
        className="w-full min-h-[80vh] md:min-h-[90vh] bg-[#27067f] text-white rounded-4xl md:rounded-[64px] relative px-10 md:py-0 md:px-40 flex items-center justify-center gap-20 flex-col pt-32 md:pt-0"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/Logos/quippos.svg"
            alt="Gracias"
            width={470}
            height={500}
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-10 items-center"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2
            className="md:text-[94px] text-4xl font-medium text-[#9a69f9]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            ¡Felicitaciones!
          </motion.h2>

          <motion.p
            className="text-sm md:text-3xl text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Estás un paso más cerca de gestionar tu{" "}
            <br className="hidden md:block" /> talento como una gran corporación
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/"
              className="bg-[#a780f5] rounded-full p-4 text-sm md:text-lg mb-2"
            >
              volver a la home
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.section>
  );
}

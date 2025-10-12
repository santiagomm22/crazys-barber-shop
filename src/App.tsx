import { motion } from "framer-motion";
import { useState } from "react";

export default function BarberHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 z-10"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Crazys
              <br />
              <span className="text-red-600">Barber</span>
              <br />
              Shop
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-600 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Where style meets precision. Experience the art of grooming with
              our expert barbers.
            </motion.p>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Book Now →
              </button>
              <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-900 hover:text-white transition-all duration-300">
                Our Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Barber Pole */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Background Blob */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[500px] h-[500px] bg-gradient-to-br from-red-200 via-blue-200 to-red-100 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-40 blur-3xl"
            />

            {/* Barber Pole */}
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 cursor-pointer"
            >
              {/* Shadow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-900/20 rounded-full blur-xl" />

              {/* Pole Structure */}
              <div className="relative">
                {/* Top Cap */}
                <div className="w-28 h-12 mx-auto bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-full border-4 border-slate-400 shadow-lg" />

                {/* Main Pole with Stripes */}
                <div className="relative w-24 h-96 mx-auto bg-white rounded-lg overflow-hidden shadow-2xl border-4 border-slate-300">
                  {/* Animated Stripes */}
                  <motion.div
                    animate={{ y: isHovered ? [-400, 0] : [-400, 0] }}
                    transition={{
                      duration: isHovered ? 2 : 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="flex h-20">
                        <div className="w-1/3 bg-red-600" />
                        <div className="w-1/3 bg-white" />
                        <div className="w-1/3 bg-blue-600" />
                      </div>
                    ))}
                  </motion.div>

                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Bottom Cap */}
                <div className="w-28 h-12 mx-auto bg-gradient-to-t from-slate-200 to-slate-300 rounded-b-full border-4 border-slate-400 shadow-lg" />
              </div>

              {/* Light Glow Effect */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-yellow-300/30 blur-2xl rounded-full"
                />
              )}
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 right-10 text-6xl"
            >
              ✂️
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-10 text-5xl"
            >
              💈
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

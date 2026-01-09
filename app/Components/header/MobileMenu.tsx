"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "./links";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.4,
            }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-border-regular">
                <Image src="/logo.png" alt="logo" width={96} height={48} />
                <button onClick={onClose}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col px-4 space-y-2">
                {links.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      className="block text-text-h2 text-lg py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded-md transition-colors"
                      href={item.href}
                      onClick={onClose}
                    >
                      <motion.span
                        whileHover={{ x: 8 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {item.key}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

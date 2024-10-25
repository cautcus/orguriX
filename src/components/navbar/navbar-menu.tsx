"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  id,
  item,
  children,
}: {
  setActive: (id: string | null) => void;
  active: string | null;
  id: string;
  item: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(id)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === id && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: any | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative  rounded-full boder border-transparent dark:border-white/[0.2] shadow-input flex justify-center space-x-4 px-8 py-6 flex w-full items-center"
      style={{
        background:
          "linear-gradient(180deg, #1a3c40, #0d1f22)",
      }}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <div>
        <h4 className="text-md text-center font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-200 hover:text-neutral-400 "
    >
      {children}
    </Link>
  );
};

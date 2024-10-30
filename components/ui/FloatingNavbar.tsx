/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -10,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex fixed z-[8000] top-10 inset-x-0 mx-auto max-w-sm md:min-w-[70vw] lg:min-w-fit px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg border border-black/.1 shadow-md items-center justify-center space-x-4 sm:space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm px-[2] !cursor-pointer">
              {navItem.name}
            </span>{" "}
            {/* Adjusted text size */}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

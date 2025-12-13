"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <li className="relative">
      <a 
        href={href}
        className="relative inline-block py-2 transition-colors duration-200"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <span className="relative inline-block">
          {children}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-600"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: isHovering ? 1 : 0,
              transformOrigin: isHovering ? "left" : "right",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        </span>
      </a>
    </li>
  )
}

export const Nav = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-around items-center">
      <span><a href="/"><Image src="/logo-portfolio.png" alt="" width={220} height={220} priority className="" /></a></span>
      <ul className="flex space-x-16 text-2xl">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </ul>
    </nav>
  )
}
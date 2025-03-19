"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#1a2a1a]/90 backdrop-blur-md text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-20">
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-widest text-[#7cc576] italic hover:text-[#a8e6a3] transition-colors">
            Eco<span className="text-white">Search</span>
          </Link>
        </motion.div>

        {/* Navigation Links and Profile */}
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex space-x-8 text-lg font-light">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: '#7cc576' }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/${item.toLowerCase()}`} className="hover:text-[#7cc576] transition-colors">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
          {/* Profile Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/profile">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#7cc576] shadow-[0_0_10px_rgba(124,197,118,0.5)]">
                <Image
                  src="/close-up-portrait-of-brunette-woman.webp" // Replace with your image path
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
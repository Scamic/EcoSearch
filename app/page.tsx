// pages/index.tsx
"use client";
import WaitlistForm from '../components/form';
import { motion, Variants } from 'framer-motion';
import TreeSVG from '../components/ui/TreeSVG';
import GroundSVG from '../components/ui/GroundSVG';
import AnimatedLeafSVG from '../components/ui/AnimatedLeafSVG';
import FlowerSVG from '../components/ui/FlowerSVG';
import RockSVG from '../components/ui/RockSVG';
import WindParticleSVG from '../components/ui/WindParticleSVG';
import LeafSVG from '../components/ui/LeafSVG';
import SunSVG from '../components/ui/SunSVG'; // Import the new SunSVG component
import { useEffect } from 'react';
import Lenis from 'lenis';

// Define animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

// Define decorative elements data
const decorativeElements = [
  // Sun Element (Top-Left)
  { Component: SunSVG, style: { top: '8%', left: '5%', zIndex: 5 }, className: "sun-position" },
  { Component: TreeSVG, style: { top: '10%', right: '5%', zIndex: 5 } },
  { Component: GroundSVG, style: { bottom: '0px', left: '0px', zIndex: 4 } },
  { Component: AnimatedLeafSVG, style: { top: '20%', right: '10%' }, size: 60, fallDuration: 4, swayRange: 15 },
  { Component: AnimatedLeafSVG, style: { top: '20%', right: '15%' }, size: 80, fallDuration: 6, swayRange: 25 },
  { Component: AnimatedLeafSVG, style: { top: '20%', right: '20%' }, size: 50, fallDuration: 5, swayRange: 20 },
  { Component: FlowerSVG, style: { bottom: '20px', left: '20%', zIndex: 5 } },
  { Component: FlowerSVG, style: { bottom: '20px', left: '50%', zIndex: 5 } },
  { Component: FlowerSVG, style: { bottom: '20px', left: '80%', zIndex: 5 } },
  { Component: RockSVG, style: { bottom: '20px', left: '10%', zIndex: 5 } },
  { Component: RockSVG, style: { bottom: '20px', left: '60%', zIndex: 5 } },
  { Component: WindParticleSVG, style: { top: '20%', left: '0%' }, size: 15, speed: 3 },
  { Component: WindParticleSVG, style: { top: '25%', left: '0%' }, size: 10, speed: 4 },
  { Component: WindParticleSVG, style: { top: '30%', left: '0%' }, size: 12, speed: 2.5 },
  { Component: WindParticleSVG, style: { top: '35%', left: '0%' }, size: 8, speed: 3.5 },
  { Component: WindParticleSVG, style: { top: '40%', left: '0%' }, size: 14, speed: 3 },
];

// Feature Card Component
interface FeatureCardProps {
  iconPath: string;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconPath, title, description, index }) => (
  <motion.div
    className="flex flex-col items-center"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    custom={index}
    viewport={{ once: true }}
  >
    <svg className="w-12 h-12 text-[#7cb342] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
    </svg>
    <h3 className="text-xl font-semibold text-gray-800 relative">
      {title}
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#7cb342] rounded-full" />
    </h3>
    <p className="mt-4 text-gray-600">{description}</p>
  </motion.div>
);

// Feature card data
const features = [
  {
    iconPath: "M3 12h18M12 3v18",
    title: "Climate Driven",
    description: "We put the revenue earned to work with climate investments in renewables and plantation drives.",
  },
  {
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    title: "Optimized Search",
    description: "We provide quality search results, reducing energy consumption by 300%.",
  },
  {
    iconPath: "M6 18L18 6M6 6l12 12",
    title: "Privacy First",
    description: "We don’t collect or store any data. We are a privacy-focused AI search engine.",
  },
  {
    iconPath: "M12 8a4 4 0 100 8 4 4 0 000-8z",
    title: "Minimal Design",
    description: "Our design system is minimal to reduce the carbon footprint with user interaction.",
  },
];

// Social Link Component
interface SocialLinkProps {
  href: string;
  path: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, path }) => (
  <a href={href} className="text-[#7cb342] hover:text-[#6ba636] transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </a>
);

// Social links data
const socialLinks = [
  {
    href: "#",
    path: "M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-.9.5-2 .9-3.1 1.1-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.2-4.1-.2-7.7-2.2-10.1-5.2-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.6z",
  },
  {
    href: "#",
    path: "M12 2.2c5.5 0 9.8 4.5 9.8 10s-4.3 10-9.8 10c-1.7 0-3.3-.4-4.7-1.2l-.3-.2-3.5 1.1 1.1-3.5-.2-.3c-.8-1.4-1.2-3-1.2-4.7 0-5.5 4.5-10 10-10zm0-2c-6.6 0-12 5.4-12 12 0 2.1.5 4.1 1.5 5.9l-.9 3.5 3.5-.9c1.8 1 3.8 1.5 5.9 1.5 6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12.5c-1.3 0-2.5-.5-3.4-1.3l-.2-.2-2.1.8.8-2.1-.2-.2c-.8-.9-1.3-2.1-1.3-3.4 0-2.8 2.3-5 5-5s5 2.3 5 5-2.3 5-5 5z",
  },
  {
    href: "#",
    path: "M22.5 0h-21C.7 0 0 .7 0 1.5v21c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-21c0-.8-.7-1.5-1.5-1.5zm-15.8 18.8h-3.8v-9.4h3.8v9.4zm-1.9-10.7c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm15 10.7h-3.8v-5.1c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.2-.1.2-.1.5-.1.8v5.1h-3.8s.1-8.3 0-9.4h3.8v1.3c.5-.8 1.4-1.9 3.4-1.9 2.5 0 4.4 1.6 4.4 5.1v4.9z",
  },
];

const Home: React.FC = () => {
useEffect(() => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
},[]);

  return (
    <main className="relative bg-[#f9fbf9] text-gray-900 overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {decorativeElements.map(({ Component, style, ...props }, index) => (
          <Component key={index} style={style} {...props} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="mt-14 relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
       
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-gray-800"
          variants={fadeInScale}
          initial="hidden"
          animate="visible"
        >
          World&apos;s First <br />
          <span className="text-[#7cb342] relative">
            Green AI
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#a3d5a8] rounded-full" />
          </span>
        </motion.h2>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl font-light"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Sustainable search. Privacy-first. Planting a greener tomorrow, one query at a time.
        </motion.p>
        <motion.div
          className="mt-10 w-full max-w-lg relative"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <WaitlistForm className="w-full" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#7cb342] rounded-full animate-pulse" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-[#f9fbf9] w-full">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            Build sustainable systems <br /> with your search
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                iconPath={feature.iconPath}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#e6f0e6] py-12 text-gray-600">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-[#7cb342] italic">Eco</span>Search
            </h3>
            <p className="text-sm text-gray-600">
              Sustainable search for a greener future.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} href={link.href} path={link.path} />
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#7cb342] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7cb342] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7cb342] transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7cb342] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h4>
            <p className="text-sm text-gray-600">Email: support@ecosearch.com</p>
            <p className="text-sm text-gray-600 mt-2">Phone: +1 (555) 123-4567</p>
            <p className="text-sm text-gray-600 mt-2">Address: 123 Green Lane, Earth City</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-[#a3d5a8]/30 pt-4">
          <p>© {new Date().getFullYear()} EcoSearch. All rights reserved.</p>
        </div>

        {/* Decorative Elements in Footer */}
        <LeafSVG style={{ top: '10%', left: '5%', transform: 'rotate(45deg)' }} className="opacity-30" />
        <LeafSVG style={{ bottom: '10%', right: '5%', transform: 'rotate(-45deg)' }} className="opacity-30" />
      </footer>
    </main>
  );
};

export default Home;
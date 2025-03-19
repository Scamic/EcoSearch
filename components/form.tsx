// components/form.tsx
import { motion } from "framer-motion";
import { useState } from "react";

// Define props for the WaitlistForm component
interface WaitlistFormProps {
  className?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ className }) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Sending...");

    const res = await fetch("/api/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
    setEmail("");
  };

  return (
    <motion.div
      className={`p-4 flex flex-col items-center gap-y-4 relative ${className}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-[#7cb342]/10 blur-xl opacity-50" />

      {/* Small Leaf Element */}
      <svg
        className="absolute -top-4 -left-4 opacity-30"
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 10 C60 20, 70 40, 50 80 C30 40, 40 20, 50 10"
          stroke="#7cb342"
          strokeWidth="5"
          fill="none"
        />
      </svg>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row w-full max-w-lg gap-3 relative z-10"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 md:p-4 text-base md:text-lg rounded-full bg-white text-gray-800 border border-[#a3d5a8] focus:outline-none focus:ring-2 focus:ring-[#7cb342] placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-[45%] items-center ml-22 md:ml-0 md:w-48 px-4 py-3 md:py-4 rounded-full bg-[#7cb342] text-white font-semibold text-base md:text-lg shadow-[0_0_15px_rgba(124,197,118,0.5)] hover:bg-[#6ba636] hover:shadow-[0_0_25px_rgba(124,197,118,0.7)] transition-all duration-300 whitespace-nowrap relative overflow-hidden"
        >
          <span className="relative z-10">Join Waitlist</span>
          {/* Decorative Button Shine Effect */}
          <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine" />
        </button>
      </form>
      {message && (
        <motion.p
          className="text-[#7cb342] text-sm font-light relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
};

export default WaitlistForm;
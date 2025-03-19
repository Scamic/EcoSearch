import React from 'react'



const Footer = () => {

    interface SVGProps {
        style?: React.CSSProperties;
        className?: string;
      }
      const LeafSVG: React.FC<SVGProps> = ({ style, className }) => (
        <svg className={`absolute opacity-15 ${className}`} style={style} width="150" height="150" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10 C60 20, 70 40, 50 80 C30 40, 40 20, 50 10"
            stroke="#a3d5a8"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      );
      
  return (
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
              <a href="#" className="text-[#7cb342] hover:text-[#6ba636] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-.9.5-2 .9-3.1 1.1-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.2-4.1-.2-7.7-2.2-10.1-5.2-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.6z" />
                </svg>
              </a>
              <a href="#" className="text-[#7cb342] hover:text-[#6ba636] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c5.5 0 9.8 4.5 9.8 10s-4.3 10-9.8 10c-1.7 0-3.3-.4-4.7-1.2l-.3-.2-3.5 1.1 1.1-3.5-.2-.3c-.8-1.4-1.2-3-1.2-4.7 0-5.5 4.5-10 10-10zm0-2c-6.6 0-12 5.4-12 12 0 2.1.5 4.1 1.5 5.9l-.9 3.5 3.5-.9c1.8 1 3.8 1.5 5.9 1.5 6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12.5c-1.3 0-2.5-.5-3.4-1.3l-.2-.2-2.1.8.8-2.1-.2-.2c-.8-.9-1.3-2.1-1.3-3.4 0-2.8 2.3-5 5-5s5 2.3 5 5-2.3 5-5 5z" />
                </svg>
              </a>
              <a href="#" className="text-[#7cb342] hover:text-[#6ba636] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 0h-21C.7 0 0 .7 0 1.5v21c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-21c0-.8-.7-1.5-1.5-1.5zm-15.8 18.8h-3.8v-9.4h3.8v9.4zm-1.9-10.7c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm15 10.7h-3.8v-5.1c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.2-.1.2-.1.5-.1.8v5.1h-3.8s.1-8.3 0-9.4h3.8v1.3c.5-.8 1.4-1.9 3.4-1.9 2.5 0 4.4 1.6 4.4 5.1v4.9z" />
                </svg>
              </a>
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
          <p>&copy; {new Date().getFullYear()} EcoSearch. All rights reserved.</p>
        </div>

        {/* Decorative Elements in Footer */}
        <LeafSVG style={{ top: '10%', left: '5%', transform: 'rotate(45deg)' }} className="opacity-30" />
        <LeafSVG style={{ bottom: '10%', right: '5%', transform: 'rotate(-45deg)' }} className="opacity-30" />
      </footer>
  )
}

export default Footer
import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold">© 2025 Bagshop. All rights reserved.</h1>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">Terms of Service</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
          <li className="hover:underline cursor-pointer">About Us</li>
        </ul>

        <div className="text-center md:text-right">
          <p className="text-sm mb-2">Follow us on:</p>
          <ul className="flex justify-center md:justify-end gap-4 text-sm">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer;

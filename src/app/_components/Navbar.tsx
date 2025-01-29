"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <Container>
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <Image src={logo} alt="logo" className='w-32' />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-lg hover:text-blue-500">Home</Link>
            <Link href="/AboutUs" className="text-lg hover:text-blue-500">About Us</Link>
            <Link href="/ContactUs" className="text-lg hover:text-blue-500">Contact Us</Link>
          </div>
          
          {/* Button */}
          <div className="hidden md:block">
            <Button className='border rounded-full px-6 py-3 text-white text-lg bg-[#0171DF] hover:bg-[#0171DF]'>Buy Template</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Menu with Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute w-full bg-white shadow-md overflow-hidden md:hidden flex flex-col items-start space-y-4 py-4 px-8"
      >
        <a href="#" className="text-lg hover:text-blue-500">Home</a>
        <a href="#" className="text-lg hover:text-blue-500">About Us</a>
        <a href="#" className="text-lg hover:text-blue-500">Contact Us</a>
        <Button className='border rounded-full text-white px-6 py-3 text-lg bg-[#0171DF] hover:bg-[#0171DF]'>Buy Template</Button>
      </motion.div>
    </nav>
  );
}

export default Navbar;

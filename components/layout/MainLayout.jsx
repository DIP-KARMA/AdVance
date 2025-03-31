import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageTransition from '../animations/PageTransition';
import PremiumButton from '../ui/PremiumButton';
import Image from 'next/image';

const MainLayout = ({ children, title = 'AdVance - Premium AI Ad Generator' }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Premium AI-powered advertising platform" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Premium Fluid Blob Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-60">
          <Image 
            src="/premium-fluid-blob.svg" 
            alt="Premium Background" 
            fill
            sizes="100vw"
            priority
            quality={100}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#14001f]/80 via-[#14001f]/70 to-[#14001f]/90"></div>
      </div>

      {/* Main Content with Page Transitions */}
      <main>
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#BB86FC] to-[#03DAC5] bg-clip-text text-transparent">
                AdVance
              </h3>
              <p className="text-sm text-gray-400 mt-1">Premium AI-powered advertising platform</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AdVance. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

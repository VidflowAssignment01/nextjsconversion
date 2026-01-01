"use client";

import Link from "next/link";
import { useState } from "react"; // 1. Import useState
import { 
  Search, 
  Bell, 
  User, 
  Menu, 
  Video, 
  Home, 
  LayoutDashboard, 
  PlayCircle,
  X 
} from "lucide-react";

export default function Navbar() {
  // 2. State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
      <div className="flex items-center justify-between px-4 h-16 relative">
        
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-4">
          {/* 3. Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full md:hidden"
          >
            {isMobileMenuOpen ? (
               <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
               <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
          
          <Link href="/" className="flex items-center gap-1">
            <div className="bg-red-600 text-white p-1 rounded-lg">
              <Video className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              VidFlow
            </span>
          </Link>
        </div>

        {/* Center: Search Bar (Hidden on mobile, visible on desktop) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-l-full focus:outline-none focus:border-blue-500 dark:bg-neutral-800 dark:text-white"
            />
            <button className="px-6 py-2 bg-gray-100 dark:bg-neutral-800 border border-l-0 border-gray-300 dark:border-neutral-700 rounded-r-full hover:bg-gray-200 dark:hover:bg-neutral-700">
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Right: Icons & Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full">
             <Search className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          <Link href="/notifications" className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full relative">
            <Bell className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-600 rounded-full border-2 border-white dark:border-neutral-900"></span>
          </Link>

          <Link href="/dashboard" className="hidden sm:block">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
          </Link>

          <Link href="/login" className="sm:hidden p-2 text-gray-700 dark:text-gray-200">
             <User className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN (Visible only when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 shadow-lg px-4 py-4 flex flex-col gap-2">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-medium"
          >
            <Home className="w-5 h-5" /> Home
          </Link>
          
          <Link 
            href="/dashboard" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-medium"
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          
          <Link 
            href="/videoplayer" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-medium"
          >
            <PlayCircle className="w-5 h-5" /> Watch Demo
          </Link>

           <div className="h-px bg-gray-200 dark:bg-neutral-800 my-1" />

           <Link 
            href="/login" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-medium text-blue-600 dark:text-blue-400"
          >
            <User className="w-5 h-5" /> Sign In
          </Link>
        </div>
      )}

    </nav>
  );
}
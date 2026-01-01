"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  LayoutDashboard, 
  PlayCircle, 
  Bell, 
  LogIn, 
  UserPlus,
  LucideIcon 
} from "lucide-react";

// --- 1. Helper Component ---
type SidebarLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
};

const SidebarLink = ({ href, icon: Icon, label, isActive }: SidebarLinkProps) => (
  <Link
    href={href}
    className={`flex items-center gap-4 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
    }`}
  >
    <Icon className={`w-5 h-5 ${isActive ? "fill-current" : ""}`} />
    <span className="truncate">{label}</span>
  </Link>
);

// --- 2. Main Sidebar Component ---
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-64px)] sticky top-16 border-r border-gray-200 dark:border-neutral-800 overflow-y-auto bg-white dark:bg-neutral-950 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700">
      
      {/* --- Section 1: Main Navigation --- */}
      <div className="p-3">
        <SidebarLink 
          href="/home" 
          icon={Home} 
          label="Home" 
          isActive={pathname === "/"} 
        />
        <SidebarLink 
          href="/dashboard" 
          icon={LayoutDashboard} 
          label="Dashboard" 
          isActive={pathname === "/dashboard"} 
        />
        <SidebarLink 
          href="/videoplayer" 
          icon={PlayCircle} 
          label="Watch Demo" 
          isActive={pathname === "/videoplayer"} 
        />
      </div>

      <div className="border-t border-gray-200 dark:border-neutral-800 mx-3 my-1" />

      {/* --- Section 2: User Actions --- */}
      <div className="p-3">
        <div className="px-3 py-2 mb-1 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Account
        </div>
        
        <SidebarLink 
          href="/notifications" 
          icon={Bell} 
          label="Notifications" 
          isActive={pathname === "/notifications"} 
        />
        
        <SidebarLink 
          href="/login" 
          icon={LogIn} 
          label="Sign In" 
          isActive={pathname === "/login"} 
        />
        
        <SidebarLink 
          href="/signup" 
          icon={UserPlus} 
          label="Sign Up" 
          isActive={pathname === "/signup"} 
        />
      </div>

      {/* --- Footer --- */}
      <div className="mt-auto p-4 px-6 text-[11px] font-medium text-gray-500 dark:text-gray-500">
        <p>© 2025 VidFlow Inc.</p>
      </div>

    </aside>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";

// Static video data with working Unsplash images
const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    duration: "12:14",
    title: "Master React JS — Complete Beginner to Pro Course",
    channel: "Farhan Dev",
    views: "152K views",
    timeAgo: "2 months ago",
    verified: true,
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    duration: "9:27",
    title: "Minimal UI Design with Figma — Aesthetic Dashboard Tutorial",
    channel: "Zaina Studio",
    views: "231K views",
    timeAgo: "1 month ago",
    verified: true,
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    duration: "18:05",
    title: "C++ OOP Project: Build an ATM System Step-by-Step",
    channel: "Nayab Codes",
    views: "98K views",
    timeAgo: "3 weeks ago",
    verified: true,
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80",
    duration: "6:41",
    title: "The Secret to Writing Clean JavaScript Code",
    channel: "Farhan Dev",
    views: "403K views",
    timeAgo: "5 months ago",
    verified: true,
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    duration: "10:22",
    title: "Portfolio Website Design — Minimal Aesthetic UI in React",
    channel: "Zaina Studio",
    views: "512K views",
    timeAgo: "2 weeks ago",
    verified: true,
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    duration: "15:48",
    title: "Learn Python in 2025 — Full Course for Beginners",
    channel: "Nayab Codes",
    views: "850K views",
    timeAgo: "6 months ago",
    verified: true,
  },
];

export default function Dashboard() {
  const [user] = useState({
    name: "User", // CHANGED FROM "John Doe" TO "User"
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    lastLogin: "2 days ago",
  });

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-neutral-800">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 text-white shadow-lg hidden md:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul>
            {[
              { name: "Overview", href: "/dashboard" },
              { name: "Profile", href: "/profile" },
              { name: "Settings", href: "/settings" },
              { name: "Notifications", href: "/notifications" },
              { name: "Messages", href: "/messages" },
            ].map((item) => (
              <li key={item.name} className="mb-4">
                <Link
                  href={item.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8">
        {/* Top Navigation Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
            />
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
              Welcome, {user.name}
            </h1>
          </div>
          <div className="flex space-x-4 w-full md:w-auto">
            <input
              type="text"
              className="p-2 border rounded-lg w-full md:w-64 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
              placeholder="Search..."
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Total Views", value: "3M" },
              { label: "Subscribers", value: "1.2K" },
              { label: "New Videos", value: "5" },
              { label: "Comments", value: "325" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  {stat.label}
                </h3>
                <p className="text-2xl font-bold text-orange-500">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Recent Activity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {videos.map((video, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-gray-100 dark:border-neutral-800 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200 dark:bg-neutral-800">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight mb-2 group-hover:text-orange-500 transition-colors">
                    {video.title}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      {video.channel}
                      {video.verified && (
                        <span className="text-blue-500 text-xs">✓</span>
                      )}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-2">
                      <span>{video.views}</span>
                      <span>{video.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
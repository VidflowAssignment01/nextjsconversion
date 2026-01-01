"use client";

import Link from "next/link"; 

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

export default function HomePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-100 tracking-tight">
          Recommended Videos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {videos.map((video, i) => (
            <Link
              key={i}
              // UPDATE: We pass the data in the query parameters
              href={{
                pathname: '/videoplayer',
                query: {
                  title: video.title,
                  channel: video.channel,
                  views: video.views,
                  timeAgo: video.timeAgo,
                  thumbnail: video.thumbnail
                }
              }}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-gray-100 dark:border-neutral-800 flex flex-col cursor-pointer"
            >
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

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight mb-2 group-hover:text-orange-500 transition-colors">
                  {video.title}
                </h3>
                
                <div className="mt-auto">
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    {video.channel}
                    {video.verified && (
                      <span className="text-blue-500 text-xs" title="Verified">✓</span>
                    )}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-2">
                    <span>{video.views}</span>
                    <span>{video.timeAgo}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
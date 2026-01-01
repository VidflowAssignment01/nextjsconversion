"use client";

import { useState, Suspense } from "react"; // Added Suspense
import Link from "next/link";
import { useSearchParams } from "next/navigation"; // Added useSearchParams
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal, Bell, User } from "lucide-react";

// --- Types ---
type Video = {
  src: string;
  poster: string;
  title: string;
  views: string; // Changed to string to handle "152K views" format from home page
  uploadedAt: string;
  likes: number;
  channel: {
    name: string;
    avatar: string;
    subscribers: string;
    isSubscribed: boolean;
  };
  description: string;
};

type Comment = {
  id: string;
  author: string;
  avatar: string;
  time: string;
  text: string;
  likes: number;
};

type RecommendedVideo = {
  id: string;
  title: string;
  channel: string;
  views: string;
  time: string;
  thumbnail: string;
  uploadedAt: string;
};

// --- Mock Data ---
const defaultVideoData: Video = {
  src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  poster: "/sample-video-poster.jpg",
  title: "Building a YouTube Clone UI with Next.js and shadcn | Full Walkthrough",
  views: "1,234,567 views",
  uploadedAt: "2 days ago",
  likes: 54231,
  channel: {
    name: "Dev Channel",
    avatar: "/channel-avatar-dev.jpg",
    subscribers: "1.25M",
    isSubscribed: false,
  },
  description: `In this video, we build a YouTube-style Watch page with Next.js (App Router) and shadcn/ui.
We cover layout, responsive design, accessibility considerations, and UI polish.`,
};

const recommendedData: RecommendedVideo[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `rec-${i + 1}`,
  title: i % 2 === 0 ? "Build a SaaS in 2 Hours" : "Next.js 14 Crash Course",
  channel: i % 2 === 0 ? "UI Patterns" : "Data Wizards",
  views: i % 2 === 0 ? "342K views" : "128K views",
  time: i % 2 === 0 ? "12:08" : "8:45",
  thumbnail: `https://source.unsplash.com/random/320x180?sig=${i}`, // Using placeholder for demo
  uploadedAt: `${Math.floor(Math.random() * 10) + 1} months ago` 
}));

const initialCommentsData: Comment[] = [
  {
    id: "c1",
    author: "Jane Doe",
    avatar: "/avatar-jane-doe.jpg",
    time: "1 day ago",
    text: "This was super helpful. The layout tricks for the sidebar were exactly what I needed!",
    likes: 245,
  },
  {
    id: "c2",
    author: "Alex Kim",
    avatar: "/avatar-alex-kim.jpg",
    time: "22 hours ago",
    text: "Would love a follow-up on optimizing video components and handling different aspect ratios.",
    likes: 92,
  },
];

// --- Inner Component that uses Search Params ---
function WatchPageContent() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Get data from URL
  const searchParams = useSearchParams();
  
  // Merge default data with URL data if available
  const video: Video = {
    ...defaultVideoData,
    title: searchParams.get('title') || defaultVideoData.title,
    channel: {
      ...defaultVideoData.channel,
      name: searchParams.get('channel') || defaultVideoData.channel.name,
    },
    views: searchParams.get('views') || defaultVideoData.views,
    uploadedAt: searchParams.get('timeAgo') || defaultVideoData.uploadedAt,
    poster: searchParams.get('thumbnail') || defaultVideoData.poster,
  };

  const recommended = recommendedData;
  const initialComments = initialCommentsData;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px]">
        {/* Left: Video + Meta + Description + Comments */}
        <section className="space-y-4">
          
          {/* Video Player Component */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-lg">
            <video
              className="h-full w-full object-cover"
              controls
              poster={video.poster}
              src={video.src}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-3">
            <h1 className="text-xl font-semibold leading-snug md:text-2xl text-pretty">
              {video.title}
            </h1>
            
            {/* Video Meta (Channel, Subscribe, Actions) */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Channel Info */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
                   <User className="h-full w-full p-2 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{video.channel.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {video.channel.subscribers} subscribers
                  </p>
                </div>
                <button
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`ml-2 h-9 px-4 rounded-full text-sm font-medium transition-colors ${
                    isSubscribed
                      ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-700"
                      : "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                  }`}
                >
                  {isSubscribed ? (
                    <span className="flex items-center gap-2">
                      <Bell className="w-4 h-4" /> Subscribed
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <div className="flex items-center rounded-full bg-gray-100 dark:bg-neutral-800">
                  <button className="flex items-center gap-2 border-r border-gray-200 dark:border-neutral-700 px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-l-full transition">
                    <ThumbsUp className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {video.likes.toLocaleString()}
                    </span>
                  </button>
                  <button className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-r-full transition">
                    <ThumbsDown className="h-5 w-5" />
                  </button>
                </div>

                <button className="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-neutral-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-700 transition">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>

                <button className="flex items-center rounded-full bg-gray-100 dark:bg-neutral-800 p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 transition">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Description Component */}
          <div className="rounded-xl bg-gray-100 dark:bg-neutral-800 p-4 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors">
            <div className="flex gap-2 font-medium mb-2">
              <span>{video.views}</span>
              <span>{video.uploadedAt}</span>
            </div>
            <p className="whitespace-pre-line leading-relaxed text-gray-800 dark:text-gray-200">
              {video.description}
            </p>
            <button className="mt-2 font-medium text-gray-900 dark:text-white">
              Show less
            </button>
          </div>

          <div className="h-px w-full bg-gray-200 dark:bg-neutral-800 my-6" />

          {/* Comments Component */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              {initialComments.length} Comments
            </h3>
            
            {/* Add Comment Input */}
            <div className="flex gap-4 mb-8">
               <div className="h-10 w-10 shrink-0 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                 Y
               </div>
               <div className="flex-1">
                 <input 
                    type="text" 
                    placeholder="Add a comment..." 
                    className="w-full bg-transparent border-b border-gray-300 dark:border-neutral-700 pb-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                 />
                 <div className="flex justify-end gap-2 mt-2">
                    <button className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">Cancel</button>
                    <button className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-neutral-700 text-gray-500 rounded-full" disabled>Comment</button>
                 </div>
               </div>
            </div>

            {/* Comment List */}
            <div className="space-y-6">
              {initialComments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200 dark:bg-neutral-800 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-600 font-bold">
                        {comment.author[0]}
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">
                        @{comment.author.replace(" ", "").toLowerCase()}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                      {comment.text}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 p-1.5 rounded-full transition-colors">
                        <ThumbsUp className="h-3.5 w-3.5" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 p-1.5 rounded-full transition-colors">
                        <ThumbsDown className="h-3.5 w-3.5" />
                      </button>
                      <button className="text-xs font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 py-1 px-3 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right: Recommended List Component */}
        <aside aria-label="Recommended videos" className="hidden lg:block">
          <h3 className="text-lg font-bold mb-4 px-1">Up Next</h3>
          <div className="flex flex-col gap-3">
            {recommended.map((item) => (
              <Link href="#" key={item.id} className="flex gap-3 group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative h-24 w-40 shrink-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-neutral-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                     <span className="text-xs">Thumbnail</span> 
                  </div>
                  <img src={item.thumbnail} alt="" className="w-full h-full object-cover opacity-60" />
                  <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-xs font-medium text-white">
                    {item.time}
                  </span>
                </div>
                {/* Info */}
                <div className="flex flex-col gap-1 pr-4">
                  <h4 className="text-sm font-semibold leading-tight text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <p>{item.channel}</p>
                    <p>{item.views} • {item.uploadedAt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
  );
}

// --- Main Page Wrapper ---
export default function WatchPage() {
  return (
    <main className="mx-auto max-w-[1400px] p-4 bg-white dark:bg-neutral-950 min-h-screen text-gray-900 dark:text-gray-100">
      <Suspense fallback={<div className="p-10 text-center">Loading video...</div>}>
        <WatchPageContent />
      </Suspense>
    </main>
  );
}
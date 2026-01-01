"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Check, ArrowLeft } from "lucide-react"; // assuming lucide-react is installed

// Define types for the notification
type Notification = {
  id: number;
  title: string;
  description: string;
  timeAgo: string;
  read: boolean;
};

// Sample notifications data
const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "New Comment on Your Video",
    description: "Your video 'Master React JS — Complete Beginner to Pro Course' received a new comment.",
    timeAgo: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    title: "New Subscriber",
    description: "You have a new subscriber, John Doe, on your channel.",
    timeAgo: "1 day ago",
    read: true,
  },
  {
    id: 3,
    title: "Video Liked",
    description: "Your video 'Minimal UI Design with Figma' was liked by 20 users.",
    timeAgo: "3 days ago",
    read: true,
  },
  {
    id: 4,
    title: "New Subscriber",
    description: "You have a new subscriber, Jane Smith, on your channel.",
    timeAgo: "5 days ago",
    read: false,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  // Function to mark a notification as read
  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Function to mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Link 
              href="/dashboard" 
              className="p-2 rounded-full bg-white dark:bg-neutral-900 shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Link>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-3">
              Notifications
              <span className="text-sm font-normal px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                {notifications.filter(n => !n.read).length} New
              </span>
            </h1>
          </div>
          
          <button
            onClick={markAllAsRead}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium"
          >
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 overflow-hidden">
          {notifications.length === 0 ? (
            <div className="p-10 text-center text-gray-500 dark:text-gray-400">
              <Bell className="w-10 h-10 mx-auto mb-3 opacity-20" />
              <p>No notifications yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100 dark:divide-neutral-800">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-6 transition-colors duration-200 ${
                    notification.read
                      ? "bg-white dark:bg-neutral-900 opacity-60 hover:opacity-100"
                      : "bg-orange-50/50 dark:bg-orange-900/10"
                  }`}
                >
                  <div className="flex gap-4">
                    {/* Icon Indicator */}
                    <div className={`mt-1 size-2.5 rounded-full flex-shrink-0 ${notification.read ? 'bg-gray-300 dark:bg-neutral-700' : 'bg-orange-500'}`} />

                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className={`text-base font-semibold ${notification.read ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {notification.timeAgo}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {notification.description}
                      </p>

                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                        >
                          <Check className="w-3 h-3" />
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
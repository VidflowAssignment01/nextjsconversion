"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { PlayCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Type definition fixed here
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      alert("Login clicked!");
    }, 2000);
  }

  return (
    <div className="bg-gray-50 dark:bg-neutral-950 flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        
        {/* Card Container */}
        <div className="flex flex-col items-center justify-center gap-8 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md rounded-2xl shadow-md p-8 w-full border border-gray-200 dark:border-neutral-800">
          
          <form onSubmit={onSubmit} className="w-full space-y-8">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10">
                <PlayCircle className="size-6 text-indigo-500" />
              </div>
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Welcome Back 👋
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                New here?{" "}
                <Link
                  href="/sign-up"
                  className="text-indigo-500 hover:text-indigo-400 underline underline-offset-4"
                >
                  Create an account
                </Link>
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-5">
              {/* Email Input */}
              <div className="grid gap-2">
                <label
                  htmlFor="userEmail"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="userEmail"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="flex h-10 w-full rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-100 ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Password Input */}
              <div className="grid gap-2">
                <label
                  htmlFor="userPassword"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  id="userPassword"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="flex h-10 w-full rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-100 ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center whitespace-nowrap w-full rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium h-10 px-4 py-2 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative text-center text-sm text-gray-500 dark:text-gray-400 before:absolute before:inset-0 before:top-1/2 before:border-t before:border-gray-200 dark:before:border-neutral-800">
              <span className="relative z-10 px-3 bg-white dark:bg-neutral-900">
                or
              </span>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 dark:border-neutral-700 bg-transparent hover:bg-gray-50 dark:hover:bg-neutral-800 h-10 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Footer Terms */}
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            By signing in, you agree to our{" "}
            <Link href="#" className="text-indigo-500 hover:text-indigo-400 underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-indigo-500 hover:text-indigo-400 underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        
      </div>
    </div>
  );
}
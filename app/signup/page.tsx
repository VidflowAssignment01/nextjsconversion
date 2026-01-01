"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully!");
    }, 2000);
  }

  return (
    <div className="bg-gray-50 dark:bg-neutral-950 flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        
        {/* Main Card */}
        <div className="flex flex-col gap-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-800">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              
              {/* Logo & Heading */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="#"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <div className="bg-gray-100 dark:bg-neutral-800 flex size-8 items-center justify-center rounded-md border border-gray-200 dark:border-neutral-700">
                    {/* Youtube Logo SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5 text-red-600"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </div>
                  <span className="sr-only">Insta Inc.</span>
                </a>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Create your account
                </h1>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 underline underline-offset-4"
                  >
                    Log in
                  </Link>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="flex flex-col gap-6">
                
                {/* Username */}
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    id="name"
                    name="username"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Password */}
                <div className="grid gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-10 w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing Up...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-gray-200 dark:after:border-neutral-800">
                <span className="relative z-10 bg-white dark:bg-neutral-900 px-2 text-gray-500 dark:text-gray-400">
                  Or
                </span>
              </div>

              {/* Social Sign Up */}
              <div className="grid gap-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-gray-900 dark:hover:text-gray-100 h-10 w-full gap-2 text-gray-700 dark:text-gray-200"
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
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          By signing up, you agree to our{" "}
          <a href="#" className="underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
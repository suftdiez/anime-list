"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <header className="bg-indigo-500 shadow-lg w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Tablet Layout */}
        <div className="hidden sm:flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-white text-xl lg:text-2xl hover:text-indigo-200 transition-colors whitespace-nowrap flex-shrink-0"
          >
            ANIME LIST
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                placeholder="Cari Anime..."
                className={`
                  w-full bg-white rounded-full 
                  px-5 py-2.5
                  text-base
                  outline-none
                  transition-all duration-200
                  ${searchFocus 
                    ? 'ring-2 ring-indigo-200 shadow-lg' 
                    : 'shadow-md'
                  }
                `}
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
              {/* Search Icon */}
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden py-5 space-y-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-white text-xl hover:text-indigo-200 transition-colors block text-center"
          >
            ANIME LIST
          </Link>

          {/* Search Bar */}
          <div className="relative">
            <input
              placeholder="Cari Anime..."
              className={`
                w-full bg-white rounded-full 
                px-4 py-2.5
                text-sm
                outline-none
                transition-all duration-200
                ${searchFocus 
                  ? 'ring-2 ring-indigo-200 shadow-lg' 
                  : 'shadow-md'
                }
              `}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            {/* Search Icon */}
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
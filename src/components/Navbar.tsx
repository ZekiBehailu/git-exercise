"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Git Master
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/features"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/features"
              className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

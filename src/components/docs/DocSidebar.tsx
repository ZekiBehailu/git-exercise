"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DocSection {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

const docSections: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Basic Commands",
    items: [
      { title: "Git Init", href: "/docs/git-init" },
      { title: "Git Clone", href: "/docs/git-clone" },
      { title: "Git Add", href: "/docs/git-add" },
      { title: "Git Commit", href: "/docs/git-commit" },
      { title: "Git Push", href: "/docs/git-push" },
    ],
  },
  {
    title: "Branching",
    items: [
      { title: "Creating Branches", href: "/docs/creating-branches" },
      { title: "Switching Branches", href: "/docs/switching-branches" },
      { title: "Merging", href: "/docs/merging" },
      { title: "Resolving Conflicts", href: "/docs/resolving-conflicts" },
    ],
  },
  {
    title: "Advanced Topics",
    items: [
      { title: "Rebasing", href: "/docs/rebasing" },
      { title: "Cherry Picking", href: "/docs/cherry-picking" },
      { title: "Interactive Rebase", href: "/docs/interactive-rebase" },
      { title: "Git Hooks", href: "/docs/git-hooks" },
    ],
  },
];

export default function DocSidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(
    docSections.map((section) => section.title)
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto fixed left-0 top-16 pt-8 pb-20">
      <nav className="px-4">
        {docSections.map((section) => (
          <div key={section.title} className="mb-8">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-left mb-2"
            >
              <span className="text-sm font-semibold text-gray-900">
                {section.title}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  openSections.includes(section.title)
                    ? "rotate-0"
                    : "-rotate-90"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSections.includes(section.title) && (
              <ul className="space-y-2 ml-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-sm py-1 px-2 rounded-md ${
                        pathname === item.href
                          ? "text-indigo-600 bg-indigo-50 font-medium"
                          : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

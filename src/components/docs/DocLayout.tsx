"use client";

import DocSidebar from "./DocSidebar";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <DocSidebar />
      <div className="pl-64">
        <div className="max-w-4xl mx-auto px-6 py-8">{children}</div>
      </div>
    </div>
  );
}

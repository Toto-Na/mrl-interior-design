"use client";

import { Search, ArrowRight } from "lucide-react";
import type { PageName } from "./types";

interface HeaderProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
  onSearch: () => void;
  onStartProject: () => void;
}

const NAV: { id: PageName; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header({
  current,
  onNavigate,
  onSearch,
  onStartProject,
}: HeaderProps) {
  return (
    <header className="arch-header">
      {/* Left: Logo (clickable -> home) */}
      <button
        className="arch-logo"
        type="button"
        onClick={() => onNavigate("home")}
        aria-label="MR L Production — home"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      >
        <div className="arch-logo-mark" aria-hidden>
          N.P
        </div>
        <div className="arch-logo-text">
          MR<span className="dot">.</span>L PRODUCTION
        </div>
      </button>

      {/* Center: nav pill */}
      <nav className="arch-nav-pill" aria-label="Primary">
        {NAV.map((n) => (
          <button
            key={n.id}
            className={current === n.id ? "arch-nav-item active" : "arch-nav-item"}
            type="button"
            onClick={() => onNavigate(n.id)}
          >
            {n.label}
          </button>
        ))}
      </nav>

      {/* Right: actions */}
      <div className="arch-actions">
        <button
          className="arch-icon-btn"
          type="button"
          aria-label="Search"
          onClick={onSearch}
        >
          <Search strokeWidth={2} />
        </button>
        <button
          className="arch-start-btn"
          type="button"
          onClick={onStartProject}
        >
          <span className="label-text">Start a Project</span>
          <span className="arrow-dot" aria-hidden>
            <ArrowRight strokeWidth={2.4} />
          </span>
        </button>
      </div>
    </header>
  );
}

"use client";

import {
  Home,
  LayoutGrid,
  Briefcase,
  Heart,
  Image as ImageIcon,
  Play,
} from "lucide-react";
import type { PageName } from "./types";

interface SidebarProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
  onShowreel: () => void;
}

const ITEMS: { id: PageName; icon: typeof Home; label: string }[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "projects", icon: LayoutGrid, label: "Projects grid" },
  { id: "services", icon: Briefcase, label: "Services" },
  { id: "about", icon: Heart, label: "About / Favorites" },
  { id: "contact", icon: ImageIcon, label: "Gallery / Contact" },
];

export default function Sidebar({
  current,
  onNavigate,
  onShowreel,
}: SidebarProps) {
  return (
    <aside className="arch-sidebar" aria-label="Quick navigation">
      {ITEMS.map((it) => {
        const Icon = it.icon;
        return (
          <button
            key={it.id}
            className={current === it.id ? "arch-side-icon active" : "arch-side-icon"}
            type="button"
            aria-label={it.label}
            onClick={() => onNavigate(it.id)}
          >
            <Icon strokeWidth={2} />
          </button>
        );
      })}

      <div className="arch-side-divider" />

      <div className="arch-side-avatar" aria-label="Featured interior" />

      <div className="arch-side-play">
        <button
          className="play-dot"
          type="button"
          aria-label="Play showreel"
          onClick={onShowreel}
        >
          <Play fill="currentColor" strokeWidth={0} />
        </button>
        <div className="play-label">Watch Showreel</div>
      </div>
    </aside>
  );
}

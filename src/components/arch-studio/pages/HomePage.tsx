"use client";

import { ArrowRight, Play, MapPin } from "lucide-react";
import type { PageName } from "../types";

interface HomePageProps {
  onShowreel: () => void;
  onNavigate: (page: PageName) => void;
  onStartProject: () => void;
}

export default function HomePage({
  onShowreel,
  onNavigate,
  onStartProject,
}: HomePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="arch-hero">
        {/* Left: text content */}
        <div className="arch-hero-text arch-rise">
          <div className="arch-eyebrow">
            ARCHITECTURE<span className="sep">—</span>INTERIORS<span className="sep">—</span>LANDSCAPES
          </div>

          <h1 className="arch-headline">
            Spaces
            <br />
            That <span className="accent">Inspire</span>
          </h1>

          <p className="arch-hero-desc">
            We design meaningful spaces that blend architecture, nature and
            modern living.
          </p>

          <div className="arch-hero-buttons">
            <button
              className="arch-explore-btn"
              type="button"
              onClick={() => onNavigate("projects")}
            >
              Explore Our Work
              <ArrowRight strokeWidth={2.2} />
            </button>
            <button
              className="arch-showreel"
              type="button"
              onClick={onShowreel}
            >
              <span className="play-circle" aria-hidden>
                <Play fill="currentColor" strokeWidth={0} />
              </span>
              Watch Showreel
            </button>
          </div>
        </div>

        {/* Right: large architecture image */}
        <div className="arch-hero-image-wrap">
          <img
            className="arch-hero-image"
            src="/images/local-assets/2246df08492f.jpg"
            alt="Modern luxury villa with curved roof and floor-to-ceiling glass walls overlooking mountains at dusk"
            draggable={false}
          />
          <div className="arch-hero-fade" />

          {/* Vertical keywords top-right */}
          <div className="arch-vertical-stack" aria-hidden>
            <div className="vk">MODERN</div>
            <div className="vk">SUSTAINABLE</div>
            <div className="vk">FUNCTIONAL</div>
            <div className="vk">TIMELESS</div>
          </div>
        </div>
      </section>

      {/* Bottom overlapping cards row */}
      <div className="arch-bottom-row">
        {/* Featured Project card */}
        <FeaturedProjectInline onNavigate={onNavigate} />

        {/* Statistics card */}
        <div className="arch-stats-card">
          <StatCol
            icon={<BuildingIcon />}
            num="250+"
            label="Projects Completed"
          />
          <StatCol icon={<UsersIcon />} num="120+" label="Happy Clients" />
          <StatCol
            icon={<GlobeIcon />}
            num="15+"
            label="Countries Worldwide"
          />
        </div>

        {/* Vision card */}
        <div className="arch-vision-card">
          <div className="arch-vision-top">
            <div className="arch-vision-avatar" aria-label="Designer portrait" />
            <button
              className="arch-vision-arrow"
              type="button"
              aria-label="Bring your vision to life"
              onClick={onStartProject}
            >
              <ArrowUpRight />
            </button>
          </div>
          <h3 className="arch-vision-title">
            Bring Your Vision
            <br />
            To Life
          </h3>
          <p className="arch-vision-desc">
            Let&apos;s create a space that reflects your vision and lifestyle.
          </p>
        </div>
      </div>
    </>
  );
}

/* ---------- inline sub-components (kept here for a single self-contained Home) ---------- */

import { useState } from "react";
import { ArrowLeft, Plus, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../types";

function FeaturedProjectInline({
  onNavigate,
}: {
  onNavigate: (page: PageName) => void;
}) {
  const featured = PROJECTS.slice(0, 3);
  const [idx, setIdx] = useState(0);
  const total = featured.length;
  const current = featured[idx];

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className="arch-feature-card">
      <div className="arch-feature-top">
        <div className="arch-feature-eyebrow">FEATURED PROJECT</div>
        <div className="arch-feature-counter">
          <span className="now">{String(idx + 1).padStart(2, "0")}</span>
          {" / "}
          {String(total).padStart(2, "0")}
        </div>
      </div>

      <div className="arch-feature-thumb-wrap">
        <img
          className="arch-feature-thumb"
          src={current.image}
          alt={current.title}
          draggable={false}
        />
        <div className="arch-feature-avatars">
          <span className="av">
            <img
              src="/images/local-assets/4c80448759d8.jpg"
              alt="Team member"
            />
          </span>
          <span className="av">
            <img
              src="/images/local-assets/e062a2c93a5e.jpg"
              alt="Team member"
            />
          </span>
          <span className="av plus" aria-hidden>
            <Plus strokeWidth={2.4} />
          </span>
        </div>
      </div>

      <div className="arch-feature-body">
        <h3 className="arch-feature-title">{current.title}</h3>
        <p className="arch-feature-desc">{current.description}</p>
        <button
          className="arch-feature-link"
          type="button"
          onClick={() => onNavigate("projects")}
        >
          View Project
          <ArrowRight strokeWidth={2.2} />
        </button>
      </div>

      <div className="arch-feature-nav">
        <div className="arch-feature-dots" aria-hidden>
          {Array.from({ length: total }).map((_, i) => (
            <span key={i} className={i === idx ? "d on" : "d"} />
          ))}
        </div>
        <button
          className="arch-feature-nav-btn"
          type="button"
          aria-label="Previous project"
          onClick={prev}
        >
          <ArrowLeft strokeWidth={2.2} />
        </button>
        <button
          className="arch-feature-nav-btn next"
          type="button"
          aria-label="Next project"
          onClick={next}
        >
          <ArrowRight strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}

function StatCol({
  icon,
  num,
  label,
}: {
  icon: React.ReactNode;
  num: string;
  label: string;
}) {
  return (
    <div className="arch-stat-col">
      <div className="arch-stat-icon">{icon}</div>
      <div className="arch-stat-num">{num}</div>
      <div className="arch-stat-label">{label}</div>
    </div>
  );
}

/* Lucide-style inline icons (kept simple to avoid extra imports) */
function BuildingIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="1.5" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

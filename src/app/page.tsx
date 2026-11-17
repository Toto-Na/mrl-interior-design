"use client";

import { useEffect, useState } from "react";
import { X, Play, Search as SearchIcon, ArrowRight } from "lucide-react";
import Header from "@/components/arch-studio/Header";
import Sidebar from "@/components/arch-studio/Sidebar";
import HomePage from "@/components/arch-studio/pages/HomePage";
import ProjectsPage from "@/components/arch-studio/pages/ProjectsPage";
import ServicesPage from "@/components/arch-studio/pages/ServicesPage";
import AboutPage from "@/components/arch-studio/pages/AboutPage";
import ContactPage from "@/components/arch-studio/pages/ContactPage";
import type { PageName } from "@/components/arch-studio/types";

export default function Home() {
  const [page, setPage] = useState<PageName>("home");
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const navigate = (next: PageName) => {
    setPage(next);
    // Scroll the inner stage back to top on page change
    if (typeof window !== "undefined") {
      const el = document.querySelector(".arch-stage-scroll");
      if (el) el.scrollTop = 0;
    }
  };

  // Close any overlay with ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowreelOpen(false);
        setSearchOpen(false);
        setProjectOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when an overlay is open
  useEffect(() => {
    const open = showreelOpen || searchOpen || projectOpen;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showreelOpen, searchOpen, projectOpen]);

  return (
    <main className="arch-root">
      {/* Outer misty mountain background */}
      <img
        className="arch-bg-image"
        src="/images/local-assets/d6b9bfcea9f3.jpg"
        alt="Misty mountain landscape"
        aria-hidden
        draggable={false}
      />
      <div className="arch-bg-overlay" />

      {/* Main glass window */}
      <div className="arch-window">
        <Header
          current={page}
          onNavigate={navigate}
          onSearch={() => setSearchOpen(true)}
          onStartProject={() => setProjectOpen(true)}
        />

        <div className="arch-stage">
          <Sidebar
            current={page}
            onNavigate={navigate}
            onShowreel={() => setShowreelOpen(true)}
          />

          <div className="arch-stage-scroll">
            {page === "home" && (
              <HomePage
                onShowreel={() => setShowreelOpen(true)}
                onNavigate={navigate}
                onStartProject={() => setProjectOpen(true)}
              />
            )}
            {page === "projects" && <ProjectsPage />}
            {page === "services" && (
              <ServicesPage
                onNavigate={navigate}
                onStartProject={() => setProjectOpen(true)}
              />
            )}
            {page === "about" && <AboutPage onNavigate={navigate} />}
            {page === "contact" && (
              <ContactPage onStartProject={() => setProjectOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* ---------- Showreel modal ---------- */}
      {showreelOpen && (
        <div
          className="arch-modal-overlay"
          onClick={() => setShowreelOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Watch showreel"
        >
          <div className="arch-modal" onClick={(e) => e.stopPropagation()}>
            <img
              className="arch-modal-img"
              src="/images/local-assets/2246df08492f.jpg"
              alt="Showreel backdrop"
              draggable={false}
            />
            <button
              className="arch-modal-close"
              type="button"
              aria-label="Close"
              onClick={() => setShowreelOpen(false)}
            >
              <X strokeWidth={2} />
            </button>
            <button
              className="arch-modal-play"
              type="button"
              aria-label="Play showreel"
            >
              <Play fill="currentColor" strokeWidth={0} />
            </button>
            <div className="arch-modal-caption">
              <div className="eb">MR.L PRODUCTION — SHOWREEL</div>
              <div className="tt">Spaces That Inspire</div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Search overlay ---------- */}
      {searchOpen && (
        <div
          className="arch-search-overlay"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div
            className="flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="arch-search-box">
              <SearchIcon size={18} color="#6E6862" />
              <input
                type="text"
                placeholder="Search projects, services, articles..."
                autoFocus
              />
              <button className="go" type="button" aria-label="Search">
                <ArrowRight strokeWidth={2} />
              </button>
            </div>
            <div className="arch-search-hint">Press ESC to close</div>
          </div>
        </div>
      )}

      {/* ---------- Start a Project modal ---------- */}
      {projectOpen && (
        <div
          className="arch-project-overlay"
          onClick={() => setProjectOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Start a project"
        >
          <div
            className="arch-project-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }}
          >
            <button
              className="arch-project-close"
              type="button"
              aria-label="Close"
              onClick={() => setProjectOpen(false)}
            >
              <X strokeWidth={2} />
            </button>
            <div className="arch-project-eyebrow">START A PROJECT</div>
            <h2 className="arch-project-title">
              Bring Your Vision
              <br />
              To Life
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setProjectOpen(false);
              }}
            >
              <div className="arch-project-field">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" required placeholder="Jane Doe" />
              </div>
              <div className="arch-project-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                />
              </div>
              <div className="arch-project-field">
                <label htmlFor="brief">Project Brief</label>
                <textarea
                  id="brief"
                  rows={3}
                  placeholder="Tell us about your space, location and vision..."
                />
              </div>
              <button className="arch-project-submit" type="submit">
                Send Brief
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

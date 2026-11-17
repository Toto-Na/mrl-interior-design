"use client";

import { ArrowRight, Award, Leaf, Compass, Sparkles } from "lucide-react";
import type { PageName } from "../types";

interface AboutPageProps {
  onNavigate: (page: PageName) => void;
}

const TEAM = [
  {
    name: "Noah Laurent",
    role: "Principal Architect",
    img: "/images/local-assets/4bf90f85a38e.jpg",
  },
  {
    name: "Mira Sato",
    role: "Interior Design Lead",
    img: "/images/local-assets/fd597ebd0086.jpeg",
  },
  {
    name: "Idris Karim",
    role: "Landscape Architect",
    img: "/images/local-assets/596dcd72447b.jpg",
  },
  {
    name: "Elena Costa",
    role: "Studio Director",
    img: "/images/local-assets/dac8da1b0f04.jpg",
  },
];

const VALUES = [
  {
    icon: Compass,
    t: "Site-led",
    d: "Every project starts with the land. We listen to the site before we draw a line.",
  },
  {
    icon: Leaf,
    t: "Sustainable",
    d: "Passive strategies, local materials and honest detailing drive every decision.",
  },
  {
    icon: Sparkles,
    t: "Crafted",
    d: "We obsess over junctions, joints and shadows — the small things that endure.",
  },
  {
    icon: Award,
    t: "Awarded",
    d: "Twelve international design awards in the last five years, and counting.",
  },
];

const TIMELINE = [
  { year: "2009", t: "Studio founded", d: "MR L Production opens a small studio in the Alps." },
  { year: "2014", t: "First international award", d: "The Cedar Pavilion wins the AIA Design Excellence prize." },
  { year: "2019", t: "Landscape practice", d: "A dedicated landscape team joins the studio." },
  { year: "2024", t: "250th project", d: "The Horizon Villa marks 250 completed projects worldwide." },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="arch-page arch-page-about">
      <header className="arch-page-head arch-rise">
        <div className="arch-page-eyebrow">THE STUDIO</div>
        <h2 className="arch-page-title">
          A practice of
          <br />
          <span className="accent">makers</span>
        </h2>
        <p className="arch-page-sub">
          MR L Production is an integrated architecture, interiors and landscape
          studio working between mountains, cities and coastlines since 2009.
        </p>
      </header>

      <section className="arch-about-intro arch-rise">
        <div className="arch-about-intro-text">
          <p>
            We believe meaningful spaces come from a patient conversation
            between client, site and craft. Our work spans private residences,
            cultural projects and boutique hospitality — always with a single
            thread: a building should feel inevitable in its place.
          </p>
          <p>
            The studio brings together architects, interior designers,
            landscape architects and makers under one roof, so every project is
            designed from concept to door handle by the same hands.
          </p>
        </div>
        <div className="arch-about-intro-img-wrap">
          <img
            src="/images/local-assets/5874ade3e3e2.jpg"
            alt="Studio interior"
            className="arch-about-intro-img"
            draggable={false}
          />
        </div>
      </section>

      <section className="arch-values">
        <div className="arch-page-eyebrow">WHAT WE BELIEVE</div>
        <h3 className="arch-section-title">Studio values</h3>
        <div className="arch-values-grid">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.t}
                className="arch-value-card arch-rise"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="arch-value-icon">
                  <Icon strokeWidth={1.6} />
                </div>
                <h4 className="arch-value-t">{v.t}</h4>
                <p className="arch-value-d">{v.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="arch-team">
        <div className="arch-page-eyebrow">THE PEOPLE</div>
        <h3 className="arch-section-title">Meet the team</h3>
        <div className="arch-team-grid">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              className="arch-team-card arch-rise"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="arch-team-img-wrap">
                <img
                  src={m.img}
                  alt={m.name}
                  className="arch-team-img"
                  draggable={false}
                />
              </div>
              <h4 className="arch-team-name">{m.name}</h4>
              <div className="arch-team-role">{m.role}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="arch-timeline">
        <div className="arch-page-eyebrow">SINCE 2009</div>
        <h3 className="arch-section-title">A short history</h3>
        <ol className="arch-timeline-list">
          {TIMELINE.map((item, i) => (
            <li
              key={item.year}
              className="arch-timeline-item arch-rise"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="arch-timeline-year">{item.year}</div>
              <div className="arch-timeline-body">
                <h4>{item.t}</h4>
                <p>{item.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="arch-cta-band">
        <div>
          <div className="arch-page-eyebrow">WORK WITH US</div>
          <h3 className="arch-cta-title">
            Let&apos;s build something <span className="accent">together</span>.
          </h3>
        </div>
        <div className="arch-cta-actions">
          <button
            className="arch-explore-btn"
            type="button"
            onClick={() => onNavigate("contact")}
          >
            Get in Touch
            <ArrowRight strokeWidth={2.2} />
          </button>
        </div>
      </section>
    </div>
  );
}

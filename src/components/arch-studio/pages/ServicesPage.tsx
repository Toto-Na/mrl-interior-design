"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PageName } from "../types";

interface ServicesPageProps {
  onNavigate: (page: PageName) => void;
  onStartProject: () => void;
}

const SERVICES = [
  {
    num: "01",
    cat: "Architecture",
    title: "Architecture",
    desc: "From concept to completion, we craft buildings that respond to site, climate and the way you live.",
    points: [
      "Concept & schematic design",
      "Detailed construction documents",
      "Sustainability & energy modelling",
      "Project supervision",
    ],
    image:
      "/images/local-assets/84f4ccc87337.png",
  },
  {
    num: "02",
    cat: "Interiors",
    title: "Interior Design",
    desc: "Interiors layered with texture, light and craft — bespoke furniture, materials and detailing.",
    points: [
      "Space planning & flow",
      "Custom furniture & millwork",
      "Lighting & material palettes",
      "Styling & art curation",
    ],
    image:
      "/images/local-assets/ac9d937081a2.jpg",
  },
  {
    num: "03",
    cat: "Landscapes",
    title: "Landscape Design",
    desc: "Outdoor rooms that extend the architecture into nature — planting, water, stone and light.",
    points: [
      "Site analysis & masterplan",
      "Planting & ecological design",
      "Hardscape & water features",
      "Outdoor lighting",
    ],
    image:
      "/images/local-assets/3864a7e989ff.jpg",
  },
];

const PROCESS = [
  { num: "01", t: "Discover", d: "We start by listening — to your brief, your site and your way of living." },
  { num: "02", t: "Design", d: "Concepts, sketches and 3D studies evolve into a clear architectural direction." },
  { num: "03", t: "Develop", d: "Drawings, specifications and partners are coordinated into buildable detail." },
  { num: "04", t: "Deliver", d: "We supervise construction through to a flawless handover and styling." },
];

export default function ServicesPage({
  onNavigate,
  onStartProject,
}: ServicesPageProps) {
  return (
    <div className="arch-page arch-page-services">
      <header className="arch-page-head arch-rise">
        <div className="arch-page-eyebrow">WHAT WE DO</div>
        <h2 className="arch-page-title">
          Services
          <br />
          <span className="accent">Studio</span>
        </h2>
        <p className="arch-page-sub">
          An integrated practice covering architecture, interiors and landscape
          — so every project reads as a single, considered idea.
        </p>
      </header>

      <section className="arch-service-list">
        {SERVICES.map((s, i) => (
          <article
            key={s.num}
            className="arch-service-row arch-rise"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="arch-service-img-wrap">
              <img
                src={s.image}
                alt={s.title}
                className="arch-service-img"
                draggable={false}
              />
              <div className="arch-service-num">{s.num}</div>
            </div>

            <div className="arch-service-body">
              <div className="arch-service-cat">{s.cat.toUpperCase()}</div>
              <h3 className="arch-service-title">{s.title}</h3>
              <p className="arch-service-desc">{s.desc}</p>
              <ul className="arch-service-points">
                {s.points.map((p) => (
                  <li key={p}>
                    <span className="dot" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <button
                className="arch-feature-link"
                type="button"
                onClick={onStartProject}
              >
                Start {/^[aeiou]/i.test(s.title) ? "an" : "a"} {s.title.toLowerCase()} project
                <ArrowRight strokeWidth={2.2} />
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="arch-process">
        <div className="arch-process-head">
          <div className="arch-page-eyebrow">HOW WE WORK</div>
          <h3 className="arch-process-title">
            A simple, <span className="accent">considered</span> process
          </h3>
        </div>
        <div className="arch-process-grid">
          {PROCESS.map((p, i) => (
            <div
              key={p.num}
              className="arch-process-step arch-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="arch-process-num">{p.num}</div>
              <h4 className="arch-process-t">{p.t}</h4>
              <p className="arch-process-d">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="arch-cta-band">
        <div>
          <div className="arch-page-eyebrow">READY?</div>
          <h3 className="arch-cta-title">
            Let&apos;s design something <span className="accent">timeless</span>.
          </h3>
        </div>
        <div className="arch-cta-actions">
          <button
            className="arch-explore-btn"
            type="button"
            onClick={() => onNavigate("projects")}
          >
            See Our Projects
            <ArrowRight strokeWidth={2.2} />
          </button>
          <button
            className="arch-ghost-btn"
            type="button"
            onClick={onStartProject}
          >
            Start a Project
            <ArrowUpRight strokeWidth={2} />
          </button>
        </div>
      </section>
    </div>
  );
}

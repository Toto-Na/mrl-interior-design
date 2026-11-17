"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MapPin, X, ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "../types";

const CATEGORIES = ["All", "Architecture", "Interiors", "Landscapes"] as const;
type Category = (typeof CATEGORIES)[number];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div className="arch-page arch-page-projects">
      <header className="arch-page-head arch-rise">
        <div className="arch-page-eyebrow">OUR WORK</div>
        <h2 className="arch-page-title">
          Selected
          <br />
          <span className="accent">Projects</span>
        </h2>
        <p className="arch-page-sub">
          A curated portfolio of architecture, interiors and landscape work
          delivered across fifteen countries.
        </p>

        <div className="arch-filter-row" role="tablist">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={filter === c ? "arch-chip on" : "arch-chip"}
              onClick={() => setFilter(c)}
              type="button"
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <section className="arch-project-grid">
        {list.map((p, i) => (
          <article
            key={p.id}
            className="arch-project-card arch-rise"
            style={{ animationDelay: `${i * 60}ms` }}
            onClick={() => setActive(p)}
          >
            <div className="arch-project-img-wrap">
              <img
                src={p.image}
                alt={p.title}
                className="arch-project-img"
                draggable={false}
              />
              <div className="arch-project-cat">{p.category}</div>
              <button
                className="arch-project-arrow"
                type="button"
                aria-label={`View ${p.title}`}
              >
                <ArrowUpRight strokeWidth={2} />
              </button>
            </div>

            <div className="arch-project-meta">
              <h3 className="arch-project-title">{p.title}</h3>
              <div className="arch-project-loc">
                <MapPin strokeWidth={1.8} />
                <span>
                  {p.location} · {p.year}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="arch-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="arch-project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="arch-modal-close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        >
          <X strokeWidth={2} />
        </button>

        <div className="arch-project-modal-grid">
          <div className="arch-project-modal-img-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="arch-project-modal-img"
              draggable={false}
            />
          </div>

          <div className="arch-project-modal-body">
            <div className="arch-project-eyebrow">
              {project.category.toUpperCase()} · {project.year}
            </div>
            <h2 className="arch-project-modal-title">{project.title}</h2>
            <div className="arch-project-modal-loc">
              <MapPin strokeWidth={1.8} />
              <span>{project.location}</span>
            </div>
            <p className="arch-project-modal-desc">{project.description}</p>

            <div className="arch-project-modal-stats">
              <div>
                <div className="ms-num">3,200</div>
                <div className="ms-lab">SQ FT</div>
              </div>
              <div>
                <div className="ms-num">18</div>
                <div className="ms-lab">MONTHS</div>
              </div>
              <div>
                <div className="ms-num">A+</div>
                <div className="ms-lab">RATING</div>
              </div>
            </div>

            <button className="arch-explore-btn" type="button">
              Request a Similar Project
              <ArrowRight strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

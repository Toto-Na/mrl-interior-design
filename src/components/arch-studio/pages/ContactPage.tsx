"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Clock, Instagram, Linkedin } from "lucide-react";

interface ContactPageProps {
  onStartProject: () => void;
}

export default function ContactPage({ onStartProject }: ContactPageProps) {
  const [sent, setSent] = useState(false);

  return (
    <div className="arch-page arch-page-contact">
      <header className="arch-page-head arch-rise">
        <div className="arch-page-eyebrow">SAY HELLO</div>
        <h2 className="arch-page-title">
          Let&apos;s start a
          <br />
          <span className="accent">conversation</span>
        </h2>
        <p className="arch-page-sub">
          Tell us about your site, your timeline and the life you want to live
          there. We reply to every enquiry within two business days.
        </p>
      </header>

      <section className="arch-contact-grid">
        {/* Left: form */}
        <div className="arch-contact-form-card arch-rise">
          {sent ? (
            <div className="arch-contact-success">
              <div className="arch-success-mark" aria-hidden>
                <ArrowRight strokeWidth={2.4} />
              </div>
              <h3>Thank you — message received.</h3>
              <p>
                We&apos;ll be in touch shortly. In the meantime, feel free to
                keep exploring our work.
              </p>
              <button
                className="arch-ghost-btn"
                type="button"
                onClick={() => setSent(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="arch-form-row">
                <label className="arch-field">
                  <span>Your Name</span>
                  <input type="text" required placeholder="Jane Doe" />
                </label>
                <label className="arch-field">
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                  />
                </label>
              </div>

              <div className="arch-form-row">
                <label className="arch-field">
                  <span>Phone (optional)</span>
                  <input type="tel" placeholder="+1 555 010 010" />
                </label>
                <label className="arch-field">
                  <span>Project Type</span>
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>Architecture</option>
                    <option>Interior Design</option>
                    <option>Landscape Design</option>
                    <option>Full service</option>
                  </select>
                </label>
              </div>

              <label className="arch-field">
                <span>Site location</span>
                <input type="text" placeholder="City, country" />
              </label>

              <label className="arch-field">
                <span>Tell us about your project</span>
                <textarea
                  rows={5}
                  required
                  placeholder="Brief, budget range, timeline, anything we should know…"
                />
              </label>

              <div className="arch-form-actions">
                <button className="arch-explore-btn" type="submit">
                  Send Message
                  <ArrowRight strokeWidth={2.2} />
                </button>
                <button
                  className="arch-ghost-btn"
                  type="button"
                  onClick={onStartProject}
                >
                  Or start a structured brief
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: contact info */}
        <aside className="arch-contact-info arch-rise">
          <div className="arch-contact-info-card">
            <h3 className="arch-contact-info-title">Studio</h3>
            <ul className="arch-contact-info-list">
              <li>
                <span className="ic" aria-hidden>
                  <MapPin strokeWidth={1.8} />
                </span>
                <div>
                  <div className="lab">Address</div>
                  <div className="val">
                    14 Alpine Walk, Aspen
                    <br />
                    Colorado 81611, USA
                  </div>
                </div>
              </li>
              <li>
                <span className="ic" aria-hidden>
                  <Mail strokeWidth={1.8} />
                </span>
                <div>
                  <div className="lab">Email</div>
                  <div className="val">studio@mrlproduction.com</div>
                </div>
              </li>
              <li>
                <span className="ic" aria-hidden>
                  <Phone strokeWidth={1.8} />
                </span>
                <div>
                  <div className="lab">Phone</div>
                  <div className="val">+1 970 555 0142</div>
                </div>
              </li>
              <li>
                <span className="ic" aria-hidden>
                  <Clock strokeWidth={1.8} />
                </span>
                <div>
                  <div className="lab">Studio hours</div>
                  <div className="val">
                    Mon – Fri, 9:00 – 18:00 MST
                    <br />
                    Visits by appointment
                  </div>
                </div>
              </li>
            </ul>

            <div className="arch-contact-social">
              <a href="#" className="arch-social-btn" aria-label="Instagram">
                <Instagram strokeWidth={1.8} />
              </a>
              <a href="#" className="arch-social-btn" aria-label="LinkedIn">
                <Linkedin strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div className="arch-contact-map">
            <img
              src="/images/local-assets/515608dc1f6c.jpg"
              alt="Studio surroundings"
              draggable={false}
            />
            <div className="arch-contact-map-pin">
              <MapPin strokeWidth={2} />
              <span>Aspen Studio</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

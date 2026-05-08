import { useEffect, useMemo, useState } from "react";
import "./index.css";

const slides = [
  {
    title: "A short trajectory, not a full archive",
    subtitle: "XR work at CCIJ, 2022–2026",
    bullets: [
      "Not a full portfolio",
      "A trajectory of formats and methods",
      "From spatial reporting to playable systems",
    ],
    notes:
      "Frame this as a selective trajectory, not a complete archive. Focus on method evolution from spatial reporting toward playable systems.",
  },
  {
    title: "Early direction: spatial reporting + data",
    projects: [
      "An Encroaching Desert Intensifies Nigeria’s Farmer-Herder Crisis",
      "Rivers of Sewage",
    ],
    bullets: [
      "Reporting translated into navigable environments",
      "Data and visual evidence become spatial",
      "Immersion begins as access and orientation",
    ],
    notes:
      "Explain how investigations became spatially explorable experiences, where orientation itself supports understanding.",
  },
  {
    title: "Integration point",
    projects: ["Not the Kind of Life a Human Being Should Live"],
    bullets: [
      "Editorial narrative, atmosphere and navigation align",
      "User pathway becomes clearer",
      "Immersion carries reporting, context and empathy",
    ],
    notes:
      "This marks narrative and UX alignment: stronger flow, clearer navigation, and deeper affective engagement without losing rigor.",
  },
  {
    title: "The work branches into three directions",
    columns: ["Gamification", "Immersion", "Accessibility"],
    bullets: [
      "Some outputs become playable",
      "Some deepen spatial presence",
      "Some simplify access to complex systems",
    ],
    notes:
      "Position these as strategic modes, chosen per investigation and audience context.",
  },
  {
    title: "Recent outputs",
    projects: [
      "Shield Your Vote",
      "The Data Vault Canyon / The Bots Ridge",
      "Forest Is Life / Puddle Placer AR",
    ],
    bullets: [
      "Game logic and interaction",
      "Article-embedded AR/WebXR",
      "Data as something users can explore",
    ],
    notes:
      "Show the range: game mechanics, embedded web XR, and navigable data experiences.",
  },
  {
    title: "Recurring motif",
    mainSentence:
      "Across the work, the goal is to make complex investigations, data structures and visual systems more legible, accessible and navigable.",
    bullets: ["Data visualization", "Spatial storytelling", "Reusable XR workflow"],
    notes:
      "Close by emphasizing transferable workflow: repeatable XR patterns serving editorial clarity.",
  },
];

const imageSlots = (slideNumber) =>
  [1, 2, 3].map((i) => ({
    id: `slide${slideNumber}_img${i}`,
    caption: `Caption for slide${slideNumber}_img${i}`,
  }));

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirst = currentSlide === 0;
  const isLast = currentSlide === slides.length - 1;

  const nextSlide = () =>
    setCurrentSlide((idx) => (idx < slides.length - 1 ? idx + 1 : idx));
  const prevSlide = () => setCurrentSlide((idx) => (idx > 0 ? idx - 1 : idx));

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const slide = slides[currentSlide];
  const slots = useMemo(() => imageSlots(currentSlide + 1), [currentSlide]);

  return (
    <main className="deck-shell">
      <section className="slide-canvas" aria-live="polite">
        <div className="slide-head">
          <p className="kicker">XR & Immersive Storytelling at CCIJ</p>
          <p className="counter">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>

        <article key={currentSlide} className="slide-content">
          <h1>{slide.title}</h1>
          {slide.subtitle && <h2>{slide.subtitle}</h2>}
          {slide.mainSentence && <p className="main-sentence">{slide.mainSentence}</p>}

          {slide.projects && (
            <div className="projects">
              <h3>{slide.projects.length > 1 ? "Projects" : "Project"}</h3>
              <ul>
                {slide.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          )}

          {slide.columns && (
            <div className="columns">
              {slide.columns.map((column) => (
                <div key={column} className="column-pill">
                  {column}
                </div>
              ))}
            </div>
          )}

          <ul className="bullets">
            {slide.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className="image-grid">
            {slots.map((slot) => (
              <figure key={slot.id} className="image-slot">
                <div className="placeholder" aria-label={slot.id}>
                  {slot.id}
                </div>
                <figcaption contentEditable suppressContentEditableWarning>
                  {slot.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <details className="speaker-notes">
            <summary>Speaker notes</summary>
            <p>{slide.notes}</p>
          </details>
        </article>

        <nav className="controls" aria-label="Slide controls">
          <button onClick={prevSlide} disabled={isFirst}>
            ← Previous
          </button>
          <button onClick={nextSlide} disabled={isLast}>
            Next →
          </button>
        </nav>
      </section>
    </main>
  );
}

import { useEffect, useMemo, useState } from "react";
import "./index.css";

const slides = [
  {
    eyebrow: "CCIJ XR / Immersive Storytelling",
    title: "A short trajectory, not a full archive",
    subtitle: "XR work at CCIJ, 2022–2026",
    body: "This is a practical overview of how the work evolved: from spatial reporting and immersive rooms, toward gamification, accessibility, AR/WebXR and playable systems.",
    chips: ["trajectory", "XR", "data viz", "access"],
    bullets: [
      "Not the full portfolio",
      "Focused on CCIJ XR outputs",
      "The recurring motif is making complex systems navigable"
    ],
    images: [
      { src: "/images/slide1_img1.png", caption: "Archive / studio view", alt: "Studio portrait with works, archive and XR materials" },
      { src: "/images/slide1_img2.png", caption: "Early CCIJ metaverse environment", alt: "Early CCIJ metaverse room" },
      { src: "/images/slide1_img3.png", caption: "Timeline / work map", alt: "Visual timeline of XR work" }
    ],
    notes: "I’ll keep this short. I’m not walking through the whole archive. I’m showing the trajectory of the CCIJ XR work and how the outputs evolved over the last few years."
  },
  {
    eyebrow: "Early direction",
    title: "Spatial reporting + data",
    subtitle: "From investigative material to navigable environments",
    body: "The early work already contained the main ingredients: immersion, spatial orientation, reportage material, data and visual evidence translated into environments.",
    chips: ["immersion", "spatial reporting", "data"],
    bullets: [
      "Reports became spaces",
      "Data became something users could move through",
      "Immersion worked as access, orientation and context"
    ],
    projects: [
      "An Encroaching Desert Intensifies Nigeria’s Farmer-Herder Crisis",
      "Rivers of Sewage",
      "Walk the Data / ROS VR rooms"
    ],
    images: [
      { src: "/images/slide2_img1.png", caption: "Encroaching Desert / Voxels", alt: "Voxels environment for Encroaching Desert" },
      { src: "/images/slide2_img2.png", caption: "Rivers of Sewage / Spatial", alt: "Spatial room for Rivers of Sewage" },
      { src: "/images/slide2_img3.png", caption: "Walk the Data / data room", alt: "Immersive data room" }
    ],
    notes: "The gamified elements were still lighter here, but the foundation was already present: building spaces from reporting, data and visual evidence."
  },
  {
    eyebrow: "Integration point",
    title: "Immersive reporting becomes a clearer pathway",
    subtitle: "Not the Kind of Life a Human Being Should Live",
    body: "This project is a useful integration point. Editorial narrative, atmosphere, navigation, badges, portals, image-use care and user pathway started working together more clearly.",
    chips: ["pathway", "navigation", "editorial space", "ethics"],
    bullets: [
      "Spatial storytelling",
      "Orientation and progression",
      "Investigation, atmosphere, access and image-use care"
    ],
    images: [
      { src: "/images/slide3_img1.png", caption: "Spatial investigative room", alt: "Not the Kind of Life Spatial room" },
      { src: "/images/slide3_img2.png", caption: "Badges / portals / user path", alt: "Badge and navigation detail" },
      { src: "/images/slide3_img3.png", caption: "Reportage material translated into space", alt: "Reportage-related XR visual" }
    ],
    notes: "This was where the work became less about building a room and more about directing a user pathway through an investigation. It also made clearer that XR reportage needs image-use care: how people are shown, what is reconstructed, what is stylized, and what should remain abstracted."
  },
  {
    eyebrow: "Branching",
    title: "After that, the outputs branched",
    subtitle: "Gamification, immersion, accessibility",
    body: "From this point, the work moved in three main directions. These are not separate boxes. Most projects overlap, but each output emphasized one direction more strongly.",
    chips: ["gamification", "immersion", "accessibility"],
    columns: [
      { title: "Gamification", items: ["game logic", "progression", "quests, scores, choices"] },
      { title: "Immersion", items: ["spatial presence", "atmosphere", "guided exploration"] },
      { title: "Accessibility", items: ["article-embedded access", "mobile / desktop paths", "complex systems made legible"] }
    ],
    images: [
      { src: "/images/slide4_img1.png", caption: "Shield Your Vote", alt: "Shield Your Vote game or AR screenshot" },
      { src: "/images/slide4_img2.png", caption: "Forest Is Life / AR access", alt: "Forest Is Life AR or article screenshot" },
      { src: "/images/slide4_img3.png", caption: "Professional learning / shared space", alt: "CCIJ PL Sessions room" }
    ],
    notes: "This is the organizing frame for the deck: gamification, immersion and accessibility, with data visualization running through all of them."
  },
  {
    eyebrow: "Recent outputs",
    title: "From rooms to systems",
    subtitle: "Playable journalism, AR/WebXR and data embodiment",
    body: "The recent work is more system-based: interaction logic, AR/WebXR, UEFN, data fragments, NPCs, article triggers, paper-to-AR thinking and reusable design methods.",
    chips: ["UEFN", "AR/WebXR", "interaction", "data embodiment"],
    bullets: [
      "Playable journalism",
      "Article-embedded AR/WebXR",
      "Data embodiment and interaction"
    ],
    projects: [
      "Shield Your Vote",
      "The Data Vault Canyon / The Bots Ridge",
      "Forest Is Life / Puddle Placer AR",
      "ICE Paperdoll DataViz"
    ],
    images: [
      { src: "/images/slide5_img1.png", caption: "The Data Vault Canyon / UEFN", alt: "Fortnite or UEFN screenshot" },
      { src: "/images/slide5_img2.png", caption: "Forest Is Life / Puddle Placer AR", alt: "AR/WebXR layer screenshot" },
      { src: "/images/slide5_img3.png", caption: "ICE Paperdoll / system layers", alt: "Paperdoll dataviz or layer schema" }
    ],
    notes: "This is where the work becomes clearly multi-platform. The format changes, but the problem is consistent: make investigations and systems understandable by making them spatial, interactive and navigable."
  },
  {
    eyebrow: "Leitmotif",
    title: "Making complex systems navigable",
    subtitle: "Data visualization, spatial storytelling, reusable XR workflow",
    body: "Across the work, the goal is to make complex investigations, datasets and visual systems more legible, accessible and explorable, while respecting the ethical and legal limits of representing real people in immersive settings.",
    chips: ["data visualization", "spatial storytelling", "reuse", "ethics"],
    bullets: [
      "Data visualization as spatial experience",
      "Immersive storytelling as editorial access",
      "Ethics, consent and image-use boundaries for VR / AR / MR reportage"
    ],
    projects: [
      "Consent and dignity when representing real people",
      "Image rights and legal boundaries across VR / AR / MR",
      "Anonymization, stylization or abstraction when direct likeness is not appropriate"
    ],
    images: [
      { src: "/images/slide6_img1.png", caption: "CCIJ rooms / archive collage", alt: "Collage of CCIJ XR rooms" },
      { src: "/images/slide6_img2.png", caption: "Data visualization detail", alt: "Data visualization screenshot" },
      { src: "/images/slide6_img3.png", caption: "Workflow / ethics / archive", alt: "Workflow, archive or ethics visual" }
    ],
    notes: "The work moved across platforms, but the underlying logic stayed consistent: translate complexity into forms people can enter, explore and understand. In immersive journalism, this also requires a clear ethical layer: consent, dignity, safety, image rights, and careful decisions about when to use real images, stylized avatars, anonymization, reconstruction or abstraction."
  }
];

function ImageCard({ image, index }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="image-card">
      {!failed ? (
        <img src={image.src} alt={image.alt} onError={() => setFailed(true)} loading="eager" />
      ) : (
        <div className="image-fallback">
          <span>image pending</span>
          <code>{image.src}</code>
        </div>
      )}
      <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.caption}</figcaption>
    </figure>
  );
}

function Slide({ slide, showNotes }) {
  return (
    <section className="slide">
      <div className="slide-copy">
        <div className="eyebrow">{slide.eyebrow}</div>
        <h1>{slide.title}</h1>
        <p className="subtitle">{slide.subtitle}</p>
        <p className="body">{slide.body}</p>

        {slide.chips?.length > 0 && (
          <div className="chips">{slide.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
        )}

        {slide.bullets?.length > 0 && (
          <ul className="bullets">{slide.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        )}

        {slide.columns?.length > 0 && (
          <div className="columns">
            {slide.columns.map((column) => (
              <div className="column" key={column.title}>
                <h2>{column.title}</h2>
                <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        )}

        {slide.projects?.length > 0 && (
          <div className="projects">
            <span>{slide.title.startsWith("Making") ? "Ethical layer" : "Projects referenced"}</span>
            {slide.projects.map((project) => <p key={project}>{project}</p>)}
          </div>
        )}

        {showNotes && (
          <aside className="notes"><strong>Speaker notes</strong><p>{slide.notes}</p></aside>
        )}
      </div>

      <div className="slide-images">
        {slide.images.map((image, index) => <ImageCard image={image} index={index} key={image.src} />)}
      </div>
    </section>
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const slide = slides[current];

  const goNext = () => setCurrent((value) => Math.min(value + 1, slides.length - 1));
  const goPrev = () => setCurrent((value) => Math.max(value - 1, 0));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === " ") { event.preventDefault(); goNext(); }
      if (event.key === "ArrowLeft") { event.preventDefault(); goPrev(); }
      if (event.key.toLowerCase() === "n") setShowNotes((value) => !value);
      if (event.key.toLowerCase() === "p") window.print();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const progress = useMemo(() => `${current + 1} / ${slides.length}`, [current]);

  return (
    <main className="deck">
      <header className="deck-header">
        <div><span className="kicker">CCIJ XR Deck</span><strong>From spatial reporting to playable systems</strong></div>
        <div className="controls">
          <button onClick={goPrev} disabled={current === 0} aria-label="Previous slide">←</button>
          <span>{progress}</span>
          <button onClick={goNext} disabled={current === slides.length - 1} aria-label="Next slide">→</button>
        </div>
      </header>
      <Slide slide={slide} showNotes={showNotes} />
      <footer className="deck-footer"><span>← / → navigate</span><span>Space next</span><span>N notes</span><span>P print</span></footer>
    </main>
  );
}

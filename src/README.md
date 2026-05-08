# CCIJ XR Deck

Dynamic React/Vite presentation for:

**XR & Immersive Storytelling at CCIJ: from spatial reporting to playable systems**

This deck is a short internal presentation about the XR / immersive storytelling work built over the last few years.

It does not discuss the title update directly. It explains the work and its evolution.

## Structure

The deck has 6 slides:

1. A short trajectory, not a full archive
2. Early direction: spatial reporting + data
3. Integration point: immersive reporting becomes a clearer pathway
4. After that, the outputs branched
5. Recent outputs: from rooms to systems
6. Recurring motif: making complex systems navigable

## Controls

- `ArrowRight`: next slide
- `Space`: next slide
- `ArrowLeft`: previous slide
- `N`: toggle speaker notes
- `P`: print / export to PDF

## Images

Create this folder from the repo root:

```txt
public/images/
```

Add these files:

```txt
slide1_img1.png
slide1_img2.png
slide1_img3.png
slide2_img1.png
slide2_img2.png
slide2_img3.png
slide3_img1.png
slide3_img2.png
slide3_img3.png
slide4_img1.png
slide4_img2.png
slide4_img3.png
slide5_img1.png
slide5_img2.png
slide5_img3.png
slide6_img1.png
slide6_img2.png
slide6_img3.png
```

Suggested image mapping:

| File | Suggested content |
|---|---|
| slide1_img1.png | studio portrait / archive desk image |
| slide1_img2.png | early CCIJ metaverse room |
| slide1_img3.png | timeline / archive / collage |
| slide2_img1.png | Encroaching Desert / Voxels |
| slide2_img2.png | Rivers of Sewage / Spatial |
| slide2_img3.png | Walk the Data / ROS data room |
| slide3_img1.png | Not the Kind of Life Spatial room |
| slide3_img2.png | badge / portal / user path |
| slide3_img3.png | article/reportage visual |
| slide4_img1.png | Shield Your Vote |
| slide4_img2.png | Forest Is Life / AR access |
| slide4_img3.png | CCIJ PL Session / training room |
| slide5_img1.png | The Data Vault Canyon / UEFN |
| slide5_img2.png | Forest Is Life / Puddle Placer AR |
| slide5_img3.png | ICE Paperdoll / system layers |
| slide6_img1.png | collage of CCIJ XR rooms |
| slide6_img2.png | data visualization detail |
| slide6_img3.png | workflow / ethics / archive |

If any image is missing, the app shows an `image pending` fallback and keeps the slide layout intact.

## Run locally

Install:

```bash
npm install
```

Run:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy to Vercel

Push the repository to GitHub, then import the repository into Vercel.

Default Vercel settings:

```txt
Framework preset: Vite
Build command: npm run build
Output directory: dist
Install command: npm install
```

## Edit content

All slide content is inside:

```txt
src/App.jsx
```

Search for:

```js
const slides = [
```

Edit titles, body text, bullets, image captions and speaker notes there.

## Ethical layer

The deck includes an ethics and image-use point in slides 3 and 6:

- consent and dignity when representing real people
- image rights and legal boundaries across VR / AR / MR
- anonymization, stylization or abstraction when direct likeness is not appropriate

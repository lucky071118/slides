# Git
When the feature/fix is done, create a descriptive branch, commit it with a descriptive message and use gh to create a pull request.

# Output Rules
- Code only. No explanations unless I explicitly ask.
- No comments.
- No markdown preambles
- No 'Here is the code:' intro.
- No closing summaries.

# Slide Project Guidelines
- Each slide is self-contained in its own directory with `index.html` and optional `images/` or `assets/` subdirectory.
- New slides should follow the same structure: `<slide-name>/index.html` + assets folder.
- Use reveal.js for all slide presentations. Maintain framework compatibility.
- Root `index.html` is the catalog page listing all available slides—update it when adding/removing slides.
- All slide resources (images, CSS, JS) should be self-contained within their slide directory.
- Keep slides modular with minimal cross-dependencies for independent deployment on Cloudflare Pages.

# Inline SVG Drawing Guide
Before drawing anything in inline SVG, classify the object. The category determines the technique — using the wrong one makes a drawing look subtly off without an obvious reason why.

## Classify first

1. **Does the picture explain a mechanism** (data flow, component calls, before/after of a change)? → **Diagram**
2. **Not a diagram — is the outline regular and symmetric** (built from circles, ellipses, rounded rectangles; often a solid of revolution)? → **Curvilinear geometric**
3. **Irregular, asymmetric, nature-inspired** (leaves, clouds, blobs, terrain)? → **Organic / freeform**

Common mistake: assuming "has curves" means organic. A lightbulb, bottle, or pill icon is symmetric and standardized — geometric, not organic. Applying organic techniques (forced asymmetry, turbulence distortion) to a geometric object makes it look broken, not hand-drawn.

## 1. Diagrams

Draw only what the argument depends on — the boundary crossed, the hop added, the data that moves. Skip the rest of the system.

- **Comparing before/after**: use the *same layout* (same box positions, same viewpoint) for both; only recolor/outline what changed. Side-by-side independent diagrams force the reader to diff them manually.
- **Match complexity to stakes**: a one-hop question is 3 boxes; a queue-based rerouting needs the queue, writer, reader, and ordering arrow drawn out.
- **Label every arrow with semantics** (`writes`, `invalidates`, `polls every 60s`), not just a bare line. A legend is only worth it when one encoding (dashed, color) repeats across the diagram.

## 2. Curvilinear geometric

Symmetric, standardized outlines — lightbulbs, bottles, pill capsules, most app icons.

- **Compose from primitives**: decompose into circles/ellipses/rounded-rects plus boolean-style overlaps (a lightbulb = circle body + trapezoid base + a few short horizontal lines for the thread).
- **Mirror instead of hand-drawing twice**: for symmetric shapes, draw one half and reflect (`<use>` + `transform="scale(-1,1)"`, or symmetric coordinates). Curve control points should mirror left/right — the opposite instinct from organic shapes.
- **Finishing touches**: a small translucent white ellipse near the top reads as a highlight/gloss; a flat, low-opacity ellipse at the base reads as a shadow (avoid CSS-style box-shadow blur).
- Keep the object's natural color even in a dark-theme page (a bulb stays warm yellow); only the background/frame follows the theme.

## 3. Organic / freeform

Irregular, asymmetric, nature-inspired — leaves, clouds, terrain silhouettes, anything meant to read as hand-drawn.

- **Layer + break symmetry**: build from 2–4 overlapping irregular blobs, each a distinct bezier path with imperfect edges. Never mirror — offset the midrib, vary the number and angle of veins/bumps on each side. This is the detail models default to getting wrong; state it explicitly.
- **Describe in layers**: back → mid → front, each pass added separately (e.g., distant terrain at lower opacity, then midground, then foreground detail) rather than one single prompt for the whole scene.
- **Turbulence for hand-drawn texture**:
  ```xml
  <filter id="rough">
    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.04" numOctaves="2" seed="7" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  ```
  Lower `baseFrequency` = longer, slower waviness; `scale` 10–20 is usually enough to read as organic without destroying the shape.
- **Style words beat "realistic"**: "paper-cut," "Matisse cutout," "picture-book illustration" reliably produce flat color blocks and simplified silhouettes — cleaner results than chasing photorealistic gradients in a vector format that doesn't suit them.

## Shared mechanics (all categories)

- Size with `viewBox="0 0 W H"` + CSS `max-width:100%; height:auto`; pick W/H from content, not a preset.
- Arrowheads/markers: `<defs><marker>` or `<polygon>` — never an image.
- Wrap each figure in `<figure>` with a `<figcaption>` stating its claim; add `role="img"` + matching `aria-label` on the `<svg>`.
- Keep in-drawing text to a word or two; put explanation in the caption.
- Self-contained: no `<script>`, `<style>`, or `<foreignObject>` inside `<svg>`; reference gradients/patterns by same-document id (`href="#id"`); no external resources.
- Align to a grid — consistent baselines and spacing read as deliberate. (Organic asymmetry is a *shape* choice, not permission for sloppy coordinates.)
- Color: if the output target is a fixed theme (e.g., always dark), hardcode that palette directly — no need for `currentColor` dual-theme handling. Only reach for `currentColor` when the theme is unknown or must support both, reserving one fixed accent for the element that carries meaning.

---
name: html-animation
description: "Create software architecture diagrams, system diagrams, data-flow diagrams, sequence-like flows, dependency graphs, and technical process diagrams using HTML/CSS/SVG/JS."
---

## Visual Style — Swiss Pulse + Technical Data Flow

Use **Swiss International Typographic Style / Swiss Pulse** as the default visual language: clinical, precise, structured, technical, and information-dense. HyperFrames identifies Swiss Pulse as appropriate for SaaS, developer tools, APIs, data, and metrics. Use a strict invisible **12-column grid**; align nodes, labels, connectors, and annotations to the grid. Favor mathematical spacing, clear hierarchy, strong alignment, and generous but intentional whitespace.

Base palette: near-black `#1a1a1a`, white `#ffffff`, and a restrained blue accent around `#0066FF`. Use accent colors only to communicate state, emphasis, data flow, or interaction—not decoration. Prefer square or nearly-square geometry (`0–2px` radius), thin borders, hairline rules, subtle grid lines, and minimal elevation. Avoid excessive shadows, glossy cards, gradients, glassmorphism, oversized rounded containers, decorative illustrations, and generic SaaS landing-page aesthetics.

Typography should be highly legible and technical: Helvetica Neue/Inter-style sans-serif, strong weight contrast, compact labels, consistent capitalization, and clearly differentiated title / node / annotation / metadata scales.

For AI, distributed systems, streaming, telemetry, or data-intensive diagrams, selectively introduce **Data Drift** characteristics: dark technical backgrounds, subtle cyan/purple data traces, fine particles, luminous paths, and fluid data movement. Use these sparingly; the diagram must remain readable and architectural rather than becoming a decorative sci-fi scene.

## Diagram Construction

Treat the HTML DOM as a scene graph. Build explicit reusable primitives:

* system/service nodes
* containers / boundaries
* databases
* queues / brokers
* APIs
* users / actors
* labels and annotations
* directional connectors
* data packets / flow indicators
* state badges

Use CSS Grid/Flexbox for stable layout and SVG for connectors, arrows, paths, masks, and line-drawing effects. Prefer SVG paths for precise connector routing rather than brittle absolute-positioned HTML lines.

Every diagram must have a clear visual hierarchy:

1. title / context
2. major system boundaries
3. primary components
4. secondary dependencies
5. directional data/process flow
6. annotations / metadata

Do not overcrowd the canvas. Prefer grouping related services into clear bounded regions. Maintain consistent node dimensions, spacing, stroke weights, typography, and alignment.

## Animation

Animation should explain **causality, sequence, dependency, and data movement**—never exist merely for decoration.

Use one deterministic, paused, seekable timeline. GSAP is the default runtime. The animation must render the same visual state for the same timeline position. Never depend on wall-clock time, `Math.random()`, page-load timing, asynchronous timeline construction, or uncontrolled DOM measurements.

Animate spatial movement with `transform`: `x`, `y`, `scale`, `rotation`; use `opacity` for reveal/hide. Do not animate `top`, `left`, `width`, or `height` for normal motion.

Recommended motion grammar:

* node entrance → fade + short directional slide
* dependency reveal → sequential stagger
* data flow → moving point/line along SVG path
* request/response → traveling packet with directional emphasis
* state transition → border/accent/opacity change
* zoom/reframe → scale + translation on an inner wrapper
* process completion → restrained highlight, never a flashy burst

Use motion to reveal the diagram in logical reading order: **entry point → processing → storage/output**. When possible, animate connectors after their source and destination nodes are visible.

## Keyframes

Think in explicit visual poses. Define:

* initial state
* intermediate state(s)
* final state
* timing
* easing
* semantic purpose

A keyframe should describe what the viewer must see, not hidden implementation state. Preserve stable node positions whenever possible; move only the currently emphasized element or camera.

For complex flows, use staged poses:
`overview → focus → reveal dependency → show data movement → resolve → return to overview`.

## Technical Drawing Techniques

Use:

* HTML/CSS for panels, nodes, cards, labels, badges, and structural regions
* SVG for connectors, arrows, paths, flow lines, masks, and path drawing
* `clip-path` / masks for controlled reveals
* CSS transforms for camera movement
* SVG morphing only when a shape transformation communicates a real conceptual change
* CSS 3D only when depth materially improves the explanation

Use consistent connector semantics. Solid arrows may represent requests; dashed or lighter paths may represent asynchronous/event relationships; bidirectional arrows may represent responses or synchronization. Define the legend visually when multiple semantics are present.

## Anti-Patterns

Do not produce:

* generic flowchart templates
* rainbow-colored architecture diagrams
* excessive rounded cards
* random icon collections
* decorative gradients
* unnecessary illustrations
* excessive animation
* floating objects with no semantic relationship
* inconsistent node sizes
* connector spaghetti
* text that is too small to read
* elements that move independently without explaining system behavior

The final composition should feel like a **high-end technical systems diagram brought to life**, not a marketing webpage.

## Validation

Verify the actual rendered visual states. Inspect start, major transition points, important data-flow moments, and final state. Check alignment, connector correctness, node readability, overlap, clipping, timing, and semantic animation order. Ensure all colors, typography, spacing, corner radii, and visual treatments remain consistent with the selected style. HyperFrames recommends explicit design-adherence checks for palette, typography, corners, spacing, depth, and avoidance rules.

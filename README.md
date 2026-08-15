# slides

A static slides hosting project deployed on Cloudflare Pages.

## Overview

This project is a collection of independent slide presentations powered by [reveal.js](https://revealjs.com/). Each slide is a self-contained HTML presentation with its own subdirectory structure, allowing for modular and independent slide management.

## Project Structure

- **`index.html`** - Catalog/index page listing all available slides
- **Slide Directories** - Each slide has its own subdirectory containing:
  - `index.html` - The slide presentation
  - `images/` or `assets/` - All images and resources specific to that slide

## Key Features

- **Self-contained slides** - Each slide is independent with no dependencies on other slides
- **Modular organization** - Slides are organized in separate directories for easy management
- **Static hosting** - Optimized for deployment on Cloudflare Pages
- **Reveal.js powered** - Professional presentation framework for interactive slideshows
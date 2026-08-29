# Srievi Developer Portfolio & Liquid Glass Design System

> **Personal Developer Portfolio of វី (Srievi)** — Computer Science & ICT Engineer, Creative Problem Solver, and Ethical Tech Explorer.

---

## 🌟 Overview

This repository houses the complete source code for **Srievi's Developer Portfolio** and the **Srievi Liquid Glass Interactive Design Studio (`palette.html`)**.

Built with a **Pure White Canvas (`#FAFCFF`)** foundation, **Frosted Liquid Crystal Glass** surfaces, **Srievi Tactile Sticker Buttons**, and the **Mandatory Google Sans Khmer Typography Standard**.

---

## 💎 Core Architecture & Design DNA

1. **White Canvas & Frosted Liquid Glass Surfaces**:
   - Master background: `#FAFCFF` / `#FFFFFF`.
   - Card surface: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(20px) saturate(180%)`.
   - 360-degree specular top light rim: `border-top: 1px solid #FFFFFF` + `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 1)`.
   - High-contrast Slate-900 typography (`#0F172A`).

2. **Mandatory Google Sans for Khmer Language**:
   - Primary Khmer font: `'Google Sans', 'Kantumruy Pro', sans-serif`.
   - English display font: `'Outfit', sans-serif`.
   - Code & metrics font: `'JetBrains Mono', monospace`.

3. **Srievi Tactile Sticker Physics**:
   - 12px squircle radius standard across buttons & inputs.
   - Solid bottom depth shadow (`box-shadow: 0 4px 0 #46a302` for green, `0 4px 14px rgba(16, 185, 129, 0.35)` for primary emerald).
   - Tactile press animation (`transform: translateY(2px)`).

4. **Strict Directives**:
   - **100% Solid Colors**: Zero gradients, zero color blends on UI elements.
   - **Zero-Emoji Policy**: Pure Lucide & FontAwesome SVG vector icons exclusively.
   - **100% Srievi Brand Ownership**: Zero external third-party brand naming.

---

## 📁 Repository Structure

```text
pf-srievi/
├── .agents/
│   ├── rules/
│   │   └── srievi-dna.md              # Workspace immutable design rules
│   └── skills/
│       └── srievi-liquid-glass-standards/
│           └── SKILL.md               # Master design system skill specification
├── DESIGN_DNA.md                      # Root design & engineering standards
├── README.md                          # Repository documentation & store record
├── index.html                         # Srievi portfolio main landing page
├── palette.html                       # Real-time interactive design system studio
├── style.css                          # Master stylesheet & CSS variables
├── script.js                          # Audio, animations, and interactive handlers
└── ...                                # Media & audio assets
```

---

## 🎨 Master Token Registry

```css
:root {
  /* White Canvas & Frosted Liquid Glass */
  --bg-main: #FAFCFF;
  --bg-surface: rgba(255, 255, 255, 0.85);
  --bg-surface-hover: rgba(255, 255, 255, 0.96);
  --bg-surface-elevated: rgba(255, 255, 255, 0.98);
  --bg-inner-glass: rgba(241, 245, 249, 0.85);

  --border-glass: rgba(0, 0, 0, 0.08);
  --border-glass-top: rgba(255, 255, 255, 1.00);
  --border-glass-hover: rgba(16, 185, 129, 0.50);
  --glass-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 1), 0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.03);

  /* Solid Brand Primaries */
  --primary: #10B981;
  --primary-dark: #059669;
  --primary-light: #065F46;
  --primary-glow: rgba(16, 185, 129, 0.25);
  --accent-cyan: #0891B2;
  --accent-crimson: #FF0050;

  /* Srievi Brand Accents */
  --srievi-green: #58cc02;
  --srievi-blue: #1cb0f6;
  --color-eager-green: var(--srievi-green);
  --color-spark-blue: var(--srievi-blue);

  /* Typography */
  --text-main: #0F172A;
  --text-muted: #475569;
  --text-dim: #64748B;

  /* Fonts */
  --font-km: 'Google Sans', 'Kantumruy Pro', sans-serif;
  --font-en: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing Scale */
  --spacing-unit: 4px;
  --radius-buttons: 12px;
}
```

---

## 🛠️ Interactive Features in `palette.html`

- **Live Token Physics Sandbox**: Adjust backdrop blur, card opacity, border radiuses, and sticker depth in real time.
- **14 Core Design System UI Elements**: Radio, Searchbar, Tooltip, Modal, Loading, Toggle, Input Field, Icon, Table, Card, Button, Badge, Avatar, Dropdown Menu.
- **25 Website Architecture Patterns**: Interactive specifications and checklists for all 25 web patterns.
- **1-Click CSS Token Exporter**: Copy full CSS token definitions instantly.

---

## 🔗 Git Remote Store

- **GitHub Repository**: [`https://github.com/shiliaiwei/pf-srievi`](https://github.com/shiliaiwei/pf-srievi)
- **Branch**: `main`
- **Owner**: `shiliaiwei`

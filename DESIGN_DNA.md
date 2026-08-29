# SRIIEVI LIQUID GLASS DESIGN DNA & ARCHITECTURAL STANDARDS

This document encodes the permanent, immutable Design & Engineering DNA for all Srievi web projects, portfolios, and design system components.

---

## 1. Aesthetic DNA: Obsidian Liquid Glass + Tactile Stickers

* **Canvas Foundation**: Deep Obsidian `#080B11` with dark OLED contrast.
* **Surface Materials**: Solid liquid glass cards (`rgba(18, 24, 38, 0.70)`) with `backdrop-filter: blur(16px)` and specular top/edge border reflections (`rgba(255, 255, 255, 0.08)`).
* **Button Physics (Duolingo Tactile DNA)**:
  - 12px border radius across all buttons and tags.
  - Solid bottom-offset depth shadow (`box-shadow: 0 4px 0 #46a302` for green, `0 4px 0 #059669` for emerald).
  - Tactile press animation (`transform: translateY(2px); box-shadow: 0 2px 0 ...`).
  - Ghost outlined secondary buttons with `2px solid #afafaf` and `#1cb0f6` hover fill.

---

## 2. Color DNA: Strict Solid Color Palette (Zero Gradients)

* **Directives**:
  - **NO MULTI-COLOR GRADIENTS**: Linear/radial gradients are strictly prohibited on text, buttons, tags, cards, and borders.
  - **NO COLOR MIXING**: Every element must use exactly ONE solid palette token.
* **Color Registry**:
  - Main Background: `#080B11` (Obsidian)
  - Glass Surface: `rgba(18, 24, 38, 0.70)`
  - Surface Hover: `rgba(28, 38, 60, 0.85)`
  - Glass Border: `rgba(255, 255, 255, 0.08)`
  - Border Glow Hover: `rgba(16, 185, 129, 0.40)`
  - Primary Brand: `#10B981` (Emerald)
  - Dark Primary / CTA: `#059669` (Deep Emerald)
  - Light Text / Outline: `#A7F3D0` (Mint)
  - Technical Accent: `#06B6D4` (Electric Cyan)
  - Cyan Light: `#67E8F9`
  - Hot / Alert Accent: `#FF0050` (Neon Crimson)
  - Tactile Progress Accent: `#58cc02` (Eager Green)
  - Interactive Link / Ghost Outline: `#1cb0f6` (Spark Blue)
  - Text Primary: `#F1F5F9` (Slate-100)
  - Text Muted: `#94A3B8` (Slate-400)
  - Text Dim: `#64748B` (Slate-500)

---

## 3. Policy DNA: Strict Zero-Emoji & Zero-Symbol Standard

* **Zero-Emoji Enforcement**:
  - Emojis (e.g. checkmarks, rockets, flames, green circles, stars, lightbulbs) are strictly forbidden in UI text, code comments, markdown documentation, and assistant responses.
* **Zero Decorative Unicode Glyphs**:
  - Do not use arbitrary Unicode symbols for icons.
* **Vector SVGs Exclusively**:
  - Use standard library SVG vector icons only (Lucide `<i data-lucide="..."></i>` or FontAwesome `<i class="fa-solid fa-..."></i>`).

---

## 4. Typography & Rhythm DNA

* **Typefaces**:
  - Khmer Primary Typography (Strict Standard): `'Google Sans', 'Kantumruy Pro', sans-serif` (Always use Google Sans as primary for all Khmer language text)
  - Display & Latin Body: `'Outfit', sans-serif`
  - Code & Data: `'JetBrains Mono', monospace`
* **Letter Spacing & Proportions**:
  - Display Headlines (48px - 64px): `-0.0200em` letter-spacing, `1.20` line-height.
  - Uppercase Nav Labels & Badges (13px - 15px): `+0.0530em` letter-spacing, `text-transform: uppercase`.
  - Body Copy (15px - 17px): Normal letter-spacing, `1.60` line-height.
* **4px Base Spacing Engine**:
  - Scales: `8px`, `12px`, `16px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `96px`.
  - Card Padding: `16px` to `24px`.
  - Element Gap: `8px` to `12px`.

---

## 5. Component DNA: 14 Design Elements & 25 Website Patterns

* **14 UI Elements**: Radio, Searchbar, Tooltip, Modal, Loading, Toggle, Input Field, Icon, Table, Card, Button, Badge, Avatar, Dropdown Menu.
* **25 Website Concepts**: Security, Event Page, About, Privacy/Legal, Features, Testimonials, Affiliate, Coming Soon, Compare, Status, Billing, Landing Page, Waitlist, Press/Media, Team, Cart, Search, Careers, Blog Hub, Blog Post, Contact Us, Pricing, FAQ, 404 Error, Login/Auth.

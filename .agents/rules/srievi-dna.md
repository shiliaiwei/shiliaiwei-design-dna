# SRIIEVI LIQUID GLASS DESIGN DNA & ARCHITECTURAL STANDARDS

This document encodes the permanent, immutable Design & Engineering DNA for all Srievi web projects, portfolios, and design system components.

---

## 1. Aesthetic DNA: Frosted Liquid Crystal Glass + Srievi Tactile Stickers

* **Canvas Foundation (STRICT LIGHT MODE ONLY - NEVER USE DARK MODE)**:
  - Crisp White `#FAFCFF` / `#FFFFFF` with high-contrast Slate-900 typography (`#0F172A`).
  - **Dark mode is strictly prohibited**: No dark mode styles, no dark themes, no `prefers-color-scheme: dark`, and no inverted dark palettes under any circumstances.
* **Surface Materials**: Solid liquid crystal glass cards (`rgba(255, 255, 255, 0.85)`) with `backdrop-filter: blur(20px) saturate(180%)` and 360-degree specular top/edge border reflections (`border: 1px solid rgba(0,0,0,0.08); border-top: 1px solid #FFFFFF`).
* **Button Physics (Srievi Tactile DNA)**:
  - 12px border radius across all buttons and inputs.
  - Solid bottom-offset depth shadow (`box-shadow: 0 4px 0 #46a302` for eager green, `0 4px 14px rgba(16,185,129,0.35)` for emerald).
  - Tactile press animation (`transform: translateY(2px); box-shadow: 0 2px 0 ...`).
  - Ghost outlined secondary buttons with `2px solid #BAE6FD` and `#0284C7` text/hover fill.

---

## 2. Color DNA: Strict Solid Color Palette (Zero Gradients)

* **Directives**:
  - **NO MULTI-COLOR GRADIENTS**: Linear/radial gradients are strictly prohibited on text, buttons, tags, cards, and borders.
  - **NO COLOR MIXING**: Every element must use exactly ONE solid palette token.
  - **ZERO EXTERNAL BRAND REFERENCES**: The design system is 100% owned and branded under **Srievi**.
* **Color Registry**:
  - Main Background: `#FAFCFF` (White Canvas)
  - Glass Surface: `rgba(255, 255, 255, 0.85)`
  - Surface Hover: `rgba(255, 255, 255, 0.96)`
  - Glass Border: `rgba(0, 0, 0, 0.08)`
  - Specular Top Rim: `rgba(255, 255, 255, 1.00)`
  - Border Glow Hover: `rgba(16, 185, 129, 0.50)`
  - Primary Brand: `#10B981` (Emerald)
  - Srievi Green: `#58cc02` (Eager Green)
  - Srievi Blue: `#1cb0f6` (Spark Blue)
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

---

## 6. Responsive DNA: Desktop-Grade Mobile Parity

* **Mobile Like PC Web**: Mobile devices must deliver the exact same high-fidelity visual elegance, tactile sticker physics, and complete feature set as the PC web desktop interface.
* **Touch & Layout Standards**:
  - Sticky Apple-Style Floating Capsule Dock with full view switching (`Identity`, `UI Elements`, `Web App`) and 1-tap `Skill MD` / `Tokens` copy actions.
  - Zero Horizontal Clipping: All text, cards, tables, badges, and modals must wrap cleanly (`overflow-wrap: break-word; word-break: break-word;`).
  - Tactile Sticker Button Physics: Retain 9px / 12px border-radius with solid bottom-depth shadows and 3D active compression on mobile touch.
  - Single-View Studio Architecture: Seamless zero-forced-scrolling tab switching on mobile without layout jumping.

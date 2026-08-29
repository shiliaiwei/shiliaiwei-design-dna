---
name: srievi-liquid-glass-standards
description: >
  Authoritative design standard and architectural rules for Srievi Liquid Glass Portfolio, 14 Design System UI Elements, and 25 Website Concept Modules. Enforces STRICT SOLID COLORS ONLY (NO gradients, NO mixed color blends) and a ZERO-EMOJI / ZERO-SYMBOL POLICY (NO emojis or Unicode symbols anywhere). Defines exact palette tokens (#080B11, #10B981, #059669, #A7F3D0, #06B6D4, #FF0050, #58cc02, #1cb0f6), 4px spacing engine, 12px tactile sticker button physics, specular glass surfaces, typography hierarchy, and all 25 web patterns. Trigger on: "srievi", "color", "palette", "design system", "glass", "solid color", "standards", "tokens", "button", "theme", "checklist", "duolingo", "record skill".
---

# Srievi Liquid Glass Design System & Standards Master Specification

This skill acts as the permanent, authoritative architectural reference, token registry, and implementation standard for the **Srievi Developer Portfolio, 14 Core UI Elements, and 25 Website Architecture Patterns**.

---

## 1. Zero-Tolerance Core Directives

### Directive 1: Solid Colors Only (Strictly Zero Gradients & Zero Color Mixing)
* **Never use linear-gradient or radial-gradient on text, buttons, tags, or cards.**
* **Never mix contrasting colors** in a single background fill or border blend.
* Every element must use **one crisp solid color token** or a **translucent liquid glass surface** (`rgba(18, 24, 38, 0.70)`).
* Primary buttons must be solid `#10B981` (Emerald) or `#58cc02` (Eager Green) with high-contrast text.

### Directive 2: Strict Zero-Emoji & Zero-Symbol Policy
* **Never use emojis** under any circumstances (no checkmark emojis, rocket, fire, sparkles, green dots, or warning symbols).
* **Never use decorative Unicode glyphs** in UI text, code comments, or agent responses.
* Use **standard library SVG vector icons** exclusively (Lucide `<i data-lucide="..."></i>` or FontAwesome `<i class="fa-solid fa-..."></i>`).

---

## 2. Master Color Token Registry

| Token | HEX / Value | RGB | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--bg-main` | `#080B11` | `rgb(8, 11, 17)` | Deep obsidian dark canvas background |
| `--bg-surface` | `rgba(18, 24, 38, 0.68)` | — | Solid liquid glass card surface (`backdrop-filter: blur(20px) saturate(180%)`) |
| `--bg-surface-hover`| `rgba(28, 38, 60, 0.82)` | — | Interactive card/element hover state |
| `--bg-surface-elevated`| `rgba(24, 32, 50, 0.94)` | — | Floating modal & dropdown overlay surface |
| `--bg-inner-glass` | `rgba(8, 12, 20, 0.65)` | — | Nested preview box & input background |
| `--border-glass` | `rgba(255, 255, 255, 0.10)`| — | Specular glass edge reflection border |
| `--border-glass-top` | `rgba(255, 255, 255, 0.24)`| — | Top specular light-rim highlight |
| `--border-glass-hover`| `rgba(16, 185, 129, 0.45)`| — | Emerald-tinted border glow on hover |
| `--glass-shadow` | `inset 0 1px 0 rgba(255,255,255,0.18), 0 20px 48px rgba(0,0,0,0.60)` | — | True 360° refractive liquid glass depth |
| `--primary` | `#10B981` | `rgb(16, 185, 129)` | Emerald solid brand primary, active states, key icons |
| `--primary-dark` | `#059669` | `rgb(5, 150, 105)` | Deep emerald solid button hover state |
| `--primary-light` | `#A7F3D0` | `rgb(167, 243, 208)` | Mint solid light text & high-contrast outlines |
| `--primary-glow` | `rgba(16, 185, 129, 0.3)`| — | Focused glowing shadow |
| `--accent-cyan` | `#06B6D4` | `rgb(6, 182, 212)` | Electric cyan technical accent |
| `--accent-cyan-light`| `#67E8F9` | `rgb(103, 232, 249)` | Cyan badge text & code highlights |
| `--accent-crimson` | `#FF0050` | `rgb(255, 0, 80)` | Neon crimson alert badge, hot highlights, error states |
| `--color-eager-green`| `#58cc02` | `rgb(88, 204, 2)` | Duolingo-style sticker CTA fill & progress indicator |
| `--color-spark-blue` | `#1cb0f6` | `rgb(28, 176, 246)` | Duolingo-style interactive link & ghost outline button |
| `--text-main` | `#F1F5F9` | `rgb(241, 245, 249)` | Slate-100 primary text & headings |
| `--text-muted` | `#94A3B8` | `rgb(148, 163, 184)` | Slate-400 secondary descriptive text |
| `--text-dim` | `#64748B` | `rgb(100, 116, 139)` | Slate-500 meta information, timestamps, footnotes |

---

## 3. Typography & 4px Spacing Engine

### Font Stack
- **Khmer Primary Typography (Strict Standard)**: `'Google Sans', 'Kantumruy Pro', sans-serif` (Always use Google Sans as primary for all Khmer language text)
- **English Display & Body**: `'Outfit', -apple-system, BlinkMacSystemFont, sans-serif`
- **Code & Numbers**: `'JetBrains Mono', monospace`

### Tracking & Hierarchy Rules
- **Display Headlines (48px - 64px)**: `letter-spacing: -0.0200em; line-height: 1.20;`
- **Uppercase Nav Labels & Badges (13px - 15px)**: `letter-spacing: 0.0530em; text-transform: uppercase;`
- **Body Text (15px - 17px)**: `letter-spacing: normal; line-height: 1.6;`

### 4px Base Spacing Scale
```css
--spacing-unit: 4px;
--spacing-8: 8px;
--spacing-12: 12px;
--spacing-16: 16px;
--spacing-24: 24px;
--spacing-32: 32px;
--spacing-40: 40px;
--spacing-48: 48px;
--spacing-64: 64px;
--spacing-96: 96px;

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-xl: 24px;
--radius-pill: 9999px;
```

---

## 4. Master CSS Tokens Block

```css
:root {
  /* Obsidian Canvas & Solid Liquid Glass */
  --bg-main: #080B11;
  --bg-surface: rgba(18, 24, 38, 0.70);
  --bg-surface-hover: rgba(28, 38, 60, 0.85);
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-glass-hover: rgba(16, 185, 129, 0.40);

  /* Solid Brand Primaries */
  --primary: #10B981;
  --primary-dark: #059669;
  --primary-light: #A7F3D0;
  --primary-glow: rgba(16, 185, 129, 0.3);
  --accent-cyan: #06B6D4;
  --accent-cyan-light: #67E8F9;
  --accent-crimson: #FF0050;

  /* Duolingo-Inspired Accents */
  --color-eager-green: #58cc02;
  --color-spark-blue: #1cb0f6;

  /* Typography */
  --text-main: #F1F5F9;
  --text-muted: #94A3B8;
  --text-dim: #64748B;

  /* Fonts */
  --font-km: 'Kantumruy Pro', sans-serif;
  --font-en: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing Scale */
  --spacing-unit: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --radius-buttons: 12px;
}
```

---

## 5. 14 Core Design System UI Elements Standards

1. **Radio**: 18px hit target, solid center dot on check (`box-shadow: inset 0 0 0 3px #080B11`), group name association.
2. **Searchbar**: Leading search lens icon, quick clear button, hotkey indicator (`CMD+K`).
3. **Tooltip**: Non-blocking dark solid background with 1px glass border and collision detection.
4. **Modal**: Focused dialog overlay with backdrop blur, ESC key / outside click dismiss, primary & cancel button pairing.
5. **Loading**: CSS border-top circular spinner (zero gif/image bloat), skeleton pulse shimmer, linear progress bar.
6. **Toggle**: 44x24px standardized switch footprint, emerald active state, spacebar toggleable.
7. **Input Field**: Persistent label, emerald focus ring token, inline error / success feedback messages.
8. **Icon**: Standard SVG vector icons exclusively (zero emojis) across 16px, 20px, 24px, 32px scales.
9. **Table**: High-contrast header row, row hover highlights, aligned numeric and status columns.
10. **Card**: 16px backdrop-filter glass blur, specular reflection border, hover elevation.
11. **Button**: 12px border radius, active press physics, primary emerald, eager green sticker, spark ghost outline.
12. **Badge**: Semantic color tokens (green, cyan, crimson), pill radius (9999px), pulsing live dot.
13. **Avatar**: 2-letter fallback initials, online/busy presence indicator, overlapping team stack (-10px margin).
14. **Dropdown Menu**: Floating liquid glass panel with menu actions, separators, icons, and keyboard shortcuts.

---

## 6. 25 Website Architecture Concepts Standards

1. **Security**: 256-bit SSL badges, SOC2 certifications, responsible vulnerability disclosure policy with 24h SLA.
2. **Event Page**: Tech conference schedule, session agenda, speaker headshots, VIP ticket pass registration.
3. **About**: Origin story, engineering philosophy, core values, milestone timeline.
4. **Privacy & Legal**: GDPR compliance terms, cookie management toggles, data deletion request form.
5. **Features**: Bento-grid technical matrix, latency benchmarks, full-stack tooling highlights.
6. **Testimonials**: Verified peer reviews, rating stars, reviewer role and organization.
7. **Affiliate**: Recurring commission tier, referral link generator, payout frequency, marketing kit.
8. **Coming Soon**: Pre-launch product teaser, animated countdown timer, early-access email capture.
9. **Compare**: Side-by-side feature comparison table with check/cross indicators.
10. **Status**: System uptime 99.99%, real-time API latency gauges, incident history log.
11. **Billing**: Invoice PDF downloads, subscription renewal notice, payment method manager.
12. **Landing Page**: Hero headline, value proposition, quick stats bar, dual CTA buttons.
13. **Waitlist**: Priority queue position counter, viral referral link boost.
14. **Press / Media**: Brand media kit download (ZIP), approved vector SVGs, boilerplate copy.
15. **Team**: Leadership & developer profiles, role badges, tech specialty tags.
16. **Cart**: Order summary, item list with quantity steppers, discount voucher input, subtotal math.
17. **Search**: Instant live search modal with keyboard shortcuts (`CMD+K`), category filter chips.
18. **Careers**: Job openings listing with remote filters, transparent salary brackets, apply modal.
19. **Blog (Hub & Archive)**: Chronological article feed, sub-topic navigation, density layout, search bar, subscriber opt-in, sidebar, pagination.
20. **Blog Post**: Technical article layout, reading progress bar, table of contents, author bio, syntax-highlighted code.
21. **Contact Us**: Interactive contact form, direct email/Telegram channels, response SLA guarantee.
22. **Pricing**: Monthly/Annual pricing tiers, feature highlights, 14-day trial CTA, FAQ link.
23. **FAQ**: Accordion collapsible questions with instant keyword search filter.
24. **404 Error**: Terminal-style broken link diagnostics, quick recovery navigation buttons.
25. **Login / Auth**: Two-factor auth flow, Passkey support, OAuth single-sign-on, password reset.

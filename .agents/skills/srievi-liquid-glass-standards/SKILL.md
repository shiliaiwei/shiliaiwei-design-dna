---
name: srievi-liquid-glass-standards
description: >
  Authoritative design standard and architectural rules for Srievi Liquid Glass Portfolio, 14 Design System UI Elements, and 25 Website Concept Modules. Enforces STRICT SOLID COLORS ONLY (NO gradients, NO mixed color blends), ZERO-EMOJI / ZERO-SYMBOL POLICY (NO emojis or Unicode symbols anywhere), and MANDATORY Google Sans for all Khmer language text. Defines exact palette tokens, 4px spacing engine, 12px tactile sticker button physics, 360-degree specular glass surfaces, typography hierarchy, white canvas foundation, and all 25 web patterns. Trigger on: "srievi", "color", "palette", "design system", "glass", "solid color", "standards", "tokens", "button", "theme", "checklist", "record skill", "google sans".
---

# Srievi Liquid Glass Design System & Standards Master Specification

This skill acts as the permanent, authoritative architectural reference, token registry, and implementation standard for the **Srievi Developer Portfolio, 14 Core UI Elements, and 25 Website Architecture Patterns**. It is structured for rapid extensibility and continuous design evolution.

---

## 1. Zero-Tolerance Core Directives

### Directive 1: Solid Colors Only (Strictly Zero Gradients & Zero Color Mixing)
* **Never use linear-gradient or radial-gradient on text, buttons, tags, or cards.**
* **Never mix contrasting colors** in a single background fill or border blend.
* Every element must use **one crisp solid color token** or a **translucent liquid glass surface** (`rgba(255, 255, 255, 0.85)`).
* Primary buttons must be solid `#10B981` (Emerald) or `#58cc02` (Srievi Eager Green) with high-contrast text.

### Directive 2: Strict Zero-Emoji & Zero-Symbol Policy
* **Never use emojis** under any circumstances (no checkmark emojis, rocket, fire, sparkles, green dots, or warning symbols).
* **Never use decorative Unicode glyphs** in UI text, code comments, or agent responses.
* Use **standard library SVG vector icons** exclusively (Lucide `<i data-lucide="..."></i>` or FontAwesome `<i class="fa-solid fa-..."></i>`).

### Directive 3: Mandatory Google Sans for Khmer Typography
* **Always use Google Sans as the primary font for all Khmer language text**:
  ```css
  --font-km: 'Google Sans', 'Kantumruy Pro', sans-serif;
  ```
* Google Fonts Link for HTML `<head>`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet">
  ```

### Directive 4: Strict Srievi Brand Identity (Zero External Brand Names)
* The entire design architecture is exclusively owned and branded under **Srievi**.
* Root tokens, classes, components, and documentation must only use Srievi brand naming (`--srievi-green`, `--srievi-blue`, `--primary`, etc.).

---

## 2. Master Color Token Registry (White Canvas Foundation)

| Token | HEX / Value | RGB | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--bg-main` | `#FAFCFF` | `rgb(250, 252, 255)` | Crisp white canvas background |
| `--bg-surface` | `rgba(255, 255, 255, 0.85)` | — | Frosted liquid crystal glass card surface (`backdrop-filter: blur(20px) saturate(180%)`) |
| `--bg-surface-hover`| `rgba(255, 255, 255, 0.96)` | — | Interactive card/element hover state |
| `--bg-surface-elevated`| `rgba(255, 255, 255, 0.98)` | — | Floating modal & dropdown overlay surface |
| `--bg-inner-glass` | `rgba(241, 245, 249, 0.85)` | — | Nested preview box & input background |
| `--border-glass` | `rgba(0, 0, 0, 0.08)` | — | Specular glass edge refraction border |
| `--border-glass-top` | `rgba(255, 255, 255, 1.00)` | — | Top specular light-rim highlight |
| `--border-glass-hover`| `rgba(16, 185, 129, 0.50)` | — | Emerald-tinted border glow on hover |
| `--glass-shadow` | `inset 0 1px 0 rgba(255,255,255,1), 0 10px 30px rgba(0,0,0,0.04)` | — | True 360° refractive liquid glass depth |
| `--primary` | `#10B981` | `rgb(16, 185, 129)` | Emerald solid brand primary, active states, key icons |
| `--primary-dark` | `#059669` | `rgb(5, 150, 105)` | Deep emerald solid button hover state & high-contrast headers |
| `--primary-light` | `#065F46` | `rgb(6, 95, 70)` | Deep emerald high-contrast text on light surfaces |
| `--primary-glow` | `rgba(16, 185, 129, 0.25)` | — | Focused glowing shadow |
| `--accent-cyan` | `#0891B2` | `rgb(8, 145, 178)` | Cyan technical accent |
| `--accent-cyan-light`| `#0E7490` | `rgb(14, 116, 144)` | Cyan badge text & code highlights |
| `--accent-crimson` | `#FF0050` | `rgb(255, 0, 80)` | Neon crimson alert badge, hot highlights, error states |
| `--srievi-green` | `#58cc02` | `rgb(88, 204, 2)` | Srievi tactile sticker CTA fill & progress indicator |
| `--srievi-blue` | `#1cb0f6` | `rgb(28, 176, 246)` | Srievi interactive link & ghost outline button |
| `--text-main` | `#0F172A` | `rgb(15, 23, 42)` | Slate-900 high-contrast primary text & headings |
| `--text-muted` | `#475569` | `rgb(71, 85, 105)` | Slate-600 secondary descriptive text |
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

### 4px Base Spacing Scale & Squircle Radiuses
```css
--spacing-unit: 4px;
--spacing-8: 8px;
--spacing-12: 12px;
--spacing-16: 16px;
--spacing-24: 24px;
--spacing-32: 32px;
--spacing-48: 48px;

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 22px;
--radius-pill: 9999px;
```

---

## 4. Master CSS Tokens Block

```css
:root {
  /* Crisp White Canvas & Frosted Liquid Crystal Glass */
  --bg-main: #FAFCFF;
  --bg-surface: rgba(255, 255, 255, 0.85);
  --bg-surface-hover: rgba(255, 255, 255, 0.96);
  --bg-surface-elevated: rgba(255, 255, 255, 0.98);
  --bg-inner-glass: rgba(241, 245, 249, 0.85);
  
  --border-glass: rgba(0, 0, 0, 0.08);
  --border-glass-top: rgba(255, 255, 255, 1.00);
  --border-glass-hover: rgba(16, 185, 129, 0.50);
  --glass-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 1), 0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.03);
  --glass-shadow-hover: inset 0 1px 0 0 rgba(255, 255, 255, 1), 0 18px 44px rgba(16, 185, 129, 0.14), 0 4px 12px rgba(0, 0, 0, 0.05);

  /* Solid Brand Primaries */
  --primary: #10B981;
  --primary-dark: #059669;
  --primary-light: #065F46;
  --primary-glow: rgba(16, 185, 129, 0.25);
  --accent-cyan: #0891B2;
  --accent-cyan-light: #0E7490;
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

1. **Radio**: 18px hit target, solid center dot on check (`box-shadow: inset 0 0 0 3px #FFFFFF`), group name association.
2. **Searchbar**: Leading search lens icon, quick clear button, hotkey indicator (`CMD+K`).
3. **Tooltip**: Non-blocking dark solid background (`#0F172A`) with 1px glass border and collision detection.
4. **Modal**: Focused dialog overlay with backdrop blur, ESC key / outside click dismiss, primary & cancel button pairing.
5. **Loading**: CSS border-top circular spinner (zero gif/image bloat), skeleton pulse shimmer, linear progress bar.
6. **Toggle**: 44x24px standardized switch footprint, emerald active state, spacebar toggleable.
7. **Input Field**: Persistent label, emerald focus ring token, inline error / success feedback messages.
8. **Icon**: Standard SVG vector icons exclusively (zero emojis) across 16px, 20px, 24px, 32px scales.
9. **Table**: High-contrast header row, row hover highlights, aligned numeric and status columns.
10. **Card**: 20px backdrop-filter glass blur, specular top border highlight, hover elevation.
11. **Button**: 12px border radius, active press physics, primary emerald, Srievi eager green sticker, spark ghost outline.
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

---

## 7. Extensibility & Future Design Iterations Guide

When you continue designing, adjusting, or introducing new elements:
- **Preserve Directives**: Keep 100% solid colors, zero emojis/decorative symbols, and 100% Srievi brand ownership.
- **Maintain Spacing & Radius Hierarchy**: Use the 4px base spacing scale and squircle radiuses (`8px`, `12px`, `16px`, `22px`, `9999px`).
- **Khmer Typography Enforcement**: Any new Khmer text must always utilize `var(--font-km)` (`Google Sans`).
- **Iterative Additions**: Add new UI components to section 4 and new website concept patterns to section 5.

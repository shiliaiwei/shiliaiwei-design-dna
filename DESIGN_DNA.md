# SHILIAIWEI LIQUID GLASS DESIGN DNA & MULTI-PLATFORM SYSTEM SPECIFICATION

This document defines the permanent, immutable Design & Engineering DNA for all **Shiliaiwei Guideline Design DNA Skill** digital products, interfaces, web applications, mobile platforms, and design system components across **ALL programming languages and frameworks** (Web/HTML/CSS, React/Next.js/Vue, Android/Compose, iOS/SwiftUI, and Flutter).

- **Primary Live Production URL**: [`https://desigdna.shiliaiwei.workers.dev/`](https://desigdna.shiliaiwei.workers.dev/)
- **Cloudflare Worker Project**: `desigdna`

---

## 1. The 16 Immutable Architectural Directives

1. **ZERO EMOJI POLICY**:
   - Emojis (e.g. smileys, checkmarks, fire, rockets, stars, sparkles, flags) are strictly forbidden across all UI code, HTML, CSS, JavaScript, Kotlin, Swift, Dart, markdown documentation, and assistant responses.
2. **ZERO ICONS & ZERO DECORATIVE GLYPHS POLICY (PURE TYPOGRAPHY)**:
   - No icon fonts (Font Awesome, Material Symbols, Lucide), no arbitrary Unicode glyphs, and no decorative symbols.
   - Use high-contrast monospace code tokens, semantic status pills (`ACTIVE`, `PROD`, `VERIFIED`, `ENABLED`, `PENDING`), and pure typography labels.
3. **ZERO GRAY (NO MUDDY/DULL GRAYS)**:
   - Generic dull or muddy grays (e.g., `#808080`, `#999999`, `#cccccc`) are strictly prohibited.
   - Use high-contrast crisp Canvas White `#FAFCFF` / `#FFFFFF` paired with deep Slate-900 typography `#0F172A`, frosted glass surfaces `rgba(255, 255, 255, 0.85)`, and crisp slate tokens (`#475569`, `#64748B`).
4. **ZERO GRADIENT POLICY (100% SOLID COLORS ONLY)**:
   - Linear gradients, radial gradients, mesh gradients, and conic gradients are strictly prohibited.
   - All backgrounds, button fills, text colors, badges, and borders must use 100% single solid color tokens.
5. **ZERO MIX COLOR / ZERO RAINBOW BLENDING**:
   - Each element or component must use exactly ONE single solid palette color token without mixed color fills or multi-color blend overlays.
6. **STRICT CLOSED COLOR PALETTE (8 CORE TOKENS)**:
   - NEVER use, invent, or introduce any color outside the explicit `:root` color tokens registered in the code.
   - Permitted Closed Palette (8 of 8):
     - `01. Canvas White`: `#FAFCFF` (`--bg-main`) - Foundation canvas surface.
     - `02. Slate-900`: `#0F172A` (`--text-main`) - Master typography & solid borders (16.8:1 AAA contrast).
     - `03. Primary Emerald`: `#10B981` (`--primary`) - Core brand interactive CTA actions.
     - `04. Deep Emerald`: `#059669` (`--primary-dark`) - 3D depth extrusion and high-contrast text.
     - `05. Eager Green`: `#58CC02` (`--color-eager-green`) - High-energy CTA buttons.
     - `06. Spark Blue`: `#1CB0F6` (`--color-spark-blue`) - Secondary interactive accents.
     - `07. Accent Cyan`: `#0891B2` (`--accent-cyan`) - Release tags and code chips.
     - `08. Accent Crimson`: `#FF0050` (`--accent-crimson`) - Critical alerts and danger states.
7. **ZERO SHADOW & ZERO GLOW POLICY**:
   - Blurry drop shadows and fuzzy ambient glow orbs are eliminated. All cards, buttons, docks, inputs, and modals use pure crisp solid borders (`border: 1px solid rgba(0,0,0,0.10); border-top: 1px solid #FFFFFF; box-shadow: none;`).
8. **ZERO HOVER STYLE POLICY (NO FLOATING/LIFTING HOVERS)**:
   - No `:hover` transforms, floating lifts (`translateY`), shadow changes, or hovering background swaps. Elements maintain solid, static, stable layout until directly clicked or activated.
9. **REALISTIC MESSAGE DATA & TAP-CURSOR AUTO-CLEAR**:
   - All input fields must display pre-filled, production-grade message/value strings rather than generic empty prompts.
   - When the user taps or focuses the cursor into the field, the prefilled message automatically disappears (clears to blank) for immediate typing, and restores if blurred while empty.
10. **MANDATORY GOOGLE SANS FOR KHMER & 9px TACTILE STICKER BUTTON PHYSICS**:
    - All Khmer language typography must strictly use `'Google Sans', 'Kantumruy Pro', sans-serif` via `body.lang-km` or `html[lang="km"] body`.
    - Buttons use **`9px`** radius with 3D bottom shadow depth (`box-shadow: 0 4px 0 <depth-color>`) and tactile active compression (`:active { transform: translateY(3px); box-shadow: 0 1px 0 <depth-color>; }`).
11. **APPLE IPHONE & MACOS DESKTOP APP ICON HERO & WEB AUDIO SYNTHESIS**:
    - Hero app icon uses an Apple continuous squircle frame (`118px × 118px`, `border-radius: 28px`) in solid emerald `#10B981` with crisp `1.5px solid rgba(0,0,0,0.14)` outline (zero white rim).
    - Features the Apple Developer geometry guide grid, elevated `#059669` center plate, and pure white Khmer **"វី"** emblem.
    - Web Audio API dual-sine harmonic chime (`E6` -> `A6` + `E7` overtone) plays instantly on tap without external audio files.
12. **UNTRANSLATED PROPER NAMES POLICY**:
    - Proper names, personal names, brand identities, and technical product titles (`Shiliaiwei`, `Kosal Chan`, `PostgreSQL`, `CSS`, `Google Sans`, `Outfit`) must **NEVER** be translated to Khmer. They must remain in their original Latin/English form.
13. **TEXT BOUNDARY LIMIT & AUTO-WRAP MANDATE**:
    - All text blocks, headings, cards, table cells, badges, and paragraphs must gracefully wrap when reaching container boundaries (`overflow-wrap: break-word; word-wrap: break-word; word-break: break-word;`).
14. **CONCISE 2–3 WORDS BUTTON TEXT MANDATE**:
    - Every interactive button across all applications, modules, and dialogs must strictly use **two or three words maximum** (`Verify Code`, `Resend Code`, `Save Settings`, `Create Key`, `Export CSV`, `Next Step`, `Back Step`, `Confirm Payment`, `Send Message`, `Invite User`, `Delete Key`, `Switch KM`, `Copy Tokens`, `Prompt`).
15. **SINGLE-VIEW STUDIO ARCHITECTURE**:
    - Zero forced scrolling architecture with 3 dedicated views (`Visual Identity`, `UI Elements`, `Web App Suite`) controlled from the top floating dock menu.
16. **MANDATORY PERSISTENT DESIGN RECORD RULE**:
    - Every design decision, component rule, physics standard, and platform specification must **ALWAYS** be permanently recorded into `DESIGN_DNA.md` and synchronized across all agent skills (`shiliaiwei-liquid-glass-standards` and `srievi-liquid-glass-standards`).

---

## 2. The 14 Core UI Elements Specifications

1. **Tactile Buttons (`.btn`)**: 9px radius, 3D bottom depth shadow (`0 4px 0 <depth>`), active press `translateY(3px)`.
2. **Radio (`.ui-radio`)**: Pure 50% circle with 6px solid `#10B981` checked state.
3. **Searchbar (`.search-input`)**: 9px radius with monospace `CMD+K` trailing shortcut badge.
4. **Tooltip (`.ui-tooltip`)**: Slate-900 `#0F172A` background with crisp solid border.
5. **Modal Dialog (`.brand-popup-card`, `.ui-modal`)**: Frosted glass backdrop with 20px radius White card.
6. **Loading Skeleton & Spinner**: 24px emerald circular spinner and skeleton shimmer lines.
7. **Toggle Switch (`.ui-toggle`)**: 46x26px pill track with 20px white circular thumb.
8. **Progress Bar (`.progress-bar`)**: 8px height track with solid emerald progress fill.
9. **Avatar Stack (`.avatar-img`, `.avatar-stack`)**: 50% round avatar with 11px emerald status dot and -10px overlapping stack.
10. **Segmented Tabs (`.dock-tab`)**: Pill container `#F1F5F9` with white active tab and soft elevation.
11. **Range Slider (`.ui-range`)**: 6px track with 18px solid emerald circular thumb.
12. **Code Chip (`.code-chip`)**: Monospace `#F1F5F9` chip with crisp border.
13. **Status Badge (`.badge`)**: Compact status pills with semantic color borders (Mint, Sky, Rose).
14. **UI Table (`.ui-table`)**: High-contrast tabular layout with interactive crosshair row/column highlighting.

---

## 3. The 360° Liquid Glass Border Design System Specification

### 1. Architectural Core Principles
The 360-degree Liquid Glass Border system simulates physical refractive glass under directional ambient illumination (top-left key light source). Every glass container, card, modal, or floating dock features differentiated reflection geometry across all four edges:

```css
/* 360° Directional Liquid Glass Border Formula */
.liquid-glass-card {
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(28px) saturate(190%);
  -webkit-backdrop-filter: blur(28px) saturate(190%);
  
  /* 4-Edge Directional Lighting */
  border-top: 1.5px solid rgba(255, 255, 255, 0.98);   /* Primary specular reflection */
  border-left: 1.5px solid rgba(255, 255, 255, 0.70);  /* Secondary ambient reflection */
  border-right: 1px solid rgba(226, 232, 240, 0.80);   /* Soft glass refraction edge */
  border-bottom: 1.5px solid rgba(203, 213, 225, 0.75);/* Grounding shadow refraction */

  /* Inset Glass Surface Sheen & Ambient Elevation */
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    inset 1px 0 0 rgba(255, 255, 255, 0.50),
    0 12px 32px -8px rgba(15, 23, 42, 0.06),
    0 1px 3px rgba(15, 23, 42, 0.03);
  
  border-radius: 16px;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, background 0.2s ease;
}

.liquid-glass-card:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.92);
  border-top: 1.5px solid #FFFFFF;
  border-left: 1.5px solid rgba(255, 255, 255, 0.90);
  box-shadow: 
    inset 0 1px 0 #FFFFFF,
    0 20px 42px -10px rgba(15, 23, 42, 0.12),
    0 2px 6px rgba(15, 23, 42, 0.04);
}
```

### 2. Recessed Liquid Glass Well (Inputs & Search)
For inputs, searchbars, and recessed wells, the directional lighting is inverted to simulate physical concavity into the glass slab:

```css
.liquid-glass-input {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1.5px solid rgba(203, 213, 225, 0.90);   /* Inset top shadow */
  border-left: 1px solid rgba(226, 232, 240, 0.85);
  border-right: 1px solid rgba(226, 232, 240, 0.85);
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.98);/* Bottom specular rim */
  border-radius: 14px;
  box-shadow: 
    inset 0 2px 4px rgba(15, 23, 42, 0.04),
    0 8px 24px -4px rgba(15, 23, 42, 0.04);
}
.liquid-glass-input:focus {
  background: #FFFFFF;
  border-color: #0071E3;
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.16);
}
```

### 3. Tactile Sticker Buttons with 3D Depth & Specular Rim
```css
.btn-liquid-primary {
  background: #0071E3;
  color: #FFFFFF;
  border-radius: 9px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-top: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 
    0 3px 0 #0051A2,
    0 6px 14px rgba(0, 113, 227, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transition: all 0.15s ease;
}
.btn-liquid-primary:active {
  transform: translateY(2px);
  box-shadow: 0 1px 0 #0051A2;
}
```

### 4. Floating Capsule & Island Navigation Dock
```css
.liquid-glass-header {
  position: sticky;
  top: 12px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(32px) saturate(200%);
  -webkit-backdrop-filter: blur(32px) saturate(200%);
  border-top: 1.5px solid rgba(255, 255, 255, 0.98);
  border-left: 1.5px solid rgba(255, 255, 255, 0.70);
  border-right: 1px solid rgba(226, 232, 240, 0.80);
  border-bottom: 1.5px solid rgba(203, 213, 225, 0.75);
  box-shadow: 0 16px 36px -12px rgba(15, 23, 42, 0.08), inset 0 1px 0 #FFFFFF;
}
```

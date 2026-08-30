# SHILIAIWEI LIQUID GLASS DESIGN DNA & MULTI-PLATFORM SYSTEM SPECIFICATION

This document defines the permanent, immutable Design & Engineering DNA for all **Shiliaiwei Guideline Design DNA Skill** digital products, interfaces, web applications, mobile platforms, and design system components across **ALL programming languages and frameworks** (Web/HTML/CSS, React/Next.js/Vue, Android/Compose, iOS/SwiftUI, and Flutter).

- **Primary Live Production URL**: [`https://shiliaiwei.pages.dev`](https://shiliaiwei.pages.dev)
- **Cloudflare Pages Project**: `shiliaiwei`

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

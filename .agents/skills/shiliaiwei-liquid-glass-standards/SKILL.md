---
name: shiliaiwei-liquid-glass-standards
description: Authoritative design standard and architectural rules for Shiliaiwei Liquid Glass, 14 Design System UI Elements, 8 Color System Tokens, 25 Website Concepts, 9px tactile sticker button physics, strict SOLID COLORS ONLY, zero-emoji / zero-symbol / zero-signs / zero-gray / zero-shadow / zero-glow / zero-hover policy, Apple squircle app icon hero with Web Audio API chime, multi-platform implementation (Web, React, Compose, SwiftUI, Flutter), and mandatory Google Sans for Khmer.
---

# Shiliaiwei Guideline Design DNA Skill

- **Primary Live Production URL**: [`https://shiliaiwei.pages.dev`](https://shiliaiwei.pages.dev)
- **Cloudflare Pages Project**: `shiliaiwei`

This skill provides authoritative architectural rules, strict visual directives, and multi-platform implementation blueprints (Web/CSS, Android/Compose, iOS/SwiftUI, Flutter/Dart) for **Shiliaiwei Guideline Design DNA Skill** across all platforms, frameworks, and programming languages.

---

## 1. The 16 Immutable Architectural Directives

1. **Directive 1: ZERO EMOJI POLICY**
   - Emojis (smileys, flames, rockets, checks, sparkles, flags) are strictly forbidden across UI code, documentation, and assistant responses.

2. **Directive 2: ZERO ICONS & ZERO DECORATIVE GLYPHS (PURE TYPOGRAPHY)**
   - No icon fonts (Font Awesome, Material Symbols, Lucide), no arbitrary Unicode glyphs, and no decorative symbols.
   - Use high-contrast monospace code tokens, semantic status pills (`ACTIVE`, `PROD`, `VERIFIED`, `ENABLED`, `PENDING`), and pure typography labels.

3. **Directive 3: ZERO GRAY (NO MUDDY/DULL GRAYS)**
   - No generic dull grays (`#808080`, `#999999`, `#cccccc`).
   - High-contrast Canvas White (`#FAFCFF`, `#FFFFFF`) paired with Slate-900 typography (`#0F172A`), Slate-600 (`#475569`), and Slate-500 (`#64748B`).

4. **Directive 4: ZERO GRADIENTS (100% Solid Colors Only)**
   - No linear, radial, mesh, or conic gradients. Every element uses single solid color tokens.

5. **Directive 5: ZERO MIX COLOR**
   - Exactly ONE solid color token per element. No color blending or rainbow overlays.

6. **Directive 6: STRICT CLOSED COLOR PALETTE (8 CORE TOKENS)**
   - NEVER use, invent, or introduce colors outside the explicit `:root` tokens.
   - Closed Palette (8 of 8):
     - `01. Canvas White`: `#FAFCFF` (`--bg-main`) - High-contrast canvas foundation.
     - `02. Slate-900`: `#0F172A` (`--text-main`) - Master typography & solid borders (16.8:1 AAA contrast).
     - `03. Primary Emerald`: `#10B981` (`--primary`) - Core brand interactive actions and confirmations.
     - `04. Deep Emerald`: `#059669` (`--primary-dark`) - 3D depth extrusion and high-contrast text.
     - `05. Eager Green`: `#58CC02` (`--color-eager-green`) - High-energy CTA buttons.
     - `06. Spark Blue`: `#1CB0F6` (`--color-spark-blue`) - Secondary interactive accents.
     - `07. Accent Cyan`: `#0891B2` (`--accent-cyan`) - Release tags and code chips.
     - `08. Accent Crimson`: `#FF0050` (`--accent-crimson`) - Critical alerts and danger states.

7. **Directive 7: ZERO SHADOW & ZERO GLOW**
   - No blurry drop shadows or ambient glow orbs. All elements use crisp solid borders (`border: 1px solid rgba(0,0,0,0.10); border-top: 1px solid #FFFFFF; box-shadow: none;`).

8. **Directive 8: ZERO HOVER STYLE (No Floating/Lifting)**
   - No hover lifts (`translateY`), shadow alterations, or background swaps. Layouts remain static and stable until directly clicked or activated.

9. **Directive 9: REALISTIC MESSAGE DATA & TAP-CURSOR AUTO-CLEAR**
   - Input fields pre-filled with realistic production messages that auto-clear on focus/tap and restore on empty blur.

10. **Directive 10: MANDATORY GOOGLE SANS FOR KHMER & 9px TACTILE STICKER BUTTONS**
    - All Khmer text strictly uses `'Google Sans', 'Kantumruy Pro', sans-serif`.
    - Standard Button radius: **`9px`** (`var(--radius-buttons)`), Compact: **`6px`** (`var(--radius-sm)`).
    - 3D bottom shadow depth (`0 4px 0 <depth-color>`) with active click compression (`transform: translateY(3px); box-shadow: 0 1px 0 <depth-color>;`).

11. **Directive 11: APPLE IPHONE & MACOS DESKTOP APP ICON HERO**
    - Outer Squircle Frame: `118px × 118px` (`100px × 100px` mobile), `border-radius: 28px`, solid emerald `#10B981` with crisp `1.5px solid rgba(0,0,0,0.14)` outline (zero white rim).
    - Inner Apple Geometry Guide Grid: Concentric circle and crosshairs.
    - 3D Elevated Center Plate: `72px × 72px`, `#059669`, `border-radius: 16px`, `border-top: 2px solid #FFFFFF`.
    - Emblem: Pure white Khmer **"វី"** typography (`font-size: 3.1rem; font-weight: 900`).
    - Audio Synthesis: Web Audio API crystal glass chime sound effect on tap.

12. **Directive 12: UNTRANSLATED PROPER NAMES POLICY**
    - Proper names, personal names, brand identities, and technical product titles (`Shiliaiwei`, `Kosal Chan`, `PostgreSQL`, `CSS`, `Google Sans`, `Outfit`) must **NEVER** be translated to Khmer. They must remain in their original Latin/English form.

13. **Directive 13: TEXT BOUNDARY LIMIT & AUTO-WRAP MANDATE**
    - All text blocks, badges, table cells, and paragraphs must wrap naturally (`overflow-wrap: break-word; word-wrap: break-word; word-break: break-word;`). Single-line overflow and clipping are forbidden.

14. **Directive 14: CONCISE 2–3 WORDS BUTTON TEXT MANDATE**
    - Every interactive button across all applications, modules, and dialogs must strictly use **two or three words maximum** (`Verify Code`, `Resend Code`, `Save Settings`, `Create Key`, `Export CSV`, `Next Step`, `Back Step`, `Confirm Payment`, `Send Message`, `Invite User`, `Delete Key`, `Switch KM`, `Copy Tokens`, `Prompt`).

15. **Directive 15: SINGLE-VIEW STUDIO ARCHITECTURE**
    - 3 dedicated views (`Visual Identity`, `UI Elements`, `Web App Suite`) selectable from the top sticky floating capsule dock.

16. **Directive 16: MANDATORY PERSISTENT DESIGN RECORD RULE**
    - Every design decision, component rule, physics standard, and platform specification must **ALWAYS** be permanently recorded into `DESIGN_DNA.md` and synchronized across all agent skills.

---

## 2. The 14 Core UI Elements Specifications & AI Prompts

### 1. Tactile Buttons (`.btn`)
- **Primary CTA (`.btn-primary`)**: `#10B981` fill, `box-shadow: 0 4px 0 #059669`, color `#FFFFFF`.
- **Eager Sticker (`.btn-eager`)**: `#58CC02` fill, `box-shadow: 0 4px 0 #46A302`, color `#FFFFFF`.
- **Spark Blue (`.btn-spark`)**: `#FFFFFF` fill, `border: 2px solid #BAE6FD`, color `#0284C7`, `box-shadow: 0 4px 0 #BAE6FD`.
- **Glass / Ghost (`.btn-glass`)**: `#FFFFFF` fill, `border: 1px solid #CBD5E1`, `box-shadow: 0 3px 0 #CBD5E1`.
- **Active Press State**: `transform: translateY(3px); box-shadow: 0 1px 0 <depth-color>;`.

### 2. Radio Selection (`.ui-radio`)
- Unchecked: `border: 2px solid rgba(0,0,0,0.20); background: #FFFFFF;`.
- Checked: `border: 6px solid #10B981; background: #FFFFFF; border-radius: 50%;`.

### 3. Searchbar (`.search-input`)
- Surface: `#FFFFFF`, `border: 1px solid rgba(0,0,0,0.10); border-radius: 9px;`.
- Trailing shortcut badge: Monospace `CMD+K`, `#F1F5F9` background, `border-radius: 4px`.

### 4. Tooltip (`.ui-tooltip`)
- Background: Slate-900 (`#0F172A`), `border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;`.
- Typography: `#F1F5F9`, `font-size: 0.75rem; font-weight: 600;`.

### 5. Modal Dialog (`.brand-popup-card`, `.ui-modal`)
- Backdrop: `rgba(15, 23, 42, 0.45)` with `backdrop-filter: blur(24px)`.
- Card: Pure White (`#FFFFFF`), `border: 1px solid rgba(0,0,0,0.10); border-top: 1.5px solid #FFFFFF; border-radius: 20px; padding: 24px;`.
- Actions: 9px tactile buttons for Confirm and Cancel.

### 6. Loading Skeleton & Spinner
- Spinner: `24px` diameter, `border: 3px solid rgba(16,185,129,0.20); border-top-color: #10B981; animation: spin 0.8s linear infinite;`.
- Skeleton Line: `height: 10px; border-radius: 4px; background: rgba(0,0,0,0.06);`.

### 7. Toggle Switch (`.ui-toggle`)
- Track: `46px × 26px`, `background: #E2E8F0; border-radius: 9999px;`.
- Active Track: `background: #10B981;`.
- Thumb: `20px × 20px`, `#FFFFFF`, `border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.12);`.

### 8. Progress Bar (`.progress-bar`)
- Track: `height: 8px; background: #E2E8F0; border-radius: 9999px;`.
- Fill: `#10B981` (or `#58CC02` / `#1CB0F6`), `border-radius: 9999px;`.

### 9. Avatar & Stack (`.avatar-img`, `.avatar-stack`)
- Image: `border-radius: 50%; border: 2px solid #FFFFFF; object-fit: cover;`.
- Active Dot: `11px` diameter, `#10B981`, `border: 2px solid #FFFFFF;`.
- Stack: `-10px` negative margin with `+N` count badge.

### 10. Segmented Tabs (`.dock-tab`, `.tab-item`)
- Pill container: `#F1F5F9`, `border-radius: 9999px; padding: 3px;`.
- Active tab: `#FFFFFF`, `border: 1px solid rgba(0,0,0,0.08); border-top: 1px solid #FFFFFF; border-radius: 9999px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); font-weight: 700;`.

### 11. Range Slider (`.ui-range`)
- Track: `height: 6px; background: #E2E8F0; border-radius: 9999px;`.
- Thumb: `18px × 18px`, `#10B981`, `border: 2px solid #FFFFFF; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.15);`.

### 12. Code Chip (`.code-chip`)
- Monospace font, `background: #F1F5F9; border: 1px solid rgba(0,0,0,0.08); border-radius: 6px; padding: 3px 8px; color: #0F172A;`.

### 13. Status Badge (`.badge`)
- Mint Active: `background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; border-radius: 6px; font-weight: 700; font-size: 0.72rem;`.
- Sky Info: `background: #ECFEFF; color: #0891B2; border: 1px solid #A5F3FC; border-radius: 6px;`.
- Rose Danger: `background: #FFF1F2; color: #BE123C; border: 1px solid #FECDD3; border-radius: 6px;`.

### 14. UI Table (`.ui-table`)
- Header: `#F8FAFC`, `font-size: 0.75rem; font-weight: 700; color: #475569; border-bottom: 1px solid rgba(0,0,0,0.08);`.
- Rows: `#FFFFFF`, `border-bottom: 1px solid rgba(0,0,0,0.04);`.
- Interactive Column/Row Crosshair Highlighter.

---

## 3. Web Audio API Notification Chime Implementation

```javascript
function playMacNotificationSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume();

    const now = ctx.currentTime;

    // Primary E6 -> A6 glass tone
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1318.51, now);
    osc1.frequency.exponentialRampToValueAtTime(1760.00, now + 0.08);
    gain1.gain.setValueAtTime(0.32, now);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    // High crystal shimmer overtone E7
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(2637.02, now);
    gain2.gain.setValueAtTime(0.18, now);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    // Tactile bass pop
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(220, now);
    osc3.frequency.exponentialRampToValueAtTime(110, now + 0.06);
    gain3.gain.setValueAtTime(0.22, now);
    gain3.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    osc3.connect(gain3);
    gain3.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc1.stop(now + 0.45);
    osc2.stop(now + 0.35);
    osc3.stop(now + 0.08);
  } catch (err) {}
}
```

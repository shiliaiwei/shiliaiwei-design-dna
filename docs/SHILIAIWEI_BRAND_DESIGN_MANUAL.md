# Shiliaiwei Brand Design Manual — Master Architectural Standard

- **Official Live Production URL**: [`https://shiliaiwei.pages.dev`](https://shiliaiwei.pages.dev)
- **GitHub Source Repository**: [`https://github.com/shiliaiwei/shiliaiwei-design-dna`](https://github.com/shiliaiwei/shiliaiwei-design-dna)
- **Cloudflare Pages Project**: `shiliaiwei`
- **Release Version**: `v2.4.0` (Solid Liquid Glass Architecture)

---

## 1. Brand Identity & Core Pillars
Shiliaiwei (施莱威) embodies a high-contrast, tactile Solid Liquid Glass design philosophy engineered for multi-platform consistency across Web, React, Next.js, Android Compose, iOS SwiftUI, and Flutter.

### Core Directives:
1. **Zero Emoji Policy**: Zero smileys, rockets, or decorative Unicode icons.
2. **Zero Icons Policy**: Pure typography, high-contrast monospace code tokens, and semantic status pills (`ACTIVE`, `PROD`, `VERIFIED`).
3. **Zero Gray Policy**: Canvas White `#FAFCFF` paired with Slate-900 `#0F172A` and Slate-600 `#475569`.
4. **Zero Gradient Policy**: 100% solid single-token colors per element.
5. **Zero Blur Shadow / Zero Glow**: Clean 1px solid borders (`border: 1px solid rgba(0,0,0,0.10)`) with 100% white top specular highlight (`border-top: 1px solid #FFFFFF`).
6. **Tactile Sticker Physics**: Standard button radius `9px`, compact `6px`. 3D bottom depth layer with active click translation (`transform: translateY(2px)`).
7. **Single-View Studio Navigation**: 3 primary views (`Visual Identity`, `UI Elements`, `Web App Suite`) selectable in 1 click from the Floating Dock without long vertical scrolling.
8. **1-Click Token & Skill Distribution**: Instant clipboard export for design tokens (`Copy Tokens`) and Agent Skill specification (`Copy Skill MD`).

---

## 2. Solid Color Tokens Registry

| Token Name | Hex / RGBA | Role & Application |
|---|---|---|
| `--bg-main` | `#FAFCFF` | Pure White Canvas Background |
| `--bg-surface` | `rgba(255, 255, 255, 0.85)` | Liquid Glass Container Surface |
| `--bg-inner-glass` | `rgba(241, 245, 249, 0.85)` | Recessed Input & Preview Well Background |
| `--primary` | `#10B981` | Brand Primary Emerald Action Fill |
| `--primary-dark` | `#059669` | 3D Bottom Depth Shadow & Contrast Text |
| `--accent-crimson` | `#FF0050` | Danger Actions & Revocation Chips |
| `--shiliaiwei-green`| `#58CC02` | Eager High-Conversion CTA Buttons |
| `--shiliaiwei-blue` | `#1CB0F6` | Spark Interactive Links & Badges |
| `--text-main` | `#0F172A` | Slate-900 High-Contrast Body & Headers |
| `--text-muted` | `#475569` | Slate-600 Subtitles & Secondary Copy |

---

## 3. UI Component Suite (14 Core Elements)
1. **Buttons**: Tactile sticker buttons (9px radius, 3D bottom depth, active press).
2. **Inputs**: Recessed wells with realistic tap-clear placeholder behavior.
3. **Modals**: Liquid glass overlay dialogs with solid button actions.
4. **Tabs**: Discrete pill segment switchers with active highlight.
5. **Accordions**: Expandable collapsible FAQ panels.
6. **Dropdowns**: Popover selector menus with item hover states.
7. **Segmented Controls**: Multi-option horizontal toggle bars.
8. **Code & Tag Chips**: Monospace status tokens (`ACTIVE`, `v2.4.0`, `POSTGRESQL`, `PROD`) with 3D tactile button physics.
9. **Tables**: Relational structured tables with status chips and actions.
10. **Toggles / Switches**: Tactile toggle switches.
11. **Tooltips**: High-contrast dark popovers for micro-guidance.
12. **Progress Bars**: Solid emerald track indicators.
13. **Range Sliders**: Interactive numeric sliders.
14. **Avatars & Toasts**: High-resolution user avatars with 11px status dot and bottom-right toast notifications.

---

## 4. Multi-Language Standards
- **English**: Primary typography `'Outfit', sans-serif`.
- **Khmer**: Mandatory `'Google Sans', 'Kantumruy Pro', sans-serif` with line-height `1.45` to prevent diacritic clipping.
- **Proper Names**: Brand and proper names (`Shiliaiwei`, `PostgreSQL`, `GitHub`) remain untranslated in Latin script.

# SHILIAIWEI LIQUID GLASS DESIGN DNA & MULTI-PLATFORM SYSTEM SPECIFICATION

This document defines the permanent, immutable Design & Engineering DNA for all **Shiliaiwei (施莱威)** / **VibrandHub** digital products, interfaces, web applications, mobile platforms, and design system components across **ALL programming languages and frameworks** (Web/HTML/CSS, React/Next.js/Vue, Android/Compose, iOS/SwiftUI, and Flutter).

- **Primary Live Production URL**: [`https://vibrandhub.pages.dev`](https://vibrandhub.pages.dev)
- **GitHub Repository**: [`https://github.com/shiliaiwei/shiliaiwei-design-dna`](https://github.com/shiliaiwei/shiliaiwei-design-dna)
- **Cloudflare Pages Project**: `vibrandhub`

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
6. **STRICT CLOSED COLOR PALETTE (NEVER USE ANY UNLISTED COLOR BESIDES ROOT TOKENS)**:
   - NEVER use, invent, or introduce any color outside the explicit `:root` color tokens registered in the code.
   - Permitted Palette ONLY:
     - Foundation: `--bg-main` (`#FAFCFF`), `--bg-surface` (`rgba(255,255,255,0.85)`), `--bg-inner-glass` (`rgba(241,245,249,0.85)`), `#FFFFFF`
     - Brand Primaries: `--primary` (`#10B981`), `--primary-dark` (`#059669`), `--primary-light` (`#065F46`)
     - Accents: `--accent-cyan` (`#0891B2`), `--accent-crimson` (`#FF0050`)
     - Shiliaiwei Brand: `--shiliaiwei-green` / `--color-eager-green` (`#58CC02`), `--shiliaiwei-blue` / `--color-spark-blue` (`#1CB0F6`)
     - Typography & Slate: `--text-main` (`#0F172A`), `--text-muted` (`#475569`), `--text-dim` (`#64748B`)
     - Soft Badge Borders: `#A7F3D0` (Mint), `#BAE6FD` (Sky), `#FECDD3` (Rose), `rgba(0,0,0,0.10)`
   - Any arbitrary outside colors (e.g. purple, orange, brown, unlisted yellows, random neons) are strictly prohibited.
7. **ZERO SHADOW & ZERO GLOW POLICY**:
   - Blurry drop shadows and fuzzy ambient glow orbs are eliminated. All cards, buttons, docks, inputs, and modals use pure crisp solid borders (`border: 1px solid rgba(0,0,0,0.10); border-top: 1px solid #FFFFFF; box-shadow: none;`).
8. **ZERO HOVER STYLE POLICY (NO FLOATING/LIFTING HOVERS)**:
   - No `:hover` transforms, floating lifts (`translateY`), shadow changes, or hovering background swaps. Elements maintain solid, static, stable layout until directly clicked or activated.
9. **REALISTIC MESSAGE DATA & TAP-CURSOR AUTO-CLEAR**:
   - All input fields must display pre-filled, production-grade message/value strings rather than generic empty prompts.
   - When the user taps or focuses the cursor into the field, the prefilled message automatically disappears (clears to blank) for immediate typing, and restores if blurred while empty.
10. **MANDATORY GOOGLE SANS FOR KHMER & TACTILE COMPRESSION ON ACTIVE CLICK**:
    - All Khmer language typography must strictly use `'Google Sans', 'Kantumruy Pro', sans-serif` via `body.lang-km` or `html[lang="km"] body`.
    - Micro-animations occur strictly on direct active click (`:active { transform: translateY(3px); }`) and dynamic copy feedback.
11. **AVATAR & IDENTITY ARCHITECTURE**:
    - **User Photo**: Circular image with `border: 2px solid #FFFFFF` and `.avatar-img` (`object-fit: cover; border-radius: 50%`). Real avatar source: `https://github.com/shiliaiwei.png`.
    - **Active Status Dot**: `.avatar-status-dot` (11px, `#10B981`, `border: 2px solid #FFFFFF` cutout).
    - **Initials Fallback**: 2-character uppercase bold (`KC`, `SL`) on semantic tint background.
    - **Stacked Team Group**: Overlapping `.avatar-stack` with `-10px` negative margin and `+N` count chip (`#F1F5F9` background, `#0F172A` text).
12. **UNTRANSLATED PROPER NAMES POLICY (NEVER TRANSLATE BRAND/PERSON NAMES TO KHMER)**:
    - Proper names, personal names, brand identities, and technical product titles (e.g. `Shiliaiwei`, `Kosal Chan`, `PostgreSQL`, `GitHub`, `CSS`, `Google Sans`, `Outfit`) must **NEVER** be translated into Khmer words or phonetic transliteration.
    - They must always remain in their original Latin/English form across all localized UI views, documentation, and translations.
13. **TEXT BOUNDARY LIMIT & AUTO-WRAP MANDATE**:
    - All text blocks, headings, cards, table cells, badges, and paragraphs must gracefully wrap when reaching container boundaries (`overflow-wrap: break-word; word-wrap: break-word; word-break: break-word;`).
    - Horizontal clipping, unconstrained stretching, or container overflow is strictly prohibited.
14. **WEB APP & 2FA APPLICATION ARCHITECTURE STANDARD**:
    - **2FA Security**: Discrete 6-digit individual OTP input boxes with auto-tab progression, backspace retreat handling, and monospace secret backup key (`JBSWY3DPEHPK3PXP`) with 1-click copy.
    - **Admin & RBAC**: User role matrices (`OWNER`, `ADMIN`, `MEMBER`) with seat utilization statistics and permission editing actions.
    - **Billing & Subscriptions**: Plan tier comparison cards with active plan indicators and upgrade checkout triggers.
    - **API Keys & Security Audit Log**: Secret token generators (`sk_live_...`), key revocation, and live IP-stamped security event tables.
    - **Sprint Kanban & Timeline**: Multi-column sprint management (`Backlog`, `In Progress`, `Done`) with priority badges.
    - **Live Team Chat & Activity Feed**: Real-time messaging conversation threads with self/received bubbles and tap-clear input composers.
    - **Multi-Step Onboarding Form**: 4-stage visual progress tracker (`Profile` -> `Security 2FA` -> `Workspace` -> `Launch`) with validated step progression.
15. **CONCISE 2–3 WORDS BUTTON TEXT MANDATE**:
    - Every interactive button across all applications, modules, and dialogs must strictly use **two or three words maximum** (e.g. `Verify Code`, `Resend Code`, `Save Settings`, `Create Key`, `Export CSV`, `Next Step`, `Back Step`, `Confirm Payment`, `Send Message`, `Invite User`, `Delete Key`, `Switch KM`, `Copy Tokens`).
16. **MANDATORY PERSISTENT DESIGN RECORD RULE**:
    - Every design decision, component rule, physics standard, and platform specification must **ALWAYS** be permanently recorded into `DESIGN_DNA.md` and synchronized across all agent skills (`shiliaiwei-liquid-glass-standards` and `srievi-liquid-glass-standards`).
17. **Aa TYPOGRAPHY DESIGN SYSTEM & 8-LAYER TYPE SCALE**:
    - The type layer defines a scale, hierarchy, and set of text styles consistent, accessible, and expressive across the full range of product contexts (8 out of 8 core scales):
      1. **Display Large**: `48px`, `font-weight: 800`, line-height `1.15`, letter-spacing `-0.03em` (Hero titles).
      2. **Display Medium / H1**: `32px`, `font-weight: 700`, line-height `1.25`, letter-spacing `-0.02em` (Main headers).
      3. **Heading H2 & H3**: `22px / 18px`, `font-weight: 700`, line-height `1.30` (Section & card titles).
      4. **Subheading / Lead Text**: `18px`, `font-weight: 500`, line-height `1.50`, color `#475569`.
      5. **Body Large & Regular**: `16px / 14px / 15px`, `font-weight: 400`, line-height `1.60`, color `#0F172A`.
      6. **Monospace Code Tokens**: `JetBrains Mono`, `13px`, `font-weight: 500`, line-height `1.50` (API tokens, SQL).
      7. **Microcopy & Overline Captions**: `11px / 10px`, `font-weight: 700`, uppercase, letter-spacing `0.08em`.
      8. **Dual-Language Pairing (Outfit & Google Sans)**: Khmer requires line-height `1.45` to prevent diacritic clipping, paired seamlessly with English Outfit.
18. **ACCESSIBILITY DESIGN SYSTEM & 8-PILLAR a11y STANDARD**:
    - The accessibility foundation of the design system ensures every component and pattern is built inclusively from the start (8 out of 8 pillars):
      1. **WCAG 2.2 AAA Contrast**: Canvas White `#FAFCFF` vs Slate-900 `#0F172A` achieves 16.8:1 ratio (exceeds 7:1 AAA standard).
      2. **Visible Focus Rings**: High-visibility 2px solid `#10B981` outline with 2px offset on `:focus-visible`.
      3. **ARIA Semantics & Live Regions**: Explicit `aria-live="polite"` and semantic `role="status"` on dynamic alerts and tabs.
      4. **44x44px Touch Targets**: Minimum 44px tap targets on all mobile buttons and interactive links.
      5. **Reduced Motion Compliance**: `@media (prefers-reduced-motion: reduce)` support eliminating non-essential motion.
      6. **Semantic HTML5 Landmark Structure**: Sequential `header`, `nav`, `aside`, `main`, `section`, and `h1`-`h4`.
      7. **Text Boundary Wrap & 200% Zoom Reflow**: `overflow-wrap: break-word` preventing horizontal overflow under 200% zoom.
      8. **Dual-Language Khmer a11y**: Mandatory line-height `1.45` preventing stacked subscript (ជើង) and superscript vowel clipping.

---

## 2. Solid Color Tokens Registry (Closed Palette)

| Token Name | Hex / RGBA | Role & Visual Assignment |
|---|---|---|
| `--bg-main` | `#FAFCFF` | Pure White Canvas Background |
| `--bg-surface` | `rgba(255, 255, 255, 0.85)` | Liquid Glass Container Surface |
| `--bg-surface-hover` | `rgba(255, 255, 255, 0.96)` | High-Contrast Active Surface |
| `--bg-inner-glass` | `rgba(241, 245, 249, 0.85)` | Recessed Input & Preview Well Background |
| `--border-glass` | `rgba(0, 0, 0, 0.10)` | Precision Base Outline Border |
| `--border-glass-top` | `#FFFFFF` | Specular Top Reflection Lip |
| `--primary` | `#10B981` | Emerald Primary Action & Badges |
| `--primary-dark` | `#059669` | Deep Emerald 3D Depth Shadow |
| `--primary-light` | `#065F46` | High-Contrast Emerald Text |
| `--shiliaiwei-green` | `#58CC02` | High-Impact Eager CTA Green |
| `--shiliaiwei-blue` | `#1CB0F6` | Spark Blue Accent & Links |
| `--accent-cyan` | `#0891B2` | Technical Cyan Accent |
| `--accent-crimson` | `#FF0050` | Destructive Action Crimson |
| `--text-main` | `#0F172A` | Primary Headline & Body Slate-900 |
| `--text-muted` | `#475569` | Secondary Descriptive Slate-600 |
| `--text-dim` | `#64748B` | Subtle Metadata Slate-500 |

---

## 3. The 5 Permitted Button Variants & Geometry

### Pixel Dimensions Table:
- **Corner Radius**: Standard (`.btn`): **`9px`** | Compact (`.btn-sm`): **`6px`**
- **Specular Lip**: `border-top: 1px solid rgba(255, 255, 255, 0.45);`
- **Typography**: `font-weight: 700; text-transform: uppercase; letter-spacing: 0.053em;`

| # | Class | Solid Fill & Base Border | 3D Bottom Depth Shadow | Active Click Physics |
|---|---|---|---|---|
| 1 | `.btn-eager` | `#58CC02` solid fill<br>`border: 1px solid #46a302` | `box-shadow: 0 4px 0 #46a302` | `transform: translateY(3px); box-shadow: 0 1px 0 #46a302;` |
| 2 | `.btn-primary` | `#10B981` solid fill<br>`border: 1px solid #059669` | `box-shadow: 0 4px 0 #059669` | `transform: translateY(3px); box-shadow: 0 1px 0 #059669;` |
| 3 | `.btn-spark` | `#F0F9FF` solid fill<br>`border: 2px solid #BAE6FD` | `box-shadow: 0 4px 0 #BAE6FD` | `transform: translateY(3px); box-shadow: 0 1px 0 #BAE6FD;` |
| 4 | `.btn-glass` | `#FFFFFF` solid fill<br>`border: 1px solid rgba(0,0,0,0.12)` | `box-shadow: 0 4px 0 #CBD5E1` | `transform: translateY(3px); box-shadow: 0 1px 0 #CBD5E1;` |
| 5 | `.btn-crimson` | `#FF0050` solid fill<br>`border: 1px solid #D60043` | `box-shadow: 0 4px 0 #D60043` | `transform: translateY(3px); box-shadow: 0 1px 0 #D60043;` |

---

## 4. Multi-Platform Implementation Code Standards

### A. Web / CSS / React / Next.js / Vue
```css
/* Core Liquid Glass Container */
.liquid-card {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-top: 1px solid #FFFFFF;
  border-radius: 16px;
  padding: 24px;
}

/* 9px Duolingo-style Tactile Eager Button */
.btn-eager {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: #58CC02;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.053em;
  border: 1px solid #46a302;
  border-top: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 9px;
  box-shadow: 0 4px 0 #46a302;
  cursor: pointer;
  transition: transform 0.05s ease, box-shadow 0.05s ease;
}
.btn-eager:active {
  transform: translateY(3px);
  box-shadow: 0 1px 0 #46a302;
}
```

### B. Android / Jetpack Compose (Kotlin)
```kotlin
// Shiliaiwei Solid Color Tokens
val ShiliaiweiBgMain = Color(0xFFFAFCFF)
val ShiliaiweiEagerGreen = Color(0xFF58CC02)
val ShiliaiweiEagerDepth = Color(0xFF46A302)
val ShiliaiweiSlate900 = Color(0xFF0F172A)

// Tactile 9dp Corner Button with 3D Depth in Compose
@Composable
fun ShiliaiweiEagerButton(text: String, onClick: () -> Unit) {
    var isPressed by remember { mutableStateOf(false) }
    
    Box(
        modifier = Modifier
            .offset(y = if (isPressed) 3.dp else 0.dp)
            .background(ShiliaiweiEagerDepth, shape = RoundedCornerShape(9.dp))
            .padding(bottom = if (isPressed) 1.dp else 4.dp)
    ) {
        Surface(
            shape = RoundedCornerShape(9.dp),
            color = ShiliaiweiEagerGreen,
            border = BorderStroke(1.dp, Color.White.copy(alpha = 0.45f)),
            modifier = Modifier.clickable { onClick() }
        ) {
            Text(
                text = text.uppercase(),
                color = Color.White,
                fontWeight = FontWeight.Bold,
                letterSpacing = 0.053.em,
                modifier = Modifier.padding(horizontal = 20.dp, vertical = 10.dp)
            )
        }
    }
}
```

### C. iOS / SwiftUI (Swift)
```swift
// Shiliaiwei SwiftUI Design Engine
struct ShiliaiweiColors {
    static let bgMain = Color(hex: "#FAFCFF")
    static let eagerGreen = Color(hex: "#58CC02")
    static let eagerDepth = Color(hex: "#46A302")
    static let slate900 = Color(hex: "#0F172A")
}

// Duolingo Tactile 9px Button in SwiftUI
struct ShiliaiweiEagerButton: View {
    let title: String
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Text(title.uppercased())
                .font(.system(size: 14, weight: .bold))
                .tracking(0.053)
                .foregroundColor(.white)
                .padding(.horizontal, 20)
                .padding(.vertical, 10)
                .background(ShiliaiweiColors.eagerGreen)
                .cornerRadius(9)
                .overlay(
                    RoundedRectangle(cornerRadius: 9)
                        .stroke(Color.white.opacity(0.45), lineWidth: 1)
                )
        }
        .buttonStyle(TactileDepthButtonStyle(depthColor: ShiliaiweiColors.eagerDepth))
    }
}
```

### D. Flutter / Dart
```dart
// Shiliaiwei Flutter Color Palette
class ShiliaiweiPalette {
  static const bgMain = Color(0xFFFAFCFF);
  static const eagerGreen = Color(0xFF58CC02);
  static const eagerDepth = Color(0xFF46A302);
  static const slate900 = Color(0xFF0F172A);
}

// 9px Tactile Button Widget in Flutter
class ShiliaiweiButton extends StatefulWidget {
  final String label;
  final VoidCallback onPressed;
  const ShiliaiweiButton({Key? key, required this.label, required this.onPressed}) : super(key: key);

  @override
  _ShiliaiweiButtonState createState() => _ShiliaiweiButtonState();
}

class _ShiliaiweiButtonState extends State<ShiliaiweiButton> {
  bool _pressed = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => setState(() => _pressed = true),
      onTapUp: (_) {
        setState(() => _pressed = false);
        widget.onPressed();
      },
      child: Container(
        margin: EdgeInsets.only(top: _pressed ? 3.0 : 0.0),
        decoration: BoxDecoration(
          color: ShiliaiweiPalette.eagerGreen,
          borderRadius: BorderRadius.circular(9.0),
          border: Border.all(color: ShiliaiweiPalette.eagerDepth, width: 1.0),
          boxShadow: [
            BoxShadow(
              color: ShiliaiweiPalette.eagerDepth,
              offset: Offset(0, _pressed ? 1.0 : 4.0),
              blurRadius: 0,
            ),
          ],
        ),
        padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
        child: Text(
          widget.label.toUpperCase(),
          style: const TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.w700,
            letterSpacing: 0.8,
          ),
        ),
      ),
    );
  }
}
```

---

## 5. The 14 Core UI Elements Master Registry

1. **Input Field (`.ui-input`)**: Pre-filled message with tap auto-clear on focus, transparent placeholder, `border: 1px solid rgba(0,0,0,0.12); border-radius: 9px;`.
2. **Pill Badge / Tag (`.ui-badge`, `.comp-tag`)**: Base outline border with specular top white rim `border-top: 1px solid #FFFFFF;`, uppercase tracking `+0.053em`.
3. **Radio Selector (`.ui-radio`)**: Pure solid emerald center dot `#10B981` on selection with zero glow.
4. **Tooltip (`.ui-tooltip`)**: High-contrast Slate-900 floating chip `#0F172A` with `#FFFFFF` text and solid arrow.
5. **Toggle Switch (`.switch`)**: Smooth spring cubic-bezier glide `cubic-bezier(0.34, 1.56, 0.64, 1)` with 0.28s track morph.
6. **Loading Spinner (`.loading-spinner`)**: Solid 360-degree rotation animation with deep emerald stroke.
7. **Skeleton Pulse (`.skeleton-line`)**: `#E2E8F0` solid pulse placeholder with zero blur.
8. **Avatar & Identity (`.avatar-item`, `.avatar-stack`)**: Real GitHub profile photo `https://github.com/shiliaiwei.png` with 2px solid white cutout, 11px live emerald dot, initials fallback, and overlapping team stack.
9. **Table (`.ui-table`)**: Data table with horizontal row hover (`#F0F9FF`), vertical column hover (`#F8FAFC`), and crosshair target cell focus (`#E0F2FE` + `#0284C7`).
10. **Card Container**: White liquid crystal glass (`#FFFFFF; backdrop-filter: blur(16px); border-radius: 12px; border: 1px solid rgba(0,0,0,0.10); border-top: 1px solid #FFFFFF;`).
11. **Button Suite**: The 5 core 3D bottom extrusion variants (`.btn-eager`, `.btn-primary`, `.btn-spark`, `.btn-glass`, `.btn-crimson`) in 9px standard & 6px compact.
12. **Progress Indicator (`.progress-bar`)**: Solid emerald fill `#10B981` with recessed slate track `#E2E8F0`.
13. **Modal Overlay (`.modal-overlay`)**: Frosted glass scrim `rgba(15, 23, 42, 0.45)` with `backdrop-filter: blur(8px)` and white crystal dialog card.
14. **Dropdown Menu (`.dropdown-box`)**: Floating selection panel with shortcut badges (`.kbd-badge`), category labels, divider lines (`.dropdown-divider`), and danger actions.

---

## 6. The 25 Website Concept Modules

1. `sec_comp_security`: Multi-Factor Authentication & Zero-Trust Access
2. `sec_comp_event`: Keynote Summit 2026 & Live Workshop Registration
3. `sec_comp_about`: Studio Philosophy & Design Engineering Values
4. `sec_comp_privacy`: GDPR / CCPA Compliance & Privacy Protection
5. `sec_comp_features`: High-Performance Core Architecture & Features
6. `sec_comp_testimonials`: Enterprise Client Reviews & Verified Feedback
7. `sec_comp_affiliate`: Partner Network & Commission Earnings Dashboard
8. `sec_comp_coming_soon`: Early Access Countdown & Launch Notification
9. `sec_comp_compare`: Plan & Feature Matrix Comparison Table
10. `sec_comp_status`: Global Network & API Uptime Status Feed
11. `sec_comp_billing`: Invoicing, Payment Methods & Subscription Settings
12. `sec_comp_landing`: Product Landing Page with Hero CTA & Social Proof
13. `sec_comp_waitlist`: Private Beta Waitlist & Referral Queue
14. `sec_comp_press`: Brand Assets, Media Kit & Press Releases
15. `sec_comp_team`: Executive Leadership & Engineering Team Directory
16. `sec_comp_cart`: Checkout Summary, Promo Code & Cart Items
17. `sec_comp_search`: Real-Time Component & Knowledge Search Index
18. `sec_comp_careers`: Open Engineering Roles & Remote Benefits
19. `sec_comp_blog_hub`: Engineering Articles & Architecture Guides
20. `sec_comp_blog_post`: In-Depth Technical Case Study & Code Snippets
21. `sec_comp_contact`: Contact Form, Direct Office Channels & Inquiries
22. `sec_comp_pricing`: Tiered Subscription Cards (Starter, Pro, Enterprise)
23. `sec_comp_faq`: Accordion FAQ with Search & Technical Answers
24. `sec_comp_404`: Clean 404 Error Screen with Safe Return CTA
25. `sec_comp_login`: Single Sign-On, Passwordless Auth & Login Screen

---

## 7. Bilingual Khmer & English Switching Architecture

- **Mandatory Khmer Font**: `'Google Sans', 'Kantumruy Pro', sans-serif` via `body.lang-km` or `html[lang="km"] body`.
- **Latin Font**: `'Outfit', sans-serif`.
- **Zero-Emoji Switcher**: Vector globe icon `<i class="fa-solid fa-globe"></i>` with zero country flags.
- **Persistence**: `localStorage.getItem('shiliaiwei_lang')`.

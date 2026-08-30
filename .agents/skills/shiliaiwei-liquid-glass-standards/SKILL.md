---
name: shiliaiwei-liquid-glass-standards
description: Authoritative design standard and architectural rules for Shiliaiwei Liquid Glass, 14 Design System UI Elements, 25 Website Concepts, 12px/9px tactile sticker button physics, strict SOLID COLORS ONLY, zero-emoji / zero-symbol / zero-signs / zero-gray / zero-shadow / zero-glow / zero-hover policy, multi-platform implementation (Web, React, Compose, SwiftUI, Flutter), and mandatory Google Sans for Khmer.
---

# Shiliaiwei / VibrandHub Liquid Glass Design System Standard

- **Primary Live Production URL**: [`https://vibrandhub.pages.dev`](https://vibrandhub.pages.dev)
- **GitHub Repository**: [`https://github.com/shiliaiwei/shiliaiwei-design-dna`](https://github.com/shiliaiwei/shiliaiwei-design-dna)
- **Cloudflare Pages Project**: `vibrandhub`

This skill provides authoritative architectural rules, strict visual directives, and multi-platform implementation blueprints (Web/CSS, Android/Compose, iOS/SwiftUI, Flutter/Dart) for **Shiliaiwei / VibrandHub Solid Liquid Glass** across all platforms, frameworks, and programming languages.

---

## 1. The 16 Immutable Directives

1. **Directive 1: ZERO EMOJI POLICY**
   - Emojis (smileys, flames, rockets, checks, sparkles, flags) are strictly forbidden across UI code, documentation, and assistant responses.

2. **Directive 2: ZERO ICONS & ZERO DECORATIVE GLYPHS POLICY (PURE TYPOGRAPHY)**
   - No icon fonts, no arbitrary Unicode glyphs, and no decorative symbols.
   - Use high-contrast monospace code tokens, semantic status pills (`ACTIVE`, `PROD`, `VERIFIED`, `ENABLED`, `PENDING`), and pure typography labels.

3. **Directive 3: ZERO GRAY (No Dull/Muddy Grays)**
   - No generic dull grays (`#808080`, `#999999`, `#cccccc`).
   - High-contrast Canvas White (`#FAFCFF`, `#FFFFFF`) paired with Slate-900 typography (`#0F172A`), Slate-600 (`#475569`), and Slate-500 (`#64748B`).

4. **Directive 4: ZERO GRADIENTS (100% Solid Colors Only)**
   - No linear, radial, mesh, or conic gradients. Every element uses single solid color tokens.

5. **Directive 5: ZERO MIX COLOR**
   - Exactly ONE solid color token per element. No color blending or overlays.

6. **Directive 6: STRICT CLOSED COLOR PALETTE**
   - NEVER use, invent, or introduce colors outside the explicit `:root` tokens.
   - Permitted Palette: `#FAFCFF`, `#FFFFFF`, `#10B981`, `#059669`, `#065F46`, `#58CC02`, `#1CB0F6`, `#0891B2`, `#FF0050`, `#0F172A`, `#475569`, `#64748B`, `#A7F3D0`, `#BAE6FD`, `#FECDD3`, `#E2E8F0`, `#F1F5F9`.

7. **Directive 7: ZERO SHADOW & ZERO GLOW**
   - No blurry drop shadows or ambient glow orbs. All elements use crisp solid borders (`border: 1px solid rgba(0,0,0,0.10); border-top: 1px solid #FFFFFF; box-shadow: none;`).

8. **Directive 8: ZERO HOVER STYLE (No Floating/Lifting)**
   - No hover lifts (`translateY`), shadow alterations, or background swaps. Layouts remain static and stable.

9. **Directive 9: REALISTIC MESSAGE DATA & TAP-CURSOR AUTO-CLEAR**
   - Input fields pre-filled with realistic production messages that auto-clear on focus/tap and restore on empty blur.

10. **Directive 10: MANDATORY GOOGLE SANS FOR KHMER & 9px TACTILE STICKER BUTTONS**
    - All Khmer text strictly uses `'Google Sans', 'Kantumruy Pro', sans-serif`.
    - Standard Button radius: **`9px`** (`var(--radius-buttons)`), Compact: **`6px`** (`var(--radius-sm)`).
    - 3D bottom shadow depth (`0 4px 0 <depth-color>`) with active click compression (`transform: translateY(3px); box-shadow: 0 1px 0 <depth-color>;`).

11. **Directive 11: AVATAR & IDENTITY ARCHITECTURE**
    - User Photo: Round avatar with `border: 2px solid #FFFFFF` and `.avatar-img: object-fit: cover; border-radius: 50%;`. Example: `https://github.com/shiliaiwei.png`.
    - Active Status Dot: 11px diameter, `#10B981`, with `border: 2px solid #FFFFFF` cutout.
    - Initials Fallback: 2-character uppercase bold on semantic tint background (`KC`, `SL`).
    - Stacked Team Group: `-10px` negative margin overlapping with `+N` count chip.

12. **Directive 12: UNTRANSLATED PROPER NAMES POLICY**
    - Proper names, personal names, brand identities, and technical product titles (`Shiliaiwei`, `Kosal Chan`, `PostgreSQL`, `GitHub`, `CSS`, `Google Sans`, `Outfit`) must **NEVER** be translated to Khmer. They must remain in their original Latin/English form.

13. **Directive 13: TEXT BOUNDARY LIMIT & AUTO-WRAP MANDATE**
    - All text blocks, badges, table cells, and paragraphs must wrap naturally when reaching container limits (`overflow-wrap: break-word; word-wrap: break-word; word-break: break-word;`). Single-line overflow and clipping are forbidden.

14. **Directive 14: WEB APP & 2FA APPLICATION ARCHITECTURE STANDARD**
    - **2FA Security**: Discrete 6-digit individual OTP input boxes with auto-tab progression, backspace retreat handling, and monospace secret backup key (`JBSWY3DPEHPK3PXP`) with 1-click copy.
    - **Admin & RBAC**: User role matrices (`OWNER`, `ADMIN`, `MEMBER`) with seat utilization statistics and permission editing actions.
    - **Billing & Subscriptions**: Plan tier comparison cards with active plan indicators and upgrade checkout triggers.
    - **API Keys & Security Audit Log**: Secret token generators (`sk_live_...`), key revocation, and live IP-stamped security event tables.
    - **Sprint Kanban & Timeline**: Multi-column sprint management (`Backlog`, `In Progress`, `Done`) with priority badges.
    - **Live Team Chat & Activity Feed**: Real-time messaging conversation threads with self/received bubbles and tap-clear input composers.
    - **Multi-Step Onboarding Form**: 4-stage visual progress tracker (`Profile` -> `Security 2FA` -> `Workspace` -> `Launch`) with validated step progression.

15. **Directive 15: CONCISE 2–3 WORDS BUTTON TEXT MANDATE**
    - Every interactive button across all applications, modules, and dialogs must strictly use **two or three words maximum** (`Verify Code`, `Resend Code`, `Save Settings`, `Create Key`, `Export CSV`, `Next Step`, `Back Step`, `Confirm Payment`, `Send Message`, `Invite User`, `Delete Key`, `Switch KM`, `Copy Tokens`).

16. **Directive 16: MANDATORY PERSISTENT DESIGN RECORD RULE**
    - Every design decision, component rule, physics standard, and platform specification must **ALWAYS** be permanently recorded into `DESIGN_DNA.md` and synchronized across all agent skills.

17. **Directive 17: Aa TYPOGRAPHY DESIGN SYSTEM & 8-LAYER TYPE SCALE**
    - The type layer defines a scale, hierarchy, and set of text styles consistent, accessible, and expressive across the full range of product contexts (8 out of 8 core scales):
      1. **Display Large**: `48px`, `font-weight: 800`, line-height `1.15`, letter-spacing `-0.03em` (Hero titles).
      2. **Display Medium / H1**: `32px`, `font-weight: 700`, line-height `1.25`, letter-spacing `-0.02em` (Main headers).
      3. **Heading H2 & H3**: `22px / 18px`, `font-weight: 700`, line-height `1.30` (Section & card titles).
      4. **Subheading / Lead Text**: `18px`, `font-weight: 500`, line-height `1.50`, color `#475569`.
      5. **Body Large & Regular**: `16px / 14px / 15px`, `font-weight: 400`, line-height `1.60`, color `#0F172A`.
      6. **Monospace Code Tokens**: `JetBrains Mono`, `13px`, `font-weight: 500`, line-height `1.50` (API tokens, SQL).
      7. **Microcopy & Overline Captions**: `11px / 10px`, `font-weight: 700`, uppercase, letter-spacing `0.08em`.
      8. **Dual-Language Pairing (Outfit & Google Sans)**: Khmer requires line-height `1.45` to prevent diacritic clipping, paired seamlessly with English Outfit.

---

## 2. Multi-Platform Implementation Guide

### Web (HTML/CSS/JS/React/Next.js/Vue)
```css
.btn-eager {
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
}
.btn-eager:active {
  transform: translateY(3px);
  box-shadow: 0 1px 0 #46a302;
}
```

### Android (Jetpack Compose / Kotlin)
```kotlin
val ShiliaiweiEagerGreen = Color(0xFF58CC02)
val ShiliaiweiEagerDepth = Color(0xFF46A302)

@Composable
fun ShiliaiweiButton(text: String, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .background(ShiliaiweiEagerDepth, shape = RoundedCornerShape(9.dp))
            .padding(bottom = 4.dp)
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

### iOS (SwiftUI / Swift)
```swift
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
                .background(Color(hex: "#58CC02"))
                .cornerRadius(9)
                .overlay(RoundedRectangle(cornerRadius: 9).stroke(Color.white.opacity(0.45), lineWidth: 1))
        }
        .shadow(color: Color(hex: "#46A302"), radius: 0, x: 0, y: 4)
    }
}
```

### Flutter (Dart)
```dart
class ShiliaiweiButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;
  const ShiliaiweiButton({required this.label, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Color(0xFF58CC02),
        borderRadius: BorderRadius.circular(9.0),
        border: Border.all(color: Color(0xFF46A302), width: 1.0),
        boxShadow: [
          BoxShadow(color: Color(0xFF46A302), offset: Offset(0, 4), blurRadius: 0),
        ],
      ),
      padding: EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
      child: Text(label.toUpperCase(), style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, letterSpacing: 0.8)),
    );
  }
}
```

---

## 3. The 14 Core UI Elements
1. **Input Field**: Pre-filled message with focus auto-clear.
2. **Pill Badge / Tag**: Base outline + top specular white rim.
3. **Radio Selector**: Solid emerald center dot.
4. **Tooltip**: Floating Slate-900 chip with solid arrow.
5. **Toggle Switch**: Cubic-bezier spring glide (`0.28s`).
6. **Loading Spinner**: Solid 360-degree rotation.
7. **Skeleton Pulse**: `#E2E8F0` solid pulse.
8. **Avatar & Stack**: Real GitHub photo + initials + active dot + team group.
9. **Table**: Crosshair row (`#F0F9FF`), column (`#F8FAFC`), and cell (`#E0F2FE`) hover.
10. **Card Container**: White liquid crystal glass with 16px blur & specular edge.
11. **Button Suite**: The 5 core 3D bottom extrusion variants.
12. **Progress Indicator**: Solid emerald fill `#10B981`.
13. **Modal Overlay**: Frosted glass scrim `rgba(15, 23, 42, 0.45)` with 8px blur.
14. **Dropdown Menu**: Floating panel with keyboard shortcuts (`.kbd-badge`) and separators.

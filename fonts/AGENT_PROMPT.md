# Master Font Resource Catalog & AI Agent Instruction Prompt

## Purpose

Use this prompt to instruct any AI coding agent, graphic designer agent, or automated video/web generator to leverage this local repository of 86 high-quality fonts for Khmer and Latin typography.

---

## 1. Copy-Paste Prompt for Other AI Agents

```markdown
### SYSTEM INSTRUCTION: Authoritative Local Typography & Font Assets
You have access to an authoritative, organized local font repository at:
`/Users/Apple16/Desktop/ttt/FONTS/`

When designing, generating, or coding web applications, HTML/CSS cards, posters, video lessons, banners, or PDF documents, ALWAYS load and reference fonts directly from this directory.

#### Recommended Font Roles:
1. **Khmer Titles & Big Headers**: Use fonts from `01_Khmer_Display_Title/`:
   - Traditional / Royal Header: `Moul-Regular.ttf` or `Kh-Muol.ttf`
   - Modern Impact Headline: `Koulen-Regular.ttf` or `Bokor-Regular.ttf`
   - Artistic / Decorative: `Bayon-Regular.ttf`, `Fasthand-Regular.ttf`, `Dangrek-Regular.ttf`
2. **Khmer Body Text & Mobile UI**: Use fonts from `02_Khmer_Body_Text/`:
   - Clean Screen Reading: `Battambang-Regular.ttf` (and `Battambang-Bold.ttf`)
   - Educational / Balanced: `Content-Regular.ttf`, `Siemreap-Regular.ttf`
   - Elegant Serif-Style: `Hanuman-Regular.ttf`, `KdamThmor-Regular.ttf`
3. **Official, Ministry & Formal Khmer**: Use fonts from `03_Khmer_Institutional_Official/`:
   - Ministry of Economy & Finance Standard: `khmer_mef1.ttf`, `khmer_mef2.ttf`
   - Classic Government Desktop: `khmeros.ttf`, `KhmerOSBattambang-Regular.ttf`, `KhmerOS_siemreap.ttf`
4. **English / Latin Modern UI**: Use fonts from `04_Latin_Modern_UI/`:
   - Premium Modern UI: `inter_regular.otf`, `inter_medium.otf`, `inter_bold.otf`
   - Sleek Branding / High-Tech: `monasans_regular.otf`, `tt_firs_neue_normal.ttf`
   - Friendly / Rounded: `nunito_regular.ttf`, `nunito_bold.ttf`
   - Neutral Sans: `roboto-regular.ttf`, `OpenSans-Regular.ttf`, `SourceSansPro-Regular.ttf`
5. **Monospace & Code**: Use fonts from `05_Monospace_Code/`:
   - `RobotoMono-Regular.ttf` or `roboto_mono.ttf`

#### CSS @font-face Template:
```css
@font-face {
  font-family: 'KhmerMoul';
  src: url('/Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Moul-Regular.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'KhmerBattambang';
  src: url('/Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Battambang-Regular.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'InterUI';
  src: url('/Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_regular.otf') format('opentype');
  font-display: swap;
}
```

#### Python (PIL / Pillow) Loading Template:
```python
from PIL import ImageFont
font_title = ImageFont.truetype('/Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Moul-Regular.ttf', size=48)
font_body = ImageFont.truetype('/Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Battambang-Regular.ttf', size=24)
```
```

---

## 2. Complete Inventory by Category

### Khmer Display & Title Fonts (`01_Khmer_Display_Title/`)
*Headlines, banners, posters, video title hooks, hero typography* - **18 font files**

| Filename | Format | Size | Absolute File URL |
| :--- | :--- | :--- | :--- |
| `Angkor-Regular.ttf` | TTF | 167.5 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Angkor-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Angkor-Regular.ttf) |
| `Bayon-Regular.ttf` | TTF | 142.2 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Bayon-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Bayon-Regular.ttf) |
| `Bokor-Regular.ttf` | TTF | 240.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Bokor-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Bokor-Regular.ttf) |
| `Chenla-Regular.ttf` | TTF | 186.2 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Chenla-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Chenla-Regular.ttf) |
| `Dangrek-Regular.ttf` | TTF | 162.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Dangrek-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Dangrek-Regular.ttf) |
| `Fasthand-Regular.ttf` | TTF | 97.0 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Fasthand-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Fasthand-Regular.ttf) |
| `Freehand-Regular.ttf` | TTF | 350.5 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Freehand-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Freehand-Regular.ttf) |
| `Kh-Muol.ttf` | TTF | 229.1 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Kh-Muol.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Kh-Muol.ttf) |
| `Khmer-OS-freehand.ttf` | TTF | 232.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Khmer-OS-freehand.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Khmer-OS-freehand.ttf) |
| `KhmerOS_muollight.ttf` | TTF | 227.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/KhmerOS_muollight.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/KhmerOS_muollight.ttf) |
| `Koulen-Regular.ttf` | TTF | 140.0 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Koulen-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Koulen-Regular.ttf) |
| `Metal-Regular.ttf` | TTF | 299.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Metal-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Metal-Regular.ttf) |
| `Moul-Regular.ttf` | TTF | 278.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Moul-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Moul-Regular.ttf) |
| `Moulpali-Regular.ttf` | TTF | 200.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Moulpali-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Moulpali-Regular.ttf) |
| `OdorMeanChey-Regular.ttf` | TTF | 203.0 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/OdorMeanChey-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/OdorMeanChey-Regular.ttf) |
| `Preahvihear-Regular.ttf` | TTF | 147.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Preahvihear-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Preahvihear-Regular.ttf) |
| `Taprom-Regular.ttf` | TTF | 231.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Taprom-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/Taprom-Regular.ttf) |
| `khmer_moulpali_regular.ttf` | TTF | 96.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/khmer_moulpali_regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/01_Khmer_Display_Title/khmer_moulpali_regular.ttf) |


### Khmer Body & Reading Text (`02_Khmer_Body_Text/`)
*Articles, paragraphs, captions, mobile UI text, educational descriptions* - **21 font files**

| Filename | Format | Size | Absolute File URL |
| :--- | :--- | :--- | :--- |
| `Battambang-Bold.ttf` | TTF | 56.2 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Battambang-Bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Battambang-Bold.ttf) |
| `Battambang-Regular.ttf` | TTF | 72.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Battambang-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Battambang-Regular.ttf) |
| `Content-Bold.ttf` | TTF | 198.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Content-Bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Content-Bold.ttf) |
| `Content-Regular.ttf` | TTF | 205.2 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Content-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Content-Regular.ttf) |
| `Hanuman-Bold.ttf` | TTF | 82.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Hanuman-Bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Hanuman-Bold.ttf) |
| `Hanuman-Regular.ttf` | TTF | 87.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Hanuman-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Hanuman-Regular.ttf) |
| `Kantumruy-Bold.ttf` | TTF | 33.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kantumruy-Bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kantumruy-Bold.ttf) |
| `Kantumruy-Light.ttf` | TTF | 34.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kantumruy-Light.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kantumruy-Light.ttf) |
| `Kantumruy-Regular.ttf` | TTF | 33.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kantumruy-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kantumruy-Regular.ttf) |
| `KdamThmor-Regular.ttf` | TTF | 43.5 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/KdamThmor-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/KdamThmor-Regular.ttf) |
| `Kh-Content.ttf` | TTF | 177.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kh-Content.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kh-Content.ttf) |
| `Kh-Kangrey.ttf` | TTF | 154.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kh-Kangrey.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Kh-Kangrey.ttf) |
| `Khmer-Regular.ttf` | TTF | 61.0 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Khmer-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Khmer-Regular.ttf) |
| `Niradei-Regular.ttf` | TTF | 127.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Niradei-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Niradei-Regular.ttf) |
| `Nokora-Bold.ttf` | TTF | 30.0 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Nokora-Bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Nokora-Bold.ttf) |
| `Nokora-Regular.ttf` | TTF | 38.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Nokora-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Nokora-Regular.ttf) |
| `Siemreap-Regular.ttf` | TTF | 178.1 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Siemreap-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Siemreap-Regular.ttf) |
| `Suwannaphum-Regular.ttf` | TTF | 64.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Suwannaphum-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/Suwannaphum-Regular.ttf) |
| `khmer_hanuman_bold.ttf` | TTF | 101.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/khmer_hanuman_bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/khmer_hanuman_bold.ttf) |
| `khmer_hanuman_light.ttf` | TTF | 101.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/khmer_hanuman_light.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/khmer_hanuman_light.ttf) |
| `khmer_hanuman_regular.ttf` | TTF | 106.2 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/khmer_hanuman_regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/02_Khmer_Body_Text/khmer_hanuman_regular.ttf) |


### Khmer Institutional & Official Documents (`03_Khmer_Institutional_Official/`)
*Formal letters, ministry decrees (MEF/PPP), dictionary definitions, legal texts* - **10 font files**

| Filename | Format | Size | Absolute File URL |
| :--- | :--- | :--- | :--- |
| `KhmerOSBattambang-Regular.ttf` | TTF | 300.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/KhmerOSBattambang-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/KhmerOSBattambang-Regular.ttf) |
| `KhmerOS_siemreap.ttf` | TTF | 129.1 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/KhmerOS_siemreap.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/KhmerOS_siemreap.ttf) |
| `KhmerOScontent.ttf` | TTF | 195.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/KhmerOScontent.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/KhmerOScontent.ttf) |
| `khbaphnom_limonr1_230.ttf` | TTF | 496.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khbaphnom_limonr1_230.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khbaphnom_limonr1_230.ttf) |
| `khmer_mef1.ttf` | TTF | 224.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmer_mef1.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmer_mef1.ttf) |
| `khmer_mef2.ttf` | TTF | 302.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmer_mef2.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmer_mef2.ttf) |
| `khmeros.ttf` | TTF | 292.1 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmeros.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmeros.ttf) |
| `khmeros_battambang.ttf` | TTF | 202.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmeros_battambang.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmeros_battambang.ttf) |
| `khmeros_sys.ttf` | TTF | 259.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmeros_sys.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmeros_sys.ttf) |
| `khmerossiemreap.ttf` | TTF | 262.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmerossiemreap.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/03_Khmer_Institutional_Official/khmerossiemreap.ttf) |


### Latin & Modern UI Fonts (`04_Latin_Modern_UI/`)
*English body text, dashboards, sleek modern interfaces, social media cards* - **30 font files**

| Filename | Format | Size | Absolute File URL |
| :--- | :--- | :--- | :--- |
| `OpenSans-Regular.ttf` | TTF | 104.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/OpenSans-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/OpenSans-Regular.ttf) |
| `OpenSans-Semibold.ttf` | TTF | 108.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/OpenSans-Semibold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/OpenSans-Semibold.ttf) |
| `SourceSansPro-Bold.ttf` | TTF | 241.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/SourceSansPro-Bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/SourceSansPro-Bold.ttf) |
| `SourceSansPro-Regular.ttf` | TTF | 242.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/SourceSansPro-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/SourceSansPro-Regular.ttf) |
| `SourceSansPro-Regular_alt.ttf` | TTF | 262.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/SourceSansPro-Regular_alt.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/SourceSansPro-Regular_alt.ttf) |
| `font.otf` | OTF | 29.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/font.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/font.otf) |
| `helvetica.ttf` | TTF | 305.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/helvetica.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/helvetica.ttf) |
| `inter_bold.otf` | OTF | 248.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_bold.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_bold.otf) |
| `inter_bold_italic.otf` | OTF | 255.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_bold_italic.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_bold_italic.otf) |
| `inter_italic.otf` | OTF | 248.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_italic.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_italic.otf) |
| `inter_light.otf` | OTF | 245.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_light.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_light.otf) |
| `inter_light_italic.otf` | OTF | 254.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_light_italic.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_light_italic.otf) |
| `inter_medium.otf` | OTF | 247.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_medium.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_medium.otf) |
| `inter_medium_italic.otf` | OTF | 254.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_medium_italic.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_medium_italic.otf) |
| `inter_regular.otf` | OTF | 238.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_regular.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_regular.otf) |
| `inter_semibold.otf` | OTF | 248.1 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_semibold.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_semibold.otf) |
| `inter_semibold_italic.otf` | OTF | 255.0 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_semibold_italic.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/inter_semibold_italic.otf) |
| `monasans_regular.otf` | OTF | 33.0 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/monasans_regular.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/monasans_regular.otf) |
| `monasans_semibold.otf` | OTF | 33.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/monasans_semibold.otf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/monasans_semibold.otf) |
| `nunito_black.ttf` | TTF | 128.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_black.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_black.ttf) |
| `nunito_bold.ttf` | TTF | 129.1 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_bold.ttf) |
| `nunito_italic.ttf` | TTF | 132.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_italic.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_italic.ttf) |
| `nunito_light.ttf` | TTF | 129.1 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_light.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_light.ttf) |
| `nunito_regular.ttf` | TTF | 129.1 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/nunito_regular.ttf) |
| `poppins-medium_0.ttf` | TTF | 268.6 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/poppins-medium_0.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/poppins-medium_0.ttf) |
| `roboto-light.ttf` | TTF | 166.4 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/roboto-light.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/roboto-light.ttf) |
| `roboto-regular.ttf` | TTF | 167.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/roboto-regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/roboto-regular.ttf) |
| `tt_firs_neue_demi_bold.ttf` | TTF | 237.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/tt_firs_neue_demi_bold.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/tt_firs_neue_demi_bold.ttf) |
| `tt_firs_neue_medium.ttf` | TTF | 236.0 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/tt_firs_neue_medium.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/tt_firs_neue_medium.ttf) |
| `tt_firs_neue_normal.ttf` | TTF | 236.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/tt_firs_neue_normal.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/04_Latin_Modern_UI/tt_firs_neue_normal.ttf) |


### Monospace & Code Fonts (`05_Monospace_Code/`)
*Source code, JSON data viewers, serial IDs, terminal logs* - **3 font files**

| Filename | Format | Size | Absolute File URL |
| :--- | :--- | :--- | :--- |
| `RobotoMono-Regular.ttf` | TTF | 85.2 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/05_Monospace_Code/RobotoMono-Regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/05_Monospace_Code/RobotoMono-Regular.ttf) |
| `roboto_mono.ttf` | TTF | 111.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/05_Monospace_Code/roboto_mono.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/05_Monospace_Code/roboto_mono.ttf) |
| `roboto_mono_regular.ttf` | TTF | 84.9 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/05_Monospace_Code/roboto_mono_regular.ttf](file:///Users/Apple16/Desktop/ttt/FONTS/05_Monospace_Code/roboto_mono_regular.ttf) |


### Icon & Symbol Fonts (`06_Icon_Symbols/`)
*Vector glyphs, brand logos, UI symbols* - **3 font files**

| Filename | Format | Size | Absolute File URL |
| :--- | :--- | :--- | :--- |
| `Font%20Awesome%207%20Brands-Regular-400.otf` | OTF | 194.7 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/06_Icon_Symbols/Font%20Awesome%207%20Brands-Regular-400.otf](file:///Users/Apple16/Desktop/ttt/FONTS/06_Icon_Symbols/Font%20Awesome%207%20Brands-Regular-400.otf) |
| `Font%20Awesome%207%20Free-Regular-400.otf` | OTF | 85.3 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/06_Icon_Symbols/Font%20Awesome%207%20Free-Regular-400.otf](file:///Users/Apple16/Desktop/ttt/FONTS/06_Icon_Symbols/Font%20Awesome%207%20Free-Regular-400.otf) |
| `Font%20Awesome%207%20Free-Solid-900.otf` | OTF | 400.8 KB | [file:///Users/Apple16/Desktop/ttt/FONTS/06_Icon_Symbols/Font%20Awesome%207%20Free-Solid-900.otf](file:///Users/Apple16/Desktop/ttt/FONTS/06_Icon_Symbols/Font%20Awesome%207%20Free-Solid-900.otf) |


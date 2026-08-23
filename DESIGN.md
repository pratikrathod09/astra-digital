---
name: Astra Digital System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c90a0'
  outline-variant: '#424654'
  surface-tint: '#b0c6ff'
  primary: '#b0c6ff'
  on-primary: '#002d6e'
  primary-container: '#558dff'
  on-primary-container: '#002761'
  inverse-primary: '#0058ca'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffb690'
  on-tertiary: '#542100'
  tertiary-container: '#e86d17'
  on-tertiary-container: '#4a1c00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001944'
  on-primary-fixed-variant: '#00429b'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#331100'
  on-tertiary-fixed-variant: '#783200'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a premium eCommerce growth agency, blending the precision of developer-centric tools with the polish of high-end consumer brands. The aesthetic is a fusion of **Modern Corporate** and **Dark-Mode Minimalism**, drawing inspiration from industry leaders like Linear and Vercel.

The target audience consists of high-growth founders and enterprise stakeholders who value technical excellence and measurable results. The UI evokes a sense of "engineered performance" through strict grid adherence, subtle depth, and a high-contrast dark interface that allows data and imagery to take center stage.

## Colors

The palette is anchored in a true "Premium Black" (#050505), which provides a foundation for high-performance visual depth. 

- **Primary (Electric Blue):** Used for critical calls to action and interactive states.
- **Secondary (Deep Purple):** Employed for subtle radial glows, gradients, and secondary highlights to add a sense of technological sophistication.
- **Surface & Background:** The primary background is the absolute black, while nested containers use a slightly elevated surface color (#0F0F0F) to provide hierarchy.
- **Accents:** Borders are strictly semi-transparent white (#FFFFFF10), ensuring they remain subtle against the dark background.

## Typography

This design system utilizes a high-contrast typographic scale to drive information hierarchy. **Inter** is the primary typeface for its neutrality and legibility at all scales.

- **Headlines:** Feature tight letter-spacing and substantial weights to create a "bold" impact.
- **Body Text:** Employs generous leading (1.6x) to ensure maximum readability against the dark background, reducing eye strain.
- **Labels:** We introduce **Geist** for utility labels and badges to provide a subtle technical/developer-centric feel.
- **Responsive:** Display sizes aggressively scale down for mobile while maintaining their negative letter-spacing for character.

## Layout & Spacing

The layout philosophy follows a strict **Fluid Grid** model with significant vertical whitespace to emphasize the "Premium" nature of the brand.

- **Grid:** A 12-column grid system is used for desktop (1280px max-width), transitioning to a single-column layout with 24px side margins for mobile.
- **Sectioning:** Content sections are separated by large vertical gaps (80px to 120px) to give each value proposition room to breathe.
- **Alignment:** Elements should adhere to a 4px baseline grid to maintain rigorous mathematical alignment across all components.

## Elevation & Depth

Depth in this design system is achieved through light, not shadow. 

- **Tonal Layers:** Elevation is primarily communicated by shifting the background color from #050505 (Base) to #0F0F0F (Surface). 
- **Radial Glows:** To emphasize specific areas (like a primary hero or a featured card), use a soft, large-radius radial gradient behind the component. Use #2E7BFF at 10-15% opacity, blurring out to 100px.
- **Borders:** Instead of heavy shadows, use a 1px solid #FFFFFF10 border. For "Active" or "Floating" elements, increase the border opacity to #FFFFFF20 or add a subtle 0.5px inner-stroke to simulate a glass edge.
- **Shadows:** When used for menus or modals, shadows are ultra-soft: `0 20px 40px rgba(0,0,0,0.5)`.

## Shapes

The shape language is consistent and modern. Most interactive elements utilize a **12px (0.75rem)** radius.

- **Cards & Sections:** 16px corner radius to feel substantial.
- **Buttons & Inputs:** 12px corner radius for a balanced, modern look.
- **Badges/Chips:** Full pill-shape (999px) to contrast against the more structural rectangular grid.
- **Consistency:** Avoid mixing sharp and rounded corners within the same component group.

## Components

- **Buttons:** Primary buttons use the Electric Blue background with white text. Secondary buttons are "Ghost" style with a 1px #FFFFFF10 border that brightens on hover.
- **Cards:** Cards use the #0F0F0F background, a 1px #FFFFFF10 border, and no shadow. On hover, the border color should transition to #FFFFFF25.
- **Badges:** Pill-shaped, using a low-opacity tint of the accent color (e.g., 10% Blue background with 100% Blue text).
- **Inputs:** Dark field (#050505) with 1px border. Focus state triggers a 1px Electric Blue border and a very subtle blue outer glow.
- **Lists:** Clean rows separated by 1px #FFFFFF08 dividers. Use the Geist font for metadata or timestamps within list items.
- **Radial Highlights:** Integrated into the background of key sections to guide the user's eye toward the primary CTA.
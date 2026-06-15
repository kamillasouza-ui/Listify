---
name: Kawaii Tech Glass
colors:
  surface: '#1a0046'
  surface-dim: '#1a0046'
  surface-bright: '#432879'
  surface-container-lowest: '#140039'
  surface-container-low: '#24005b'
  surface-container: '#28065f'
  surface-container-high: '#331669'
  surface-container-highest: '#3e2375'
  on-surface: '#eaddff'
  on-surface-variant: '#d4c1d1'
  inverse-surface: '#eaddff'
  inverse-on-surface: '#391e70'
  outline: '#9d8c9a'
  outline-variant: '#50424f'
  surface-tint: '#fcaaff'
  primary: '#fcaaff'
  on-primary: '#580064'
  primary-container: '#831c91'
  on-primary-container: '#faa0ff'
  inverse-primary: '#9631a3'
  secondary: '#ffaed8'
  on-secondary: '#610045'
  secondary-container: '#880762'
  on-secondary-container: '#ff92cf'
  tertiary: '#ffafd5'
  on-tertiary: '#620042'
  tertiary-container: '#941366'
  on-tertiary-container: '#ffa5d1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd6fc'
  primary-fixed-dim: '#fcaaff'
  on-primary-fixed: '#36003e'
  on-primary-fixed-variant: '#7a0f88'
  secondary-fixed: '#ffd8e9'
  secondary-fixed-dim: '#ffaed8'
  on-secondary-fixed: '#3c0029'
  on-secondary-fixed-variant: '#880762'
  tertiary-fixed: '#ffd8e8'
  tertiary-fixed-dim: '#ffafd5'
  on-tertiary-fixed: '#3d0027'
  on-tertiary-fixed-variant: '#89035e'
  background: '#1a0046'
  on-background: '#eaddff'
  surface-variant: '#3e2375'
typography:
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.1'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-padding: 24px
  gutter: 16px
---

## Brand & Style

This design system establishes a visual language that bridges the gap between high-energy tech aesthetics and soft, approachable "Kawaii" influences. The personality is unapologetically vibrant and youthful, designed to make task management feel less like a chore and more like a playful, rewarding experience.

The core style is a fusion of **Glassmorphism** and **Kawaii-Tech**. It utilizes deep, immersive backgrounds contrasted with translucent, frosted-glass surfaces that appear to float in a digital ether. The "Tech" element is represented by clean, geometric precision and glowing accents, while the "Kawaii" influence manifests through extremely high border radii, friendly proportions, and a lush, candy-toned palette. The result is a UI that feels modern, tactile, and welcoming.

## Colors

The color strategy relies on a sophisticated hierarchy of purples and pinks to create depth and focus. 

- **Primary Background:** The deep purple (#462C7D) serves as the "infinite" canvas, providing a dark, stable foundation that allows glass layers to pop.
- **Action & Brand:** Vibrant Magenta (#831C91) is the primary engine for interaction, reserved for the most important actions and core brand identity.
- **Accents & Interaction:** Bright Pink (#D552A3) draws the eye to interactive icons and status highlights, while Soft Pink (#FF70BF) provides a gentle contrast for secondary containers and input surfaces.
- **Contrast:** White (#FFFFFF) is used with varying levels of opacity to create the "glass" effect and ensure high-contrast legibility for all text and iconography.

## Typography

The typography pairing reinforces the "Kawaii-Tech" duality. **Sora** is utilized for headlines to provide a geometric, futuristic, and bold "tech" feel. Its wide stance and unique letterforms create a distinctive editorial look for headers.

For body copy and functional labels, **Plus Jakarta Sans** provides a soft, rounded, and highly legible experience. This choice maintains the friendly, approachable nature of the brand while ensuring that task details and lists remain easy to scan. Stylized accents, such as slight letter-spacing on labels, help differentiate functional UI text from content.

## Layout & Spacing

This design system employs a fluid grid with generous margins to evoke a sense of "airiness" and calm. The layout relies on an 8px rhythmic scale to ensure consistency across all components.

- **Mobile:** A single-column flow with 24px side margins. Elements take up the full width of the safe area.
- **Tablet:** A multi-column approach where sidebars or secondary views emerge. 24px gutters separate glass cards.
- **Desktop:** A fixed-width container (max-width 1440px) centered in the viewport, utilizing a 12-column grid. 

Generous padding within cards (minimum 24px) is essential to maintain the "Kawaii" aesthetic of oversized, comfortable touch targets.

## Elevation & Depth

Depth is conveyed exclusively through **Glassmorphism**. Layers are not defined by heavy shadows, but by their "frosted" properties:

1.  **Backdrop Blur:** All floating containers must feature a 16px to 32px backdrop blur.
2.  **Translucency:** Surfaces use the Soft Pink (#FF70BF) or White (#FFFFFF) at 10-15% opacity as their background fill.
3.  **Inner Glow/Stroke:** Every glass card features a 1px solid border at 20% opacity (White) to simulate light catching the edge of the pane.
4.  **Shadows:** Low-opacity, extra-diffused shadows (blur: 40px) are tinted with the Deep Purple (#462C7D) to ground the floating elements without breaking the translucent illusion.

## Shapes

The shape language is defined by extreme roundedness. The use of "Pill-shaped" geometry is mandatory for buttons and small interactive elements (chips, tags). Larger containers and cards use a high border radius (32px to 48px) to eliminate sharp corners, reinforcing the welcoming and soft personality. This high-radius approach applies to input fields, progress bars, and even image containers.

## Components

- **Buttons:** Primary buttons are pill-shaped, using the Vibrant Magenta (#831C91) with a soft outer glow. Secondary buttons use the "Glass" style with a Soft Pink border.
- **Cards:** Glassmorphic panes with 32px border radius. Used for task groupings and dashboard widgets.
- **Chips:** Small, fully rounded pill shapes. Used for categories or priority tags, utilizing the Bright Pink (#D552A3) for high-priority items.
- **Input Fields:** Soft Pink (#FF70BF) at 15% opacity with a white 1px border. Text is high-contrast white.
- **Progress Charts:** Use thick, rounded strokes. The progress fill uses a gradient from Vibrant Magenta to Bright Pink, while the track is a translucent Soft Pink.
- **Checkboxes:** Round (not square) to match the "Kawaii" style, featuring a thick checkmark icon when active.
- **Icons:** Minimalist, solid shapes. Icons should be sized slightly larger than standard (24px default) to maintain the playful, youthful scale.
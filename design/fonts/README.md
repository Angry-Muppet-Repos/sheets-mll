# Fonts

Column & Co. brand fonts. Both **free on Google Fonts** — no font files committed; we load via CDN.

| Font | Use | Weights needed |
|---|---|---|
| **Playfair Display** | Brand name, headlines, product names | 400 italic, 700 |
| **Jost** | Body, labels, captions, tagline | 300, 500 |

## Loading

`colors_and_type.css` imports both:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600;700&display=swap');
```

Or HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## CSS variables

```css
--cc-font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
--cc-font-body:    'Jost', 'Futura', 'Trebuchet MS', system-ui, sans-serif;
```

## Stack fallbacks

If Google Fonts is unreachable:
- Playfair Display → Cormorant Garamond → Georgia → Times New Roman
- Jost → Futura → Trebuchet MS → system-ui

These keep the brand voice in the ballpark (serif display + geometric sans body) even when offline.

## No substitution flagged

Both brand fonts are documented in `COLUMN_CO_BRAND_GUIDELINES.md` as the official choices, and both ship free on Google Fonts. No font substitution to flag.

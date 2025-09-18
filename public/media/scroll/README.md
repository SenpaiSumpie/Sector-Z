# Scroll Story Media Assets

This directory contains media assets for the cinematic scroll story.

## Directory Structure

```
scroll/
├── hero-bg.mp4              # Hero section background video (1080p, 10-15s loop)
├── hero-bg.webm             # Hero section background video (WebM format)
├── hero-poster.jpg          # Hero video poster image
├── parallax-layer-1.jpg     # Crafting Worlds - background layer
├── parallax-layer-2.jpg     # Crafting Worlds - midground layer
├── parallax-layer-3.png     # Crafting Worlds - foreground layer (with transparency)
├── system-card-1.jpg        # Sharp Systems feature card image
├── system-card-2.jpg        # Sharp Systems feature card image
├── system-card-3.jpg        # Sharp Systems feature card image
├── devlog-thumb-1.jpg       # Devlog reel thumbnail 1
├── devlog-thumb-2.jpg       # Devlog reel thumbnail 2
├── devlog-thumb-3.jpg       # Devlog reel thumbnail 3
├── devlog-thumb-4.jpg       # Devlog reel thumbnail 4
├── devlog-thumb-5.jpg       # Devlog reel thumbnail 5
└── cta-bg.jpg               # Final CTA background image
```

## Video Requirements

- **Format**: Provide both .mp4 and .webm versions
- **Resolution**: Maximum 1080p (1920x1080)
- **Duration**: 10-15 second loops
- **Compression**: Optimized for web delivery
- **Poster**: Always include a poster image for each video

## Image Requirements

- **Format**: JPEG for photos, PNG for graphics with transparency
- **Resolution**: Optimized for web (typically 1920px wide max)
- **Compression**: Balance quality and file size
- **Alt text**: Ensure all images have appropriate alt attributes in components

## Performance Notes

- Videos should be compressed for web delivery
- Use progressive JPEG encoding for images
- Consider WebP format for newer browsers
- All assets should be optimized through build process
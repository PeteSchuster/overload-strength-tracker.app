#!/usr/bin/env bash
#
# Regenerates public/og-image.png — the 1200x630 card shown when the site is
# shared on Slack, iMessage, X, etc. Run from the repo root:
#
#   bash scripts/generate-og-image.sh
#
# Requires ImageMagick (brew install imagemagick). Uses Avenir Next as a stand-in
# for DM Sans, which isn't installed system-wide.
set -euo pipefail

FONT="/System/Library/Fonts/Avenir Next.ttc"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# 1. rounded app icon, 150px
magick public/app-icon.png -resize 150x150 $TMP/icon.png
magick -size 150x150 xc:none -fill white -draw "roundrectangle 0,0,149,149,34,34" $TMP/mask.png
magick $TMP/icon.png $TMP/mask.png -alpha Off -compose CopyOpacity -composite $TMP/icon_r.png

# 2. canvas + circular warm glow (blurred so it has no visible edge)
magick -size 1200x630 xc:'#0e0e0f' $TMP/canvas.png
magick -size 1200x630 xc:black -fill '#3a3020' -draw "circle 320,300 320,60" -blur 0x140 $TMP/glow.png
magick $TMP/canvas.png $TMP/glow.png -compose plus -composite $TMP/base.png

# 3. text
magick $TMP/base.png -gravity northwest \
  -font "$FONT" \
  -fill '#f0efed' -pointsize 72 -annotate +90+355 'Track your strength.' \
  -fill '#c8b89a' -pointsize 72 -annotate +90+448 'From your wrist.' \
  -font "/System/Library/Fonts/HelveticaNeue.ttc" \
  -fill '#888785' -pointsize 28 -annotate +92+525 'Minimalist strength tracking for iPhone and Apple Watch' \
  $TMP/text.png

# 4. app icon, then the progress screenshot angled into the right third
magick $TMP/text.png $TMP/icon_r.png -gravity northwest -geometry +90+110 -compose over -composite $TMP/with_icon.png

magick public/screenshots/iphone-progress.png -resize x600 \
  \( +clone -alpha extract -draw 'fill black polygon 0,0,0,26,26,0 fill white circle 26,26,26,0' \
     \( +clone -flip \) -compose multiply -composite \
     \( +clone -flop \) -compose multiply -composite \) \
  -alpha off -compose CopyOpacity -composite $TMP/shot.png

magick $TMP/with_icon.png $TMP/shot.png -gravity northeast -geometry +120+90 -compose over -composite \
  -strip -depth 8 public/og-image.png

magick identify public/og-image.png

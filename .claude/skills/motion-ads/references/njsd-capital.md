# NJSD Capital LLC / Scott Davis Ventures (local add-on)

Read this whenever the ad is for NJSD Capital LLC, Scott Davis Ventures, or Scott's financial coaching.
Built and tested 2026-11-26 (two finished Level 1 ads; source in the normanjtheagent repo, `.claude/motion/njsd-guide/`).

## Brand rules (from `scott_davis_ventures_brand_design_summary.md`)
- Colors: Orange `#F66733` (primary), Gold `#D4AF37`, Navy `#1B2A4A` (formal / financial documents), Off-white `#F8F9FA`, Charcoal `#333333`.
  Scott wants **all three of navy, orange and gold in every piece**, even if one is only lines or effects.
- Logo: use the **full primary logo** `SDV_Primary_Logo_Horizontal_Full-Color.svg` (emblem + SCOTT DAVIS VENTURES + NJSD CAPITAL LLC)
  wherever the frame is wide enough. It is made for light backgrounds, so end cards go on off-white.
  Formal-on-navy and legal logos exist for other uses. All SVGs: Drive folder id `1Y3CNKGravk6cVYmtxvJtflmfpDNKr_c_`.
- Domain on screen: `njsdcapital.com` (owned). Do not show `scottdavisventures.com` until it is purchased.
- **Keep brands separate:** no normanjtheagent, Palmetto Park or LPT branding, realtor photos or real-estate copy in NJSD pieces.
- Fonts that match Scott's carousels: Oswald (headlines), Archivo (body), Caveat (handwriting). Download them locally into the project.
- Disclaimer on every money piece: "Educational content, not financial advice." Label sample numbers as sample entries.

## Approved photo
- `DSC02338.jpg` (Scott Krause shoot, Oct 2026): seated in the chair, vest, orange tie, **head level** (Scott asked for no tilt).
  Small copy in Drive id `1hYebgjdzW7AoNduXtQC3qV_Fusvkd4CZ`. The full-size originals are over the connector's 10 MB download limit.
  Contact sheet: `PHOTO-GUIDE.jpg` in "Proessional Photos - Scott Krause October 2026".
- Frame it with a gold outer border, an orange inner border and a navy name tag: "SCOTT DAVIS · FINANCIAL COACH".

## Reusable pieces (in `.claude/motion/njsd-guide/build/shared.js`)
- `buildWorksheet()`: a brand worksheet page ("Monthly Money Snapshot": table + navy/orange/gold bar chart) with a timed writing plan.
- `buildHand()`: illustrated hand (white cuff, gold cufflink, navy pen with gold tip) that follows the pen tip; handwriting is revealed as the pen moves.
- `buildEnd()`: off-white end card with the primary logo, framed photo, title, "Coming soon", URL, a three-color rule and the disclaimer.
- Transforms that worked: gold SD coin flips to the emblem; the emblem's ring stretches into a book cover; a card grows into the worksheet and shrinks back
  into the next step card; the emblem coin-flips gold to orange while an off-white circle opens behind it; the emblem lands exactly on the logo's emblem and the wordmark slides out.

## Open items
- No draft of the financial guide existed on 2026-11-26. The worksheet page is a placeholder in the brand. Swap in a real page when the draft exists.
- Placeholder copy: guide title "The Financial Guide", step lines (know your numbers / build your cushion / grow with a plan).
- Not used on purpose: `the2027moneygameplansinglev19fillable.pdf` is Anthony O'Neal's product, not Scott's.

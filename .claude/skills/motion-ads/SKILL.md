---
name: motion-ads
description: >-
  Make premium motion graphics, promo videos and product/listing ads with Claude. Use when the
  user wants a motion graphic, animated promo, listing video, product ad, event trailer, or
  "Claude Motion" style video. Runs a 4-step workflow (assets, numbered storyboard, build,
  sound) across 3 levels: Claude-only code animation (Three.js/Remotion), Claude + Higgsfield
  on real footage, and photoreal ads via a video model with meta-prompting.
---

# Motion Ads (rebuilt from Samin Yasar's "Claude MOTION 2.0" tutorial)

> **Provenance:** This is a reconstruction written from the full transcript of
> https://youtu.be/E70WCbv1nYc (published 2026-11-25). The official `motion-ads` skill is in
> Samin's free Gumroad pack: https://saminator1.gumroad.com/l/claude-motion-graphics-pack.
> When the official ZIP is downloaded, replace or merge this file with it.

## Core idea
Claude does the production work; the human does **art direction**: supply real assets,
approve a storyboard, review output. A short, generic prompt gets generic "AI slop".

## The 4-step workflow (every level)

### Step 1: Assets folder (Tip 1: real, high-res assets)
- Create one project folder. Put in it: high-res product/property photos from several angles,
  logo files (SVG/PNG), brand colors and fonts, reference videos, and any music or SFX.
- Never let Claude invent a logo or a product from memory. It must trace the real references.
  Low-quality inputs mean low-quality output ("you can't cook a 5-star meal with cheap ingredients").
- **Tip 7 (one folder, sorted):** for real footage, have Claude categorize the clips into
  subfolders first (b-roll, interviews, crowd, product, logo) before editing anything.

### Step 2: Numbered storyboard first (Tip 2)
- Before any animation code, produce a numbered storyboard: shot #, duration, what is on screen,
  camera move, the transition into the next shot, on-screen text, and the sound cue.
- Example target: 8 shots, about 16 seconds.
- **Stop and get the user's approval.** Changes are cheap here and expensive after rendering.
- **Tip 3 (transform, no cross-dissolves):** every shot must physically transform into the
  next (shape morphs, a pixel travels and reforms into the next element, match cuts).
  Ban plain fades and cross-dissolves. For each pair of shots, write down how this shape
  becomes the next shape.

### Step 3: Build
- **Level 1 (Claude only, nothing paid):** build in code (Three.js / Remotion / HTML canvas),
  render to MP4 (4K when asked). Typical time: about 15 minutes from approved storyboard to
  render, and under 2 minutes for the render itself.
- **Tip 4 (dead center):** keep the focal action in the center of the frame so the eye never
  has to hunt. Everything transforms around one focal point.
- **Tip 5 (always moving):** something always moves, even subtle background motion,
  parallax, particles or a slow camera drift. No static frames.
- **Tip 8 (slide-up text):** for text over video or motion graphics, no bouncing and no
  letter-by-letter fades. Each word slides up cleanly in place, one after another, inside a
  mask. This is the premium style that's trending now.

### Step 4: Sound (Tip 6: sound by code)
- Generate SFX in code (Web Audio / synthesized): soft hits on transitions, airy whooshes on
  camera moves, a pull-back swell at the open. Sync every hit to a shot change.
- Or use music and SFX files the user dropped in the folder. Lay them out, duck the music
  under any voiceover, and raise it on the reveals.

## Level 2: Claude + Higgsfield (real footage, voice, music)
1. Use Claude Desktop, then Claude Code, and connect the **Higgsfield MCP**
   (higgsfield.ai, then MCP, then "Add Higgsfield to Claude"). Check with `ToolSearch higgsfield`.
2. Put all the raw footage in one folder and have Claude sort and categorize it.
3. Prompt pattern: *"Use Higgsfield Katana to edit and categorize all this footage and make an
   intro for <event/brand>. Feature me. Show <key moments>."*
4. Storyboard, then get approval, then stitch.
5. Voiceover and music: ElevenLabs V4 voices through Higgsfield. Claude writes the VO script,
   generates instrumental tracks from the cut as reference, places them and automates the
   volume. (The creator reports about 15 Higgsfield credits for VO plus music on a trailer.)
6. Always preflight the credit cost and log the credits used per job.

## Level 3: Photoreal product or listing ads
- Pure-code renders of real-world objects look fake (flat light, plastic steel). For
  photoreal output, route the hero shots through a video model (the creator used Kling 4.0
  via Higgsfield).
- **Tip 9 (copy a style):** to match a video you like, reverse-engineer it (shot list,
  lenses, lighting, camera moves, pacing, color, typography) into a written style spec, then
  reuse that spec.
- **Tip 10 (meta-prompting):** have Claude write the generation prompt. Give it the reference
  video breakdown and the user's photos, and ask: *"Reverse-engineer this video into a prompt
  I can use to recreate it for <my product/property>."* Review and edit that prompt; it becomes
  the reference for every shot.
- Pipeline: real reference photos from all angles, numbered storyboard and approval, Claude
  writes every shot prompt from the photos, test the hero still across several models, pick
  the winner, generate the shots, stitch seamlessly, upscale to 4K.
- **Blend yourself in:** film a short clip of the user, then composite or animate them into
  the final shot (requires the person's consent).

## Real estate adaptation (normanjtheagent)
- **Listing promo (Level 1, free):** listing photos, logo and brand kit. An 8 to 12 shot
  storyboard: exterior hero, price/beds/baths, key rooms, neighborhood/lake, agent
  card/CTA. Slide-up text, center framing, transforms between rooms.
- **Market-update motion graphic:** animated charts (median price, days on market,
  inventory) with the numbers sourced and dated on screen.
- **Lifestyle reel (Level 2):** real lake/community footage, sorted and cut to 9:16 with a VO.
- **Compliance (always):** fair-housing-safe language (describe the property, never the
  "ideal buyer"); brokerage name on screen per SC advertising rules; AI-enhanced or virtually
  staged visuals labeled as such; no altered views, no hidden defects; exact figures only
  from the MLS/listing data.

## Checklist before delivering
- [ ] Real assets used, no invented logos
- [ ] Storyboard approved by the user
- [ ] Zero cross-dissolves; every transition is a transform
- [ ] Action centered; constant motion
- [ ] Slide-up masked text
- [ ] Sound designed and synced
- [ ] Credits preflighted and logged (Levels 2 and 3)
- [ ] AI-content disclosure where required

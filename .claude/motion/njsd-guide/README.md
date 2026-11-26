# NJSD Capital: "The Financial Guide" Level 1 test (motion-ads skill)

Two free, code-only (Level 1) vertical videos for the proposed NJSD Capital LLC financial guide. NJSD Capital /
Scott Davis Ventures brand only: no normanjtheagent, Palmetto Park or LPT branding, per Scott.

| File | What |
|---|---|
| out/NJSD_A_The-Financial-Guide_1080x1920.mp4 | Video A, 16 s. Formal navy + gold: coin, emblem, 3D guide book, formal logo |
| out/NJSD_B_Three-Moves_1080x1920.mp4 | Video B, 15 s. Carousel layout in NJSD orange: hook, 3 step cards, emblem, legal logo |
| storyboard/NJSD_A_storyboard.png, NJSD_B_storyboard.png | Numbered storyboards |
| out/A-review-sheet.jpg, out/B-review-sheet.jpg | One frame every 0.75 to 0.8 s |
| build/a-guide.html, build/b-carousel.html | The pages. Open in Chrome to preview (loops). Every timing is in the `B` block at the top |
| sound/*.cues.json, sound/*.events.json | Cue sheets and beats; re-mix with the skill's mix_sound.py |
| assets/ | Logos (Scott's real SVGs) + SOURCES.md |

Rebuild (from this folder, skill at ../../skills/motion-ads):
```
node ../../skills/motion-ads/scripts/render_page.mjs build/a-guide.html --video out/A_silent.mp4
python3 ../../skills/motion-ads/scripts/make_sounds.py sound/kit --seconds 17
python3 ../../skills/motion-ads/scripts/mix_sound.py sound/A.cues.json sound/A.mix.wav --events sound/A.events.json
python3 ../../skills/motion-ads/scripts/master_audio.py sound/A.mix.wav sound/A.master.wav --video out/A_silent.mp4
```
Placeholder copy to edit before publishing: the guide title and the three chapter/step lines.

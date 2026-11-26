# First + Last Frame -> Video

A reusable skill for placing yourself (or any subject) into a generated video using the
**first-frame + last-frame** keyframe method, then generating the in-between motion and stitching.

Instead of hoping a single text-to-video prompt lands your subject correctly, you build the
**FIRST** frame (start pose) and the **LAST** frame (end pose) yourself, then let the model
generate only the motion that connects them. This gives precise control over placement and pose.

## The 5 steps

| # | Step | What you do |
|---|------|-------------|
| 1 | **Brief** | Pick the scene + a single action arc. Anchor identity with a Soul ID. |
| 2 | **Place me** | Build the environment still, decide exactly where you appear in frame. |
| 3 | **Slice it** | Generate the **FIRST** and **LAST** keyframes (same wardrobe/lighting/lens). |
| 4 | **Middle** | Feed both frames to the video model as start_image + end_image; it generates the motion. |
| 5 | **Stitch** | Concatenate segments into one clip (music/captions in post). |

![Process diagram](diagram.png)

## The middle-generation prompt

The key rule: the prompt describes **only motion + camera + world** -- never the face/identity
(the two keyframes already carry that).

```
Start on the FIRST frame and end exactly on the LAST frame.
[SUBJECT] [motion]. Camera [move]. [World: crowd, light, dust, motion blur].
Smooth continuous real-time motion, no cuts, photoreal, wardrobe and lighting consistent throughout.
```

See [SKILL.md](SKILL.md) for the full workflow, the filled-in football example, the exact
generation call, and the pitfalls.

## Pitfalls
- FIRST and LAST frames must share wardrobe, lighting, lens, scene -- any drift causes mid-clip warping.
- Don't re-describe identity in the middle prompt; the keyframes own it, the prompt owns the motion.
- One clean action arc per segment; multiple actions -> slice into multiple first/last pairs.

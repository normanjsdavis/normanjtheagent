---
name: first-last-frame-video
description: |
  Place yourself (or any subject) into a generated video using the first-frame + last-frame
  keyframe method, then generate the in-between motion and stitch. Use when the user wants to
  "put myself in a video", insert a person/subject into a scene, control exactly where they
  appear, or build a clip from a known start pose and end pose (e.g. the football/stadium video).
  Also produces the matching hand-drawn process diagram on request.
---
# First + Last Frame -> Video

The keyframe-anchored video method: you decide WHERE you want to be, build the FIRST frame and
the LAST frame yourself, then let the model generate the motion in between, and stitch the clips.
This gives precise control over placement and the start/end pose, instead of hoping a single
text-to-video prompt lands the subject correctly.

## When to use
- "Put me in this video / scene"
- "I know where I want to place myself"
- Subject must hit a specific start pose AND a specific end pose
- Inserting a person (Soul ID) into a generated environment

## The 5 steps

### 1. BRIEF
Decide the scene, the subject, and the single action arc (e.g. "walk onto the pitch -> score ->
celebrate"). Gather the subject reference (a trained Soul ID, used with text2image_soul_v2 +
soul_id) and any props (the football). One clean arc per clip.

### 2. PLACE ME (decide placement)
Decide exactly where the subject sits in frame and where they end up. Build the environment still
first (stadium/pitch), then composite the subject in via Soul ID so identity holds. This is the
"where I go" decision -- lock framing, camera distance, and the subject's screen position.

### 3. SLICE IT (build FIRST + LAST keyframes)
This is the core trick -- you slice the clip into a known start and known end:
- FIRST frame: subject in the START pose/position (e.g. standing at one end, ball at feet).
- LAST frame: subject in the END pose/position (e.g. arms raised, celebrating).
Generate BOTH as stills with text2image_soul_v2 (soul_id) for identity, OR gpt_image_2 /
seedream_v4_5 if compositing into an existing photo. Keep wardrobe, lighting, lens, and scene
IDENTICAL across both frames -- only the pose/position changes. Inconsistency here = morph artifacts.

### 4. MIDDLE (generate the in-between)
Hand both frames to an image-to-video model with start_image + end_image roles. The model
interpolates the motion that connects them. Default model: seedance_2_0 (or any video model that
declares an end_image role -- confirm with higgsfield_generate_models_explore(action='get')).

The middle-generation prompt should describe ONLY the motion between the two frames, the camera
move, and the world (crowd, light), NOT re-describe the subject's identity (the frames carry that).

Reusable middle prompt template:
```
Start on the FIRST frame and end exactly on the LAST frame.
[SUBJECT] [the motion: e.g. sprints forward across the pitch, strikes the ball, then throws both
arms up in celebration]. Camera [move: e.g. tracks alongside then pushes in]. [World: roaring
crowd, golden-hour stadium light, grass kicking up, natural motion blur]. Smooth continuous
real-time motion, no cuts, photoreal, consistent wardrobe and lighting throughout.
```

Football example, filled in:
```
Start on the FIRST frame and end exactly on the LAST frame.
The number-7 player sprints forward across the pitch, strikes the football, then throws both arms
up in celebration as he reaches the far end. Camera tracks alongside him at hip height then pushes
in on the celebration. Roaring packed stadium, golden-hour rim light, grass and dust kicking up,
natural motion blur. Smooth continuous real-time motion, no cuts, photoreal, wardrobe and lighting
consistent throughout.
```

Generation call:
```
higgsfield_generate_video(requests=[{
  model: "seedance_2_0",
  prompt: "<middle prompt>",
  medias: [
    {value: "<FIRST frame job_id or upload id>", role: "start_image"},
    {value: "<LAST frame job_id or upload id>",  role: "end_image"}
  ],
  aspect_ratio: "9:16",
  duration: 5
}])
```

### 5. STITCH
If the story is several first->last segments, render each segment, then concatenate them into one
file (load the montage skill for ffmpeg concat + music/captions). For a single segment, step 4 is
the deliverable.

## Pitfalls
- FIRST and LAST frames MUST share wardrobe, lighting, lens, scene. Any drift -> warping mid-clip.
- Don't re-describe the subject's face/identity in the middle prompt -- the keyframes own it; the
  prompt owns the motion only.
- Keep one clean action arc per segment. Multiple actions -> slice into multiple first/last pairs.
- Confirm the chosen video model exposes an end_image role before relying on it.
- Anchor identity with a Soul ID in the FIRST/LAST stills, not in the video prompt.

## Diagram (optional deliverable)
To produce the matching hand-drawn process diagram, use gpt_image_2, 16:9, 4k, white background,
pale-yellow (#FFF9C4) numbered badges, pastel-pink (#F6B8D1) accents + glossy push-pins, black
hand-drawn variable-weight outlines, title in felt-tip script with a tapering swoosh underline.
Five steps: BRIEF -> PLACE ME -> SLICE IT (FIRST|LAST keyframes with a dashed scissors line) ->
MIDDLE (UI panel with sliders + pink "generate" button + glossy pink arrow/starburst) ->
STITCH (black perforated filmstrip of final frames + pinned prop). Clean minimal light-mode style.

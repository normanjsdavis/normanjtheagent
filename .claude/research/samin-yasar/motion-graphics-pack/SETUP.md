# Higgsfield: setup, models, credits

Levels 2 and 3 use paid models. I reached all of them through Higgsfield, which puts image, video, voice, music
and sound-effect models behind one account.

## Connect it to Claude

1. Download the Claude desktop app (claude.com/download) and open the Code tab. That's Claude Code.
2. Sign up for Higgsfield with my link: https://higgsfield.ai/s/mcp-saminyasar_-UzcUlZ
3. On Higgsfield, open MCP and press Add Higgsfield to Claude, then hit Continue.
4. Back in Claude you'll see Higgsfield pop up with all its tools: images, video, voice, music, sound effects, upscaling, your balance.
5. Make a folder, drop in your footage or product photos, and tell Claude your credit budget before the first paid job.

## The models that worked for me (November 2026)

| Job | Model | Settings | Credits |
|---|---|---|---|
| Keyframe stills | `nano_banana_pro` | 4K, 16:9, real photos attached as references | 4 |
| Exact text, or a one-change edit on a still | `gpt_image_2_6` | 4K, quality high or max | 3.25 to 12 |
| A shot that must join (first + last frame) | `kling4_0` | image-to-video, 5 s, 1080p, start and end image | 18.75 |
| The same, cheaper | `kling_o3_flf` | 5 s, pro mode, sound off | 6.25 |
| Music | `elevenlabs_music_v2_5` | exact duration, instrumental, two takes | about 4 for 27 s |
| Sound effects | `mirelo_text_to_audio` | 2 to 10 s | 0.5 to 1.5 |
| Voiceover | `elevenlabs_v4` | one take, stability 0.5, similarity 0.8 | about 1.6 a take |
| Transcription | `speech2text` |  | under 1 |
| 4K upscale of the joined picture | `bytedance_video_upscale` | pro, 4K | 150 for 20 s |

Models and prices change. Have Claude quote before it runs anything.

## Log your credits

1. **Agree a budget in credits** and tell Claude what it is before the first paid job.
2. **Quote first.** Every job, before it runs.
3. **Log every job:** the model, what it was for, the quote, the job ID, the charge, and whether you kept it.
4. **Stop and ask** before going over budget.
5. **Check the first charge on any model you haven't used.** One of my jobs was quoted 37.5 credits and charged 150.
6. **Failed and refused jobs are refunded,** but confirm it in your transactions.

Paste this before the first paid job:

```text
My budget for this build is [800] Higgsfield credits. Before every paid job, quote the cost and check it against the budget. Keep a log in credits.md: the time, the model and settings, which prompt file, the quote, the job ID, what was actually charged, the running total, and a one-line verdict (kept, or rejected and why). After the first job on any model, compare the quote with my account transactions. Stop and ask me before going over budget.
```

## Things that went wrong for me

- A video model that only takes a start frame can't land on the next shot's first frame, so it can't be used for joins.
- The model can only keep text it was shown. If text is hidden in both keyframes, it invents it. Crop the keyframes so it never enters the frame.
- Keep both keyframes at the same scale unless the shot is a pull back.
- Zoom into the delivered file, not the preview. Text that looks fine at 1080p can smear at 4K.
- Don't submit a second long job before the first has come back.
- Content filters give false refusals on harmless stills. Re-run them.

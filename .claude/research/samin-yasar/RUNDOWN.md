# Samin Yasar: Claude MOTION 2.0 deep dive + channel scan

Researched 2026-11-26 for Scott Davis: normanjtheagent (real estate, Lake Murray / Columbia SC)
and Scott Davis Ventures / NJSD Capital LLC (financial coaching).

## Part 1: The video

**"Anthropic Just Dropped Claude MOTION 2.0 (Tutorial)"**, https://youtu.be/E70WCbv1nYc
- Published 2026-11-25 · 18:25 · about 19.5K views in its first day (2.4x his normal; trending)
- Full transcript: `E70WCbv1nYc-transcript.md`

### Description links
| Link | What it is | Status |
|---|---|---|
| saminator1.gumroad.com/l/claude-motion-graphics-pack | **Free pack ($0+)**: the `motion-ads` Claude skill (ZIP for claude.ai and a one-line Claude Code install), an 11-page guide (4 steps, 3 levels, 11 tips), copy-paste prompts for every level, Higgsfield setup and a credit log. 3 files, PDF + ZIP, 4.7 MB | Behind Gumroad's free checkout (asks for an email). Not posted publicly anywhere |
| higgsfield.ai/s/mcp-saminyasar_… | Higgsfield affiliate link (AI image/video generation; MCP connects to Claude). Black Friday up to 70% off; MCP free for 3 days | Paid tool, optional for Level 1 |
| skool.com/claude | His paid community ("Claude Club") | Upsell |
| samin@aianswer.us | Business inquiries | n/a |

### The method: 4 steps × 3 levels
**4 steps:** (1) assets folder, (2) numbered storyboard and approval, (3) build, (4) sound.

**Level 1, Claude only (free):** pure code (Three.js), no AI image/video generators. Example: an
8-shot, 16-second product promo. About 15 minutes from approved storyboard to a 4K render; render under 2 minutes.
**Level 2, Claude + Higgsfield:** connect the Higgsfield MCP in Claude Desktop / Claude Code. Claude sorts raw
event footage, uses Higgsfield "Katana" for text-on-video, and ElevenLabs V4 for voiceover and
music, then auto-mixes. About 15 credits for VO plus music on a trailer.
**Level 3, photoreal ads:** code-only renders look fake for real objects, so route the hero shots
through Kling 4.0. Test the hero still across models, stitch, upscale to 4K, and blend yourself into the last shot.

### His 10 numbered tips (the pack says 11)
1. Real, high-res assets only. Never let Claude invent the logo or product.
2. Numbered storyboard first, approved before any code runs.
3. Every shot **transforms** into the next. Zero cross-dissolves.
4. Keep the action dead center.
5. Something is always moving.
6. Sound by code (soft hits, whooshes, pull-backs), or drop in a library.
7. One folder, footage sorted into categories.
8. Text: each word **slides up inside a mask**. No bouncing, no letter fades.
9. Copy a style: reverse-engineer a reference video (his "REA video" skill).
10. **Meta-prompting:** Claude writes the generation prompt from the reference + your photos.

The big lesson: Claude does the work; your job is art direction.

### What's saved in the repo
- `.claude/skills/motion-ads/SKILL.md`: a working rebuild of the skill from the transcript, with a
  real-estate section added (listing promos, market-update graphics, SC/fair-housing guardrails).
  Swap in his official file once the free Gumroad ZIP is downloaded.

## Part 2: Channel scan (about 55 long-form videos reviewed via vidIQ + descriptions + GitHub)

### Tier 1: grab these now
| # | Resource | Why it fits you | Source |
|---|---|---|---|
| 1 | **Property Marketing Kit skill** (public, MIT) | Listing URL in, full kit out: scrapes photos (Firecrawl), enhances heroes (twilight, declutter), cinematic tour + 9:16 reel, **agent walkthrough with you in it**, one-page property website, copy and an owner-outreach email, plus a scheduled autopilot. Built for real estate | Video "3 Practical Claude + Higgsfield Use Cases" (NkFIeQhhgXk), "Offer 2: Real estate" at 17:37 · github.com/Samin12/property-marketing-kit · **saved to `.claude/skills/property-marketing-kit`** |
| 2 | **Motion Graphics Pack** (this video) | Listing promos, market-update graphics, Lake Murray lifestyle reels | Gumroad, free |
| 3 | **AI YouTube Course pack** (free) + 2h51m course | Packaging, hooks and the YouTube funnel for growing a local real-estate channel. 25+ prompts, templates, checklists | gC1PyoQgR8I · saminator1.gumroad.com/l/ai-youtube-course |
| 4 | **Claude Cowork use cases** | Branded Google Slides (listing presentations, coaching decks), CRM/calendar admin, scheduled browser workflows, metrics pulls | xcHyfiMItCM |
| 5 | **Claude + Firecrawl** | Lead-gen with parallel agents, scheduled background scraping (FSBO/expired, new listings, local news for content) | 6lxC487hYdI |

### Tier 2: financial coaching (NJSD Capital)
| Resource | Use for coaching | Caution |
|---|---|---|
| "Claude Just Replaced Doing Taxes" (dfdrJQtFs_w): the **GPS framework** (Gather docs via connectors, Process, Send) | Client document intake, organizing statements, budget prep | Not tax or legal advice; keep client PII protected |
| "8 Insane Claude Fable Use Cases" (o7NLUk1wTUo): **Claude as your bookkeeper** (5:35), **cancel subscriptions on autopilot** (9:06), client outreach on autopilot (32:14) | Bookkeeping demos for clients, a "subscription audit" coaching exercise, follow-ups | Same |
| **Claude Second Brain kit** (free, kG_CoTjCC98) | One memory across tools: client context, your playbooks, voice | Use local mode for client data |
| **Claude Trader 2.0 Starter Kit** (free) + the stock-market videos (lH5wrfNwL3k: 1.9M views; rmJXLSvETkE; x2pY9kI0zBY) | Teaching material on paper trading, trailing stops, the wheel strategy, why gut-feel trading fails | **Paper trading only.** Copying Congress/whales is not a strategy to recommend to clients. Don't present it as advice unless you're properly licensed |

### Tier 3: marketing and content engine
| Resource | Use |
|---|---|
| "Claude Just Changed Marketing" (la1dkCFgj1k) + **Claude Ads Resources** (free) | Static image ads, HeyGen clone of you, scraping competitor winning ads, Claude routines on a schedule |
| `ecom-adds` skill (saved) | Customer research + Facebook Ads Library competitor analysis; adapt "product" to "listing / coaching offer" |
| `ai-reels-pipeline` skill (saved) | HeyGen avatar + B-roll + Veo + Remotion reels |
| `clone-website` skill (saved) | Rebuild a landing page in the style of one you admire (use your own content and brand) |
| `first-last-frame-video` skill (saved) | Put yourself precisely into a generated scene (agent-walkthrough shots) |
| "Claude Just Changed Content Creation" (pSnTKR2Phyo) | Remotion skill and a CLAUDE.md "brain" for consistent content |
| "6 Best Opus 5.5 use cases" (Zg2hHsTEi1I) | Content on autopilot (Blotato), a comment-reply guide, meeting follow-ups |
| "Reverse Engineer Anything" pack (free) | Note: the public `rea` repo is a binary-analysis tool, **not** the "REA video" style skill. The video-style skill isn't public |

### Tier 4: operations and cost
- "AI Voice Agent That Never Misses a Call" (tZFV5DP2OcU): lead capture on missed calls (check SC/TCPA consent rules for outbound).
- "Agentic Workflows instead of n8n" (JkrH3ftxPYc, 403K views): the framework for building your own automations in Claude Code.
- "Never run out of tokens" (lQsjAf15PIk) and "10 Opus 5.5 tips" (dkcJie5xa18): run Haiku as cheap sub-agents, prune skills, use shared memory.
- "AI Agent Teams" (_ZehNseg0Qg): only once you're running many automations.

### Skip
OpenClaw / Hermes / Grok / Kimi / GPT videos, the AI-influencer money video, smart glasses, JARVIS.
They use other tools or are off-niche.

## Free Gumroad packs worth downloading (all $0+)
1. claude-motion-graphics-pack · 2. ai-youtube-course · 3. claude-second-brain ·
4. claude-trader-kit (education only) · 5. npwws (Claude Ads Resources) · 6. rea-resources

## Part 3: Hermes deep review
See `HERMES-PLAYBOOK.md`: setup, profiles, Telegram topics, cron jobs, /goal, an 11-build map for
real estate and NJSD Capital, ready-to-paste prompts, guardrails, and his offer and price menu.
Full transcripts: `8yE6G1Lup1s-hermes-full-course-transcript.txt`, `uED-1uD563Y-hermes-8-use-cases-transcript.txt`.

## Update: official Motion Graphics Pack received (2026-11-26)
- `.claude/skills/motion-ads/` is now Samin's **official** skill (also public at github.com/Samin12/claude-ads-skill):
  SKILL.md, 10 reference guides, 14 scripts (render, frame review, joins, sound make/mix/master, credit log), templates and examples.
  My local add-on is `references/real-estate.md`.
- Pack docs are in `motion-graphics-pack/`: the 11-page Guide PDF, COPY-PASTE-PROMPTS.txt (prompts 0 to 3.x), START-HERE, SETUP (Higgsfield models and credit costs), INSTALL, credit log template, LINKS.
- Higgsfield costs from his build: Level 2 example about 15 credits; Level 3 example about 790 credits (about 330 in the final cut). A 4K upscale is about 150 credits per 20 s.

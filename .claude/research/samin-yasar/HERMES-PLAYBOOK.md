# Hermes Agent playbook (from Samin Yasar's Hermes videos)

Sources (full transcripts are saved next to this file):
- **HERMES AGENT FULL COURSE 3 HOURS: Build & Sell** (8yE6G1Lup1s, 444K views, his #1 recent video)
- **8 Practical Hermes Agent Use Cases** (uED-1uD563Y, 1h14m)
- Also Hermes-based: Second Brain (kG_CoTjCC98), Claude Trader 2.0 (rmJXLSvETkE), Token savings (lQsjAf15PIk)
- His Miro board with every prompt: https://miro.com/app/board/uXjVHBNQj24=/?share_link_id=310534255990
- Hermes: https://hermes-agent.nousresearch.com/

## 1. What Hermes is, and why he uses it as his "chief of staff"
- **Model = engine, Hermes = the car.** Hermes is the agent harness that wraps any model
  (Claude, GPT, Grok, Gemini). It's model-agnostic and local; your data stays on your machine.
- **It improves itself.** When it learns how you do something (your tone, how you edit), it
  saves that as a skill automatically. Every ~10 turns it reviews memory, and a "curator"
  archives stale skills so it doesn't bloat.
- Claude Code is built to code; Hermes is built to be an employee that knows you,
  your business, your clients and your workflows.
- **The warning he repeats:** you are still in charge. A researcher gave an agent her inbox and
  it deleted years of email. Verify before it sends email, moves money or publishes.

## 2. Setup, as he teaches it
| Step | What | Notes for you |
|---|---|---|
| Where it runs | (a) an always-on laptop/Mac mini, or (b) a VPS (Hostinger KVM 2, one-click Hermes template, code SAMIN = 10% off) | Your home laptop works but stops when it sleeps or shuts down. A VPS is about $10/mo and always on |
| Desktop app | Hermes Desktop, then Settings, then Gateway, then **Remote gateway** to control the VPS from any computer | You already have this |
| Buddy system | Install Codex (or Claude Code) as the "doctor": when Hermes breaks, ask the buddy to fix it | Claude Code works the same way |
| Channels | **Telegram** via BotFather (best: shows "typing", supports Topics), Slack, iMessage via Photon | Use your phone as the main interface |
| Telegram Topics | One group with topic tabs: e.g. Listings, Leads, Content, NJSD Clients, **Capture** (dump links/ideas; it remembers, doesn't reply) | Make the bot an admin with all permissions |
| Identity | `soul.md` = personality and tone; `user.md` = facts about you. Paste his interview prompt and say "interview me" | Do one per profile |
| Memory | **Honcho** = one shared brain across Hermes, Claude Code and Codex, via a hook that loads memory every message | Local mode for client data |
| Profiles | One Hermes, many "employees", each with its own soul, model, memory, skills and connectors | **Real Estate / NJSD Capital / Personal** |
| Project board | **Multica** (free, open source): a hook makes Hermes log every request as an issue and move it to done | Optional, but gives visibility |
| Connectors | **Composio** MCP (hundreds of apps via OAuth: Gmail, GCal, HubSpot, Slack, socials), **Google Workspace CLI** (Docs/Slides/Drive) | |
| Creative tools | Higgsfield CLI/MCP (images, video, voice), Firecrawl (scraping), **here.now** (free instant hosting for sites and dashboards you open from Telegram) | |
| Own email | **AgentMail**: give Hermes its own inbox (e.g. assistant@yourdomain) for forwarding tasks and support | |
| Autopilot | **Cron jobs** = scheduled agentic workflows. **/goal** = a standing goal it loops on until done (20-turn budget) | |

**His 5-step recipe for any automation:** agent, then connect the apps, then refine the output by
talking to it, then put it on a schedule (cron), then **make it a skill** so it's packaged and shareable.

**How he measures it:** (1) work done while you're away from your desk, (2) percent of work automated,
(3) revenue per employee.

## 3. His builds, translated for your businesses

### Real estate (normanjtheagent)
1. **Property Marketing Kit + lead autopilot** (course 1:43, use-case video 43:07). Skill:
   https://github.com/Samin12/property-marketing-kit (already in `.claude/skills/`). He sells kits
   to other agents for $250 to $1,000 per listing. For you: build kits for **your own listings**
   first (twilight heroes, virtual staging, tour + 9:16 reel, a walkthrough with you, a one-page site).
2. **Morning briefing (8am, Telegram):** showings and appointments, urgent emails with drafts,
   new leads, market or rate news, and the 3 priorities you named the night before.
3. **Content Octopus** (use-case video 20:04): one YouTube video becomes shorts, reels,
   carousels, an SEO blog, LinkedIn/X posts, an email newsletter, and re-film scripts with new hooks.
   For 178 existing videos, this is the highest-leverage build.
4. **Two-pass AI reel editor:** pass 1 cuts the ums and bad takes; pass 2 adds B-roll (you
   bottom, B-roll top) and captions. Use one /goal for both passes.
5. **Carousels on autopilot:** a tweet-style skill (cheap, mostly code) or a branded style made
   from any screenshot you like, then **Blotato** schedules to IG/FB/TikTok/YouTube/X on a
   calendar. You approve from your phone.
6. **Animated website in one /goal** (use-case video 32:13): e.g. Lake Murray community pages, a
   military/PCS relocation page, deployed to here.now.

### Financial coaching (Scott Davis Ventures / NJSD Capital LLC)
7. **Accountability coach, adapted from his health coach (course 2:36).** His pattern:
   feed it the data, agree on a protocol, then cron check-ins with voice-memo replies. For coaching:
   spending check-ins, savings/debt-payoff milestones, a weekly money review, nightly
   "top 3 money moves tomorrow". Either for your own practice, or as a client offer (with consent).
8. **Weekly client report (cron, Fridays):** pull session notes, goals and progress from Drive/Docs and
   draft a summary email for your review. **Draft only; never auto-send.**
9. **Invoice / payment checker:** Stripe or QuickBooks, find unpaid invoices, draft polite follow-ups.
10. **AgentMail inbox plus a community bot:** answers routine client and community questions
    in your voice within 24 hours and escalates anything about money decisions to you.
11. **Trading bot (paper only):** fine for your own learning; not something to run for clients.

## 4. Ready-to-paste prompts (Telegram or Hermes Desktop)

**Profiles**
> Set up three profiles: "Real Estate" (normanjtheagent, Lake Murray & Columbia SC), "NJSD
> Capital" (financial coaching, Scott Davis Ventures / NJSD Capital LLC), and "Personal". Give
> each its own soul.md, memory and connectors. Then interview me for the Real Estate profile's
> user.md, one question at a time.

**Telegram topics**
> In this group, create topic threads: Listings, Leads, Content, NJSD Clients, Capture, Briefing.
> In Capture, just remember what I drop; don't reply.

**Morning briefing**
> Every weekday at 7:30am ET, send a morning briefing to the Briefing topic: today's calendar
> (showings, listing appointments, coaching sessions) with one prep note each; urgent emails from
> the last 24 hours with drafts I can approve (links only, never send); new leads; one Lake
> Murray/Columbia market or mortgage-rate headline worth a post; and the 3 priorities I gave you
> last night. Keep it short. Every night at 9pm ask me for tomorrow's top 3. Send me a sample now,
> set the cron jobs, then turn this into a skill called morning-briefing.

**Property kit for your own listing**
> Install the skill from https://github.com/Samin12/property-marketing-kit. Use /goal: build a
> full marketing kit for <my listing URL>. Before generating anything, preflight Higgsfield
> credits and wait for my OK. Keep architecture identical, label all AI-enhanced/staged images,
> include my brokerage name on the site, and use fair-housing-safe copy (describe the property,
> never the ideal buyer).

**Content octopus**
> Use /goal: take my YouTube video <URL> and repurpose it into 5 shorts with captions, 2 carousels,
> a 1,200-word SEO blog post for Lake Murray/Columbia SC searches, 3 Facebook/IG captions, 1 email
> newsletter, and 3 re-film scripts with new hooks. Save everything to a dated folder and give me
> a here.now dashboard link. Don't post anything without my approval.

**Coaching accountability**
> For the NJSD Capital profile: help me design a client accountability check-in system. Weekly
> Sunday-evening money review prompts, mid-week spending check-ins by voice note, and milestone
> celebrations. Draft the message templates and the cron schedule for my approval. Don't contact any
> client until I approve each one.

## 5. Guardrails (set these before any autopilot)
- **Never auto-send** email or DMs, never move money, never delete. Drafts and approvals only.
- Give access gradually: read-only first, write access later.
- Client financial data stays local (Honcho local mode). Nothing from it goes into public content.
- Real estate: SC license and brokerage rules on advertising, fair housing, AI-image
  disclosure; follow TCPA/consent rules on calls and texts, and CAN-SPAM on email.
- Coaching: education and accountability, not investment, tax or legal advice, unless properly licensed.
- Cost: preflight Higgsfield credits; use a cheap or fast model for routine crons and a stronger one for writing and strategy.

## 6. His "build & sell" offer menu (if you ever sell these to other agents or clients)
| Offer | His price |
|---|---|
| Hermes install (VPS/Mac, channels, memory, Google) | about $1,500 setup + optional retainer |
| Executive-assistant autopilot (briefings, inbox drafts) | about $500 entry offer |
| Animated website via /goal | $250 to $500 |
| Property marketing kits | $250 to $1,000 per listing; pitch the brokerage next |
| Content engine (carousels on autopilot) | monthly retainer |
| Content Octopus (repurpose system) | $1,000 to $3,000/mo |
| Reel editing | per reel |
| Community / support bot | about $500 or per resolved ticket |
| Done-for-you agent maintenance | $200 to $1,000/mo |

His rules: price the outcome, not hours; build it for yourself first; send a free sample before
asking; setup fee + retainer; always offer a risk reversal ("or you don't pay").

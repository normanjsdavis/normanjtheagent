# Install the motion-ads skill

## Claude Code (one line)

```bash
git clone https://github.com/Samin12/claude-ads-skill ~/.claude/skills/motion-ads
```

Start a new session. The skill is named `motion-ads` and loads by itself when you ask for an ad or a motion graphic.
To use it in one project only, clone it into that project's `.claude/skills/motion-ads` instead.

## claude.ai and the Claude desktop app

1. Open Settings and find Skills (under Capabilities).
2. Upload `motion-ads.zip` (the file next to this one).

In claude.ai the skill gives Claude the method, the rules and the prompt templates. The scripts that render and mix
video need a computer with ffmpeg and Chrome, so run the levels in Claude Code or the desktop app's Code tab.

## What it needs

ffmpeg, Python 3.9+ with numpy and Pillow, and Node 22+ with Chrome. Claude sets up what is missing inside your
project and asks before installing anything else.

The newest version is always on GitHub: https://github.com/Samin12/claude-ads-skill

[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/ujang201/one-liner-marathon/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/ujang201/one-liner-marathon/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)

# One-Liner Marathon: The Self-Help Book

One original line of plain text: a reader buys a self-help book called "How to Stop Buying Self-Help Books", says it changed their life — and then admits they now own twelve copies. The cure became the symptom.

## The entry

> I bought a self-help book called 'How to Stop Buying Self-Help Books' — it changed my life, and now I own twelve copies.

## Run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set). The output is deterministic: every run writes the same bytes. The program also self-checks the gate itself — it refuses to write a line outside 1–280 characters, a blank line, or a line that spills onto a second line.

## Built with make.fun

Entry for the [One-Liner Marathon bounty](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2) on [make.fun](https://make.fun/?ref=fypbmabe).

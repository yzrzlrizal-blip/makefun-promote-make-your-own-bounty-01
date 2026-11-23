# makefun-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/yzrzlrizal-blip/makefun-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/yzrzlrizal-blip/makefun-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

A promo post for make.fun's make-your-own-bounty feature on X. The entry is the post itself: it quotes make.fun's announcement (https://x.com/makefunai/status/2124915864336236646), attaches the photo in this repo (`promo.png`), carries the play code `makefun-umbrella-arena-calendar` and a link to make.fun in its text, and its replies + reposts + quotes are the score. The post text to publish:

> Got a task you'd pay to see built? Now YOU can post the bounty on make.fun.
>
> Describe it, set the reward, keep a share of every entry fee. Agents compete — best entry gets paid in USDC.
>
> makefun-umbrella-arena-calendar
> https://make.fun/r/wdbz3sg5

`POST.json` names the published post's address once it is up; until then it holds a `null` placeholder and the entry is not submittable. `main.ts` hands the entry's files to the grader: it copies `POST.json` and `promo.png` into the output directory and writes a fixed `manifest.json` with their sha256 digests.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdbz3sg5&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>

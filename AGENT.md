# makefun-promote-make-your-own-bounty-01

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X"
bounty ($250, 1st $50). The entry is one post on X, not the code: the code
only hands over the entry's files.

## Files

- `promo.png` — the photo attached to the post. A 1200x675 promo graphic
  made for this entry: the make.fun brand badge and mark from make.fun's
  press pack, used as-is, with a headline and the referral link
  `https://make.fun/r/wdbz3sg5` drawn around them.
- `POST.json` — `{"url": null}` until the post is published. Once Udin
  posts from a public X account, fill in the post's address as
  `{"url": "https://x.com/<handle>/status/<id>"}` and commit it.
- `main.ts` — Node 22, stdlib only. Copies `POST.json` and `promo.png`
  into `$MAKEFUN_OUTPUT_DIR` and writes a fixed `manifest.json` with
  their sha256 digests. Deterministic: no timestamps, no randomness.
- `README.md` — badges, the post text, and the run command.
- `LICENSE` — MIT.

## The post

Quote-post make.fun's announcement,
https://x.com/makefunai/status/2124915864336236646, from a public X
account, with `promo.png` attached and this text:

> Got a task you'd pay to see built? Now YOU can post the bounty on make.fun.
>
> Describe it, set the reward, keep a share of every entry fee. Agents compete — best entry gets paid in USDC.
>
> makefun-umbrella-arena-calendar
> https://make.fun/r/wdbz3sg5

Play code: `makefun-umbrella-arena-calendar`. Score = replies + reposts +
quotes, read at the deadline. Keep the post and the account public until
the results are out (11 Dec 2026). Never repost, reply to, or engage with
the post from our own accounts — bought, botted or self-made engagement
disqualifies the entry.

## To finish

1. Udin posts the quote post above from a public X account and sends the
   post URL.
2. Fill `POST.json` with that URL, commit, and submit with the kit CLI
   before entries close (26 Nov 2026 18:35 UTC / 27 Nov 01:35 WIB).

## UI work

Para cualquier trabajo de UI (diseño, revisión, pulido, accesibilidad visual) usa la skill impeccable y respeta PRODUCT.md y DESIGN.md; no uses design.


<!-- rsc-suggest:start -->
# rsc-suggest — always-on operations layer

Read `02-DOCS/wiki/harness/user-profile.md` before acting. Use `orient` to keep the user situated and `suggest` to offer a missing skill only when the current task needs it. Close with the configured orientation block.

**rsc updates.** Claude Code, Codex, Gemini CLI, Cursor and OpenCode check for a new rsc on their own. In any other assistant, run `node .rsc/auto-update.mjs` once on the first turn of a session and relay any notice it prints in one line; "up to date" needs no mention.

<!-- rsc-suggest:end -->

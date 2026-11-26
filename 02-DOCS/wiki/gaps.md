# Knowledge Gaps

Append-only log of wanted-but-missing topics. Entries are flagged
`[FILLED YYYY-MM-DD]` when an Improve pass writes the article — never
deleted. Compaction (Deep Improve only) removes `[FILLED]` entries older
than 90 days, with a single compaction marker entry in `wiki/log.md`.

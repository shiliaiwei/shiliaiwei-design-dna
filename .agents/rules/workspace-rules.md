# Workspace Rules

## Mandatory Pre-Push Checkpoint Rule — MANDATORY
- **Strict Command Gate**: Never run `git push` or execute any remote push actions under any circumstances unless explicitly commanded by the user.
- **Mandatory Pre-Push Checkpoint Verification**: Prior to executing any `git push` to GitHub or remote repositories, developers and the system MUST execute and pass all local checkpoints first:
  1. **Checkpoint 1 (Core Web Artifacts)**: Validate core web artifacts (`index.html`, `palette.html`, `script.js`, `style.css`, `wrangler.jsonc`) and verify `script.js` syntax via `node -c script.js`.
  2. **Checkpoint 2 (Wrangler Asset Validation)**: Run `npx wrangler deploy --dry-run` to ensure Cloudflare Worker assets upload cleanly.
  3. **Checkpoint 3 (Heavy Media Exclusion)**: Verify `.gitignore` excludes heavy media files (`.mov`, `.mp4`, `.zip`, `.pdf`, `.wav`, `.db`).
  4. **Checkpoint 4 (Zero Emojis Standard)**: Verify zero emojis exist in commits, codebase, or UI messages.
  5. **Checkpoint 5 (Push Buffer Setup)**: Ensure `git config http.postBuffer 524288000` is configured.
- **Strict Abort on Failure**: If any checkpoint fails, the push MUST be aborted immediately and the failure fixed before attempting to push again.

## Never Write README Rule — MANDATORY
- Strictly NEVER create, write, generate, or restore `README.md` or any README documentation files in this repository.
- Keep the repository clean of README files under all circumstances.

## Brand & Design DNA Rule — MANDATORY
- Application brand is strictly **SHILIAIWEI**.
- Primary Production Worker URL: `https://desigdna.shiliaiwei.workers.dev/`.

Build a personal portfolio website for David Naveriani, a final-year BSc Computer Science student at RWTH Aachen University and ML researcher. The site should feel like the personal pages of top ML PhD students — serious, stylish, and clearly authored by a real researcher, not generated from a template.

---

## DESIGN DIRECTION

Reference aesthetics (study these):
- https://jdeschena.com/ — clean academic, minimal nav, news + selected work layout
- https://d3mi.wang/ — modern, editorial, sections with personality ("Builder. Researcher.")
- https://hanchenli.github.io/blog/ — readable, typographically confident

Target aesthetic: **refined academic editorial** — think a Nature paper meets a Berlin design studio. NOT a generic portfolio template. The site should feel hand-crafted, confident, and subtly opinionated.

Specifics:
- Probably better dark mode
- Typography: pair a characterful serif for headings (e.g., Playfair Display, Libre Baskerville, or DM Serif Display) with a clean geometric sans for body (e.g., DM Sans, Outfit, or Plus Jakarta Sans). Load from Google Fonts.
- Accent color: one bold, desaturated accent (e.g., a deep teal #1a6b6b, or muted navy, or forest green) — used sparingly for links, tags, and active states.
- Subtle texture: very faint paper/grain texture overlay on background (CSS noise or SVG filter).
- Smooth scroll, fade-in sections on scroll (Intersection Observer), hover states on all interactive elements.
- Fully responsive (mobile-first). No horizontal scroll on any viewport.
- Single-page with anchor nav OR multi-page with static routing (choose whichever feels more fluid).

---

## CONTENT & SECTIONS
You will find very detailed infromation in file "Davyd_Naveriani_Resume.pdf", which is very detailed.
### 1. Hero / About
- Name: **David Naveriani**
- One-line role: "BSc CS @ RWTH Aachen · ML Researcher · Exploring diffusion models for language, but open for all interesting ideas"
- 2–3 sentence bio: Final-year CS student at RWTH Aachen, research assistant in the Human Language Technology & Pattern Recognition group (Prof. Ralf Schlüter, Prof. Hermann Ney). Research focus: discrete diffusion language models (MDLM, USDM) for ASR rescoring and joint CTC decoding. First-author paper under review at Interspeech 2026.
- Social links row: GitHub, Google Scholar, LinkedIn, Email — icon-only or minimal text links.
- Optional: small profile photo placeholder (comment where to swap in real image).

### 2. News / Updates
Reverse-chronological, date-prefixed list, similar to jdeschena.com. Entries:
- March 2026 — Paper on discrete diffusion LMs for ASR submitted to Interspeech 2026 (under review) (https://arxiv.org/abs/2604.14001)
- Apr. 2026 — 3rd place, HRT Trading Challenge at Datahon hackathon in ETH Zurich
- Nov. 2025 — 2nd place, HRT Trading Challenge at Datahon hackathon in ETH Zurich
- Sep. 2025 — Top 5, Anthropic Hackathon
- Sep. 2025 — 2nd plce, Starthack (take full info from cv)
- Oct 2025 — Research assistant at [Human Language Technology group](https://www-i6.informatik.rwth-aachen.de/web/Research/index.html), RWTH Aachen
- Jul 2025 — Internship @ Eggersmann (anomaly detection team)
- Jun - Jul 2025 — Summer School at HKUST gz, Guanzghou
- Feb - June 2025 — Exchange semester at KAIST, South Korea

### 3. Research
Card-style or paper-list layout. Each entry has:
- Paper title (bold, links to arXiv/paper page — use # placeholder)
- Venue badge (e.g., "Interspeech 2026 · Under Review")
- Authors line: **Davyd Naveriani**, Co-authors (TBD)
- 1–2 sentence abstract
- Tags: discrete diffusion, ASR, language modeling, CTC
- Links: [Paper] [Code] [Slides] — only shown if available, else hidden

Paper 1:
Title: "Diffusion Language Models for Speech Recognition"
Venue: Interspeech 2026 (under review)
Abstract: Diffusion language models have recently emerged as a leading alternative to standard language models, due to their ability for bidirectional attention and parallel text generation. In this work, we explore variants for their use in speech recognition. Specifically, we introduce a comprehensive guide to incorporating masked diffusion language models (MDLM) and uniform-state diffusion models (USDMs) for rescoring ASR hypotheses. Additionally, we design a new joint-decoding method that combines CTC and USDM by integrating the framewise probability distributions derived from CTC with the labelwise probability distributions computed by USDM at each decoding step, thereby generating new candidates that combine strong language knowledge from USDM and acoustic information from CTC. Our findings reveal that USDM, as well as MDLM, can significantly improve the accuracy of recognized text. We publish all our code and recipes.

### 4. Projects
2–3 cards with title, brief description, tech tags, and GitHub link placeholder. Include my projects from my github

### 5. Hackathons
Timeline or card list briefly say what we did:

### 6. Education
Clean timeline or two-column layout:
- **BSc Computer Science** — RWTH Aachen University, 2022–present
- **Exchange Semester** — KAIST (Korea Advanced Institute of Science and Technology), 2025
- **Summer School** - HKUST (gz), 2025

### 7. Blog (optional / placeholder)
Simple list of posts with date, title, and 1-line excerpt. Add 1–2 placeholder posts:
- "How discrete diffusion models work for text generation and speech recognition" (maybe think about cool name)
- "Notes from KAIST: doing ML research in Korea" (also think about cool name)

Label section clearly as "coming soon" or just show empty state gracefully.

### 8. Footer
- Copyright © 2025 Davyd Naveriani
- Repeat social links

---


Social media links:
GitHub: https://github.com/navverriani?tab=overview&from=2025-12-01&to=2025-12-31
Linkedin: https://www.linkedin.com/in/david-naveriani-a79380305/
X: https://x.com/navverriani
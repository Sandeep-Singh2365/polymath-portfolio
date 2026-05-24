# MISSION BRIEF: PERSONAL-CUM-PROFESSIONAL AUTOMATED DEVELOPER AGENT

## OBJECTIVE
You are the Lead Project Architect within Google Antigravity 2.0. Your goal is to autonomously analyze my entire personal and professional history provided in the local workspace, and engineer a full-fledged, highly-personalized professional-cum-personal website.

The site must serve two parallel purposes seamlessly:
1. A top-tier professional portfolio & resume hub to attract jobs, freelance work, and networking.
2. A deeply expressive personal repository highlighting my worldview, core philosophies, thinking processes, and multi-domain interests.

---

## WORKSPACE ARCHITECTURE & INGESTION PHASE
Execute the following steps asynchronously using specialized sub-agents:

1. [Sub-Agent Alpha - Data Miner]: Deeply scan the `./data/` folder. Extract my recurring themes, writing tones, values, passions, and philosophies from the ChatGPT exports. Do not just look at technical data—look at how I think.
2. [Sub-Agent Beta - Tech Auditor]: Scan the `./projects/` folder and `./resumes/` folder. Inventory my complete technical stack, frameworks, coding style, and end-to-end project architectures.
3. [Sub-Agent Gamma - Synthesis]: Combine these insights into a unified architectural specification document saved in `.agents/identity_matrix.md`.

---

## WEBSITE REQUIREMENTS

### 1. Conceptual Pillars
- **The "Whole Person" Approach:** The homepage should immediately project that I am a multi-disciplinary individual. Balance my identity as a tech professional with my domain knowledge in geopolitics, political governance, economics, finance, history, and geography.
- **Bi-Directional Funnels:** A visitor wanting to hire me should have a friction-free path to my projects and resumes. A visitor wanting to connect intellectually should have an equally clear path to my ideas.

### 2. Core Structure & Pages
- **Landing Page:** An impactful introduction summarizing my core hybrid identity.
- **The Portfolio/Work Engine:** Dynamically showcase my GitHub projects with technical deep-dives (auto-generated from my actual code repos).
- **The Thought Ledger (Personal Feed):** A dedicated, responsive section resembling a clean, modern social feed (e.g., minimalist Instagram/Twitter UI layout). This is where I will post ongoing micro-thoughts, essays, and viewpoints across economics, history, and tech.
- **The Matrix (About Me):** An interactive bio mapping out my intellectual layout across multiple fields.
- **Contact/Connect:** Deep integration for professional scheduling (Calendly/Email) or casual intellectual chats.

### 3. Tech Stack Recommendation
- Propose a modern, fast, and SEO-friendly framework (e.g., Next.js with TailwindCSS, Astro, or Remix) that is easy to deploy on modern free tiers like Vercel or Netlify.

---

## EXECUTION DIRECTIVES
- Act autonomously using `/goal` to minimize intermediate human approval for basic file processing.
- Generate structural mockups and site maps as explicit "Artifacts" for my review before writing final production code.
- Ensure all generated code is responsive, accessible, and clean.

Initialize the data extraction phase now and present your initial findings and proposed web architecture design.
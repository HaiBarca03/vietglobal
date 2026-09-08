---
name: fulfillment-design-system
description: Design system and content rules for a POD/Dropshipping/Cross-border Fulfillment technology brand (global fulfillment & logistics SaaS). Use this skill whenever building, redesigning, or reviewing any page, section, component, deck, or copy for this specific fulfillment/logistics company — landing pages, dashboards, pitch decks, one-pagers, emails, or ad creatives. Enforces the brand's color system, typography, layout patterns, animation rules, and anti-patterns to avoid ("AI template" look, purple-blue AI gradients, glassmorphism, blob backgrounds, generic 3D, stock logistics photos). Also enforces content rules (no fabricated data/testimonials, placeholder discipline). Trigger this any time the user mentions "POD fulfillment," "dropshipping fulfillment," "cross-border shipping brand," or references this project's design direction, even without naming the skill.
---

# Fulfillment & Cross-Border Logistics — Design System

Brand: a global **POD Fulfillment + Dropshipping Fulfillment + Cross-border Shipping** technology platform.
Markets: Southeast Asia → Middle East → Central Europe/Europe → USA.
Audience: POD sellers, dropshippers, Shopify/TikTok Shop/Amazon sellers, DTC brands.

**Core positioning line** (use as the north star for every deliverable):
"A fulfillment & logistics technology platform that lets sellers ship internationally without building their own logistics infrastructure."

Brand personality: **Modern Technology + Global Logistics + SaaS.** Feels like a real logistics-tech startup (ShipBob/Gelato-tier), never like an AI-generated template.

---

## 1. Color system

The site must read as **bright, open, and confident** — white-dominant, not a dark/moody theme. Navy is a text/accent color, not a background color. Reserve any full dark section for a single deliberate moment (e.g. footer), never stack multiple dark blocks.

| Role | Color | Notes |
|---|---|---|
| Primary | Ocean Blue (`#1464C4`–`#0F7FE0` range) | headers, primary CTA, dashboard chrome, active nav state — vivid, not muted/dark |
| Secondary | Light/Sky Blue (`#4FA8F5`–`#8ED0FF` range) | links, highlights, data viz, hover states, section tints (5–10% opacity washes) |
| Base | White (`#FFFFFF`) | dominant background on ~80%+ of the page — this is what keeps the site feeling bright |
| Ink (text) | Slate Navy (`#1C2B3A`–`#22364A` range) | body text, headings on white — dark enough to read, not used as a large background fill |
| Accent | ONE small warm accent (e.g. Amber/Orange `#FF8A3D`–`#FF7A45` range) | live-status dots, tracking badges, key metric callouts only. Never a second gradient partner, never a large fill. |

Rules:
- Default section background is **white**, or a very light sky-blue tint (`#F4F9FF`-ish) for alternating sections — not navy, not gray-on-gray murk.
- Deep navy/ink is for **text and small UI chrome** (icons, borders, footer if you want one dark moment) — not for hero backgrounds or large content blocks.
- Ocean Blue (the vivid primary) carries brand energy: CTA buttons, key headlines, active states, dashboard accents.
- Blue is used with intent (data, trust, navigation), not as decoration.
- No purple/violet anywhere. No AI-cliché blue→purple gradients. No overall dark/"night mode" feel.

## 2. Hard "don't" list (anti-patterns)

Never use:
- Purple-blue "AI" gradients
- Glassmorphism / heavy frosted-glass panels
- Excessive rounded-corner cards (pick one radius scale, use it sparingly and consistently)
- Meaningless decorative 3D objects
- Blob-shaped background shapes
- Cliché stock photography of warehouses/trucks/generic "logistics" imagery
- Icon-soup (an icon next to every noun)
- Animation that exists "to look cool" with no explanatory purpose
- Any layout that reads as a generic AI/template-generated SaaS page

If a design choice feels like a shortcut to "look modern," treat that as a signal to reject it and find the more specific, brand-true solution instead.

## 3. Typography & layout

- Strong, confident type hierarchy: one display face for headlines (geometric/grotesk, technical feel), one workhorse face for body/UI.
- Generous whitespace over dense information; let the global network / workflow diagrams breathe.
<br>
- Layout should read as "product," not "brochure": use real dashboard mockups, real map/route visuals, real workflow diagrams — never decorative filler.
- Radius/spacing/shadow scale: define once, reuse everywhere (do not let each section invent its own card style).

## 4. Signature visual concepts (reuse across all pages/decks)

**Global network map** — always render the same route logic:
`Southeast Asia → Middle East → Europe → USA`
as an animated or static route map, never a generic world map with random dots.

**Fulfillment flow** — always render as:
`Order → Production/Warehouse → Pick & Pack → Fulfillment → Shipping → Customer`

**Technology/dashboard visual** — show real product surface area: Orders, Inventory, Fulfillment, Shipment, Tracking, Analytics. Visuals must help the viewer *understand the business*, not just decorate the page.

## 5. Animation rules

Allowed, when purposeful: scroll reveal, route/map animation, location pulse, number counter, dashboard micro-interactions, hover states, sticky sections, timeline animation, subtle page transitions.

Requirements:
- Fast, smooth, subtle — never distracting.
- Every animation must clarify something (a flow, a state change, a relationship) — decoration-only motion is not allowed.
- Must respect `prefers-reduced-motion`.
- Must not cost performance/Core Web Vitals.

## 6. Conversion & CTA rules

Funnel: **Understand → Trust → Explore Services → Understand Global Coverage → Understand Technology → Request Quote.**

- Primary CTA: **Get a Quote / Request a Quote**
- Secondary CTA: **Explore Our Network / Talk to an Expert**
- A visitor should understand what the company does without reading dense paragraphs — lead with visuals + short business-oriented copy.

## 7. Content rules (non-negotiable)

- Short, business-oriented, scannable. No marketing fluff, no jargon walls.
- **Never fabricate statistics, client names, logos, or testimonials.** If real data isn't provided, use an explicit placeholder (e.g. `[Client name]`, `[Metric — pending data]`) — never a plausible-sounding invented number.

## 8. Default tech stack (when building for real)

Next.js + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons. Prioritize performance, SEO, accessibility, responsive/mobile-first, reusable components, clean architecture.

## 9. How to use this skill

Before producing any UI, copy, or visual for this brand:
1. Check every color choice against Section 1.
2. Check the layout/visual against the Section 2 "don't" list — if anything matches, redesign it.
3. Reuse the Section 4 signature visual concepts rather than inventing new metaphors for the same ideas (network, flow, technology).
4. Check any animation against Section 5's "does it clarify something?" test.
5. Check any copy/data against Section 7 before writing it down.
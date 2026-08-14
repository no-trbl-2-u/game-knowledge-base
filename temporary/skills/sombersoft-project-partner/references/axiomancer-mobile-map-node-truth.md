# Axiomancer Mobile map-node truth

Use this reference when T asks what a Mobile map node "is," what the first area contains, why a playthrough route smells wrong, or whether a map label/type matches engine behavior.

## Principle

Axiomancer Mobile currently has two relevant truths:

1. **Mobile display/layout truth** — `axiomancer-mobile/state/exploration-maps/<map>.layout.ts`
   - player-facing labels;
   - visual coordinates;
   - Mobile-side node `type` used by the exploration UI;
   - thematic blurbs shown in Mobile.
2. **Mechanics event truth** — `axiomancer-mechanics/src/World/MapEvents/content.ts` plus `src/World/Continents/.../maps.ts`
   - actual event pool kind;
   - payload/enemy/NPC/shop/rest/gathering/hazard behavior;
   - engine graph/source-of-truth connections.

Do not collapse them. If T asks "what each map node is in Mobile," answer from Mobile layout first, then explicitly flag whether that is display truth rather than engine event truth.

## First-area anchor: Fishing Village

Mobile display source:

- `axiomancer-mobile/state/exploration-maps/fishing-village.layout.ts`

Mechanics sources:

- `axiomancer-mechanics/src/World/Continents/Coastal-Village/maps.ts`
- `axiomancer-mechanics/src/World/MapEvents/content.ts`

Current Mobile display nodes are `fv-1` through `fv-25`, grouped as:

- Spine: `fv-1`..`fv-10`
- Harbor district: `fv-11`..`fv-15`
- Inland district: `fv-16`..`fv-20`
- Cliff district: `fv-21`..`fv-25`

## Known drift pattern

The Mobile label/type may disagree with mechanics event pools. Example pattern seen in session:

- Mobile may label `fv-3` as **Hanged Wood** / `encounter`, while mechanics event content may route a given `fv-*` id to a different authored pool such as village/rest/interaction/loot/etc.
- The UI route can therefore look like one thing while the resolver produces another.

When the Kid or a browser playtest stalls on unexpected events/combat, inspect both surfaces before filing a gameplay verdict.

## Reporting pattern

When T asks for a node inventory:

1. State the map and source file.
2. List Mobile nodes compactly by area: `id` — `label` — `Mobile type` — short blurb.
3. End with a verdict line: "These are Mobile display labels/types, not guaranteed mechanics event truth."
4. If the ask concerns behavior, compare against mechanics event pools before judging.

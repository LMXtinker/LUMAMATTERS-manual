# Analysis

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (lux, pixel size, throw distance, overlap) come from maker data and simplified models and can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

LUMAMATTERS computes light, overlap and pixel size for every surface in your venue. You see the result as colours in the 3D view and as numbers in the **Summary** panel. This page explains the analysis views, the probe and the other helpers. For what each view-mode button does in general, see [View Modes](View-Modes.md). For the formulas behind the numbers and their limits, see [Physics Model](Physics-Model.md).

The numbers update by themselves after every edit. Switch the view with the buttons at the top right of the 3D view, with **View > Shading**, or with the keys `1` to `4` above the letters (the numpad sets viewpoints).

![Lux view with legend](images/analysis-lux-view.png)

## Lux

Key `2`. Light arriving on each surface, in lux. It is worked out from lumens, distance and angle of incidence, with blocked light removed. Surface reflectance is not included, so this is not how bright a surface looks.

- **Blended** (default) applies the blend ramps between projectors, like a media server edge blend. The weights add up to 1 where one or more projectors cover a point. Summary numbers always use blended light.
- **Raw** is the plain sum of all projectors, which shows the hot overlap.
- Switch with the **Blended | Raw** buttons or **View > Light**. They work only in the Lux view and are greyed out ("Lux view only") in the others.

### Lux legend

The legend sits at the bottom left of the 3D view.

- **Min lx**, **Target lx** and **Max lx** are editable. The colour bands change at once.
- **Log** or **Linear** sets the colour scale.
- "no light" marks surfaces that receive none.
- While the analysis is still running, the legend says "blend pending": the blend ramps in the view are a placeholder until it finishes.
- **Texture strength (%)** sets how much of a texture's detail shows under the colours. See [Textures](Textures.md).

## Overlap and blend

Key `3`. How many projectors light each point, and the blend zones between projector pairs. The ramp spans the full overlap of each pair, like a media server edge blend set to the overlap. The ramp is computed from the unoccluded images (as a media server does), so a shadow inside an overlap shows as a dark stripe.

Legend entries: **outside all images**, **shadowed (inside an image, blocked)**, **1 projector**, **2 projectors**, **3 projectors**, **4+ projectors**. Stripes mean a projector whose image covers the point but whose light is blocked, in that projector's colour.

**Warn below overlap (%)** in the legend sets the minimum overlap. Pairs under it are counted in the Summary as **Pairs below min overlap**.

## Pixel density

Key `4`. The size of one projected pixel on each surface, from the projector's native resolution, distance and angle. It shows the worst axis, on a log colour scale.

Legend: **too coarse (above the maximum)** and **grazing (above the angle)**. Two fields set the limits:

- **Max pixel (mm)** is the coarsest pixel you accept.
- **Grazing above (°)** marks surfaces hit at a steep angle, where lux and pixel values are fragile.

## Probe

Hover a surface in the 3D view. The **Probe** section at the bottom of the **Summary** panel shows what is at that point:

- The surface name, with lux **blended** and **raw**. "(preliminary)" means the exact number is still being computed.
- In the Overlap view: "Lit by n of m covering projectors", and which are blocked.
- In the Pixel view: the worst pixel size and whether it is fine or too coarse.
- A grazing warning where the angle is steep.
- One line per projector: lux (or "blocked" or "no light"), incidence angle, distance, pixel size, blend weight and warnings.

`Alt+click` pins the probe to a point. `Esc` releases it.

## Summary numbers

The **Summary** panel (see [Summary and History](Summary-and-History.md)) collects the results:

- **Metrics** for the target surfaces: **Target area**, **Coverage**, **Shadowed**, **Outside all images**, **Below min lux**, **Lux min / avg / max**, **Uniformity (min/avg)**, **Pixel avg / P95**, **Overlap area**, **Pairs below min overlap**, **Projectors**, **Φ_eff total**.
- **Targets**: the same numbers per surface.
- **Overlaps**: a table of projector pairs.

Only surfaces with the role Target are counted. A "stale" badge means the numbers are being recomputed.

## Analysing bar and Statistics

- **Analysing…** with a small progress bar appears in the header while the numbers are recomputed. It shows only after about 0.3 seconds, so quick updates flash nothing. You can keep working.
- **View > Statistics** shows plain text at the top left of the 3D view: the view name, the project and variation name, object, projector (and how many are in the analysis) and triangle counts, and a frame-rate line. It is about the view, not about lighting.

## What is not modelled

No surface reflectance, no contrast or black level, and no ambient light in the lux numbers. Surfaces are double-sided. Brightness ratings are treated as ANSI lumens. See [Physics Model](Physics-Model.md).

## See also

[View Modes](View-Modes.md), [Physics Model](Physics-Model.md), [Summary and History](Summary-and-History.md), [Variations and Compare](Setups-and-Compare.md)

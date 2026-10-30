# Physics model and limits

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (lux, pixel size, throw distance, overlap) come from maker data and simplified models and can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

LUMAMATTERS calculates simple, exact geometry and light. It is made for desk planning, not for predicting how a real room looks. This page says what the numbers mean and what they leave out.

## What it calculates

**Throw and image size.** The maker's throw ratio is distance divided by image width. The app turns it into a distance from the projection centre (the optical centre of the lens). It uses the maker's formula or table where the database has one. Image width and height follow from distance and ratio. Lens shift moves the image and does not resize it.

**Zoom.** Optical zoom only, between the lens's wide and tele ratio. A value outside the range is still calculated, but flagged **Zoom out of range**. It is never clamped silently.

**Lens shift.** Shift limits come from the database, in percent of image size. A shift outside the range is calculated and flagged **Shift out of range**. The shift range is treated as a rectangle, which can be a little generous at the corners (flag **Shift shape approximate**).

**Illuminance (lux).** Light arriving on a surface, in lux. It comes from the projector's lumens, the distance and the angle between the light and the surface. On a flat wall facing the projector, lux equals lumens divided by image area. At an angle, light spreads over a larger area and lux drops. Light blocked by geometry is removed.

**Luminance.** How bright a surface looks, in cd/m². L = ρ × E / π, where E is the illuminance (lux) and ρ the reflectance of the surface (0 to 1, set per object in Properties, else the project default, 1.00 at the start). It assumes a perfectly matte (Lambertian) surface, so it does not depend on the angle you look from. It is calculated for one viewpoint (the current camera or a saved camera); a surface the viewpoint cannot see is not counted. Treat it as an estimate.

**Surface contrast.** For one target object: the 99th percentile of the illuminance divided by the 1st percentile (p99 / p1), over its lit samples (with fewer than 100 lit samples: max / min). Because one object has one reflectance, the same ratio holds for luminance. It describes how even the object is lit. One lit sample gives 1:1. 5:1 and 10:1 are rules of thumb, not standards.

**Ambient contrast.** (E + E_amb) / E_amb for each point, with one site ambient value E_amb in lux for every surface. It needs E_amb of at least 0.01 lx. With E_amb of 0 the app shows n/a.

**Pixel size.** The size of one projected pixel on a surface, from native resolution, distance and angle. Angled surfaces stretch pixels. A glancing angle (over 75 degrees from the surface normal by default) is flagged **grazing**.

**Overlap and blend.** Every point counts how many projector images reach it. A blend zone between two projectors is their **full overlap**, as if you had typed that overlap width into a media server. It is worked out from the images as if nothing blocked them, because a media server does not know about a balcony in the way. Blended lux uses a light-linear ramp, so two projectors in a blend add up to about the single-projector value.

**Shadows.** Meshes with the role target or occluder block light. Other projectors' bodies also block light while **Projector bodies cast shadows** is on (one switch for the whole project, on by default; find it in the Summary). Bodies use the projector 3D models. The projection centre and lens numbers still come from the database. Blockers are fully opaque. A gauze or glass blocks all light unless you give the mesh the role helper.

**Surfaces.** All surfaces are double-sided: light arrives on whichever side faces the projector.

**Precision.** The calculation runs in a background worker in 64-bit floating point (float64). The 3D view uses the same formulas on the GPU for display.

## Assumptions

- Brightness ratings are taken as ANSI lumens. Maker figures in ISO 21118 are treated the same.
- Rated lumens are used as given. Each projector has a **Light output (%)** field in Properties (1 to 100) for dimming or ageing. The app has no project-wide derate field: dimming is per projector.
- The image is evenly bright across the panel. There is no edge falloff.
- A lens is an ideal pinhole at the projection centre. Real shadows have soft edges. The model draws hard ones.
- Lens transmission is fixed at 1. Some lenses lose brightness (a few Epson lenses cap output at 80 to 91 %). The model ignores that.

## What it does not do

- **Reflectance is one number per object.** No colour, no gloss, no angle dependence. Luminance and the contrast views rest on it. Illuminance (lux) does not include it.
- **No black level.** The app does not model the projector's own black or its native contrast. Ambient contrast uses one site ambient value for the whole scene, not a model of light in the room.
- No colour, gamut or gamma modelling. Shaded view colours are not physical.
- No digital zoom, no keystone correction, no warping.
- No uniformity or vignetting of real lenses.
- No glass, translucent or perforated surfaces.
- No lens-flare, haze or scattering.
- No live output and no on-site calibration.
- No maker data tolerance (Panasonic notes up to about 5 % on listed distances).

## Testing

The core is checked against hand-worked examples and maker throw tables. The checks compare the app with the maker's published numbers, not with a physical projector.

## See also

[View modes](View-Modes.md) | [Analysis](Analysis.md) | [Projector database](Projector-Database.md) | [Glossary](Glossary.md)

# Physics model and limits

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (illuminance, pixel size, throw distance, overlap) come from maker data and simplified models. They can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

LUMAMATTERS calculates simple, exact geometry and light. It is made for desk planning. It does not predict how a real room looks. This page explains what the numbers mean and what they leave out.

## What it calculates

**Throw and image size.** The maker's throw ratio is the distance divided by the image width. The app turns it into a distance from the projection centre (the optical centre of the lens). It uses the maker's formula or table where the database has one. Image width and height follow from the distance and the ratio. Lens shift moves the image. It does not resize the image.

**Zoom.** The app models optical zoom only, between the wide and tele ratio of the lens. A value outside the range is still calculated, but the app flags it as **Zoom out of range**. The app never clamps the value silently.

**Lens shift.** The shift limits come from the database, in % of the image size. A shift outside the range is calculated and flagged as **Shift out of range**. The app treats the shift range as a rectangle. This can be a little generous at the corners (flag **Shift shape approximate**).

**Illuminance.** The light that arrives on a surface, in lx. It comes from the lumens of the projector, the distance, and the angle between the light and the surface. On a flat wall that faces the projector, illuminance equals the lumens divided by the image area. At an angle, the light spreads over a larger area, and the illuminance drops. Light that geometry blocks is removed. Illuminance ignores the colour of the surface and your viewpoint.

**Luminance.** How bright a surface looks, in cd/m². The formula is L = ρ × E / π. E is the illuminance in lx. ρ is the reflectance of the surface, from 0 to 1. You set ρ for each object in Properties > Surface > Reflectance. Objects without a value use the project default, **Default ρ**, which starts at 1.00. The formula assumes a perfectly matte (Lambertian) surface. The result therefore does not depend on the angle you look from. The app calculates luminance for one viewpoint: the current camera or a saved camera. It does not count a surface that the viewpoint cannot see. Site ambient never enters luminance. Treat the result as an estimate.

**Surface contrast.** The ratio for one target object: the 99th percentile of the illuminance divided by the 1st percentile (p99 / p1). The app uses the lit samples of the object. With fewer than 100 lit samples, it uses max / min. An object has one reflectance, so the same ratio holds for luminance. The ratio shows how evenly the object is lit. One lit sample gives 1:1. The bands are below 5:1, 5:1 to 10:1, and 10:1 and above. These values are rules of thumb. They are not standards.

**Ambient contrast.** For each point: (E + E_amb) / E_amb. E is the illuminance from the projectors. E_amb is the site ambient, one value in lx for all surfaces. The calculation needs E_amb of at least 0.01 lx. Below that value, the app shows n/a. A new project starts with E_amb at 10 lx. This is an assumed city value. Measure the real site.

**Pixel size.** The size of one projected pixel on a surface. It comes from the native resolution, the distance and the angle. Angled surfaces stretch the pixels. By default, a glancing angle (more than 75° from the surface normal) is flagged as **grazing**.

**Overlap and blend.** Every point counts how many projector images reach it. The blend zone between two projectors is their **full overlap**. It is the same as typing that overlap width into a media server. The app works it out from the images without blockers. A media server does not know about a balcony in the way. The blended illuminance uses a light-linear ramp, so two projectors in a blend add up to about the value of one projector.

**Shadows.** Meshes with the role Target or Occluder block light. The bodies of other projectors also block light while **Projector bodies cast shadows** is on. This is one switch for the whole project. It is on by default. You find it in the Summary. The bodies use the projector 3D models. The projection centre and the lens numbers still come from the database. Blockers are fully opaque. A gauze or a glass pane blocks all light, unless you give the mesh the role Helper.

**Surfaces.** All surfaces are double-sided. Light arrives on whichever side faces the projector.

**Precision.** The calculation runs in a background worker in 64-bit floating point (float64). The 3D view uses the same formulas on the GPU for display.

## Assumptions

- The app reads brightness ratings as ANSI lumens. It treats maker figures in ISO 21118 the same way.
- The app uses rated lumens as given. Each projector has a **Light output (%)** field in Properties (1 to 100) for dimming or ageing. The app has no project-wide field for this. Dimming is set for each projector.
- The image is evenly bright across the panel. There is no edge falloff.
- A lens is an ideal pinhole at the projection centre. Real shadows have soft edges. The model draws hard edges.
- Lens transmission is fixed at 1. Some lenses lose brightness. A few Epson lenses cap the output at 80 to 91 %. The model ignores this.
- Site ambient is one value for the whole project. The app has no site ambient for single objects.

## What it does not do

- **No black level.** The app does not model the black level of a projector or its native contrast. Ambient contrast uses one site ambient value. It is not a model of the light in the room.
- **Reflectance is one number for each object.** The app has no colour, no gloss and no dependence on the angle. Luminance rests on it. Illuminance, Surface contrast and Ambient contrast do not use it.
- No colour, gamut or gamma modelling. The colours of the Shaded view are not physical.
- No digital zoom, no keystone correction and no warping.
- No uniformity or vignetting of real lenses.
- No glass, translucent or perforated surfaces.
- No lens flare, haze or scattering.
- No live output and no on-site calibration.
- No tolerance of maker data. Panasonic notes up to about 5 % on listed distances.

## Testing

The core is checked against hand-worked examples and maker throw tables. The checks compare the app with the published numbers of the maker. They do not compare it with a physical projector.

## See also

[View modes](View-Modes.md) | [Analysis](Analysis.md) | [Projector database](Projector-Database.md) | [Glossary](Glossary.md)

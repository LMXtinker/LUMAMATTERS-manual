# Glossary

**ANSI lumens.** A standard projector brightness rating. LUMAMATTERS treats every brightness rating as ANSI lumens. See [Physics model and limits](Physics-Model.md).

**Beta.** The state of this release. It is free to use during the beta, and a small BETA mark sits next to the name in the app header and on report pages. **Help > About LUMAMATTERS** shows the licence summary. See [Install](Install.md).

**Blend / overlap.** The area where two projector images cover the same surface. In **Overlap** view the blend zone of a pair is their full overlap. See [View modes](View-Modes.md) and [Analysis](Analysis.md).

**Derate / light output.** A percentage that lowers a projector's lumens for dimming or ageing. Per projector it is the **Light output (%)** field in [Properties](Properties.md).

**Feedback.** **Help > Send feedback…** builds a short report of what went wrong plus anonymous system facts. You copy it or open it in your mail program. See [FAQ](FAQ.md).

**Frustum.** The pyramid of light a projector sends out. Frustum lines in the 3D view show its edges. See [3D view](3D-View.md).

**Image shift.** See lens shift.

**Lens shift.** Moving the image up, down, left or right by sliding the lens, without moving the projector. The limits come from the [Projector database](Projector-Database.md).

**Lux.** Light arriving on a surface, in lumens per square metre (illuminance). It is not how bright a surface looks: for that see **Luminance**. See [View modes](View-Modes.md).

**Luminance.** How bright a surface looks from a viewpoint, in cd/m². L = ρ × E / π, with ρ the reflectance of the surface and E the lux on it. A matte-surface estimate. See [Physics Model](Physics-Model.md).

**Reflectance (ρ).** The share of the light a surface sends back, 0 to 1. Set per object in Properties > Surface. See [Properties](Properties.md).

**Surface contrast.** The ratio p99 / p1 of the light on the lit part of one object. See [Analysis](Analysis.md).

**Ambient contrast.** (projector light + site ambient) / site ambient. See [Analysis](Analysis.md).

**Maker throw data.** The maker's throw-distance formula or table for a lens. See [Projector database](Projector-Database.md).

**Measurement.** A dimension line between two points in the 3D view, with its value in metres. A note with a leader line is an annotation. Both are made with the Measure tool. See [Measure Tools](Measure-Tools.md).

**Native resolution.** The pixel grid of the projector's panel.

**Null.** An empty object in the scene tree. It has a position but no shape. Projectors can be parented to nulls so a group moves together. See [Outliner](Outliner.md).

**Pixel density / pixel size.** Projected pixels per metre on a surface, or the size of one pixel in millimetres. See [View modes](View-Modes.md).

**Planning aid.** What this app is: numbers for planning, to check against maker sheets and on site.

**Probe.** A reading pinned on a surface. **Alt+click** a point in the 3D view to pin one. Its numbers appear in the Summary. See [Analysis](Analysis.md).

**Projection centre.** The optical centre of the lens, where the light rays start in the model. The physics measures distances from here. Makers usually measure from the lens front.

**Project format.** The version number inside a `.luma` file. See [Project files](Project-Files.md).

**Setup / variation.** One version of the projector rig in the same venue. The venue is shared, the rig differs. The panel is called **Variations**. See [Variations and Compare](Setups-and-Compare.md).

**Snap.** The Measure tool jumps to a vertex, an edge end or middle, a lens centre, a bounding-box point or a surface point near the cursor. `Ctrl` turns it off for one click. See [Measure Tools](Measure-Tools.md).

**Slug.** The file-safe short name of a project, used as its folder and file name.

**Snapshot.** A frozen copy of the project state. See [Projects and snapshots](Projects-and-Snapshots.md).

**Throw ratio.** Throw distance divided by image width. A ratio of 1.5 puts a 3 m wide image at 4.5 m. See [Physics model and limits](Physics-Model.md).

**Throw distance.** How far the projector is from the surface. The app shows **Throw distance (maker)** and **Throw ratio (centre)** in [Properties](Properties.md).

**Variation.** See setup.

**Venue.** The 3D model of the space, made of one or more imported files. See [Blender export and import](Blender-Export-and-Import.md).

**Workspace.** The folder on your disk that holds all your projects. See [First start and workspace](First-Start-and-Workspace.md).

**Zoom out of range.** A flag: the throw ratio is outside the lens's zoom range. The numbers still use it as given.

## See also

[Home](Home.md) | [Physics model and limits](Physics-Model.md) | [Projector database](Projector-Database.md) | [FAQ](FAQ.md)

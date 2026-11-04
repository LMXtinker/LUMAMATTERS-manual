# Glossary

**Ambient (%).** A lighting setting. It brightens the shading in the 3D view only. It never changes a number. It is not the same as **Site ambient**. See [3D View](3D-View.md).

**Ambient contrast.** (projector light + site ambient) / site ambient. The Photometric view shows it as a quantity. The colour bar has marks at 5:1 (min) and 10:1 (ideal). The default range is 5 / 20 / 50. See [Analysis](Analysis.md).

**ANSI lumens.** A standard brightness rating of projectors. LUMAMATTERS treats every brightness rating as ANSI lumens. See [Physics model and limits](Physics-Model.md).

**Auto range.** A legend button. It sets Min and Max from the 1st and 99th percentile of the lit target surfaces. See [View Modes](View-Modes.md#legends).

**Beta.** The state of this release. It is free to use during the beta. LUMAMATTERS will always stay free in one form or another, with all features available. A small BETA mark sits next to the name in the app header and on report pages. **Help > About LUMAMATTERS** shows the licence summary. See [Install](Install.md).

**Blend / overlap.** The area where two projector images cover the same surface. In the **Overlap** view, the blend zone of a pair is their full overlap. See [View modes](View-Modes.md) and [Analysis](Analysis.md).

**Blended / Raw.** The Light switch of the Photometric view. **Blended** applies the blend ramps between projectors. **Raw** adds the projectors in full. See [Analysis](Analysis.md).

**Compare.** The table in the **Variations** panel. It lists metrics of the variations side by side. See [Variations and Compare](Setups-and-Compare.md).

**Default ρ.** The project default for reflectance. Objects without their own **Reflectance** use it. It starts at 1.00. See [Physics model and limits](Physics-Model.md).

**Feedback.** **Help > Send feedback…** builds a short report of what went wrong, plus anonymous system facts. You copy it, or you open it in your mail program. See [FAQ](FAQ.md).

**Frustum.** The pyramid of light that a projector sends out. Frustum lines in the 3D view show its edges. See [3D view](3D-View.md).

**Illuminance.** The light that arrives on a surface, in lx. It ignores the colour of the surface and your viewpoint. It is one of the four quantities of the Photometric view. For how bright a surface looks, see **Luminance**. See [Analysis](Analysis.md).

**Image shift.** See **Lens shift**.

**Lens shift.** A move of the image up, down, left or right by sliding the lens. The projector does not move. The limits come from the [Projector database](Projector-Database.md).

**Light output (%).** A percentage that lowers the lumens of one projector, for dimming or ageing. It is a field in [Properties](Properties.md).

**lx.** The unit symbol of illuminance. "lx" stands for lux. One lx is one lumen per square metre.

**Luminance.** How bright a matte surface looks from a viewpoint, in cd/m². L = ρ × E / π. ρ is the reflectance of the surface. E is the illuminance on it. See [Physics model and limits](Physics-Model.md).

**Magnet.** The button in the top strip of the 3D view. It turns on snapping for the Move, Rotate and Scale gizmos. It is off on a fresh machine. See [3D view](3D-View.md#snapping-magnet).

**Maker throw data.** The throw-distance formula or table of the maker for a lens. See [Projector database](Projector-Database.md).

**Measurement.** A distance between two points in the 3D view, with its value in m. A note with a leader line is an annotation. You make both with the Measure tool. See [Measure Tools](Measure-Tools.md).

**Native resolution.** The pixel grid of the panel of the projector.

**Null.** An empty object in the Outliner. It has a position but no shape. You can parent projectors to nulls so that a group moves together. See [Outliner](Outliner.md).

**Photometric.** The view mode on key `2`. It shows light on surfaces. It has four quantities: Illuminance, Luminance, Surface contrast and Ambient contrast. See [View modes](View-Modes.md).

**Pixel density / pixel size.** The number of projected pixels per metre on a surface, or the size of one pixel in mm. See [View modes](View-Modes.md).

**Planning aid.** What this app is: numbers for planning. Check them against maker sheets and on site.

**Probe.** A readout of one point under the pointer. `Alt+click` a point in the 3D view to pin it. The numbers show in the Summary. See [Analysis](Analysis.md).

**Project format.** The version number inside a `.luma` file. See [Project files](Project-Files.md).

**Projection centre.** The optical centre of the lens, where the light rays start in the model. The physics measures distances from here. Makers usually measure from the front of the lens.

**Quantity.** One of the four things that the Photometric view can show. You choose it in the legend. See [View modes](View-Modes.md).

**Reflectance (ρ).** The share of the light that a surface sends back, from 0 to 1. You set it for each object in Properties > Surface. See [Properties](Properties.md).

**Saved camera.** A camera object in the project that stores a view. You make one with **Save view as camera…**. See [3D view](3D-View.md).

**Share view-only scene.** **File > Share view-only scene…** makes a viewer page. The page opens in a web browser, and the viewer does not need LUMAMATTERS. See [Share a view-only scene](Share-a-view-only-scene.md).

**Site ambient.** One assumed light level on all surfaces without the projectors, in lx. A new project starts at 10 lx. Ambient contrast uses it. See [Analysis](Analysis.md).

**Slug.** The short file-safe name of a project. It is used as its folder name and file name.

**Snap.** The Measure tool jumps to a vertex, an edge end or middle, a lens centre, a bounding-box point or a surface point near the pointer. `Ctrl` turns it off for one click. You choose the targets in the **Snap steps** popover (the arrow beside the **Magnet**). See [Measure Tools](Measure-Tools.md).

**Snapshot.** A saved version of the whole project state. See [Projects and snapshots](Projects-and-Snapshots.md).

**Surface contrast.** The ratio p99 / p1 of the illuminance on the lit part of one object. It shows how evenly the object is lit. See [Analysis](Analysis.md).

**Throw distance.** The distance from the projector to the surface. The app shows **Throw distance (maker)** and **Throw ratio (centre)** in [Properties](Properties.md).

**Throw ratio.** The throw distance divided by the image width. A ratio of 1.5 puts an image of 3 m width at 4.5 m. See [Physics model and limits](Physics-Model.md).

**Variation.** One version of the projector rig on the same venue. The venue is the same in all variations. The rig differs. The panel is called **Variations**. See [Variations and Compare](Setups-and-Compare.md).

**Venue.** The 3D model of the space. It is made of one or more imported files. See [Blender export and import](Blender-Export-and-Import.md).

**Viewpoint.** A named view direction (Top, Bottom, Front, Back, Left or Right) from **View > Viewpoint**. A **saved camera** is a different thing. See [3D view](3D-View.md).

**Workspace.** The folder on your disk that holds all your projects. See [First start and workspace](First-Start-and-Workspace.md).

**Zoom out of range.** A flag. The throw ratio is outside the zoom range of the lens. The numbers still use it as given.

## See also

[Home](Home.md) | [Physics model and limits](Physics-Model.md) | [Projector database](Projector-Database.md) | [FAQ](FAQ.md)

# 3D View

The 3D view shows the venue, projectors, people and cameras, and is where you move them.

![The 3D view with tool column, mode buttons and navigation column](images/3d-view-controls.png)

## Navigating

The mouse works like Blender.

| Action | How |
|---|---|
| Orbit | Hold the **middle mouse button** and drag (in every tool). With the Move, Rotate or Scale tool, the left button orbits too. |
| Pan | Hold the **right mouse button** and drag. |
| Zoom | Mouse wheel. |
| Select | Click an object. `Shift+click` adds, `Ctrl+click` toggles. |
| Box select | With the Select tool (`Q`), drag a box on empty space. `Shift` adds to the selection, `Ctrl` removes. |
| Pin the probe | `Alt+click` a surface. See [Summary and History](Summary-and-History.md). |

The view has no camera smoothing: it stops when you stop.

Box select picks objects whose centre is inside the box, and measurements whose label centre is inside. It skips hidden and locked objects. It picks a camera only while **Labels** is on.

### Viewpoints and the numpad

Use the numpad (Blender's keys) or the **View** button on the right edge.

- `Numpad 1` Front, `Ctrl+Numpad 1` Back
- `Numpad 3` Right, `Ctrl+Numpad 3` Left
- `Numpad 7` Top, `Ctrl+Numpad 7` Bottom
- `Numpad 5` switches Perspective and Orthographic

A viewpoint keeps your target and distance. `Ctrl+Numpad` keys work in the app window.

### Orthographic

![The 3D view in orthographic projection with the Ortho chip](images/3d-orthographic.png)

The **Persp / Ortho** button, **View > Orthographic** or `Numpad 5` switches the projection. A small **Ortho** chip shows in the view while it is on.

### Frame selected

`F` or **View > Frame selected** frames the selection, or everything when nothing is selected.

## Looking through a camera or projector

![Looking through a saved camera with its dashed 16:9 frame](images/3d-look-through-camera.png)

![The Save view as camera dialog](images/dialog-save-view-camera.png)

- A **camera** is a saved viewpoint. Create one with **View > Viewpoint > Save view as camera…**, which asks for a name. Cameras are listed under **Viewpoint** and in the Outliner.
- Click a camera in **Viewpoint**, the **Look through** toggle on its Outliner row, or **Look through** in Properties to see through it. A chip shows its name, projection and field of view. Click again to leave.
- Do the same on a **projector** to see what it sees. This is a view action, not an edit, so it works on a locked projector.
- **Lock camera to view** (**View** menu, or the **Lock** button that appears while you look through a camera): orbit, pan and zoom move the camera itself. It is greyed out with a reason when the camera is locked or the window is read-only.
- Properties > Camera has **Update from view** to store the current view in the camera. **File > Export > Camera images (PNG)…** writes images from the cameras.

The right-hand button column moves left while the **Measure** sidebar (`N`) is open, so it never sits on top of it. The sidebar is a tab on the right edge of the 3D view; **Measure** also appears there.

## Viewport fold-out (right edge)

![The right column: View, Persp, Labels, Tex, Grid, Wire](images/3d-navigation-column.png)

![Wireframe display, all edges](images/3d-wireframe.png)

![The Statistics text at the top left of the 3D view](images/3d-statistics.png)

The **Viewport** tab on the right edge of the 3D view unfolds a panel with the view settings. Only one of **Viewport** and **Measure** is open at a time. These are display settings: they change the picture, not the numbers. The sections:

- **View**: **View** (the viewpoint list and saved cameras), **Persp** / **Ortho**, and **Lock** while you look through a camera.
- **Overlays**: **Labels** (names of projectors, people and cameras, and camera glyphs), **Tex** (**View > Textures**, see [Textures](Textures.md)) and **Grid** (ground grid).
- **Grid** (new in 1.1.0): **Cell size (m)**, **Subdivisions (cells per major line)** and **Extent (cells, 0 = auto)**. Auto follows the camera as before. A fixed extent draws a square grid on the file origin that fades out at its edge.
- **Edges** (new in 1.1.0): **Highlight** puts white lines where the depth or the surface direction jumps, in every view mode. **Texture** adds edges found in the base texture (needs Highlight and Tex). **Edge strength (%)** sets how strong the lines are. **Object edges** (the old **Wire**, **View > Object edges**): **Off**, **Feature edges**, **All edges**; the button toggles Off and the last mode. "Building wireframe…" shows while a big model builds. Edge highlight shows in the 3D view only, not in report pictures.
- **Surfaces** (new in 1.1.0): **Specular** (a soft sheen on the shaded surfaces), **Perceptual** (colour overlays and tints mix in linear light) and **Grey** (material override: in the Shaded view every object takes the default grey and textures are hidden).
- **Beams** (new in 1.1.0): **Selected** (lines of every projector, fill on the selected ones), **All** (fill on every beam) or **None**, and **Beam visibility (%)** (0 hides lines and fill). **Images** (**Show projector images**) paints each projector's test pattern over the surfaces in every view mode. The Shaded view always shows it. Its strength is **Pattern** in Lighting.
- **Background**: **Dark**, **Grey**, **Black**, **Night gradient** and, new in 1.1.0, **Flat colour** and **Gradient** with colour pickers (**Colour**, or **Top colour** and **Bottom colour**). Also in **View > Background**.
- **Lighting**: see below.

The default surface is now a dark grey with a soft highlight, so coloured overlays stay readable. The grid, the background colours and the other look settings above, and the place of the legend, are kept per machine in the app, not in the project file. They are not undone with Ctrl+Z.

**View > Statistics**: text at the top left: the view name (for example `User Perspective`), project and variation name, Objects, Projectors (with how many are in the analysis), Triangles, and the frame rate.

## Lighting

![The Lighting popover](images/3d-lighting-popover.png)

The **Lighting** button (or **View > Lighting…**) opens a popover for how the **Shaded** view is lit. It changes the picture, not the numbers.

- Mode: **Headlight** (light from the camera, the default), **Sun** (fixed direction; set **Azimuth** and **Elevation**), **Flat** (no shading).
- **Ambient (%)** (the base light on every surface, default 25 %), **Directional (%)** (the strength of the headlight or sun, renamed from Scene light) and **Pattern (%)** sliders.
- **Pattern kind**: the test pattern of the project. See [Test Patterns](Test-Patterns.md).
- **Reset lighting**.

## Transform tools (left edge)

![The tool column](images/3d-tool-column.png)

![The Move gizmo on a selected projector](images/3d-gizmo-move.png)

![Box select with the Select tool](images/3d-box-select.png)

**Select** (`Q`), **Move** (`W`), **Rotate** (`E`), **Scale** (`R`) put a gizmo on the selection. **Measure** (`M`), set apart by a divider, draws dimension lines and notes: see [Measure Tools](Measure-Tools.md). **World** or **Local** sets the gizmo axes. **Origin** or **Box ctr** sets the pivot. With mixed objects the pivot may be forced to the box centre; the view says so. These keys work with the focus in the 3D view or the Outliner.

### Snapping (magnet)

The **magnet** button in the top strip of the 3D view (group **Snapping**, between the pivot buttons and **Light**) switches snapping for the Move, Rotate and Scale gizmos. The small arrow beside it opens **Snap steps**: **Move (m)** (default 0.1), **Rotate (deg)** (default 5) and **Scale (factor)** (default 0.1). Type a value and press Enter.

- Magnet **on**: every gizmo drag snaps. Hold `Ctrl` to move freely.
- Magnet **off** (the default on a fresh machine): a drag is free. Hold `Ctrl` to snap, as before 1.1.0.
- **Move** also snaps to the vertices and edges of the venue meshes (the nearest corner, edge end, edge middle or point on a feature edge within 12 pixels of the pointer), then to the step. It never snaps to a projector's own lens.
- **Rotate** and **Scale** snap to their steps only. Scale never goes below its step.
- `Esc` during a drag puts the object back. One drag is one undo step.
- Measure, orbit and placing with a click are not affected. The magnet and the steps are kept per machine, not in the project file.

## Mode buttons (top right)

![The top strip: pivot, magnet, Blended, Raw, the view modes and the help button](images/3d-top-strip.png)

**Shaded**, **Photometric**, **Overlap**, **Pixel**, **Distance** (`1` to `5`), **Blended** / **Raw**, and **?**. See [View Modes](View-Modes.md).

The controls are inactive on purpose during a gizmo drag.

See also: [View Modes](View-Modes.md), [Keyboard Shortcuts](Keyboard-Shortcuts.md), [Menus](Menus.md), [Measure Tools](Measure-Tools.md)

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

A viewpoint keeps your target and distance. `Ctrl+Numpad` keys work in the installed app window; a normal Chrome tab may use them to switch tabs.

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

## Display toggles (right edge)

![The right column: View, Persp, Labels, Tex, Grid, Wire](images/3d-navigation-column.png)

![Wireframe display, all edges](images/3d-wireframe.png)

![The Statistics text at the top left of the 3D view](images/3d-statistics.png)

- **Labels**: names of projectors, people and cameras, and camera glyphs.
- **Tex** (**View > Textures**): textures on surfaces. See [Textures](Textures.md).
- **Grid**: ground grid.
- **Wire** (**View > Wireframe**): **Off**, **Feature edges**, **All edges**. The button toggles Off and the last mode. "Building wireframe…" shows while a big model builds.
- **View > Background**: **Dark**, **Grey**, **Black**, **Night gradient**.
- **View > Statistics**: text at the top left: the view name (for example `User Perspective`), project and variation name, Objects, Projectors (with how many are in the analysis), Triangles, and the frame rate.

## Lighting

![The Lighting popover](images/3d-lighting-popover.png)

The **Lighting** button (or **View > Lighting…**) opens a popover for how the **Shaded** view is lit. It changes the picture, not the numbers.

- Mode: **Headlight** (light from the camera, the default), **Sun** (fixed direction; set **Azimuth** and **Elevation**), **Flat** (no shading).
- **Scene light (%)** and **Pattern (%)** sliders.
- **Pattern kind**: the test pattern of the project. See [Test Patterns](Test-Patterns.md).
- **Reset lighting**.

## Transform tools (left edge)

![The tool column](images/3d-tool-column.png)

![The Move gizmo on a selected projector](images/3d-gizmo-move.png)

![Box select with the Select tool](images/3d-box-select.png)

**Select** (`Q`), **Move** (`W`), **Rotate** (`E`), **Scale** (`R`) put a gizmo on the selection. **Measure** (`M`), set apart by a divider, draws dimension lines and notes: see [Measure Tools](Measure-Tools.md). **World** or **Local** sets the gizmo axes. **Origin** or **Box ctr** sets the pivot. With mixed objects the pivot may be forced to the box centre; the view says so. These keys work with the focus in the 3D view or the Outliner.

## Mode buttons (top right)

![The top strip: Blended, Raw, the four view modes, Lighting and the help button](images/3d-top-strip.png)

**Shaded**, **Lux**, **Overlap**, **Pixel** (`1` to `4`), **Blended** / **Raw**, and **?**. See [View Modes](View-Modes.md).

The controls are inactive on purpose during a gizmo drag.

See also: [View Modes](View-Modes.md), [Keyboard Shortcuts](Keyboard-Shortcuts.md), [Menus](Menus.md), [Measure Tools](Measure-Tools.md)

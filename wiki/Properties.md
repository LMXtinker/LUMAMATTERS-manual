# Properties

Properties shows the settings of what you have selected. It sits at the bottom right. With nothing selected it says "Select an object in the 3D view or the Outliner."

![Properties of a selected projector](images/properties-projector.png)

## Top of the panel

A heading shows the type icon, the name and `type · file` (or "created in the app"). With several objects selected it shows "N objects". Below it, badges repeat the Outliner's (why a projector is not analysed, hidden, orphan, not in file).

Sections fold and unfold. Only sections that every selected object has are shown. A field that differs between objects shows a dash.

A locked object shows a note and its fields are disabled.

## Number fields

All number fields work the same way.

- **Click** a field and type. `Enter` or leaving the field commits it. `Esc` drops what you typed.
- **Drag left or right** with the left mouse button to change the value. Right is up. Hold `Shift` for a tenth of the step, `Ctrl` to snap the change.
- **Middle mouse button: Value Ladder** (like TouchDesigner). Press the middle button on a field. A column of steps appears: 100, 10, 1, 0.1, 0.01 (integer fields: 100, 10, 1). Move the mouse up or down to pick a step, then move sideways to change the value by that step. Once you have moved a little sideways, the step stays fixed. Release to commit. `Esc` cancels.
- On the label of a multi-value row (Position, Shift) the ladder changes all components together.
- One drag is one undo step. The 3D view follows live while you drag.
- A drag stops at the allowed range of the field.
- With several objects selected, dragging a transform field adds the same change to each object.

## Transform (all objects)

**Name**, **Parent**, **Position**, **Rotation** (with **Yaw / Pitch / Roll** and a Blender Euler row), **Scale**. A **World** group shows world position and angles. Values are in metres and degrees. Axes follow Blender's convention. For projectors, **Aim at…** lets you click a surface point to aim at.

## Projector

- **Lens**: **Colour**, **Test pattern**, **Model** (with **Change model…**), **Lens** (for interchangeable lenses; unusable lenses carry the reason), a **Spec sheet** button, **Throw ratio** (the maker's number), **Wanted width (m)** with **Fit** (sets the zoom so the image has that width at the aim distance), **Lens range**, **Shift H (%)**, **Shift V (%)**, **Mount** (**Floor** or **Ceiling**), **Light output (%)** and **Look through**. With two or more projectors a **Copy** row opens **Copy specs**: tick what to copy and choose "Same TR" or "Same image width" for the zoom.
- **Body**: the **Flight frame** checkbox and a note on which body model is used. See [Physics Model](Physics-Model.md).
- **Readouts** (one projector): Aim distance, Aims at, Throw distance (maker), Throw ratio (centre), Image W x H, Centre lux, Pixel, effective lumens, and **flag chips** that explain caveats. Click a chip for its explanation.

Zoom is optical zoom only. Throw and shift come from the projector database. See [Projector Database](Projector-Database.md) and [Placing Projectors](Placing-Projectors.md).

## Surface (venue meshes)

- **Role**: **Target** (should be lit and counted), **Occluder** (blocks light) or **Helper**.
- **Triangles** and **UVs** (yes / no).

## Texture (venue meshes)

**Source**, **Size**, and **Load…** to put a picture on the selected surfaces. **Clear** goes back to the model file's texture. A model's own textures are listed when you select the model's root row. See [Textures](Textures.md).

## Person

**Height (m)** and **Blocks light**. See [People](People.md).

## Camera

**Projection** (**Perspective** or **Orthographic**), **Field of view** (or **Ortho height**), **Position** and **Target**, **Look through** and **Update from view** (stores the current 3D view in this camera).

## File

For objects that come from a model file: **File**, **Key** and **Reset to file** when the placement differs from the file.

See also: [Outliner](Outliner.md), [Placing Projectors](Placing-Projectors.md), [Textures](Textures.md), [Summary and History](Summary-and-History.md)

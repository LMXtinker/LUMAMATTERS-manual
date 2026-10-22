# Placing Projectors

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (lux, pixel size, throw distance, overlap) come from maker data and simplified models and can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

This page covers adding a projector, choosing its lens, setting zoom and shift, and putting it where you want it. You can add projectors in the app. You do not have to create `PRJ_` cameras in Blender (see [Blender Export and Import](Blender-Export-and-Import.md) if you prefer that).

## Add projectors with + Proj

Press **+ Proj** in the [Outliner](Outliner.md) toolbar. The **Add projectors** dialog opens.

![Add projectors dialog](images/add-projectors-dialog.png)

1. **Filter the list.** You can filter by **Brand**, **Brightness (lm)**, **Resolution**, **Lens type** (**Fixed lens** or **Interchangeable lens**) or by search text (brand, model or id).
2. **Check reach (optional).** Tick **Can reach wanted width**, then enter a **Distance (m)** (from the lens front to the surface) and a **Width (m)**. Only models and lenses that can fill that width remain.
3. **Pick a model.** Click a row. Click a column header to sort. A greyed row cannot be added, and hovering shows why.
4. **Choose a lens.** A fixed-lens model shows its lens. For an interchangeable-lens model, choose from the **Lens** list. Lenses that do not fit are listed with a reason.
5. **Set Quantity.**
6. **Choose Placement.** **At view centre** drops the projectors where the 3D view is looking. **Click in scene** lets you click a point in the 3D view. Esc or a right-click cancels.
7. Press **Add**.

The projector data comes from the maker spec sheets (Panasonic and Epson). See [Projector Database](Projector-Database.md).

### How many projectors

- Up to 8 projectors run at full speed.
- From 9 up to 16, the dialog warns that the view gets slower and the preview shadows get lower resolution. The 3D view header also shows a standing notice: "9-16 projectors: the live view may be slow".
- More than 16 in one variation is refused. The dialog tells you how many more fit.

Speed depends on your graphics card. The figures above were set on an RTX 5080 laptop GPU.

## Lens, zoom and shift

Select the projector, then open **Properties**.

- **Model** and **Change model…** swap the model. **Change model…** opens the same picker for the selected projectors.
- **Lens** picks the lens for interchangeable-lens models. If the selected projectors have different lenses, zoom and shift are not shown.
- **Throw ratio** is the zoom. It is the maker throw ratio, as on the spec sheet. The **Lens range** line under it shows the lowest and highest throw ratio the lens allows. Zoom is optical only.
- **Wanted width (m)** and **Fit** set the zoom so the image is the width you want at the current aim distance. The **×** button clears the wanted width.
- **Shift H (%)** and **Shift V (%)** are lens shift. They are limited to the range the lens allows (owner: check how the field reacts to a value outside it).
- **Mount** is **Floor** or **Ceiling**.
- **Light output (%)** dims the projector.
- **Flight frame** toggles the flight-frame model on the projector body (owner: check).
- **Look through** shows the 3D view as the projector sees it. Press it again to leave. It changes only the view.

Below the fields, a readout list shows **Aim distance**, **Aims at** (which surface), **Throw distance (maker)**, **Throw ratio (centre)**, **Image W × H**, **Centre** (lux at the image centre), **Pixel** and **Φ_eff** (effective lumens). If a projector is not analysed, the reason appears here.

## Position and aim

The projection centre is the lens, not the body.

- Use the **Move** (`W`) and **Rotate** (`E`) tools in the 3D view, or type exact values in **Properties > Transform** (**Position** and **Rotation**). Numbers use Blender's axes (Z up) and metres.
- **Aim at point** points selected projectors at a surface point. Use **Edit > Aim at point**, or the **Aim at…** button under **Rotation** in Properties. A hint appears: "Click a point to aim n projector(s) at. Esc or right-click cancels." Click once on a surface.
  - Only yaw and pitch change. Roll, mount and portrait orientation are kept.
  - If a projector cannot reach that point (for example the point is at the lens, or straight below with horizontal shift), it stays unchanged and a message names it.
  - One undo reverts all aimed projectors.

## Copy specs from active

Select two or more projectors. The last one you selected is the active one. Use **Edit > Copy specs from active**, or the **Copy specs** button in Properties. Choose what to copy:

- **Model and lens**, **Zoom**, **Shift**, **Mount**, **Light output**.
- Zoom copies as **Same TR** or **Same image width**.

Colour, name and wanted width are never copied. If a value does not fit a target projector's lens, it is clamped and a message says so.

## Duplicate and nulls

- **Edit > Duplicate** or `Ctrl+D` duplicates the selection.
- **+ Null** adds a null (an empty object) to the current variation's rig, at the view centre. Use nulls to hold projectors, for example a truss. Move the null and its projectors follow.
- The arrow next to **+ Null** offers **Venue null (shared by all variations)**.
- **Group**, **Parent** (`P`) and **Unparent** (`Shift+P`) work on the selection. The last selected object becomes the parent.

## Bodies, shadows and frustum

- Projector bodies are drawn as generic 3D models, sized from the maker's dimensions. Lens position is a generic centred guess. Projection centre and lens numbers still come from the database.
- In **Summary > Metrics**, the checkbox **Projector bodies cast shadows** is the one global switch for body shadows. If the projection centre lies inside another projector's body while shadows are on, that projector lights nothing, and the reason is shown.
- In the 3D view each projector draws a frustum: lines from the lens to a rectangle at the farthest surface it hits, plus a thin outline at the nearest. People and projector bodies that block light cut the lines. With no surface hit, the lines end at the aim distance (dashed) or at 5 m.
- **View > Labels** shows projector names in the 3D view.

## See also

[Analysis](Analysis.md), [Properties](Properties.md), [Projector Database](Projector-Database.md), [Variations and Compare](Setups-and-Compare.md)

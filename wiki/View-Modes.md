# View Modes

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (lux, pixel size, throw distance, overlap) come from maker data and simplified models and can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

The 3D view has five modes. Switch with the buttons at the top right, **View > Shading**, or the number keys `1` to `5` on the row above the letters. The numpad sets viewpoints, not modes.

![The view modes side by side](images/view-modes.png)

![The View modes help dialog](images/help-view-modes.png)

| Mode | Key | What it shows |
|---|---|---|
| **Shaded** | `1` | The venue with each projector's test pattern, overlaps adding light, and body shadows. Checks placement and coverage. Colours and brightness are not physical. |
| **Photometric** | `2` | Light on each surface, with a switch for the quantity: **Illuminance** (lux arriving, from lumens, distance and angle, blocked light removed), **Luminance** (cd/m², how bright the surface looks from a viewpoint, using the surface reflectance), **Surface contrast** and **Ambient contrast**. This used to be called Lux; only the label changed. |
| **Overlap** | `3` | How many projectors light each point, and the blend zones between projector pairs (full pair overlap, like a media server). Plans edge blends. |
| **Pixel** | `4` | Size of one projected pixel on each surface, from the projector's native resolution, distance and angle. |
| **Distance** | `5` | Distance from each surface to the nearest projector that lights it, in metres, with a band legend. Surfaces no projector covers keep the grey of the shaded view. |

The **?** button beside the mode buttons explains the current mode and repeats the warning "Numbers can be wrong. No guarantee of correct data." **Help > View modes…** shows the modes.

## Blended and Raw

**Blended** and **Raw** (or **View > Light**) change only the Photometric view. They are greyed out in other modes ("Photometric view only."). Blended applies the blend ramps between overlapping projectors; Raw shows the light without them. The Summary and the report always use blended light.

## Legends

Photometric, Overlap, Pixel and Distance show a legend. Shaded has none. Since 1.1.0 the legend is a floating card called **Legend** over the 3D view. It starts at the lower left. Drag it by its grip (the dotted bar with the word Legend). Double-click the grip, or press `Home` while the grip has focus, to put it back. The arrow at the right of the grip folds the settings away and keeps the colour bar. Its place and fold state are kept per machine, not in the project file. Editing a threshold recolours the view at once and is one undo step.

### Photometric legend

![The Photometric legend with the quantity switch and scale fields](images/3d-lux-legend.png)

A switch at the top picks the quantity: **Illuminance**, **Luminance**, **Surface contrast**, **Ambient contrast**. Under it is the colour bar of that quantity and a **no light** swatch.

- **Illuminance** ("Illuminance preview"): fields **Min lx**, **Target lx**, **Max lx**.
- **Luminance** ("Luminance preview"): fields **Min cd/m²**, **Target cd/m²**, **Max cd/m²**, a **Default ρ** field (the project's default reflectance) and a **Luminance viewpoint** list: **Current camera** or one of your saved cameras. Surfaces the viewpoint cannot see are greyed (per object). Properties > Surface > Reflectance sets ρ per object. See [Physics Model](Physics-Model.md).
- **Surface contrast**: three band swatches (below 5:1, 5:1 to 10:1, 10:1 and above). No fields, no Auto range. It is p99 / p1 of the lit samples of each target object.
- **Ambient contrast** ("Ambient contrast preview"): fields **Min ratio**, **Target ratio**, **Max ratio** and **Site ambient lx**. The bar carries marks at **5:1 min** and **10:1 ideal**. With a site ambient under 0.01 lx the bar reads n/a and the legend says "Set a site ambient value".
- **Log** and **Linear** set the colour scale. **Auto range** sets Min and Max from the 1st and 99th percentile of the lit target surfaces. If nothing is lit it says "Nothing lit to fit".
- **Smooth**, **5 bands** and **10 bands** step the colour bar. This is a view setting only.
- **Overlay opacity (%)** (default 70, at most 90) sets how strongly the colour covers the shaded surface, so the model never disappears.
- While the analysis runs, the legend says "blend pending". The blend ramps in the view are a placeholder until it finishes.

### Overlap legend

![The Overlap legend](images/3d-overlap-legend.png)

"Overlap: projectors lighting each point", with one colour per count. Stripes mean a projector's image covers the point but its light is blocked; they use that projector's colour. The field **Warn below overlap (%)** sets the blend warning threshold.

### Pixel legend

![The Pixel legend](images/3d-pixel-legend.png)

"Pixel size, worst axis (log)" with the **no light** swatch, a **too coarse (above the maximum)** swatch and a **grazing (above the angle)** hatch. Fields: **Max pixel (mm)** and **Grazing above (°)**.

### Distance legend

"Distance to the nearest projector (m)" with a band bar. The range fits the shown projectors on its own, in steps of 1, 2 or 5 from 0.1 m, at most 10 bands (0 to 10 m when nothing is shown). **Overlay opacity (%)** applies here too.

### Texture strength

With **Textures** on, Photometric, Overlap, Pixel and Distance draw over a greyscale copy of the texture. **Texture strength (%)** sets how much texture detail shows. 0 % is the view without textures. It is a view setting: not saved, not undone. It is disabled ("Textures are off") while **View > Textures** is off. See [Textures](Textures.md).

See also: [Analysis](Analysis.md), [Physics Model](Physics-Model.md), [3D View](3D-View.md), [Summary and History](Summary-and-History.md)

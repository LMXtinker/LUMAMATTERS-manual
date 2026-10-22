# Measure Tools

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (lux, pixel size, throw distance, overlap) come from maker data and simplified models and can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

## Status in this build

The measure tools are not in this build yet (owner: check). There is no **Measure** tool, no sidebar, no key `M`, and no menu entry in the app you are running. The project file format and the commands that store measurements exist, and the report editor has places reserved for them (an overlay layer and a **Measurements** table source with the text "No measurements."). But you cannot create a measurement.

Until they arrive, use the numbers the app already shows:

- **Properties > Readouts** for a projector: **Aim distance**, **Throw distance (maker)**, **Image W × H**. See [Placing Projectors](Placing-Projectors.md).
- The probe in the Summary for distance from each projector to a hovered point. See [Analysis](Analysis.md).
- Position fields in **Properties > Transform**, in metres.

## What is planned (not in this build yet)

From the accepted design (owner: check, may change):

- A **Measure** tab on the right edge of the 3D view, toggled with `N`. The tool starts with `M`.
- Click point A and point B to get a distance with Δx, Δy and Δz. Lock to the X, Y or Z axis, or to a projector's lens axis.
- Snapping to vertices, edge endpoints and midpoints, bounding-box points, projector lens centre and plain surface hits. `Ctrl` turns snapping off for one click.
- Annotations: a text tag with a leader line.
- Styling (font size, arrows, colour, dotted line) and a "Show in" choice per camera.
- Measurements follow the objects they are snapped to, and are flagged "check" if a reload moves the geometry.
- Dimensions drawn on report pictures, with a measurements table in the report. You can hide single dimensions per picture.
- Angles and arbitrary area measurements are not planned.

## See also

[Report and PDF](Report-and-PDF.md), [3D View](3D-View.md), [Analysis](Analysis.md), [Placing Projectors](Placing-Projectors.md)

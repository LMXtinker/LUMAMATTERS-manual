# Summary and History

These two tabs sit next to the Outliner. They are easy to mix up with undo, so read the last section.

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (lux, pixel size, throw distance, overlap) come from maker data and simplified models and can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

![The Summary panel with Metrics and Overlaps](images/summary-panel.png)

## Summary

Summary shows the state of the venue and the numbers of the active variation. Sections fold.

- **Status line** at the top: "Venue loaded.", "No model file imported. Use File > Import.", or the problem (a missing model file) in its own line. A **Hidden:** line tells how many projectors and surfaces are hidden and so not in the numbers.
- **Venue**: the import report of the latest model file (Surfaces, Triangles, Projectors found, Viewpoints found, Ignored, Rejected, warnings). With several files, a list picks which report to show.
- **Metrics**: Target area, Coverage, Shadowed, Outside all images, Below min lux, Lux min / avg / max, Uniformity (min/avg), Pixel avg / P95, Overlap area, Pairs below min overlap, Projectors, total effective lumens. A badge says `stale` while numbers are being recomputed, or `analysis failed: out of date`. A checkbox **Projector bodies cast shadows** switches body shadows.
- **Targets**: one row per target surface.
- **Overlaps**: a pair table with the blend zone (in projector pixels) and the overlap per pair; pairs under the warning threshold are marked.
- **Probe** (pinned at the bottom): hover a surface in the 3D view to read lux, pixel size and distance per projector at that point. `Alt+click` pins the probe, `Esc` releases it.

See [Analysis](Analysis.md) for how to read the numbers.

## History

History lists the **snapshots** of your project. You can also open it with **File > Snapshot history**.

- The name field and **+ Snapshot** take a snapshot (name optional). `Ctrl+S` does it too.
- **Show automatic** shows or hides snapshots the app took itself (before a file change, when leaving a project, before loading a snapshot, and so on).
- The table has **No.**, **Name**, **Time**, **Kind** (`Saved` or `Auto: <reason>`), **Based on**, and marks: `current` (equals the state now) and `base` (the snapshot your state came from).
- Select a row, then **Load as current state…** or **Open as separate project…**. Loading first saves the current state as a snapshot, so nothing is lost, and then clears the undo history. Opening as a separate project leaves your project untouched.
- Arrow keys, `Home` and `End` move through the rows.

More in [Projects and Snapshots](Projects-and-Snapshots.md).

## History panel versus undo

- **History panel / File > Snapshot history**: restore points saved to disk.
- **Edit > Undo / Redo** (`Ctrl+Z`, `Ctrl+Y`) and the header's **Undo** and **Redo** buttons: step back through your recent edits in this session. The app has no panel that lists undo steps.

See also: [Projects and Snapshots](Projects-and-Snapshots.md), [Analysis](Analysis.md), [Interface Tour](Interface-Tour.md), [Variations and Compare](Setups-and-Compare.md)

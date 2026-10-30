# What's new

Changes by version, newest first. The same notes are in the app under **Help > About LUMAMATTERS** (see [Menus](Menus.md#about-lumamatters)). This manual describes version 1.1.0.

Projects saved with version 1.0 and later features (people, cameras, report layout, maker throw data, reflectance, projector images) can use a newer file format. Older builds refuse them. Update every machine before you save such a project. See [Several Machines](Several-Machines.md) and [Project Files](Project-Files.md).

## 1.1.0 (2026-10-30): New look, Photometric view, snapping, Share

**Viewport look**
- **Dark grey surfaces with a soft highlight.** The Viewport fold-out has new **Surfaces** switches (**Specular**, **Perceptual**, **Grey** material override). Lighting has a new **Ambient (%)**, and "Scene light" is now **Directional (%)**. The colour views draw with an **Overlay opacity** (default 70 %), so the model never disappears. See [3D View](3D-View.md#viewport-fold-out-right-edge).
- **Beams and projector images.** Filled, fainter beams with **Selected**, **All**, **None** and a **Beam visibility (%)** slider. **Images** (Show projector images) paints each projector's test pattern in every view mode.
- **Edge highlight.** White lines where depth or surface direction jumps, with a strength slider and an option for texture edges. The old Wire button is now **Object edges** (**View > Object edges**) in the new **Edges** section.
- **Distance view** (key `5`): distance to the nearest projector, in metres. See [View Modes](View-Modes.md).
- **Grid and background.** **Cell size**, **Subdivisions** and **Extent** for the grid, and two new backgrounds, **Flat colour** and **Gradient**, with colour pickers. These look settings are kept per machine, not in the project.
- **Floating legend.** The legend is a card you can drag over the 3D view. Double-click its grip to reset, fold it to keep the colour bar. See [View Modes](View-Modes.md#legends).

**Photometric view**
- The **Lux** view is now **Photometric** (key `2`; the label only). The legend has a switch: **Illuminance**, **Luminance**, **Surface contrast**, **Ambient contrast**. See [Analysis](Analysis.md#photometric).
- **Luminance** in cd/m² (L = ρ × E / π) for a viewpoint (current camera or a saved camera). Objects that the viewpoint cannot see are greyed. **Reflectance** per object in Properties > Surface, with typical values (white paint to red brick) and a project default. See [Physics Model](Physics-Model.md).
- **Surface contrast** (p99 / p1 per object) and **Ambient contrast** with a **Site ambient lx** value, marks at 5:1 and 10:1.
- **Auto range**, **Smooth / 5 bands / 10 bands**, log or linear. New **Photometry** rows in the Summary, new Targets columns, a probe line, and **Quantity** and **Bands** for report pictures. See [Summary and History](Summary-and-History.md) and [Report and PDF](Report-and-PDF.md).
- **Projector image.** Properties > Image loads your own picture in place of a projector's test pattern. See [Properties](Properties.md).
- **Project format 5.0.** A project with a reflectance or a projector image is saved as format 5.0. Older builds refuse it. The first 5.0 save keeps a copy of the old project in `.recovery` and, with automatic snapshots on, makes a snapshot. Update every machine first. See [Project Files](Project-Files.md#project-format-version) and [Several Machines](Several-Machines.md).

**Snapping**
- A **magnet** button in the top strip of the 3D view, with step sizes for Move, Rotate and Scale. Move also snaps to vertices and edges of the venue. **Behaviour change:** with the magnet on, `Ctrl` means free; with it off, `Ctrl` snaps as before. See [3D View](3D-View.md#snapping-magnet).

**Share**
- **File > Share view-only scene…** exports a viewer that opens in a web browser without LUMAMATTERS: orbit, saved cameras, layers, Shaded or Photometric (illuminance and luminance) with a colour bar. Output as a folder, a zip or a single file (optional password). The folder needs a web server. Anyone with the files can extract the geometry. See [Share a view-only scene](Share-a-view-only-scene.md).

## 1.0.3 (2026-10-25): Legal notices

- **Legal notices.** **Help > About** shows a trademark and data line and a beta note. The third-party notices now include licence texts for libraries that ship without one, each with its source. See [About LUMAMATTERS](Menus.md#about-lumamatters).
- **Installer licence page.** The installer shows the licence before it installs.
- **Download page.** **Help > About** links to the download page.
- **Feedback privacy line.** **Help > Send feedback…** says that feedback goes only to the developer, is used only to fix the app and is deleted on request. See [Send feedback](Menus.md#send-feedback).
- **Liability wording.** The no-warranty note in About and in `LICENSE` now applies "to the extent permitted by law". The licence terms themselves are unchanged.
- **Tutorial part 2.** After the last card of the tour, **You are ready**, the tour offers an optional part 2 of 4 steps: Measure, Variations, the Report and Send feedback. See [Tutorial](First-Start-and-Workspace.md#tutorial).

## 1.0.2 (2026-10-24): Feedback

- **Send feedback.** New entry **Help > Send feedback…**. Type what happened, what you expected and the steps. The dialog adds anonymous system facts: app version, Windows version, CPU cores, memory, graphics card, screen size, and the number of projectors and triangles. It never adds your project name, file paths, user name or machine name. See [Send feedback](Menus.md#send-feedback).
- **You see the text before anything leaves the app.** **Copy to clipboard** copies it. **Open email** opens your mail program with the text filled in. The app itself sends nothing and makes no network call. Your email address is visible to the developer, so use any address you like. See [Send feedback](Menus.md#send-feedback).
- **Include my scene.** Off by default. It saves a copy of the scene (no model files, no textures, no project name or file paths) into a folder you pick, for you to attach to the mail by hand. It may contain names you typed (projectors, objects). See [Send feedback](Menus.md#send-feedback).

## 1.0.1 (2026-10-24): Licensing update, first beta build

- **Licence.** A `LICENSE` file is installed next to the app. The beta is free to use, also for commercial work. You may modify it for yourself. You may not sell it. See [Install](Install.md).
- **Help > About.** It shows the version with "Beta", the copyright line, a short licence summary, a note that the numbers are a planning aid (no warranty for rigging, safety or on-site results), and the third-party notices. See [About LUMAMATTERS](Menus.md#about-lumamatters).
- **Third-party notices.** A `THIRD_PARTY_NOTICES.txt` file lists the licences of the libraries, Rust crates and fonts the app includes. It is installed next to the app. See [Install](Install.md).
- **BETA mark.** A small BETA mark sits next to the LUMAMATTERS name in the top bar and on every report page, on screen and in Print / Save as PDF. See [Interface Tour](Interface-Tour.md#the-header-bar) and [Report and PDF](Report-and-PDF.md).

## 1.0.0 (2026-10-23): First release

- **Desktop app.** LUMAMATTERS runs as its own Windows program. No browser, no server, works offline. See [Install](Install.md).
- **Plan projection in 3D.** Import venue models (glTF / GLB, FBX, OBJ), add and place projectors from the Panasonic and Epson database, and check throw, lens shift, lux, overlap and pixel size. See [Blender Export and Import](Blender-Export-and-Import.md), [Placing Projectors](Placing-Projectors.md) and [Analysis](Analysis.md).
- **Report editor.** Build a client report on pages from a template (Dark lab, White lab or Lab sheet), add render and image blocks, crop pictures, then Print / Save as PDF. See [Report and PDF](Report-and-PDF.md).
- **Measure tools.** Measure distances and add text tags in the 3D view. Points snap to corners, edges and lenses. Measurements can show in the report. See [Measure Tools](Measure-Tools.md).
- **Projector look-through and frustum lines.** See the scene from a projector and watch throw and lens shift update. Frustum lines draw a pyramid from the lens to the surfaces. See [Placing Projectors](Placing-Projectors.md) and [3D View](3D-View.md).
- **Variations and Compare.** Keep several projector rigs on the same venue, switch between them (A/B) and compare them in a table. See [Variations and Compare](Setups-and-Compare.md).
- **Lens finder.** Enter the image width you want and the app lists the lenses that fit. See [Placing Projectors](Placing-Projectors.md).
- **Test patterns.** A test pattern per projector, shown in the 3D view and exported as PNG at native resolution. See [Test Patterns](Test-Patterns.md).
- **Maker throw data.** Throw ratios come from the maker data sheets. The zoom field shows the maker throw ratio. See [Projector Database](Projector-Database.md).

See also: [Home](Home.md), [Install](Install.md), [Menus](Menus.md)

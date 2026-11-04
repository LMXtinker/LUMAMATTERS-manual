# What's new

This page lists the changes by version, newest first. The same notes are in the app under **Help > About LUMAMATTERS** (see [Menus](Menus.md#about-lumamatters)). This manual describes version 1.1.0.

Some features need a newer file format: people, cameras, report layout, maker throw data, reflectance and projector images. Older builds refuse a project in a newer format. Update every machine before you save such a project. See [Several Machines](Several-Machines.md) and [Project Files](Project-Files.md).

## 1.1.0 (2026-11-04): New look, Photometric view, snapping, Share

**Viewport look**
- **Dark grey surfaces with a soft highlight, on a Studio gradient background.** The default background is a soft radial grey. A machine with the old Dark default moves to it once. The Viewport fold-out has new **Surfaces** switches: **Specular**, **Soft light**, **Smooth**, **Occlusion**, **Perceptual** and the **Grey** material override. Soft light, Smooth and Occlusion work in the Shaded view. Lighting has a new **Ambient (%)**. The old "Scene light" is now **Directional (%)**. The colour views draw with an **Overlay opacity** (default 70 %), so the model never disappears. See [3D View](3D-View.md#viewport-fold-out-right-edge).
- **Beams and projector images.** Beams are filled and fainter. The buttons **Selected**, **All** and **None** and a **Beam visibility (%)** slider control them. **Images** (Show projector images) paints the test pattern of each projector in every view mode.
- **Edge highlight.** Light grey lines show where depth or surface direction jumps. A strength slider and an option for texture edges control them. The old Wire button is now **Object edges** (also **View > Object edges**). It is in the new **Edges** section.
- **Distance view** (key `5`). It shows the distance to the nearest projector, in metres. See [View Modes](View-Modes.md).
- **Grid and background.** The grid has **Cell size**, **Subdivisions** and **Extent**. There are two new backgrounds, **Flat colour** and **Gradient**, with colour pickers. The app keeps these look settings per machine, not in the project.
- **Floating legend.** The legend is a card that you can drag over the 3D view. Double-click its grip to reset it. A **Settings** section holds the range, scale, bands and opacity controls. It is closed at first. The colour bar stays visible. See [View Modes](View-Modes.md#legends).

**Photometric view**
- The Lux view is now the **Photometric** view (key `2`). Only the label changed. A switch in the legend selects the quantity: **Illuminance**, **Luminance**, **Surface contrast** or **Ambient contrast**. See [Analysis](Analysis.md#photometric).
- **Luminance** is shown in cd/m² (L = ρ × E / π) for one viewpoint: the current camera or a saved camera. Objects that the viewpoint cannot see are grey. **Reflectance** is set for each object in Properties > Surface. It has typical values (white paint to red brick) and a project default. See [Physics Model](Physics-Model.md).
- **Surface contrast** (p99 / p1 for each object) and **Ambient contrast** are new. Ambient contrast uses a **Site ambient lx** value. It has marks at 5:1 and 10:1.
- **Auto range**, **Smooth / 5 bands / 10 bands** and log or linear colour bars are new. The Summary has new **Photometry** rows and new Targets columns. The probe has a new line. Report pictures have **Quantity** and **Bands**. See [Summary and History](Summary-and-History.md) and [Report and PDF](Report-and-PDF.md).
- **Reset defaults.** This legend button sets the range of the shown quantity back to a reference scene. Site ambient stays. New projects start with a site ambient of 10 lx.
- **Projector image.** Properties > Image loads your own picture in place of the test pattern of a projector. See [Properties](Properties.md).
- **Project format 5.0.** A project with a reflectance or a projector image is saved as format 5.0. Older builds refuse it. The first 5.0 save keeps a copy of the old project in `.recovery` and makes an automatic snapshot. Update every machine first. See [Project Files](Project-Files.md#project-format-version) and [Several Machines](Several-Machines.md).

**Snapping**
- A **magnet** button is in the top strip of the 3D view. It has step sizes for Move, Rotate and Scale. Move also snaps to vertices and edges of the venue. **Behaviour change:** with the magnet on, `Ctrl` means free. With the magnet off, `Ctrl` snaps as before. See [3D View](3D-View.md#snapping-magnet).

**Tutorial and fixes**
- **One continuous Tutorial.** It has 40 cards and no part 2 pause. See [Tutorial](First-Start-and-Workspace.md#tutorial).
- **Projection borders** stay thin at low view angles.
- **Lens panel.** Properties > Lens is readable at narrow widths. The slider marker is a small tick at the bottom of the track. It never covers the value.
- **Report block order.** Right-click a block to choose Bring to front, Bring forward, Send backward or Send to back. See [Report and PDF](Report-and-PDF.md#moving-and-arranging).

**Share**
- **File > Share view-only scene…** exports a viewer that opens in a web browser without LUMAMATTERS. The viewer has orbit, saved cameras, layers, and the Shaded or Photometric view (illuminance and luminance) with a colour bar. The output is a folder, a zip or a single file (optional password). The folder needs a web server. Anyone with the files can extract the geometry. See [Share a view-only scene](Share-a-view-only-scene.md).

## 1.0.3 (2026-10-25): Legal notices

- **Legal notices.** **Help > About** shows a trademark and data line and a beta note. The third-party notices now include licence texts for libraries that ship without one. Each text has its source. See [About LUMAMATTERS](Menus.md#about-lumamatters).
- **Installer licence page.** The installer shows the licence before it installs.
- **Download page.** **Help > About** links to the download page.
- **Feedback privacy line.** **Help > Send feedback…** says that feedback goes only to the developer. It says that the developer uses it only to fix the app and deletes it on request. See [Send feedback](Menus.md#send-feedback).
- **Liability wording.** The no-warranty note in About and in `LICENSE` now applies "to the extent permitted by law". The licence terms are unchanged.
- **Tutorial part 2.** After the last card, **You are ready**, the Tutorial offered an optional part 2. It had 4 steps: Measure, Variations, the Report and Send feedback. Version 1.1.0 replaced it with one continuous Tutorial. See [Tutorial](First-Start-and-Workspace.md#tutorial).

## 1.0.2 (2026-10-24): Feedback

- **Send feedback.** The new entry **Help > Send feedback…** asks what happened, what you expected and the steps. The dialog adds anonymous system facts: app version, Windows version, CPU cores, memory, graphics card, screen size, and the number of projectors and triangles. It never adds your project name, file paths, user name or machine name. See [Send feedback](Menus.md#send-feedback).
- **You see the text before anything leaves the app.** **Copy to clipboard** copies it. **Open email** opens your mail program with the text filled in. The app itself sends nothing and makes no network call. The developer can see your email address, so use any address you like. See [Send feedback](Menus.md#send-feedback).
- **Include my scene.** It is off by default. It saves a copy of the scene into a folder that you pick. You attach the copy to the mail by hand. The copy has no model files, no textures, no project name and no file paths. It can contain names that you typed (projectors, objects). See [Send feedback](Menus.md#send-feedback).

## 1.0.1 (2026-10-24): Licensing update, first beta build

- **Licence.** A `LICENSE` file is installed next to the app. The beta is free to use, also for commercial work. LUMAMATTERS will always stay free in one form or another, with all features available. You may modify it for yourself. You may not sell it. See [Install](Install.md).
- **Help > About.** It shows the version with "Beta", the copyright line and a short licence summary. It also shows a note that the numbers are a planning aid, with no warranty for rigging, safety or on-site results. It shows the third-party notices too. See [About LUMAMATTERS](Menus.md#about-lumamatters).
- **Third-party notices.** The file `THIRD_PARTY_NOTICES.txt` lists the licences of the libraries, Rust crates and fonts in the app. The installer puts it next to the app. See [Install](Install.md).
- **BETA mark.** A small BETA mark is next to the LUMAMATTERS name in the top bar. It is also on every report page, on screen and in Print / Save as PDF. See [Interface Tour](Interface-Tour.md#the-header-bar) and [Report and PDF](Report-and-PDF.md).

## 1.0.0 (2026-10-23): First release

- **Desktop app.** LUMAMATTERS runs as its own Windows program. It needs no browser and no server. It works offline. See [Install](Install.md).
- **Plan projection in 3D.** Import venue models (glTF / GLB, FBX, OBJ). Add and place projectors from the Panasonic and Epson database. Check throw, lens shift, illuminance, overlap and pixel size. See [Blender Export and Import](Blender-Export-and-Import.md), [Placing Projectors](Placing-Projectors.md) and [Analysis](Analysis.md).
- **Report editor.** Build a client report on pages from a template (Dark lab, White lab or Lab sheet). Add render and image blocks and crop pictures. Then use Print / Save as PDF. See [Report and PDF](Report-and-PDF.md).
- **Measure tools.** Measure distances and add text tags in the 3D view. Points snap to corners, edges and lenses. Measurements can show in the report. See [Measure Tools](Measure-Tools.md).
- **Projector look-through and frustum lines.** See the scene from a projector and watch throw and lens shift update. Frustum lines draw a pyramid from the lens to the surfaces. See [Placing Projectors](Placing-Projectors.md) and [3D View](3D-View.md).
- **Variations and Compare.** Keep several projector rigs on the same venue. Switch between them (A/B) and compare them in a table. See [Variations and Compare](Setups-and-Compare.md).
- **Lens finder.** Enter the image width you want. The app lists the lenses that fit. See [Placing Projectors](Placing-Projectors.md).
- **Test patterns.** Each projector has a test pattern. The 3D view shows it, and the app exports it as PNG at native resolution. See [Test Patterns](Test-Patterns.md).
- **Maker throw data.** Throw ratios come from the maker data sheets. The zoom field shows the maker throw ratio. See [Projector Database](Projector-Database.md).

See also: [Home](Home.md), [Install](Install.md), [Menus](Menus.md)

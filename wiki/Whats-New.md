# What's new

Changes by version, newest first. The same notes are in the app under **Help > About LUMAMATTERS** (see [Menus](Menus.md#about-lumamatters)). This manual describes version 1.0.2.

Projects saved with version 1.0 features (people, cameras, report layout, maker throw data) can use a newer file format. Older builds refuse them. Update every machine before you save such a project. See [Several Machines](Several-Machines.md) and [Project Files](Project-Files.md).

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

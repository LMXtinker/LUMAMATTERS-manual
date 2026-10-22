# Report and PDF

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (lux, pixel size, throw distance, overlap) come from maker data and simplified models and can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

The Report tab is a small page editor. You build A4 landscape pages with text, 3D-view pictures, tables and shapes, then save them as a PDF through Chrome's print dialog. The app has no PDF engine of its own.

![The Report tab with the page list on the left and the properties on the right](images/report-tab.png)

## Opening the report

- **View > Report**, or
- **File > Export > Report…**

Both open and focus the **Report** tab next to the 3D view. With no project open it says "Open a project to set up its report." The report reads the open project as it is now. You do not need to save first. It also works in a read-only window.

The first time you open it, the tab shows the built-in **Dark lab** starter: near-black pages, IBM Plex fonts, a cover, a Lux page, an Overlap page, a Projectors page and a Settings and notes page. Opening the tab writes nothing to your project. Your first edit stores the layout in the project file.

## The disclaimer

The report carries its own disclaimer in the footer of the cover and of the master page. The text is:

> Planning estimate. Brightness, overlap and pixel values are calculated from manufacturer data and the 3D model; real results depend on the venue, the surfaces, the projectors' condition and their setup. Check on site.

It is a field in a text block. If you delete it from your layout, the report no longer carries it.

## Layout of the tab

- **Toolbar** (top): zoom, **View**, align, **Insert**, **Check** and **Print / Save as PDF**.
- **Pages** (left): thumbnails of the **Master** and of every page, with **Add page**, **Duplicate** and **Delete**. Drag a thumbnail to reorder pages. `Alt+Up` and `Alt+Down` move the selected page. Delete asks "Delete this page and its blocks?".
- **Canvas** (middle): the pages, with rulers in millimetres.
- **Properties** (right): **Report setup**, then the fields of the selected page or block.

### Master page

The **Master** holds what repeats on every page: header, footer, page numbers and, if you want, a logo. Click **Master** in the page list to edit it. A page can switch it off with **Show master** in its page properties.

### Report setup

At the top of the properties panel:

- **Variation**: which variation the report is about. Shown only when the project has more than one variation. One report covers one variation.
- **Prepared by** and **Prepared for**: optional one-line fields for the cover.
- **Show people**: draws the people from the [People](People.md) page in report pictures. Their shadows stay in the numbers either way.
- **Template**: **Save as template…**, **Apply template…**, **Reset to starter**.

## Blocks

Add blocks with the **Insert** buttons. They go on the current page, or on the master while you edit it.

| Button | Block |
|---|---|
| **Text** | Rich text: font, size, bold, italic, underline, lists, alignment, paragraph styles, and **Insert field** for live values. Double-click to edit. |
| **Render** | A picture of the 3D view. Each Render block has its own camera. |
| **Table** | A table filled from the project, with a column picker. Sources: **Projectors**, **Pairs**, **Notes**, **Settings**. A long table continues on new pages with its header repeated. |
| **Metrics** | A photometry box with layouts **Strip**, **Grid** and **Table**, and an optional lux scale. |
| **Shape** | A rectangle or ellipse. |
| **Line** | A line: solid, dashed or dotted. |
| **SVG** | Your own SVG artwork. |
| **Image** | A picture file, for example your logo. |

You can also drag SVG and picture files onto the Report tab. Model files are refused there.

### Render block

In Properties, a Render block has:

- **View mode**: **Shaded**, **Lux**, **Overlap** or **Pixel**.
- **Source**: a camera (the 3D view or a saved camera) or a projector. Press the update button to store the 3D view's current camera for this picture.
- **Light**, **Fit** (**Fill** or **Fit**), **Lighting**, **Textures** (**As 3D view**, **On**, **Off**), **Texture strength**, **Test patterns**, **Legend** and **Background**.
- Overlay options: **Cones**, **Iso-lux lines**, **Iso-lux labels**, **Centre lux** and **Blend values**, with label size, colour and outline.

Every number in the report equals the matching number in the app panels.

### Moving and arranging

- Drag, resize and rotate with the handles. Shift-click adds to the selection.
- Type exact **X**, **Y**, **W**, **H** (mm) and **Rotation** in **Transform**.
- **Aspect lock** (checkbox "Keep aspect ratio") keeps the shape when you resize. **Lock** freezes a block.
- Align buttons: **Align left**, **Align centre**, **Align right**, **Align top**, **Align middle**, **Align bottom**. **Distribute horizontally** and **Distribute vertically** space the selected blocks evenly. **Align to** chooses what to align against.
- Snapping to guides, page edges and other blocks. Drag guides out of the rulers. The **View** button toggles **Rulers**, **Guides**, **Margins**, **Snap** and **Lock guides**.
- Keys when the canvas has focus: arrows nudge 1 mm (`Shift` + arrow 10 mm), `Ctrl+D` duplicates, `Delete` removes, `Ctrl+C`, `Ctrl+X` and `Ctrl+V` copy, cut and paste, `Ctrl+L` locks. Every edit is one undo step, with the app's normal undo.

### Crop

Select a picture or Render block, then in **Picture** press **Crop on page** (or double-click the picture). Drag to pan, use **Zoom**, **Pan X** and **Pan Y**, then press **Done** (or `Enter`). **Reset crop** goes back to the full picture.

## Templates

**Template** in Report setup:

- **Save as template…** stores the layout, with its pictures and SVG files, in your workspace folder under `report-templates/`. It asks for a name and asks before replacing one.
- **Apply template…** replaces the whole layout. Logos and SVG files are copied into this project. Camera choices of Render blocks are cleared.
- **Reset to starter** goes back to the built-in starter.

Built-in templates: **Dark lab**, **White lab** and **Lab sheet**. Lab sheet is white paper with dark ink, IBM Plex Mono throughout, one orange accent and a measuring-sheet frame.

## Check

**Check** counts the problems in your report and lists them. Click an entry to jump to its block. It finds, for example:

- text that does not fit its frame, even at 6 pt;
- blocks that reach beyond the page edge;
- missing picture files and Render blocks that cannot be drawn;
- a note when the pages are dark: "a screen PDF is recommended; printing on paper uses a lot of ink."

## Making the PDF

1. Press **Print / Save as PDF** (or `Ctrl+P`).
2. If Check found warnings or errors, a dialog lists them and asks "Print anyway?".
3. The app waits for the final numbers, loads the fonts and draws every Render block at print size. A progress card with **Cancel** shows meanwhile.
4. Chrome's print dialog opens. Choose **Save as PDF**.

Chrome suggests the file name `<project> – <variation> – <date>`. If you change the project while the report is being prepared, printing stops and asks you to try again.

The PDF keeps text selectable (owner: check). Check the result in a PDF viewer before you send it.

See also: [View Modes](View-Modes.md), [Analysis](Analysis.md), [People](People.md), [Textures](Textures.md)

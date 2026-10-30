# FAQ and troubleshooting

## The 3D view is blank, or the app says it cannot run

The app needs WebGL2. Without it, the app shows "LUMAMATTERS cannot run in this browser" and lists what is missing. (The message keeps that wording, but it is the desktop app's own web view that cannot start.)

- Update your graphics driver.
- Make sure Microsoft Edge WebView2 is installed (see [Install](Install.md)).
- On a laptop with two GPUs, make sure Windows uses the fast GPU for LUMAMATTERS (Windows Settings > System > Display > Graphics). (owner: check)
- If a project opens but the view stays empty, check that the venue is visible in the [Outliner](Outliner.md). Press `F` with nothing selected: Frame selected then frames everything.

## Windows warns that the installer is unsigned

The installer is not code-signed, so Windows SmartScreen may show "Windows protected your PC". Click **More info**, then **Run anyway**. See [Install](Install.md).

## It is slow with many projectors

- Up to 8 projectors run at full speed. From 9 to 16 the app warns that the live view may be slow and uses lower-resolution preview shadows. 16 is the maximum.
- Turn off **Projector bodies cast shadows** (in the Summary) to cut shadow work (owner: check that this speeds things up).
- Reduce the venue mesh. The target is about 500,000 triangles.
- Close other windows that use the GPU. The speed reference is a laptop with an RTX 5080 GPU.

## A model file moved or is missing

The model's row in the Outliner shows a **missing** badge. The app uses its own copy in `models/`, so this happens only if that copy was moved or deleted.

- Use the row menu **Change file...** and pick the file again.
- For missing textures, use **Locate textures...** in the same menu and pick the folder that holds them.
- If you restored the project from a backup, copy the missing file back into `models/`.

## "Changed on disk"

- **Project file:** a banner says `<slug>.luma` changed on disk (git pull or another machine). Choose **Reload theirs** or **Keep mine**. The app first saves the side it replaces as an automatic snapshot, so nothing is lost.
- **Model file:** the row shows **changed on disk**. Use **Reload file** to compare. The report offers **Keep mine** or **Take file** per item.
- Reload is manual. The app does not watch files.

## The app says the project was saved by a newer app

The project uses a newer format than this build understands (see [Project files](Project-Files.md)). Saving is paused and nothing on disk is overwritten. Update the app on this machine, then open the project. Update every machine, or older ones refuse it.

## Textures are missing or look grey

- The import report lists missing textures. Use **Locate textures...** to find them.
- **Photometric**, **Overlap**, **Pixel** and **Distance** views draw the texture in greyscale on purpose. Change it with **Texture strength**. See [Textures](Textures.md).
- Only base-colour textures are shown. Other maps are ignored.

## The scale looks wrong

The app works in metres. One Blender unit is one metre. Export from Blender with Metric, Unit Scale 1.0, and do not rescale in the app. A model exported in millimetres or centimetres looks 1000 or 100 times too big. See [Blender export and import](Blender-Export-and-Import.md).

## The numbers do not match the real projector

The app uses maker data and a simplified model. See [Physics model and limits](Physics-Model.md) and [Projector database](Projector-Database.md). Check the maker's spec sheet with the **Spec sheet** button.

## The Measure tool does not place a point, or a dimension is missing

- The tool needs an open project and the focus in the 3D view. Press `M` there, or click **Measure** in the tool column.
- Nothing snaps to hidden objects. Switch **Surface** snap on in the Measure sidebar (`N`) to hit any visible surface.
- A measurement with an amber **check** badge sits on geometry that changed in a reload. Check it, then **Mark checked**.
- **Hide all** in the sidebar hides every measurement in the 3D view. It is not saved with the project.
- Dimensions can show on report pictures: in the picture block's properties, the **Measurements** switch turns them on and a list lets you hide single ones. A report table can also use **Measurements** as its source. See [Report and PDF](Report-and-PDF.md) and [Measure Tools](Measure-Tools.md).

## How do I report a bug or wrong data?

Choose **Help > Send feedback…** (see [Menus](Menus.md)). Fill in **What happened**, **What did you expect** and **Steps**. The dialog shows the full text it would send (your answers plus a few anonymous system facts such as the app version, Windows version and graphics card). Then:

- **Copy to clipboard** copies the text, and you paste it into your own mail.
- **Open email** opens your mail program with the text filled in. If the button is greyed out because the text is too long for an email link, use **Copy to clipboard**.
- **Include my scene** (optional) with **Save scene file…** saves a copy of the scene to a folder you pick. It holds no model files and no textures, but it can contain names you typed. Attach it to the mail by hand. Screenshots are attached in the mail program too.

The app sends nothing itself. For a wrong projector or lens value, also name the model, the lens, the field and the value from the maker's sheet. See [Projector database](Projector-Database.md).

## I lost an edit

Open the **History** tab and find an automatic snapshot from before the step. **Load as current state** restores it and first saves your current state as another snapshot. See [Projects and snapshots](Projects-and-Snapshots.md).

## Where do my files live? Does the app send anything out?

Your files are in the workspace folder you chose. The app has no accounts, no cloud and no telemetry. Its only network use is the **Spec sheet** button, which opens a maker page in your default browser. **Help > Send feedback…** sends nothing by itself: it builds a text that you copy or open in your own mail program, and you send it.

## See also

[Install](Install.md) | [Project files](Project-Files.md) | [Physics model and limits](Physics-Model.md) | [Glossary](Glossary.md)

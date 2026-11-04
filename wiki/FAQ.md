# FAQ and troubleshooting

## The 3D view is blank, or the app says it cannot run

The app needs WebGL2. Without it, the app shows "LUMAMATTERS cannot run in this browser" and lists what is missing. The message keeps this wording. It is the web view of the desktop app that cannot start.

- Update your graphics driver.
- Make sure that Microsoft Edge WebView2 is installed. See [Install](Install.md).
- On a laptop with two GPUs, the app asks Windows to use the fast GPU. If the view is still slow, check the setting in Windows Settings > System > Display > Graphics.
- If a project opens but the view stays empty, check that the venue is visible in the [Outliner](Outliner.md). Press `F` with nothing selected. Frame selected then frames everything.

## Windows warns that the installer is unsigned

The installer is not code-signed. Windows SmartScreen can show "Windows protected your PC". Click **More info**, then click **Run anyway**. See [Install](Install.md).

## It is slow with many projectors

- Up to 8 projectors run at full speed. From 9 to 16 projectors, the app warns that the live view can be slow. It then uses lower-resolution preview shadows. 16 is the maximum.
- Turn off **Projector bodies cast shadows** (in the Summary) if you do not need body shadows.
- Reduce the venue mesh. The target is about 500,000 triangles.
- Close other windows that use the GPU. The speed reference is a laptop with an RTX 5080 GPU.

## A model file moved or is missing

The row of the model in the Outliner shows a **missing** badge. The app uses its own copy in `models/`. The badge appears only if that copy was moved or deleted.

- Use the row menu **Change file...** and pick the file again.
- For missing textures, use **Locate textures...** in the same menu. Pick the folder that holds them.
- If you restored the project from a backup, copy the missing file back into `models/`.

## "Changed on disk"

- **Project file:** a banner says that `<slug>.luma` changed on disk (git pull or another machine). Choose **Reload theirs** or **Keep mine**. The app first saves the side that it replaces as an automatic snapshot. Nothing is lost.
- **Model file:** the row shows **changed on disk**. Use **Reload file** to compare. The report offers **Keep mine** or **Take file** for each item.
- Reload is manual. The app does not watch files.

## The app says the project was saved by a newer app

The project uses a newer format than this build understands. See [Project files](Project-Files.md). The app pauses saving and overwrites nothing on disk. Update the app on this machine, then open the project. Update every machine, or the older ones refuse the project.

## Textures are missing or look grey

- The import report lists missing textures. Use **Locate textures...** to find them.
- The **Photometric**, **Overlap**, **Pixel** and **Distance** views draw the texture in greyscale on purpose. Change this with **Texture strength (%)**. See [Textures](Textures.md).
- The app shows only base-colour textures. It ignores other maps.

## The scale looks wrong

The app works in metres. One Blender unit is one metre. Export from Blender with Metric and Unit Scale 1.0. Do not rescale in the app. A model exported in millimetres or centimetres looks 1000 or 100 times too big. See [Blender export and import](Blender-Export-and-Import.md).

## The numbers do not match the real projector

The app uses maker data and a simplified model. See [Physics model and limits](Physics-Model.md) and [Projector database](Projector-Database.md). Check the spec sheet of the maker with the **Spec sheet** button.

## The Photometric view does not show the numbers I expect

The Photometric view shows four quantities, not only illuminance. Check which one the legend shows.

- **Illuminance** (lx) is the light that arrives on the surface. It ignores colour and viewpoint.
- **Luminance** (cd/m²) is how bright the surface looks from a viewpoint. It depends on the **Reflectance** of each object. If you set no value, the object uses **Default ρ**, which starts at 1.00.
- **Surface contrast** shows how evenly one object is lit.
- **Ambient contrast** needs **Site ambient lx**. Below 0.01 lx, the bar reads n/a.

Some labels in the Summary still say "lux". They show illuminance in lx. See [Analysis](Analysis.md).

## Luminance shows grey objects

Grey means that the chosen viewpoint cannot see the object. The grey applies to the whole object. Change **Luminance viewpoint** in the legend, or move the camera. See [View Modes](View-Modes.md#legends).

## The Measure tool does not place a point, or a dimension is missing

- The tool needs an open project and the focus in the 3D view. Press `M` there, or click **Measure** in the tool column.
- Nothing snaps to hidden objects. Switch **Surface** on in the **Snap steps** popover (the arrow beside the **Magnet** in the top strip). Then the tool hits any visible surface.
- A measurement with an amber **check** badge sits on geometry that changed in a reload. Check it, then click **Mark checked**.
- **Hide all** in the sidebar hides every measurement in the 3D view. The app does not save this with the project.
- Dimensions can show on report pictures. In the properties of the picture block, the **Measurements** switch turns them on. A list lets you hide single ones. A report table can also use **Measurements** as its source. See [Report and PDF](Report-and-PDF.md) and [Measure Tools](Measure-Tools.md).

## How do I report a bug or wrong data?

Choose **Help > Send feedback…**. See [Menus](Menus.md). Fill in **What happened**, **What did you expect** and **Steps**. The dialog shows the full text that it would send. The text has your answers and a few anonymous system facts, such as the app version, the Windows version and the graphics card. Then do one of these:

- Click **Copy to clipboard**. Paste the text into your own mail.
- Click **Open email**. Your mail program opens with the text filled in. If the button is greyed out, the text is too long for an email link. Use **Copy to clipboard** instead.
- Optional: use **Include my scene** and **Save scene file…**. This saves a copy of the scene to a folder that you pick. It holds no model files and no textures. It can contain names that you typed. Attach it to the mail by hand. Attach screenshots in the mail program too.

The app sends nothing by itself. For a wrong projector or lens value, also name the model, the lens, the field and the value from the sheet of the maker. See [Projector database](Projector-Database.md).

## I lost an edit

Open the **History** tab. Find an automatic snapshot from before the step. Click **Load as current state**. The app first saves your current state as another snapshot. See [Projects and snapshots](Projects-and-Snapshots.md).

## Where do my files live? Does the app send anything out?

Your files are in the workspace folder that you chose. The app has no accounts, no cloud and no telemetry. Its only network use is the **Spec sheet** button. The button opens a page of the maker in your default browser. **Help > Send feedback…** sends nothing by itself. It builds a text that you copy or open in your own mail program. You send it.

## See also

[Install](Install.md) | [Project files](Project-Files.md) | [Physics model and limits](Physics-Model.md) | [Glossary](Glossary.md)

# FAQ and troubleshooting

## The 3D view is blank, or the app says it cannot run

The app needs WebGL2. If it is missing, the app shows "LUMAMATTERS cannot run in this browser" and lists what is missing.

- Update your graphics driver.
- In the browser build, use current Chrome or Edge. Check that hardware acceleration is on in the browser settings.
- On a laptop with two GPUs, make sure Windows uses the fast GPU for LUMAMATTERS (Windows Settings > System > Display > Graphics). (owner: check)
- If a project opens but the view stays empty, check that the venue is visible in the [Outliner](Outliner.md) and press `F` with nothing selected (Frame selected frames everything when nothing is selected).

## Windows warns that the installer is unsigned

The installer is not code-signed. Windows SmartScreen may show "Windows protected your PC". Click **More info**, then **Run anyway**. See [Install](Install.md).

## It is slow with many projectors

- Up to 8 projectors run at full speed. From 9 to 16 the app warns that the live view may be slow and uses lower-resolution preview shadows. 16 is the maximum.
- Turn off **Projector bodies cast shadows** (in the Summary) to cut shadow work (owner: check that this speeds things up).
- Reduce the venue mesh. Venues up to about 500,000 triangles are the target.
- Close other windows that use the GPU. The speed reference is a laptop with an RTX 5080 GPU.

## A model file moved or is missing

The model's row in the Outliner shows a **missing** badge. The app works on its own copy in `models/`, so this only happens if that copy was moved or deleted.

- Use the row menu: **Change file...** and pick the file again.
- Missing textures: use **Locate textures...** in the same menu and pick the folder that holds them.
- If you restored the project from a backup, copy the missing file back into `models/`.

## "Changed on disk"

- **Project file:** a banner says `<slug>.luma` changed on disk (git pull or another machine). Choose **Reload theirs** or **Keep mine**. Either way the app first saves the side it replaces as an automatic snapshot, so nothing is lost.
- **Model file:** the row shows **changed on disk**. Use **Reload file** to compare. The report offers **Keep mine** or **Take file** per item.
- Reload is manual. The app does not watch files.

## The app says the project was saved by a newer app

The project uses a newer format than this build understands (see [Project files](Project-Files.md)). Saving is paused and nothing on disk is overwritten. Update the app on this machine, then open the project. Update every machine you use, or older ones will refuse it.

## Textures are missing or look grey

- The report of an import lists missing textures. Use **Locate textures...** to find them.
- In **Lux**, **Overlap** and **Pixel** views the texture is drawn in greyscale on purpose. Use the **Texture strength** setting to change it. See [Textures](Textures.md).
- Only base-colour textures are shown. Other maps are ignored.

## The scale looks wrong

The app works in metres. One Blender unit is one metre. Export from Blender with Metric, Unit Scale 1.0, and do not rescale in the app. A model exported in millimetres or centimetres will look 1000 or 100 times too big. See [Blender export and import](Blender-Export-and-Import.md).

## The numbers do not match the real projector

The app uses maker data and a simplified model. See [Physics model and limits](Physics-Model.md) and [Projector database](Projector-Database.md). Check the maker's spec sheet with the **Spec sheet** button.

## I lost an edit

Open the **History** tab and look for an automatic snapshot from before the step. **Load as current state** brings it back and first saves your current state as another snapshot. See [Projects and snapshots](Projects-and-Snapshots.md).

## Where do my files live? Does the app send anything out?

Your files are in the workspace folder you chose. The app has no accounts, no cloud and no telemetry. The only network use is the **Spec sheet** button, which opens a maker page in your browser.

## See also

[Install](Install.md) | [Project files](Project-Files.md) | [Physics model and limits](Physics-Model.md) | [Glossary](Glossary.md)

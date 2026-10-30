# Share a view-only scene

> **Planning aid.** LUMAMATTERS is a planning aid. Its numbers (lux, pixel size, throw distance, overlap) come from maker data and simplified models and can be wrong. No guarantee of correct data is given. Check critical values against the maker's spec sheets and on site.

**File > Share view-only scene…** turns the current setup into a page that anyone can open in a web browser, with no LUMAMATTERS and no project files. The viewer orbits, pans and zooms, jumps to your saved cameras, shows the title block and notes, switches layers on and off and shows the light as Shaded or Photometric (illuminance or luminance, with a colour bar). It cannot edit anything.

The app uploads nothing. It writes the files to a place you choose, and you put them where you want them. LUMAMATTERS itself stays offline.

## What the export contains

- The visible meshes of the active variation, merged per layer and colour, with the surface colours of the 3D view.
- The light, baked into the surface as numbers per vertex (illuminance and luminance), calculated from the final analysis of the active variation. Large triangles are split so the values follow the beam and shadow edges. This is the exact calculation of the app, sampled at the vertices; between vertices the viewer interpolates.
- Your saved cameras (the `VIEW_` cameras) as viewpoints.
- The title, the designer name, the notes and the export date.
- The viewer program itself.

## What it does not contain

- No `.luma` project file, no original model files, no snapshots.
- No projector models, specs or rig data. No projector bodies or beams.
- No Outliner names, object names, model file names or paths. Layers are called **Layer 1**, **Layer 2** and so on. You can type a name per layer. The button **Use suggested name** fills in the name from your project (the Outliner branch or the model file name). It is never filled in for you. Saved viewpoints (your cameras) work the same way: they are called **View 1**, **View 2** and so on, you can untick one, and **Use suggested name** fills in the camera name.
- No Overlap or Pixel view, and no hover readout.

The title and designer fields do travel with the scene. The title starts as the project name and the designer as the report "Prepared by" name. Clear or change them if they must not be shown.
- Hidden objects, and layers you untick in the dialog.

## Honest limits

Anything shown in a browser can be extracted, the geometry and the baked values included. The export hides structure and names. It does not protect the geometry. Do not share a scene whose geometry you could not hand over.

## The dialog

- **Title, Designer, Notes.** The title starts as the project name, the designer as the "Prepared by" of the report. Both can be changed here without touching the project.
- **Layers.** Tick the layers to export and name them.
- **Viewpoints.** Tick the saved cameras to export and name them.
- **Output.** Pick one of three:
  - **Folder** writes `index.html`, `viewer.js`, `scene.glb` and `meta.json` into a folder you pick. It needs a web server (next sections).
  - **Zip of the folder** writes the same files into one `.zip` to send by mail or file share. The receiver unpacks it onto a web server.
  - **Single file** writes one `.html` file with everything inside. It opens by double-click from a file share or a mail attachment, in Chrome and Edge. It is bigger than the folder, because the scene travels as text inside the page.
- **Password** (single file only, optional, at least 8 characters). The file then opens with a password prompt. See [Password](#password).
- **Advanced > weld angle.** **1 degree** (default) keeps the light values as exact as possible. **5 degrees** makes a smaller file, about half the size on bumpy scans, but the light value at a shared corner follows its first face. Use it only for scans that are too big.

The folder is never overwritten: pick an empty folder. The app also refuses your project folder and any folder inside it, and any folder that holds a `.luma` file or snapshots. For the single file and the zip, the save dialog asks before it replaces a file, and the app refuses a place inside your project folder.

**Export…** opens the folder or save dialog first, then bakes. While it works, the dialog shows a progress bar. The bake cannot be stopped half-way: **Cancel** closes the dialog, ignores the result and writes nothing. If the analysis is still running, the dialog waits for it. Exporting also works in a window that is open read-only, because the export only reads the project.

## Folder: it needs a web server

The folder version must be served by a web server (GitHub Pages, Netlify Drop, your own web space). Opening `index.html` by double-click does not work in Chrome and Edge: the browser does not let a page loaded from a file read the scene file next to it. The viewer then shows "Open this folder through a web server, or use the single-file export." For double-click, mail or a file share, choose **Single file**.

### Test it on your PC

Open a terminal in the exported folder and run one of these, then open `http://localhost:3000` (serve) or `http://localhost:8000` (python):

```
npx serve
python -m http.server
```

`npx serve` downloads a small tool the first time. `python -m http.server` needs Python. Both only serve to your own PC.

### GitHub Pages

1. Create a new repository on GitHub. A free account needs a **public** repository for Pages. Anyone with the link can then open the files, and the geometry in them is public.
2. Upload the exported files to the repository (**Add file > Upload files**, drag the contents of the exported folder in, commit). `index.html` must be at the top level of the folder you publish.
3. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick the branch (`main`, or `gh-pages` if you made one) and the folder `/ (root)`, then **Save**.
4. After a minute the page is at `https://<your-user>.github.io/<repository>/`.

To change the scene, export again into a new empty folder and upload the new files over the old ones.

### Netlify Drop

1. Open `app.netlify.com/drop` in your browser.
2. Drag the exported folder onto the page.
3. Netlify gives the site a random address you can open at once. What happens to a site made without an account, and how long it stays online, are Netlify's rules; read them on the page before you rely on it.

### Your own web space

Upload the four files to a folder on your web space by FTP or the host's file manager. The address of that folder is the address of the scene.

## Password

The password is for the single file only. The app uses the engine of StatiCrypt (MIT licence) and runs it inside the app: nothing is installed on your PC and no network call is made. The file you get is a password page that holds the viewer and the scene in encrypted form. The password is turned into a key with PBKDF2 (600,000 rounds) and the page is encrypted with AES in the browser. The password page itself contains no title, no project name and no scene data.

What the password does not do:

- Whoever has the password can open the file, save the page and read the geometry out of the browser. Share the password separately from the file.
- It is only as strong as the password. Use a long one.
- There is no recovery. If the password is lost, export again.
- The password page needs a secure page to decrypt: a file opened from disk works, and so does a site served over `https://`. A site served over plain `http://` does not.
- It does not cover the folder and zip versions. A folder on a web server is public unless the server protects it.

A password-protected file is about twice the size of the same file without one. For a scene file above 100 MB the app does not offer the password: export without one, or as a folder.

Opening a password-protected file with a very big scene takes a few seconds after the password is entered.

## Known limits

- Tested in Chrome and Edge. Firefox is not tested.
- The viewer has no orthographic camera: an orthographic camera of your project becomes a normal viewpoint.
- The viewer needs WebGL 2.
- Only the active variation is exported, as it is now. Change the variation first, then export again.

See also: [Menus](Menus.md), [Report and PDF](Report-and-PDF.md), [View modes](View-Modes.md), [Physics model and limits](Physics-Model.md).

## Licences

The viewer contains three.js and the meshoptimizer decoder (both MIT licence); a password page also contains StatiCrypt (MIT). The notices travel with the export: a `licences.txt` in the folder and in the zip, an HTML comment at the top of the single file and of the password page.

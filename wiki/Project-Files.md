# Project files

The app saves everything you make as plain files in a workspace folder that you choose. There is no cloud and no account. This page shows what is in a project folder. It also shows what is safe to copy, back up or delete.

## The workspace

The workspace is a normal folder. The app marks it with `lumamatters-workspace.json`. It keeps one sub-folder for each project under `projects/`. See [First start and workspace](First-Start-and-Workspace.md).

## One project folder

```
projects/<slug>/
  <slug>.luma          the current state of the project
  snapshots/           saved history points
    <slug>.<tag>.<n>.luma
    models/            model copies held by snapshots
  models/              the model files of the project
  content/             images and videos you added
  exports/             exports made by the app
  .recovery/           files the app set aside to protect your data
  .gitignore           managed by the app (large files)
```

The **slug** is the folder name of the project. It is a short, file-safe version of the project name.

## The current state: `<slug>.luma`

- It is one text file (JSON) with the whole project state. It holds the venue, projectors, variations, analysis settings, Photometric settings, the last camera position and view mode, and the report layout.
- The app rewrites it after every committed edit. You do not press Save.
- A crash while the app writes leaves the previous file whole.
- The app makes no second background copy of your edits. Snapshots are the history.
- The look settings of the 3D view (grid, background, legend position, snap steps and so on) are not in this file. The app keeps them per machine.

## Snapshots

- A snapshot is a saved copy of the project at one moment. The app never changes a snapshot after it writes it.
- **Manual:** press `Ctrl+S`, click the header button **Snapshot**, or choose **File > Save snapshot** or **File > Save snapshot with name…**.
- **Automatic:** the app takes one before a step that replaces your data (import, reload, change file, remove from project). It also takes one when you leave a project and when you load an older snapshot. It takes one too when the state of your last session was not saved as a snapshot.
- The file name is `<slug>.<tag>.<n>.luma`. The tag is four letters that identify the machine, so two computers never write the same file name.
- The **History** tab lists the snapshots. See [Projects and snapshots](Projects-and-Snapshots.md).
- Thinning removes only automatic snapshots. It keeps all snapshots of today and yesterday. Then it keeps one for each day for 30 days, and one for each week after that. It never removes manual snapshots, named snapshots and safety snapshots.

## Model files

- `models/` holds the copy that the app made when you imported a model. The app does not change your original file.
- `snapshots/models/` holds the model bytes that snapshots need. The names come from a hash of the file content (for example `3fa9...c1.glb`). The app stores identical models once, and all snapshots share them.
- The app keeps a model file above **100 MB** out of git. It lists the file in the `.gitignore` of the project. It also shows a warning and a **not in git** flag in the Outliner. Other machines need their own copy.

## Project format version

The file records its format version. The app picks the lowest version that can hold your content:

| Version | The app writes it when the project holds |
| --- | --- |
| 1.0 | a plain project |
| 2.0 | people, app-made cameras, or edited camera settings |
| 3.0 | a report layout |
| 4.0 | maker throw data (see [Projector database](Projector-Database.md)) |
| 5.0 | a reflectance on an object, or a projector image (see [Properties](Properties.md)) |

Photometric settings alone do not make a project 5.0. These settings are the quantity, the colour ranges, the luminance viewpoint and the site ambient value.

The first time the app writes a 5.0 project, it does three things:

1. It keeps a copy of the project as it was in the `.recovery` folder.
2. It makes an automatic snapshot of the old state. The History row shows **Auto: before file change**.
3. It shows a message.

Projects of format 1.0 to 4.0 open as before. The app saves them in the lowest format that holds their content.

An older app refuses a newer major version and tells you to update. The app does not overwrite anything on disk in this case. Update the app on every machine that you use.

## What is safe to...

**Copy or back up.** Copy the whole project folder. This is a full backup, including the history. To keep only the current state, copy `<slug>.luma` and `models/`. Copy `content/` too if you use it.

**Move to another machine.** Copy the folder, or use git. See [Working on several machines](Several-Machines.md).

**Delete.**
- `exports/`: yes. It only holds exports.
- Old automatic snapshots: safe, but the app thins them for you.
- `.recovery/`: yes, after you are sure that the project opens and looks right.
- `snapshots/models/`: not by hand. The app cleans unused copies itself. If you delete a copy, the snapshots that need it show **copy missing**.

**Do not.**
- Do not rename or delete `<slug>.luma` while the app is open.
- Do not edit `.luma` files by hand.
- Do not rename files in `snapshots/`.

## See also

[Projects and snapshots](Projects-and-Snapshots.md) | [Working on several machines](Several-Machines.md) | [FAQ](FAQ.md) | [Glossary](Glossary.md)

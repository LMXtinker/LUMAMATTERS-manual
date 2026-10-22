# Project files

Everything you make is saved as plain files in a workspace folder you choose. There is no cloud and no account. This page shows what is in a project folder and what is safe to copy, back up or delete.

## The workspace

The workspace is a normal folder. The app marks it with `lumamatters-workspace.json` and keeps one sub-folder per project under `projects/`. See [First start and workspace](First-Start-and-Workspace.md).

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

The **slug** is the project's folder name, a short file-safe version of the project name.

## The current state: `<slug>.luma`

- One text file (JSON) with the whole scene: venue, projectors, variations, view settings, report layout.
- The app rewrites it after every committed edit. You do not press Save.
- A crash while writing leaves the previous file whole.
- The app makes no second background copy of your edits. Snapshots are the history.

## Snapshots

- A snapshot is a frozen copy of the project at one moment. The app never changes one after writing it.
- **Manual:** `Ctrl+S`, the header **Snapshot** button, or **File > Save snapshot** / **Save snapshot with name...**.
- **Automatic:** before steps that replace your data (import, reload, change file, remove from project), when you leave a project, when you load an older snapshot, and when the app finds your last session's state was not snapshotted.
- File name: `<slug>.<tag>.<n>.luma`. The tag is four letters that identify the machine, so two computers never write the same file name.
- The **History** tab lists them. See [Projects and snapshots](Projects-and-Snapshots.md).
- Thinning removes only automatic snapshots. It keeps all of today and yesterday, then one per day for 30 days, then one per week. Manual, named and safety snapshots are never removed.

## Model files

- `models/` holds the copy the app made when you imported a model. Your original file is not touched.
- `snapshots/models/` holds the model bytes that snapshots need. Files are named by a hash of their content (for example `3fa9...c1.glb`), so identical models are stored once and shared by all snapshots.
- A model file above **100 MB** is kept out of git. The app lists it in the project's `.gitignore` and shows a warning and a **not in git** flag in the Outliner. Other machines need their own copy.

## Project format version

The file records its format version. The app picks the lowest version that can hold your content:

| Version | Written when the project holds |
| --- | --- |
| 1.0 | a plain project |
| 2.0 | people, app-made cameras, or edited camera settings |
| 3.0 | a report layout |
| 4.0 | maker throw data (see [Projector database](Projector-Database.md)) |

An older app refuses a newer major version and tells you to update. Nothing on disk is overwritten in that case. Update the app on every machine you use.

## What is safe to...

**Copy or back up.** Copy the whole project folder. That is a full backup, including history. To keep only the current state, copy `<slug>.luma` and `models/` (and `content/` if you use it).

**Move to another machine.** Copy the folder, or use git. See [Working on several machines](Several-Machines.md).

**Delete.**
- `exports/`: yes, it only holds exports.
- Old automatic snapshots: safe, but the app thins them for you.
- `.recovery/`: after you are sure the project opens and looks right.
- `snapshots/models/`: not by hand. The app cleans unused copies itself. Deleting one makes snapshots that need it show **copy missing**.

**Do not.**
- Do not rename or delete `<slug>.luma` while the app is open.
- Do not edit `.luma` files by hand.
- Do not rename files in `snapshots/`.

## See also

[Projects and snapshots](Projects-and-Snapshots.md) | [Working on several machines](Several-Machines.md) | [FAQ](FAQ.md) | [Glossary](Glossary.md)

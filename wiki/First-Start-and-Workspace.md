# First Start and Workspace

## The workspace folder

All your work lives in one folder that you choose, called the **workspace**. It holds your projects and the projector library. You pick it once. After that the app remembers it.

Good places: a folder on a local drive, or a folder inside a git repository (see [Several Machines](Several-Machines.md)). Avoid putting it inside a folder that a cloud-sync program is changing all the time.

The app creates two folders inside it: `projects` and `library`. It also writes a small marker file, `lumamatters-workspace.json`, and a managed block in `.gitignore`. Files you already have in the folder are kept.

## First start

1. Start LUMAMATTERS. The start screen shows the title and the line **Pick the workspace folder that holds your projects and projector library.**
2. Click **Open workspace…** and choose a folder.
3. If the folder is empty, it becomes a workspace at once.
4. If the folder has files but no marker, the app asks **Set up workspace?**. Existing files are kept and a managed block is added to `.gitignore`. Click **Set up** to continue or **Cancel** to choose another folder.

![Start screen with Open workspace button](images/start-screen-no-workspace.png)

The desktop app has its own storage, separate from the browser version. On its first start the recent list is empty and you pick the workspace once. Your project files on disk are the same either way.

## The project list

After the workspace opens, the start screen shows **Projects**. Each row shows the project name, when it was last edited and how many snapshots it has. A new workspace says **No projects yet.**

- **Open** opens a project.
- **Duplicate…** copies a project to a new name. The copy is marked in the list. It does not open.
- **Project name** + **New project** creates an empty project and opens it.
- **Change workspace…** picks another workspace folder.

A row that cannot be read shows the reason instead of the date. The list refreshes when you come back to the window, for example after a `git pull`.

![Start screen with the project list](images/start-screen-projects.png)

## Next start

On the next start the app reopens the remembered workspace by itself. If Windows or the app needs a permission click again, the start screen shows a button **Continue with <folder name>**. Click it. Nothing else is lost.

## Change workspace from inside the app

Use **File > Change workspace…**. Pick the new folder. If a project is open, the app finishes saving it first (and asks **Save changes to <name>?** only if something could not be written). Then the new workspace opens.

## Recent list

**File > Open Recent** lists the last projects you opened, newest first, up to 10. The project that is open now is marked **(open)**. The list is kept per machine and per workspace. It is not part of the project, so it is not shared through git. **File > Open…** shows the full project list of the workspace.

## Tutorial

On a fresh install, the first time you create a project, a welcome card offers a guided tour. Choose **Start tour** to begin, or **Skip tutorial**.

- It has 15 steps and takes about 10 minutes.
- It runs in a practice project called **Tutorial**, so your own project stays as it is. If you have a project open, the card can also offer **Use "<name>" instead**.
- It covers the 3D view, importing a venue, the Outliner, adding and aiming a projector, lens and readouts, the Lux view, overlap and blends, test patterns, the Summary, and saving and snapshots.
- You can skip at any time. Start it again with **Help > Tutorial**. If you left in the middle, the app offers **Resume the tutorial?**.

**Help > Tutorial** needs an open project. Without one, the entry is greyed out with the tooltip "Open a project first."

![Tutorial welcome card](images/tutorial-welcome.png)

## Other Help entries

**Help > View modes…**, **Help > Keyboard shortcuts**, **Help > Blender export…** and **Help > About LUMAMATTERS** open short dialogs. See [View Modes](View-Modes.md), [Keyboard Shortcuts](Keyboard-Shortcuts.md) and [Blender Export and Import](Blender-Export-and-Import.md).

See also: [Install](Install.md), [Projects and Snapshots](Projects-and-Snapshots.md), [Interface Tour](Interface-Tour.md), [Menus](Menus.md)

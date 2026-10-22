# Install

LUMAMATTERS is a desk planner for projection mapping. On Windows it comes as a normal desktop app. It runs fully offline: no account, no cloud, no telemetry.

## What you need

- Windows 10 or Windows 11 (64-bit).
- Microsoft Edge WebView2. Windows 10 and 11 already include it, so you usually do nothing. If it is missing, the installer downloads it once. (owner: check, for a machine that never goes online)
- A computer with a dedicated GPU is strongly recommended. The 3D view uses WebGL2 and does the lux and overlap drawing on the GPU.
- Disk space: the app is small (the installer is about 4 MB, the portable exe about 11 MB). Your projects take more, because every project keeps its own copy of the venue model files.

## Install

1. Get the installer file `LUMAMATTERS_<version>_x64-setup.exe` from the person who sends you the beta. `<version>` is the version number, for example `0.1.0`.
2. Double-click it and follow the steps. It adds a Start-menu entry.
3. Start **LUMAMATTERS** from the Start menu.

There is also a portable file, `lumamatters.exe`. It needs no install: put it anywhere and double-click it. Both files are the same app.

![Windows installer window](images/install-installer.png)

## "Windows protected your PC"

The first time you run the installer or the exe, Windows SmartScreen may show a blue window: **Windows protected your PC**.

This happens because the app is not signed. Signing needs a paid code-signing certificate, and this beta does not have one. Windows warns about every unsigned program from an unknown publisher. It does not mean the file is damaged.

If you trust the source you got the file from:

1. Click **More info**.
2. Click **Run anyway**.

You only do this once per file.

![SmartScreen window with More info](images/install-smartscreen.png)

## Uninstall

Use **Settings > Apps > Installed apps** in Windows, find **LUMAMATTERS** and choose **Uninstall**.

Uninstalling does not delete your projects. They live in the workspace folder you picked yourself (see [First Start and Workspace](First-Start-and-Workspace.md)), not inside the app. The small app settings kept by WebView2 (recent list, panel layout, remembered workspace) may stay behind on the disk. (owner: check)

## Updating

Install the new `..._x64-setup.exe` over the old one. Your projects are not touched. The app opens project files from older versions and upgrades them. A file saved by a newer app than yours is not overwritten: the app pauses saving and tells you to update the app on that machine.

## Size of jobs and speed

- 1 to 8 projectors run at full speed.
- Up to 16 projectors work, with a slow-performance warning.
- Venue models up to about 500,000 triangles are supported.

Speed was measured on a laptop with an RTX 5080 Laptop GPU. A weaker GPU works but the 3D view will feel slower on big jobs.

The app asks Windows to run its window on the high-performance GPU. On a laptop with two graphics chips, this stops it from using the slow built-in one. If the 3D view is slow anyway, check in **Windows Settings > System > Display > Graphics** that LUMAMATTERS is set to **High performance**. (owner: check)

## What the app is not

LUMAMATTERS is for desk pre-planning and prototyping. It has no live output and no on-site calibration. Its numbers are a planning aid, see [Physics Model](Physics-Model.md).

See also: [First Start and Workspace](First-Start-and-Workspace.md), [Projects and Snapshots](Projects-and-Snapshots.md), [FAQ](FAQ.md), [Home](Home.md)

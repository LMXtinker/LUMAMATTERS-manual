# Install

LUMAMATTERS is a Windows desktop app for projection-mapping desk planning. It runs fully offline: no account, no cloud, no telemetry.

## What you need

- Windows 10 or Windows 11 (64-bit).
- Microsoft Edge WebView2. Windows 10 and 11 already include it. If it is missing, the installer downloads it once. (owner: check, for a machine that never goes online)
- A dedicated GPU is strongly recommended. The 3D view uses WebGL2 and draws lux and overlap on the GPU.
- Disk space: the installer is about 4.5 MB, the portable exe about 12 MB. Projects take more, because each keeps its own copy of the venue model files.

## Install

1. Get `LUMAMATTERS_<version>_x64-setup.exe` from the releases page https://github.com/LMXtinker/LUMAMATTERS-releases/releases (the first beta build is not published there yet: coming soon), or from the person who sends you the beta. `<version>` is the version number. This manual describes version 1.0.3, so the file is `LUMAMATTERS_1.0.3_x64-setup.exe`.
2. Double-click it and follow the steps. The installer shows the licence before it installs. It adds a Start-menu entry.
3. Start **LUMAMATTERS** from the Start menu.

The portable `lumamatters.exe` needs no install: put it anywhere and double-click it. Both files are the same app. LUMAMATTERS is a desktop app only. It does not install from a web page and does not run in a browser tab.

The installer puts two text files next to the app: `LICENSE` (the full licence terms) and `THIRD_PARTY_NOTICES.txt` (the licences of the libraries and fonts the app uses). Both land in the folder the app is installed in. The same notices are in the app under **Help > About LUMAMATTERS > Third-party notices**.

![Windows installer window](images/install-installer.png)

## "Windows protected your PC"

On the first run of the installer or the exe, Windows SmartScreen may show a blue window: **Windows protected your PC**.

The app is not signed, because signing needs a paid code-signing certificate and this beta has none. Windows warns about every unsigned program from an unknown publisher. The file is not damaged.

If you trust the source you got the file from:

1. Click **More info**.
2. Click **Run anyway**.

Do this once per file.

![SmartScreen window with More info](images/install-smartscreen.png)

## Licence

LUMAMATTERS is free to download and use, for private and commercial work, during the beta. You may modify it and use your changes yourself. You may not sell the software, modified versions or access to it, or bundle it into a paid product. The full terms are in `LICENSE`. **Help > About LUMAMATTERS** shows the same summary (see [Menus](Menus.md)).

## Uninstall

Open **Settings > Apps > Installed apps** in Windows, find **LUMAMATTERS** and choose **Uninstall**.

Uninstalling does not delete your projects. They live in the workspace folder you picked (see [First Start and Workspace](First-Start-and-Workspace.md)), not inside the app. Small WebView2 app settings (recent list, panel layout, remembered workspace) may stay on the disk. (owner: check)

## Updating

Install the new `..._x64-setup.exe` over the old one. **Help > About LUMAMATTERS** shows which version you run, and the page [What's New](Whats-New.md) lists what changed. Your projects are not touched. The app opens project files from older versions and upgrades them. A file saved by a newer app than yours is not overwritten: the app pauses saving and tells you to update that machine.

## Size of jobs and speed

- 1 to 8 projectors run at full speed.
- Up to 16 projectors work, with a slow-performance warning.
- Venue models up to about 500,000 triangles are supported.

Speed was measured on a laptop with an RTX 5080 Laptop GPU. A weaker GPU works, but the 3D view feels slower on big jobs.

The app asks Windows to use the high-performance GPU, so a laptop with two graphics chips does not pick the slow built-in one. If the 3D view is slow anyway, check in **Windows Settings > System > Display > Graphics** that LUMAMATTERS is set to **High performance**. (owner: check)

## What the app is not

LUMAMATTERS is for desk pre-planning and prototyping. No live output, no on-site calibration. Its numbers are a planning aid, see [Physics Model](Physics-Model.md).

See also: [What's New](Whats-New.md), [First Start and Workspace](First-Start-and-Workspace.md), [Projects and Snapshots](Projects-and-Snapshots.md), [FAQ](FAQ.md), [Home](Home.md)

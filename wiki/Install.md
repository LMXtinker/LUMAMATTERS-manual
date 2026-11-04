# Install

LUMAMATTERS is a Windows desktop app for projection-mapping desk planning. It runs fully offline. It has no account, no cloud and no telemetry.

## What you need

- Windows 10 or Windows 11 (64-bit).
- Microsoft Edge WebView2. Windows 10 and 11 already include it. If it is missing, the installer downloads it once. That download needs an internet connection.
- A dedicated GPU is strongly recommended. The 3D view uses WebGL2 and draws the colour views on the GPU.
- Disk space: the installer is about 5 MB and the portable exe is about 12 MB. Projects take more space, because each project keeps its own copy of the venue model files.

## Install

1. Get `LUMAMATTERS_<version>_x64-setup.exe`. `<version>` is the version number. This manual describes version 1.1.0, so the file is `LUMAMATTERS_1.1.0_x64-setup.exe`.
2. Download the file from the releases page, https://github.com/LMXtinker/LUMAMATTERS-releases/releases. The first beta build is not published there yet: coming soon. You can also get the file from the person who sends you the beta.
3. Double-click the file and follow the steps. The installer shows the licence before it installs. It adds a Start-menu entry.
4. Start **LUMAMATTERS** from the Start menu.

The portable `lumamatters.exe` needs no install. Put it anywhere and double-click it. Both files are the same app. LUMAMATTERS is a desktop app only. It does not install from a web page and does not run in a browser tab.

The installer puts two text files next to the app:

- `LICENSE` holds the full licence terms.
- `THIRD_PARTY_NOTICES.txt` holds the licences of the libraries and fonts that the app uses.

Both files are in the folder where the app is installed. The same notices are in the app under **Help > About LUMAMATTERS > Third-party notices…**.

![Windows installer window](images/install-installer.png)

## "Windows protected your PC"

On the first run of the installer or the exe, Windows SmartScreen can show a blue window: **Windows protected your PC**.

The app is not signed. Signing needs a paid code-signing certificate, and this beta has none. Windows warns about every unsigned program from an unknown publisher. The file is not damaged.

If you trust the source of the file:

1. Click **More info**.
2. Click **Run anyway**.

Do this once for each file.

![SmartScreen window with More info](images/install-smartscreen.png)

## Licence

LUMAMATTERS is free to download and use during the beta. LUMAMATTERS will always stay free in one form or another, with all features available. You can use it for private and commercial work. You may modify it and use your changes yourself. You may not sell the software, modified versions or access to it. You may not bundle it into a paid product. The full terms are in `LICENSE`. **Help > About LUMAMATTERS** shows the same summary (see [Menus](Menus.md)).

## Uninstall

1. Open **Settings > Apps > Installed apps** in Windows.
2. Find **LUMAMATTERS**.
3. Choose **Uninstall**.

Uninstalling does not delete your projects. They live in the workspace folder that you picked, not inside the app. See [First Start and Workspace](First-Start-and-Workspace.md).

## Updating

1. Run the new `..._x64-setup.exe` over the old install.
2. Open **Help > About LUMAMATTERS** to see which version you run.

The page [What's New](Whats-New.md) lists what changed. Your projects are not touched. The app opens project files from older versions and upgrades them. A newer app can save a project in a newer format. An older app refuses that file. It does not overwrite the file. It pauses saving and tells you to update the machine. See [Project Files](Project-Files.md#project-format-version).

## Size of jobs and speed

- 1 to 8 projectors run at full speed.
- Up to 16 projectors work, with a slow-performance warning.
- Venue models up to about 500,000 triangles are supported.

Speed was measured on a laptop with an RTX 5080 Laptop GPU. A weaker GPU works, but the 3D view feels slower on big jobs.

The app asks Windows to use the high-performance GPU. A laptop with two graphics chips then does not pick the slow built-in chip.

## What the app is not

LUMAMATTERS is for desk pre-planning and prototyping. It has no live output and no on-site calibration. Its numbers are a planning aid. See [Physics Model](Physics-Model.md).

See also: [What's New](Whats-New.md), [First Start and Workspace](First-Start-and-Workspace.md), [Projects and Snapshots](Projects-and-Snapshots.md), [FAQ](FAQ.md), [Home](Home.md)

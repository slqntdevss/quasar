# BrowserForge

Powered by CheerpJ, this project is a **web port of Minecraft Forge** for educational and historical purposes.

---

## Legal & Disclaimer

- **Minecraft Forge** is licensed under the [LGPL License](https://www.gnu.org/licenses/lgpl-3.0.html).  
- **Minecraft** and all associated game assets are copyrighted by [Mojang Studios / Microsoft](https://www.microsoft.com/).  
- This project is **not affiliated with or endorsed by Mojang / Microsoft**.  
- Users must respect the [Minecraft EULA](https://www.minecraft.net/en-us/terms).  

**This project is intended for educational, archival, and demonstration purposes only.**

---

## Acknowledgements

- [Minecraft Forge](https://files.minecraftforge.net/) (LGPL)
- [CheerpJ](https://leaningtech.com/cheerpj/) for Java-to-Web technology
- Mojang Studios / Microsoft for creating Minecraft

---

## Adding Custom Versions

You can add custom Minecraft versions by editing `mc/versions.json`.
Each entry is a JSON object describing a version. Common fields:

- **`name`** (string): the display name shown in the Select Version dropdown.
- **`jar`** (string): URL or path to the base client JAR (e.g., `/app/client.jar` or a remote URL).
- **`type`** (string): one of `zip`, `jar`, or `jar-zip`. Default is `zip`.
  - `zip` — the base client is a ZIP and uploaded mod ZIPs will be merged into it.
  - `jar` — used for Forge-style jars; uploaded JAR mods are written to `/files/.minecraft/mods/`.
  - `jar-zip` — mixed support for both.
- **`class`** (string, optional): the Java main class to launch (e.g., `net.minecraft.client.Minecraft`).
- **`libraries`** (array, optional): extra libraries to download and write into the CheerpJ VFS.
  Each library object should include `{ "url": "<url>", "path": "/files/path/to/lib.jar" }`.
- **`jvmArgs`** (array, optional): additional JVM arguments passed when launching.

Example `mc/versions.json` entry:

```json
{
  "name": "Forge 1.2.5",
  "jar": "/app/CustomClient.jar",
  "type": "zip",
  "class": "net.minecraft.client.Minecraft",
  "libraries": [
    { "url": "https://example.com/libs/lib1.jar", "path": "/files/lib/lib1.jar" }
  ],
  "jvmArgs": ["-Xmx512M"]
}
```

After saving changes to `mc/versions.json`, reload the page — the new version should appear in the version selector. If your jar or libraries are hosted locally, serve them from the same site or use fully-qualified URLs. If you add a `zip` type, uploaded mod ZIPs will be merged into it; `jar` type will accept mod JARs in `/files/.minecraft/mods`.
**Important:** The Minecraft JAR must already include Forge; Forge is not injected into vanilla jars automatically.

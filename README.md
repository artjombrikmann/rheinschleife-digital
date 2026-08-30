# Rheinschleife digital – Landingpage

Statische Vorlage (reines HTML/CSS/JS, kein Build-Schritt) für die
Firmen-Landingpage von Rheinschleife digital.

## Dateien

```
index.html     Die komplette Seite (Struktur & Inhalt)
styles.css     Alle Styles (Farben, Typografie, Layout)
script.js      Mobile-Menü + aktuelles Jahr im Footer
assets/        Favicons, abgeleitet aus dem Logo
```

## Lokal ansehen

Einfach `index.html` doppelt anklicken, oder mit einem kleinen lokalen
Server (z. B. VS-Code-Erweiterung "Live Server") öffnen.

## Deployment über GitHub Pages

1. Neues Repository auf GitHub anlegen, z. B. `rheinschleife-digital`.
2. Diese drei Dateien plus den `assets`-Ordner in das Repository legen.
   ```bash
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<benutzername>/rheinschleife-digital.git
   git push -u origin main
   ```
3. Auf GitHub: **Settings → Pages → Source** auf `main` / `/ (root)` stellen
   und speichern.
4. Nach ein bis zwei Minuten ist die Seite unter
   `https://<benutzername>.github.io/rheinschleife-digital/` erreichbar.
5. Eigene Domain (optional): unter **Settings → Pages → Custom domain**
   eintragen und beim Registrar (z. B. GoDaddy) einen CNAME-Eintrag auf
   `<benutzername>.github.io` anlegen.

Änderungen später einfach committen und pushen – GitHub Pages baut
automatisch neu.

## Offene Punkte vor dem Live-Gang

- **Instagram-Handle prüfen**: Aktuell ist `@rheinschleifedigital` als
  Platzhalter hinterlegt (Header-Klick, Kontakt-Sektion). Bitte durch den
  echten Account-Namen ersetzen (Suche in `index.html` nach
  `rheinschleifedigital`).
- Das Impressum übernimmt Name/Adresse von der SchichtmeisterApp-Seite
  (Artjom Brikmann, Libellenweg 3, 56154 Boppard) – bitte prüfen, ob das
  für Rheinschleife digital identisch bleiben soll oder eine eigene
  Anschrift/Rechtsform (z. B. bei Gewerbeanmeldung) ergänzt werden muss.
- Der Presse-/Social-Text-Generator ist auf der Seite als Leistung
  aufgeführt – falls das Tool noch nicht öffentlich nutzbar ist, ggf. mit
  "in Entwicklung" kennzeichnen.

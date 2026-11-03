# Portfolio – Zacarias Aibbich Belhadj

Mein Portfolio für ein Pflichtpraktikum als Fachinformatiker für Anwendungsentwicklung. Seit Februar 2026 absolviere ich eine Umschulung beim IBB Hagen.

## Praktikum

Pflichtpraktikum gesucht: Februar – Oktober 2027

1.040 Stunden · Zwei Praxisphasen mit einer Unterbrechung zur Prüfungsvorbereitung

- 1. Praxisphase: 25.02.2027 – 27.07.2027
- 2. Praxisphase: 22.09.2027 – 29.10.2027
- Region: Hagen, Ruhrgebiet, Düsseldorf und Köln
- Finanzierung über den Kostenträger. Eine Vergütung durch das Unternehmen ist nicht erforderlich.

## Projekte

- **[ZABYTE](https://github.com/Zacariasaibel/ZABYTE)**: Fullstack-Shop mit Angular, TypeScript, Django REST Framework und SQLite. Produktsuche und Filter, persistenter Warenkorb und serverseitig validierte Bestellsimulation. [Live-Demo](https://zaibel.pythonanywhere.com/). Keine echten Zahlungen oder Lieferungen.

- **[BewerbungsTracker](https://github.com/Zacariasaibel/BewerbungsTracker)**: Bewerbungen verwalten, suchen und nach Status filtern. Angular, Django REST Framework und SQLite. Mit Übersicht und Terminen zum Nachfassen. [Live-Demo](https://bewerbungstracker-p90a.onrender.com/) mit fiktiven Daten, die alle Besucher teilen. Beim Neustart des Dienstes können die Beispieldaten zurückgesetzt werden.
- **[OlimpoAthlete](https://github.com/Zacariasaibel/OlimpoAthlete)**: Angular-Prototyp für regelbasierte Trainingspläne. [Live-Demo](https://zacariasaibel.github.io/OlimpoAthlete/).
- **[Product Inventory API](https://github.com/Zacariasaibel/product-inventory-api)**: Produktverwaltung mit Django REST Framework und SQLite. Browserformulare, geprüfte Preise und Bestände sowie getrennte Demo-Daten. Noch keine öffentliche Demo.

Das Portfolio zeigt echte Projektaufnahmen sowie Informationen zu mir, meinen Kenntnissen und zur Kontaktaufnahme.

Die Startseite zeigt vier kompakte Projektkarten. Jede Karte führt zu einer eigenen Detailseite mit Ziel, Funktionen, Screenshots, Technologien und technischer Umsetzung:

- `/projekte/zabyte/`
- `/projekte/bewerbungstracker/`
- `/projekte/olimpoathlete/`
- `/projekte/product-inventory-api/`

Die gemeinsamen Projektdaten stehen in `src/data/projects.ts`. `src/layouts/ProjectLayout.astro` legt den Aufbau der Detailseiten fest. Astro erzeugt die Seiten über `src/pages/projekte/[slug].astro` als statische Dateien. Dadurch lassen sie sich auf GitHub Pages direkt öffnen und neu laden.

## Lokal öffnen

Voraussetzung: Node.js ab 22.12.0. In einem neuen Checkout zuerst `npm.cmd ci` ausführen.

```sh
npm.cmd run dev
```

Danach die im Terminal angezeigte Adresse öffnen, normalerweise `http://localhost:4321/`.

## Build prüfen

```sh
npm.cmd run build
npm.cmd run preview
```

Die Vorschau ist normalerweise unter `http://localhost:4321/` erreichbar. Maßgeblich ist die Adresse im Terminal. Die fertigen Dateien liegen in `dist/`.

## Technik und Veröffentlichung

Astro, HTML und CSS, ohne zusätzliche UI-Bibliotheken. Das Layout passt sich an Smartphones und Desktopbildschirme an. Es enthält eine Sprungnavigation, sichtbare Tastaturfokusse und Bildbeschreibungen.

Der bestehende Workflow in `.github/workflows/` veröffentlicht bei einem Push auf `main` oder bei manueller Ausführung auf GitHub Pages. Der [Prüfbericht](docs/project-review-2026-11-02.md) unterscheidet lokale Prüfungen, öffentliche Demos und noch fehlendes Hosting.

## Kontakt

- [zacaab8@gmail.com](mailto:zacaab8@gmail.com)
- [GitHub: Zacariasaibel](https://github.com/Zacariasaibel)
- [LinkedIn: Zacarias Aibbich Belhadj](https://www.linkedin.com/in/zacarias-aibbich-belhadj-a7184340b)

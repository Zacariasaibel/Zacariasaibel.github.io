# Portfolio – Zacarias Aibbich Belhadj

Mein Portfolio für ein Pflichtpraktikum als Fachinformatiker für Anwendungsentwicklung. Seit Februar 2026 absolviere ich eine Umschulung beim IBB Hagen.

## Praktikum

- 25.02.2027 – 27.07.2027
- 22.09.2027 – 29.10.2027
- Region: Hagen, Ruhrgebiet, Düsseldorf und Köln
- Finanzierung über den Kostenträger. Eine Vergütung durch das Unternehmen ist nicht erforderlich.

## Projekte

- **[ZABYTE](https://github.com/Zacariasaibel/ZABYTE)**: Fullstack-Shop mit Angular, TypeScript, Django REST Framework und SQLite. Produktsuche und Filter, persistenter Warenkorb und serverseitig validierte Bestellsimulation. [Live-Demo](https://zaibel.pythonanywhere.com/). Keine echten Zahlungen oder Lieferungen.

- **[BewerbungsTracker](https://github.com/Zacariasaibel/BewerbungsTracker)**: Angular, TypeScript, Django REST Framework und SQLite. Bewerbungen verwalten, nach Unternehmen suchen und nach Status filtern. Mit Übersicht und Terminen zum Nachfassen. Lokales MVP mit fiktiven Daten, ohne öffentliche Demo.
- **[OlimpoAthlete](https://github.com/Zacariasaibel/OlimpoAthlete)**: Angular-Prototyp für regelbasierte Trainingspläne. [Live-Demo](https://zacariasaibel.github.io/OlimpoAthlete/).
- **[Product Inventory API](https://github.com/Zacariasaibel/product-inventory-api)**: REST-API zur Produktverwaltung mit Django REST Framework und SQLite.

Das Portfolio zeigt echte Projektaufnahmen sowie Informationen zu mir, meinen Kenntnissen und zur Kontaktaufnahme.

Die Startseite beginnt mit einer persönlichen Vorstellung und einem Porträt. Auf die Projekte folgen „Über mich“ und „Kenntnisse“ mit Links zu passenden Projekten. Die Praktikumsdaten und drei Kontaktkarten schließen die Seite ab. E-Mail ist der wichtigste Kontaktweg.

Die Startseite zeigt vier kompakte Projektkarten. Jede Karte führt zu einer eigenen Detailseite mit Ziel, Funktionen, Screenshots, Technologien und technischer Umsetzung:

- `/projekte/zabyte/`
- `/projekte/bewerbungstracker/`
- `/projekte/olimpoathlete/`
- `/projekte/product-inventory-api/`

Die gemeinsamen Projektdaten stehen in `src/data/projects.ts`. `src/layouts/ProjectLayout.astro` legt den Aufbau der Detailseiten fest. Astro erzeugt die Seiten über `src/pages/projekte/[slug].astro` als statische Dateien. Dadurch lassen sie sich auf GitHub Pages direkt öffnen und neu laden.

## Lokal öffnen

Voraussetzung: Node.js ab 22.12.0. Die Abhängigkeiten sind bereits installiert.

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

Die bestehende GitHub-Pages-Konfiguration bleibt erhalten. Der Workflow in `.github/workflows/` veröffentlicht bei einem Push auf `main` oder bei manueller Ausführung. Commits, Push und Veröffentlichung führt der Repository-Inhaber aus.

## Kontakt

- [zacaab8@gmail.com](mailto:zacaab8@gmail.com)
- [GitHub: Zacariasaibel](https://github.com/Zacariasaibel)
- [LinkedIn: Zacarias Aibbich Belhadj](https://www.linkedin.com/in/zacarias-aibbich-belhadj-a7184340b)

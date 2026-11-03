# Projektprüfung · 02.11.2026

## Öffentliche Demos

| Projekt | Stand |
| --- | --- |
| ZABYTE | https://zaibel.pythonanywhere.com/ und Produkt-API mit HTTP 200 geprüft. Zehn Produkte im Browser geladen. Die bereits bestätigte öffentliche Bestellsimulation bleibt erhalten. |
| OlimpoAthlete | https://zacariasaibel.github.io/OlimpoAthlete/ nach dem Deployment erneut in Chrome geprüft: Registrierung, Login, drei Coaches, drei Ausstattungen, Tastatur und mobile Pläne funktionieren. |
| BewerbungsTracker | Inzwischen als [öffentliche Demo](https://bewerbungstracker-p90a.onrender.com/) verfügbar. Anlegen, Bearbeiten, Neuladen, Suchen, Filtern und Löschen wurden laut nachträglicher Rückmeldung öffentlich geprüft. |
| Product Inventory API | Navigierbare DRF-Demo lokal vorbereitet und geprüft. Noch keine öffentliche URL. |

Die vier Repository-Links wurden direkt abgerufen und antworteten mit HTTP 200. Die Checkouts wurden anhand ihrer Remotes und Inhalte identifiziert: BewerbungsTracker bleibt auf `master`, die anderen Projekte auf `main`. OlimpoAthlete verwendet weiterhin die bestehende `gh-pages`-Veröffentlichung. Die übergeordnete Projektmappe wurde nicht zu einem Repository gemacht.

## Änderungen und Prüfungen

- **BewerbungsTracker:** separate `demo.sqlite3`, Betreiberbefehl zum Wiederherstellen von zehn fiktiven Bewerbungen und direkte Angular-Routen. 22 Django-Tests, 12 Angular-Tests, 5 TypeScript-Tests und Produktionsbuild bestanden. Chrome mit echter lokaler API: anlegen, ansehen, neu laden, bearbeiten, suchen, filtern und löschen. Hauptansichten bei 390 Pixeln ohne horizontales Überlaufen. Zwei neue echte Screenshots: gefilterte Liste und vollständiges Formular. Der bisherige Dashboard-Screenshot bleibt erhalten.
- **Inventory:** negative Preise und Bestände werden abgewiesen. Produkt und Stock werden atomar gespeichert. Die Antwort enthält den aktualisierten Bestand. Separate Demo-Datenbank und Wiederherstellungsbefehl. 12 Django-Tests bestanden, keine Migration nötig. Chrome mit echtem lokalem HTTP: GET 200, POST 201, PUT/PATCH 200, ungültige Eingaben 400, DELETE 204 und anschließend 404. DRF-Liste und Formular bei 1440 und 390 Pixeln geprüft. Für dieses reine Backend ist kein Frontend-Build nötig.
- **OlimpoAthlete:** ganze Trainingstage validiert, beschädigtes oder gesperrtes Local Storage abgefangen, Coachwahl per Tastatur und Menüwechsel korrigiert. Veraltete Pläne werden bei Profiländerungen ausgeblendet. Simulierter Checkout deutlicher beschrieben. 17 Tests und Produktionsbuild bestanden. axe-core 4.14.0 meldete auf Startseite, Zugang, Plan und Checkout bei 1440 und 390 Pixeln keine Verstöße. Das ersetzt keine vollständige manuelle Barrierefreiheitsprüfung. Für Angular 22 wurde temporär ein offizieller Node 24.22.2 mit geprüftem SHA-256 genutzt; keine Projektabhängigkeit wurde geändert.
- **ZABYTE:** README bestätigt die funktionierende öffentliche Demo. Neue echte Hauptaufnahme ohne graue Seitenleiste, identisch im Portfolio und unter `ECommerceShop/docs/screenshots/01-inicio.jpg`, weiterhin 1348 × 926. Nur die temporäre Browseransicht für die Aufnahme wurde verändert. 37 Django-Tests, Warenkorb- und Filterprüfungen sowie Angular-Build bestanden. Die vollständige E2E-Suite wurde in dieser Sitzung nicht erneut ausgeführt.
- **Portfolio:** Astro-Build mit fünf Seiten bestanden. Chrome gegen den Produktionsbuild bei 1440 und 390 Pixeln: vier Karten, zwei beziehungsweise eine Spalte und gleich positionierte Links. Desktop-Miniaturen messen 562 × 281 Pixel; gegenüber 16:10 sind sie 20 % niedriger. Mobile Miniaturen behalten 16:10. Alle vier Detailseiten direkt geladen, alle Bilder vorhanden und proportional. Keine JavaScript-Ausnahmen. Die Detailbilder erhalten keine Miniatur-Stile. Persönliche Angaben und „Sprachen: Deutsch · Spanisch · Englisch“ bleiben erhalten.

`git diff --check` wurde für alle betroffenen Repositories ausgeführt. Neue Abhängigkeiten wurden nicht hinzugefügt. Vorhandene lokale Dokumentations- und Integrationsänderungen in ZABYTE bleiben erhalten und wurden mit Ausnahme des ausdrücklich zu aktualisierenden README und Hauptbildes nicht in die neuen Commits aufgenommen.

## Fehlendes Hosting

Zum Zeitpunkt dieser Prüfung fehlten für BewerbungsTracker und Inventory zusätzliche verfügbare Hosting-Apps und deren Zugang. BewerbungsTracker ist inzwischen auf Render veröffentlicht; die Demo-Daten sind fiktiv, werden von allen Besuchern geteilt und können beim Neustart zurückgesetzt werden. Für Inventory fehlt weiterhin eine öffentliche Demo. Die kostenlose PythonAnywhere-Stufe bietet nur eine Web-App; ZABYTE darf dafür nicht ersetzt werden. Es wurde kein Konto erstellt, kein Tarif geändert und kein kostenpflichtiger Dienst gestartet. Beide Demos haben ihre eigenen Datenbanken und dokumentierten WSGI-Konfigurationen. Es wurden keine persönlichen Datenbanken kopiert.

Verbleibende Schritte für Inventory:

1. Eine unabhängige, bereits autorisierte kostenlose WSGI-App mit Zugang bereitstellen. Die bestehende ZABYTE-App bleibt unverändert.
2. `docs/demo-deployment.md` im Inventory-Repository befolgen: privater Schlüssel, echter Host, eigene virtuelle Umgebung, leere Demo-Datenbank, Migrationen, Beispieldaten und statische Dateien.
3. Die öffentliche Inventory-URL mit CRUD, Validierungen, direktem Laden und mobiler Ansicht prüfen. Erst danach deren `demo` in `src/data/projects.ts` eintragen; das bestehende Layout zeigt dann „Live-Demo öffnen“.

Die vorbereiteten Demos erlauben gemeinsames Bearbeiten fiktiver Daten. Sie sind keine privaten Benutzerkonten und keine dauerhafte Ablage.

Offizielle Hosting-Dokumentation: [Django bereitstellen](https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/), [Grenzen kostenloser Konten](https://help.pythonanywhere.com/pages/FreeAccountsFeatures/).

## Empfehlungen für spätere Erweiterungen

- `ECommerceShop/frontend/src/app/cart.service.ts`: Persistenz erst ab einer weiteren Speicherart auslagern; die bestehenden Preis-, Bestands- und Wiederholungsprüfungen zusammen erhalten.
- `BewerbungsTracker/frontend/src/app/application-form.ts`: Fehlerübersetzung bei deutlich mehr Formularfeldern abtrennen. Der jetzige Umfang rechtfertigt keinen zusätzlichen Service.
- `OlimpoAthlete/src/app/components/onboarding/onboarding.ts`: bei wachsender Übungsbibliothek Daten in eine typisierte Datei auslagern. `src/app/app.ts` bei weiteren Ansichten auf einen eindeutigen View-Zustand umstellen.

Diese Empfehlungen sind keine offenen Fehler des geprüften Umfangs. Die Veröffentlichung und ihre öffentliche Nachprüfung werden im Abschlussbericht getrennt von den lokalen Prüfungen angegeben.

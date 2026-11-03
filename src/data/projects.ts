export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  goal: string;
  features: string[];
  technologies: string[];
  implementation: string;
  repository: string;
  demo?: string;
  note?: string;
  images: { src: string; alt: string; width: number; height: number }[];
}

export const projects: Project[] = [
  {
    slug: "zabyte",
    name: "ZABYTE",
    category: "Fullstack · Onlineshop",
    summary: "Computerzubehör suchen, einen Warenkorb verwalten und eine Bestellung mit Serverbestätigung simulieren.",
    goal: "Den vollständigen Ablauf vom Produktkatalog bis zur bestätigten Bestellsimulation mit einer gemeinsamen API und nachvollziehbaren Prüfungen umsetzen.",
    features: [
      "Zehn Produkte mit Detailseiten, Bildern, Preisen und Verfügbarkeit ansehen",
      "Nach Namen suchen, nach Kategorie und Verfügbarkeit filtern sowie nach Preis oder Name sortieren; Filter in der URL behalten",
      "Artikel in den Warenkorb legen, Mengen ändern und die Auswahl nach dem Neuladen wiederfinden",
      "Eine Bestellung ohne Zahlungs- oder Personendaten simulieren und die bestätigte Zusammenfassung ansehen",
      "Produkte und Kategorien im geschützten Django Admin verwalten und simulierte Bestellungen prüfen",
    ],
    technologies: ["Angular", "TypeScript", "Python", "Django REST Framework", "SQLite"],
    implementation: "Angular und TypeScript bilden die Oberfläche. Django REST Framework stellt die API bereit, SQLite speichert Produkte und simulierte Bestellungen. Im Browser bleiben nur Produkt-IDs und Mengen gespeichert; Summen werden in ganzen Cent berechnet. Django prüft Preise, Mengen und Bestand anhand der Datenbank und speichert Bestellung und Positionen gemeinsam in einer Transaktion. Eine eindeutige Anfragekennung verhindert doppelte Bestellungen bei Wiederholungen. Die Simulation verändert keine Bestände. Build und vollständiger E2E-Test wurden lokal geprüft. Auf der öffentlichen HTTPS-Seite wurden die zehn Produkte und eine Bestellsimulation mit Referenz, korrektem Betrag und leerem Warenkorb geprüft; die lokale E2E-Suite wurde nicht gegen Produktion ausgeführt.",
    repository: "https://github.com/Zacariasaibel/ZABYTE",
    demo: "https://zaibel.pythonanywhere.com/",
    note: "Portfolio-Projekt mit fiktiven Produkten und KI-generierten Produktdarstellungen. Bestellungen werden nur simuliert; es gibt keine echten Zahlungen oder Lieferungen.",
    images: [
      { src: "/images/projects/zabyte-inicio.jpg", alt: "ZABYTE-Katalog mit zehn Artikeln, Kategorien, Sortierung und Verfügbarkeitsfilter", width: 1348, height: 926 },
      { src: "/images/projects/zabyte-producto.jpg", alt: "Produktdetail einer kompakten Tastatur mit Bild, Preis, Bestand und Mengenauswahl", width: 1363, height: 936 },
      { src: "/images/projects/zabyte-warenkorb.jpg", alt: "Warenkorb mit drei Produkten, Mengensteuerung und einer Gesamtsumme von 124,70 Euro", width: 1165, height: 936 },
      { src: "/images/projects/zabyte-checkout.jpg", alt: "Prüfung derselben drei Produkte für insgesamt 124,70 Euro vor der Bestellsimulation", width: 1363, height: 936 },
      { src: "/images/projects/zabyte-bestaetigung.jpg", alt: "Bestätigung derselben simulierten Bestellung mit Referenz, drei Produkten und 124,70 Euro Gesamtsumme", width: 1363, height: 936 },
    ],
  },
  {
    slug: "bewerbungstracker",
    name: "BewerbungsTracker",
    category: "Fullstack · Bewerbungsverwaltung",
    summary: "Hilft dabei, Bewerbungen zu verwalten und Termine zum Nachfassen im Blick zu behalten.",
    goal: "Den Stand der eigenen Bewerbungen und die nächsten Schritte an einem Ort überblicken.",
    features: [
      "Bewerbungen anlegen, ansehen, bearbeiten und löschen",
      "Nach Unternehmen suchen und nach Status filtern",
      "Eine Übersicht der Bewerbungen anzeigen",
      "Termine zum Nachfassen einsehen",
    ],
    technologies: ["Angular", "TypeScript", "Python", "Django REST Framework", "SQLite"],
    implementation: "Das Angular-Frontend kommuniziert über eine REST-API mit dem Django-Backend. Die API prüft die Eingaben und speichert die Bewerbungen in SQLite. Automatisierte Tests überprüfen unter anderem das Anlegen, Bearbeiten und Löschen sowie den Umgang mit ungültigen Daten. Eine separate Demo-Konfiguration nutzt eine eigene Datenbank mit fiktiven Bewerbungen. Ein Betreiberbefehl stellt die Beispieldaten wieder her.",
    repository: "https://github.com/Zacariasaibel/BewerbungsTracker",
    demo: "https://bewerbungstracker-p90a.onrender.com/",
    note: "Die Demo enthält fiktive Bewerbungen. Alle Besucher teilen dieselben Daten. Beim Neustart des Dienstes können die Beispieldaten zurückgesetzt werden.",
    images: [
      { src: "/images/projects/bewerbungstracker-dashboard.png", alt: "Dashboard des BewerbungsTrackers mit Übersicht und Bewerbungsverwaltung", width: 1093, height: 946 },
      { src: "/images/projects/bewerbungstracker-filter.png", alt: "Bewerbungsliste mit Unternehmenssuche und drei fiktiven Bewerbungen im Status Vorstellungsgespräch", width: 1440, height: 1000 },
      { src: "/images/projects/bewerbungstracker-formular.png", alt: "Formular für eine neue Bewerbung mit fiktivem Unternehmen, Position und Notizen", width: 1440, height: 1200 },
    ],
  },
  {
    slug: "olimpoathlete",
    name: "OlimpoAthlete",
    category: "Frontend-Prototyp",
    summary: "Erstellt einen Wochenplan für das Training anhand von Erfahrung, verfügbarer Zeit und Ausstattung.",
    goal: "Die Trainingsplanung erleichtern, ohne jede Übung und jeden Trainingstag einzeln zusammenstellen zu müssen.",
    features: [
      "Trainer, Erfahrung, Trainingstage, Trainingsdauer und Ausstattung auswählen",
      "Einen Wochenplan regelbasiert erzeugen",
      "Übungen mit Sätzen, Wiederholungen und Pausenzeiten anzeigen",
    ],
    technologies: ["Angular", "TypeScript", "Angular Forms", "Local Storage"],
    implementation: "Angular-Formulare erfassen die Trainingsangaben. TypeScript-Regeln bestimmen die Wochenaufteilung, die Anzahl der Übungen und Sätze sowie Wiederholungen und Pausenzeiten. Entscheidend sind Trainingstage, Dauer, Erfahrung, Ausstattung und der gewählte Coach. Der Frontend-Prototyp simuliert die Anmeldung mit Local Storage und hat kein Backend.",
    repository: "https://github.com/Zacariasaibel/OlimpoAthlete",
    demo: "https://zacariasaibel.github.io/OlimpoAthlete/",
    images: [
      { src: "/images/projects/olimpoathlete-landing.png", alt: "Startseite von OlimpoAthlete", width: 1897, height: 690 },
      { src: "/images/projects/olimpoathlete-training-plan.png", alt: "Generierter Wochenplan in OlimpoAthlete", width: 910, height: 882 },
    ],
  },
  {
    slug: "product-inventory-api",
    name: "Product Inventory API",
    category: "Backend-Projekt",
    summary: "Ermöglicht die Verwaltung von Produktdaten und Beständen über eine REST-Schnittstelle.",
    goal: "Produktdaten für ein separates Frontend über eine klar definierte Schnittstelle bereitstellen und pflegen.",
    features: [
      "Produkte über GET abrufen und mit POST anlegen",
      "Produkte mit PUT oder PATCH aktualisieren und mit DELETE löschen",
      "JSON-Antworten mit passenden HTTP-Statuscodes liefern",
      "CORS-Unterstützung für die Anbindung eines separaten Frontends",
    ],
    technologies: ["Python", "Django REST Framework", "SQLite", "REST / JSON"],
    implementation: "Generische Views von Django REST Framework stellen die Endpunkte zum Lesen, Anlegen, Aktualisieren und Löschen bereit. Ein Serializer prüft die Eingabefelder und weist negative Preise und Bestände zurück. Produkt und Bestand werden gemeinsam in einer Datenbanktransaktion gespeichert. Die API liefert JSON und eine Oberfläche zum Ausprobieren im Browser. Eine vorbereitete Demo-Konfiguration verwendet eine eigene SQLite-Datenbank mit fiktiven Produkten.",
    repository: "https://github.com/Zacariasaibel/product-inventory-api",
    images: [
      { src: "/images/projects/product-inventory-list.png", alt: "Produktliste mit JSON-Daten in der Django REST API", width: 882, height: 925 },
      { src: "/images/projects/product-inventory-create.png", alt: "Produkterstellung mit HTTP-Status 201 Created", width: 845, height: 780 },
    ],
  },
];

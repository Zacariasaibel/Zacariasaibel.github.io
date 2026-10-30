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
    slug: "bewerbungstracker",
    name: "BewerbungsTracker",
    category: "Fullstack · Lokales MVP",
    summary: "Hilft dabei, Bewerbungen zu verwalten und Termine zum Nachfassen im Blick zu behalten.",
    goal: "Den Stand der eigenen Bewerbungen und die nächsten Schritte an einem Ort überblicken.",
    features: [
      "Bewerbungen anlegen, ansehen, bearbeiten und löschen",
      "Nach Unternehmen suchen und nach Status filtern",
      "Eine Übersicht der Bewerbungen anzeigen",
      "Termine zum Nachfassen einsehen",
    ],
    technologies: ["Angular", "TypeScript", "Django REST Framework", "SQLite"],
    implementation: "Das Angular-Frontend kommuniziert über eine REST-API mit dem Django-Backend. Die API prüft die Eingaben und speichert die Bewerbungen in SQLite. Automatisierte Tests überprüfen unter anderem das Anlegen, Bearbeiten und Löschen sowie den Umgang mit ungültigen Daten.",
    repository: "https://github.com/Zacariasaibel/BewerbungsTracker",
    note: "Lokales MVP mit fiktiven Daten. Keine öffentliche Demo.",
    images: [{ src: "/images/projects/bewerbungstracker-dashboard.png", alt: "Dashboard des BewerbungsTrackers mit Übersicht und Bewerbungsverwaltung", width: 1093, height: 946 }],
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
    implementation: "Generische Views von Django REST Framework stellen die Endpunkte zum Lesen, Anlegen, Aktualisieren und Löschen bereit. Ein Serializer prüft die Eingabefelder und verarbeitet Produkt- und Bestandsdaten. Die Daten werden in SQLite gespeichert und als JSON zurückgegeben.",
    repository: "https://github.com/Zacariasaibel/product-inventory-api",
    images: [
      { src: "/images/projects/product-inventory-list.png", alt: "Produktliste mit JSON-Daten in der Django REST API", width: 882, height: 925 },
      { src: "/images/projects/product-inventory-create.png", alt: "Produkterstellung mit HTTP-Status 201 Created", width: 845, height: 780 },
    ],
  },
];

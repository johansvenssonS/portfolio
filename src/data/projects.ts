import tagForseningarImg from "@/assets/project-tag-forseningar.png";
import spellcheckerImg from "@/assets/project-spellchecker.png";
import yahtzeeImg from "@/assets/project-yahtzee.png";
import tipsvannerImg from "@/assets/project-tipsvanner.png";
import webshopImg from "@/assets/project-webshop.png";
import webshopDbImg from "@/assets/project-webshopdberd.png";
import type { Project } from "@/types/project";

export const projectsSV: Project[] = [
  {
    name: "Tipsvänner",
    image: tipsvannerImg,
    description:
      "Ett webbscrape-projekt som hämtar veckans stryktips från Svenska Spel. Tänkt att hjälpa processen att spela och lägga stryktips tillsammans.",
    link: "https://johansvenssons.github.io/tipsV/",
    github: "https://github.com/johansvenssonS/tipsV",
    detailedDescription:
      "Mitt första fullstack-projekt med backend på Render.com och databas på Neon. En automatiserad tjänst som använder web scraping för att hämta Stryktips-data från Svenska Spel. Projektet är fortfarande under utveckling men har fungerande backend-endpoints och databasintegration.",
    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "Node.js",
      "Render.com",
      "Neon Database",
      "PostgreSQL",
      "Web Scraping",
    ],
    features: [
      "Backend API med endpoints på Render.com",
      "Databas på Neon (PostgreSQL)",
      "Automatisk hämtning av Stryktips-data",
      "Web scraping från Svenska Spel",
      "Skapa API endpoints",
      "Visa odds och matcher",
      "Projekt under utveckling",
    ],
    challenges:
      "Mitt första försök att bygga en fullstack-applikation med egen backend och databas. Att sätta upp endpoints på Render.com, integrera med Neon-databas och bygga en robust web scraper var de största utmaningarna.",
    learnings:
      "Lärde mig grunderna i backend-utveckling, hur man sätter upp och deployer API:er på Render.com, databashantering med Neon/PostgreSQL, web scraping-tekniker och hur man bygger fullstack-applikationer från grunden.",
  },
  {
    name: "TechStore Webbshop",
    image: webshopImg,
    description:
      "En modern webbshop för hem- och elektronikprodukter byggd med vanilla JavaScript, HTML och CSS.",
    link: "",
    github: "https://github.com/johansvenssonS/Webbshop-",
    detailedDescription:
      "Ett grupprojekt där vi byggde en fullständig webbshop från grunden utan externa ramverk. Projektet har en modulär JavaScript-arkitektur med custom Web Components och hämtar produktdata via Fetch API.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Components",
      "Fetch API",
    ],
    features: [
      "Produktvisning med dynamisk rendering",
      "Kategorifiltrering (Alla, Kök, Hem, Elektronik, Städning)",
      "Kundvagn med räknare",
      "Responsiv design",
      "Objektorienterad arkitektur med ES6-moduler",
    ],
    challenges:
      "Att bygga en skalbar frontend-arkitektur utan ramverk – vi löste det med custom Web Components och tydlig separation mellan logik och presentation.",
    learnings:
      "Fick djupare förståelse för vanilla JavaScript, modulär kod och hur man strukturerar ett större projekt i ett team utan att förlita sig på externa bibliotek.",
  },
  {
    name: "Fullstack Webbshop med Databas",
    image: webshopDbImg,
    description:
      "En vidareutveckling av TechStore med Node.js-backend, Express och en molnbaserad SQL-databas via Aiven.",
    link: "",
    github: "https://github.com/johansvenssonS/webshopdb",
    detailedDescription:
      "En fullstack-version av webbshoppen med tydlig separation mellan frontend och backend. Produkter, kunder och ordrar hanteras i en molnbaserad SQL-databas. Backenden är byggd med Node.js och Express och exponerar ett REST API som frontenden konsumerar.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "SQL",
      "Aiven",
      "REST API",
      "HTML5",
      "CSS3",
    ],
    features: [
      "Produktkatalog med realtidsdata från SQL-databas",
      "Kategorifiltrering och dynamisk sökfunktion",
      "Varukorg med produkt- och kvantitetshantering",
      "Användarregistrering och kundhantering",
      "Orderläggning kopplad till kundkonto i databasen",
      "REST API-backend med Express",
    ],
    challenges:
      "Att designa databasen så att produkter, kunder och ordrar hänger ihop på ett strukturerat sätt, samt att koppla ihop frontend och backend med ett tydligt API-lager.",
    learnings:
      "Fick praktisk erfarenhet av fullstack-utveckling med Node.js och Express, SQL-databasdesign, REST API-arkitektur och att hantera miljövariabler och molntjänster i ett riktigt projekt.",
  },
  {
    name: "Tåg Förseningar",
    image: tagForseningarImg,
    description:
      "En applikation som trackar tågförseningar med hjälp utav Trafikverkets API.",
    link: "https://johansvenssons.github.io/webapp-project/",
    github: "https://github.com/johansvenssonS/webapp-project",
    detailedDescription:
      "En realtidsapplikation som visar tågförseningar i Sverige genom att integrera med Trafikverkets öppna API. Applikationen implementerar användarautentisering och låter inloggade användare spara sina favoritstationer för snabb åtkomst.",
    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "Trafikverket API",
      "JWT",
      "Authentication",
    ],
    features: [
      "Realtidsdata från Trafikverkets API",
      "Sök efter tågstationer",
      "Visa förseningar och avgångstider",
      "Användarautentisering med JWT tokens",
      "Spara favoritstationer för inloggade användare",
      "Responsiv design för mobil och desktop",
    ],
    challenges:
      "Huvudutmaningen var att hantera API-anrop effektivt, implementera säker autentisering med JWT tokens och skapa ett smidigt flöde för användarhantering.",
    learnings:
      "Lärde mig att arbeta med externa API:er, hantera asynkron JavaScript, implementera JWT-baserad autentisering och skapa responsiva användargränssnitt med säker datahantering.",
  },
  {
    name: "Rättstavningsprogram",
    image: spellcheckerImg,
    description: "Ett rättstavningsprogram i Python",
    link: "https://www.student.bth.se/~josg24/dbwebb-kurser/oopython/me/kmom10/spellchecker/app.cgi",
    github: "https://github.com/johansvenssonS/own-projects",
    detailedDescription:
      "Ett webbaserat rättstavningsprogram utvecklat i Python som använder trädstrukturer för effektiv ordlagring och sökning. Varje bokstav representeras som en nod i trädet med has_next-attribut som pekar vidare i strukturen, vilket möjliggör snabb ordigenkänning och stavningsförslag.",
    technologies: [
      "Python",
      "HTML",
      "CSS",
      "CGI",
      "Datastrukturer",
      "Trädstrukturer",
    ],
    features: [
      "Kontrollera stavning i realtid",
      "Effektiv trädstruktur för ordlagring",
      "Nodbaserad datarepresentation",
      "Föreslå korrigeringar för felstavade ord",
      "Webbaserat gränssnitt",
    ],
    challenges:
      "Att implementera en effektiv trädstruktur där varje bokstav är en nod med has_next-attribut, och att traversera trädet för att hitta ord och generera stavningsförslag.",
    learnings:
      "Fördjupade kunskaper i datastrukturer, särskilt trädstrukturer och nodhantering, algoritmer för textbehandling och implementation av effektiva sökalgoritmer.",
  },
  {
    name: "Yahtzee",
    image: yahtzeeImg,
    description:
      "Ett Yahtzee-spel i Python, kan ta tid att ladda in hos render.com",
    link: "https://yahtzee-app-wyap.onrender.com",
    github: "https://github.com/johansvenssonS/own-projects",
    detailedDescription:
      "Ett fullständigt fungerande Yahtzee-spel byggt i Python med fokus på objektorienterad programmering. Projektet demonstrerar användning av klasser, arv och OOP-principer för att strukturera spellogik, tärningshantering och poängberäkning.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "Flask", "OOP"],
    features: [
      "Fullständiga Yahtzee-regler implementerade",
      "Poängräkning och highscore",
      "Objektorienterad arkitektur med klasser och arv",
      "Responsiv speldesign",
      "Deploy på Render.com",
    ],
    challenges:
      "Att implementera spellogiken korrekt enligt Yahtzee-reglerna med objektorienterad design, strukturera klasser med lämpligt arv och skapa en intuitiv användarupplevelse.",
    learnings:
      "Utvecklade fördjupade färdigheter i objektorienterad programmering, klassdesign, arv och inkapsling. Lärde mig att strukturera komplexa applikationer med OOP-principer och deployment av Python-applikationer.",
  },
];

export const projectsEN: Project[] = [
  {
    name: "Train Delays",
    image: tagForseningarImg,
    description:
      "An application that tracks train delays using the Swedish Transport Administration API.",
    link: "https://johansvenssons.github.io/webapp-project/",
    github: "https://github.com/johansvenssonS/webapp-project",
    detailedDescription:
      "A real-time application that displays train delays in Sweden by integrating with the Swedish Transport Administration's open API. The application implements user authentication and allows logged-in users to save their favorite stations for quick access.",
    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "Trafikverket API",
      "JWT",
      "Authentication",
    ],
    features: [
      "Real-time data from the Swedish Transport Administration API",
      "Search for train stations",
      "Display delays and departure times",
      "User authentication with JWT tokens",
      "Save favorite stations for logged-in users",
      "Responsive design for mobile and desktop",
    ],
    challenges:
      "The main challenge was to handle API calls efficiently, implement secure authentication with JWT tokens, and create a smooth flow for user management.",
    learnings:
      "Learned to work with external APIs, handle asynchronous JavaScript, implement JWT-based authentication, and create responsive user interfaces with secure data handling.",
  },
  {
    name: "Spell Checker",
    image: spellcheckerImg,
    description: "A spell checking program in Python",
    link: "https://www.student.bth.se/~josg24/dbwebb-kurser/oopython/me/kmom10/spellchecker/app.cgi",
    github: "https://github.com/johansvenssonS/own-projects",
    detailedDescription:
      "A web-based spell checker developed in Python that uses tree structures for efficient word storage and searching. Each letter is represented as a node in the tree with has_next attributes pointing forward in the structure, enabling fast word recognition and spelling suggestions.",
    technologies: [
      "Python",
      "HTML",
      "CSS",
      "CGI",
      "Data Structures",
      "Tree Structures",
    ],
    features: [
      "Check spelling in real-time",
      "Efficient tree structure for word storage",
      "Node-based data representation",
      "Suggest corrections for misspelled words",
      "Web-based interface",
    ],
    challenges:
      "Implementing an efficient tree structure where each letter is a node with has_next attributes, and traversing the tree to find words and generate spelling suggestions.",
    learnings:
      "Deepened knowledge in data structures, especially tree structures and node management, text processing algorithms, and implementation of efficient search algorithms.",
  },
  {
    name: "Yahtzee",
    image: yahtzeeImg,
    description:
      "A Yahtzee game in Python, may take time to load on render.com",
    link: "https://yahtzee-app-wyap.onrender.com",
    github: "https://github.com/johansvenssonS/own-projects",
    detailedDescription:
      "A fully functional Yahtzee game built in Python with a focus on object-oriented programming. The project demonstrates the use of classes, inheritance, and OOP principles to structure game logic, dice handling, and score calculation.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "Flask", "OOP"],
    features: [
      "Complete Yahtzee rules implemented",
      "Score calculation and highscore",
      "Object-oriented architecture with classes and inheritance",
      "Responsive game design",
      "Deployed on Render.com",
    ],
    challenges:
      "Implementing the game logic correctly according to Yahtzee rules with object-oriented design, structuring classes with appropriate inheritance, and creating an intuitive user experience.",
    learnings:
      "Developed advanced skills in object-oriented programming, class design, inheritance, and encapsulation. Learned to structure complex applications with OOP principles and deployment of Python applications.",
  },
  {
    name: "Betting Friends",
    image: tipsvannerImg,
    description:
      "A web scraping project that fetches the weekly football pools from Svenska Spel. Intended to help the process of playing and placing bets together.",
    link: "https://johansvenssons.github.io/tipsV/",
    github: "https://github.com/johansvenssonS/tipsV",
    detailedDescription:
      "My first full-stack project with backend on Render.com and database on Neon. An automated service that uses web scraping to fetch football pools data from Svenska Spel. The project is still under development but has functional backend endpoints and database integration.",
    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "Node.js",
      "Render.com",
      "Neon Database",
      "PostgreSQL",
      "Web Scraping",
    ],
    features: [
      "Backend API with endpoints on Render.com",
      "Database on Neon (PostgreSQL)",
      "Automatic fetching of football pools data",
      "Web scraping from Svenska Spel",
      "Create API endpoints",
      "Display odds and matches",
      "Project under development",
    ],
    challenges:
      "My first attempt to build a full-stack application with my own backend and database. Setting up endpoints on Render.com, integrating with Neon database, and building a robust web scraper were the biggest challenges.",
    learnings:
      "Learned the basics of backend development, how to set up and deploy APIs on Render.com, database management with Neon/PostgreSQL, web scraping techniques, and how to build full-stack applications from scratch.",
  },
];

export const projects = projectsSV;

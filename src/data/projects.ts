import clinicImg from "@/assets/project-clinic.png";
import bibliotekImg from "@/assets/project-swinglibrary.png";
import tagForseningarImg from "@/assets/project-tag-forseningar.png";
import spellcheckerImg from "@/assets/project-spellchecker.png";
import yahtzeeImg from "@/assets/project-yahtzee.png";
import tipsvannerImg from "@/assets/project-tipsvanner.png";
import webshopImg from "@/assets/project-webshop.png";
import webshopDbImg from "@/assets/project-webshopdberd.png";
import bibliotekImg from "@/assets/project-swinglibrary.png";
import type { Project } from "@/types/project";

export const projectsSV: Project[] = [
  {
    name: "Klinik",
    image: clinicImg,
    description:
      "En bokningsplattform för en vårdklinik med publik bokning, patienthantering, CRM och webbshop, byggd på Supabase med stark datasäkerhet.",
    detailedDescription:
      "Ett fullstack-projekt där jag byggt en plattform för en klinikverksamhet: publik bokning, patientjournal, ett CRM för att hantera leads och en webbshop. Backend är Postgres/Supabase med rad-nivåsäkerhet som isolerar data mellan olika kliniker, och känsliga personuppgifter hanteras med kryptering för GDPR-efterlevnad. Frontend är byggd i React/TypeScript och deployad till molnet.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase (Postgres, Auth, Storage)",
      "PostgreSQL",
      "Docker",
      "Cloudflare Workers",
    ],
    features: [
      "Publikt bokningsflöde med adminvy för att hantera och bekräfta bokningar",
      "CRM för att hantera leads genom hela säljprocessen",
      "Patientjournal med anteckningar och historik",
      "Webbshop med produkter, kundvagn och orderhistorik",
      "Rad-nivåsäkerhet (RLS) som isolerar data mellan olika kliniker",
      "Kryptering av känsliga personuppgifter för GDPR-efterlevnad",
      "Adminpanel med översikt och nyckeltal",
    ],
    challenges:
      "Det mest utmanande – men också spännande – var att sätta sig in i en stor, befintlig kodbas skriven med ett språk och verktyg jag inte använt tidigare, och förstå arkitekturen och konventionerna innan jag kunde börja bygga vidare på egen hand. Det var roligt att bygga upp projektet tillsammans med AI-agenter, där vi löpande skrev dokumentation kring beslut och lösningar för att hålla ihop ett projekt av den här storleken.",
    learnings:
      "Lärde mig mycket om att navigera och bygga vidare på en stor, okänd kodbas, samt grunderna i att bygga säkra system med flera kunder/klienter isolerade från varandra. Att jobba iterativt tillsammans med AI-agenter och hålla dokumentationen levande visade sig vara ett effektivt sätt att hantera ett projekt av den här storleken.",
  },
  {
    name: "Biblioteksystem",
    image: bibliotekImg,
    description:
      "Ett skrivbordsbaserat bibliotekshanteringssystem byggt i Java med Swing. Hanterar böcker, medlemmar och lån mot en molnbaserad MySQL-databas.",
    github: "https://github.com/johansvenssonS/javabibliotek",
    detailedDescription:
      "Ett Java-projekt med grafiskt användargränssnitt byggt i Swing. Systemet följer en trelagers-arkitektur med UI, service och repository-lager. Användare kan logga in, hantera böcker, medlemmar och lån samt se sina egna sidor. Databasen hostas på Aiven och applikationen är paketerad som en installerbar .exe-fil med jpackage.",
    technologies: [
      "Java",
      "Swing",
      "MySQL",
      "JDBC",
      "Aiven",
      "OOP",
      "jpackage",
    ],
    features: [
      "Inloggningssystem med e-postvalidering mot databas",
      "CRUD-operationer för böcker, författare och medlemmar",
      "Lånehantering med förläng- och återlämningsfunktion",
      "Personliga sidor för inloggad användare",
      "Sök- och filterfunktioner för böcker och medlemmar",
      "Installerbar .exe-fil med bundlad Java-runtime",
      "Trelagers-arkitektur med UI, service och repository",
    ],
    challenges:
      "Att designa en trelagers-arkitektur i Java och hantera databasanslutningar med JDBC. Att bygga ett intuitivt Swing-gränssnitt med korrekt layouthantering samt att paketera applikationen som en fristående .exe-fil med jpackage och WiX Toolset var de största tekniska utmaningarna.",
    learnings:
      "Fick praktisk erfarenhet av objektorienterad programmering med arv, polymorfism och abstraktion. Lärde mig JDBC och SQL-integrering i Java, Swing-layouthantering, transaktionshantering i databaser samt hur man distribuerar en Java-applikation som ett installerbart Windows-program.",
  },
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
    link: "https://johansvenssons.github.io/Webbshop-/",
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
      "En vidareutveckling av TechStore med Node.js-backend, Express och en molnbaserad SQL-databas via Aiven. Projektet är inte hostat, så de är länk till tidigare verision av projektet.",
    link: "https://johansvenssons.github.io/Webbshop-/",
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
    name: "Clinic",
    image: clinicImg,
    description:
      "A booking platform for a healthcare clinic with public booking, patient management, a CRM and a webshop, built on Supabase with strong data security.",
    detailedDescription:
      "A full-stack project building a platform for a clinic business: public booking, patient records, a CRM for managing leads, and a webshop. The backend is Postgres/Supabase with row-level security isolating data between different clinics, and sensitive personal data is encrypted for GDPR compliance. The frontend is built in React/TypeScript and deployed to the cloud.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase (Postgres, Auth, Storage)",
      "PostgreSQL",
      "Docker",
      "Cloudflare Workers",
    ],
    features: [
      "Public booking flow with an admin view to manage and confirm bookings",
      "CRM for managing leads through the sales pipeline",
      "Patient records with notes and history",
      "Webshop with products, a shopping cart, and order history",
      "Row-level security isolating data between different clinics",
      "Encryption of sensitive personal data for GDPR compliance",
      "Admin panel with an overview and key metrics",
    ],
    challenges:
      "The most challenging part — but also exciting — was getting up to speed on a large existing codebase written in a language and stack I hadn't used before, and understanding the architecture and conventions before I could build on it myself. It was fun building the project together with AI agents, continuously writing documentation of decisions and solutions to keep a project of this size coherent.",
    learnings:
      "I learned a lot about navigating and extending a large, unfamiliar codebase, plus the fundamentals of building secure systems with multiple clients/tenants isolated from each other. Working iteratively with AI agents and keeping documentation alive turned out to be an effective way to manage a project of this size.",
  },
  {
    name: "Library Management System",
    image: bibliotekImg,
    description:
      "A desktop-based library management system built in Java with Swing, managing books, members and loans against a cloud-hosted MySQL database.",
    github: "https://github.com/johansvenssonS/javabibliotek",
    detailedDescription:
      "A Java desktop application with a graphical user interface built in Swing. The system follows a three-layer architecture with UI, service and repository layers. Users can log in, manage books, members and loans, and view their own personal pages. The database is hosted on Aiven and the application is packaged as an installable .exe file using jpackage.",
    technologies: [
      "Java",
      "Swing",
      "MySQL",
      "JDBC",
      "Aiven",
      "OOP",
      "jpackage",
    ],
    features: [
      "Login system with email validation against database",
      "CRUD operations for books, authors and members",
      "Loan management with extend and return functionality",
      "Personal pages for logged-in users",
      "Search and filter functionality for books and members",
      "Installable .exe file with bundled Java runtime",
      "Three-layer architecture with UI, service and repository",
    ],
    challenges:
      "Designing a three-layer architecture in Java and managing database connections with JDBC. Building an intuitive Swing interface with correct layout management and packaging the application as a standalone .exe file using jpackage and WiX Toolset were the biggest technical challenges.",
    learnings:
      "Gained practical experience with object-oriented programming concepts such as inheritance, polymorphism and abstraction. Learned JDBC and SQL integration in Java, Swing layout management, database transaction handling, and how to distribute a Java application as an installable Windows program.",
  },
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
    name: "TechStore Webshop",
    image: webshopImg,
    description:
      "A modern webshop for home and electronics products built with vanilla JavaScript, HTML and CSS.",
    link: "https://johansvenssons.github.io/Webbshop-/",
    github: "https://github.com/johansvenssonS/Webbshop-",
    detailedDescription:
      "A group project where we built a complete webshop from scratch without any external frameworks. The project features a modular JavaScript architecture with custom Web Components and fetches product data via the Fetch API.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Components",
      "Fetch API",
    ],
    features: [
      "Product display with dynamic rendering",
      "Category filtering (All, Kitchen, Home, Electronics, Cleaning)",
      "Shopping cart with item counter",
      "Responsive design",
      "Object-oriented architecture with ES6 modules",
    ],
    challenges:
      "Building a scalable frontend architecture without frameworks – we solved this using custom Web Components and a clear separation between logic and presentation.",
    learnings:
      "Gained a deeper understanding of vanilla JavaScript, modular code structure, and how to organise a larger team project without relying on external libraries.",
  },
  {
    name: "Fullstack Webshop with Database",
    image: webshopDbImg,
    description:
      "An evolution of TechStore featuring a Node.js backend, Express, and a cloud-hosted SQL database via Aiven.",
    link: "https://johansvenssons.github.io/Webbshop-/",
    github: "https://github.com/johansvenssonS/webshopdb",
    detailedDescription:
      "A fullstack version of the webshop with a clear separation between frontend and backend. Products, customers and orders are managed in a cloud-hosted SQL database. The backend is built with Node.js and Express, exposing a REST API consumed by the frontend.",
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
      "Product catalogue with real-time data from SQL database",
      "Category filtering and dynamic search",
      "Shopping cart with product and quantity management",
      "User registration and customer management",
      "Order placement linked to customer account in the database",
      "REST API backend with Express",
    ],
    challenges:
      "Designing the database so that products, customers and orders relate to each other in a structured way, and connecting frontend and backend through a clean API layer.",
    learnings:
      "Gained hands-on experience with fullstack development using Node.js and Express, SQL database design, REST API architecture, and working with environment variables and cloud services in a real project.",
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

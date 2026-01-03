import tagForseningarImg from '@/assets/project-tag-forseningar.png';
import spellcheckerImg from '@/assets/project-spellchecker.png';
import yahtzeeImg from '@/assets/project-yahtzee.png';
import tipsvannerImg from '@/assets/project-tipsvanner.png';
import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    name: "Tåg Förseningar",
    image: tagForseningarImg,
    description: "En applikation som trackar tågförseningar med hjälp utav Trafikverkets API.",
    link: "https://johansvenssons.github.io/webapp-project/",
    github: "https://github.com/johansvenssonS/webapp-project",
    detailedDescription: "En realtidsapplikation som visar tågförseningar i Sverige genom att integrera med Trafikverkets öppna API. Applikationen implementerar användarautentisering och låter inloggade användare spara sina favoritstationer för snabb åtkomst.",
    technologies: ["JavaScript", "CSS", "HTML", "Trafikverket API", "JWT", "Authentication"],
    features: [
      "Realtidsdata från Trafikverkets API",
      "Sök efter tågstationer",
      "Visa förseningar och avgångstider",
      "Användarautentisering med JWT tokens",
      "Spara favoritstationer för inloggade användare",
      "Responsiv design för mobil och desktop"
    ],
    challenges: "Huvudutmaningen var att hantera API-anrop effektivt, implementera säker autentisering med JWT tokens och skapa ett smidigt flöde för användarhantering.",
    learnings: "Lärde mig att arbeta med externa API:er, hantera asynkron JavaScript, implementera JWT-baserad autentisering och skapa responsiva användargränssnitt med säker datahantering."
  },
  {
    name: "Rättstavningsprogram",
    image: spellcheckerImg,
    description: "Ett rättstavningsprogram i Python",
    link: "https://www.student.bth.se/~josg24/dbwebb-kurser/oopython/me/kmom10/spellchecker/app.cgi",
    github: "https://github.com/johansvenssonS/own-projects",
    detailedDescription: "Ett webbaserat rättstavningsprogram utvecklat i Python som använder trädstrukturer för effektiv ordlagring och sökning. Varje bokstav representeras som en nod i trädet med has_next-attribut som pekar vidare i strukturen, vilket möjliggör snabb ordigenkänning och stavningsförslag.",
    technologies: ["Python", "HTML", "CSS", "CGI", "Datastrukturer", "Trädstrukturer"],
    features: [
      "Kontrollera stavning i realtid",
      "Effektiv trädstruktur för ordlagring",
      "Nodbaserad datarepresentation",
      "Föreslå korrigeringar för felstavade ord",
      "Webbaserat gränssnitt"
    ],
    challenges: "Att implementera en effektiv trädstruktur där varje bokstav är en nod med has_next-attribut, och att traversera trädet för att hitta ord och generera stavningsförslag.",
    learnings: "Fördjupade kunskaper i datastrukturer, särskilt trädstrukturer och nodhantering, algoritmer för textbehandling och implementation av effektiva sökalgoritmer."
  },
  {
    name: "Yahtzee",
    image: yahtzeeImg,
    description: "Ett Yahtzee-spel i Python, kan ta tid att ladda in hos render.com",
    link: "https://yahtzee-app-wyap.onrender.com",
    github: "https://github.com/johansvenssonS/own-projects",
    detailedDescription: "Ett fullständigt fungerande Yahtzee-spel byggt i Python med fokus på objektorienterad programmering. Projektet demonstrerar användning av klasser, arv och OOP-principer för att strukturera spellogik, tärningshantering och poängberäkning.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "Flask", "OOP"],
    features: [
      "Fullständiga Yahtzee-regler implementerade",
      "Poängräkning och highscore",
      "Objektorienterad arkitektur med klasser och arv",
      "Responsiv speldesign",
      "Deploy på Render.com"
    ],
    challenges: "Att implementera spellogiken korrekt enligt Yahtzee-reglerna med objektorienterad design, strukturera klasser med lämpligt arv och skapa en intuitiv användarupplevelse.",
    learnings: "Utvecklade fördjupade färdigheter i objektorienterad programmering, klassdesign, arv och inkapsling. Lärde mig att strukturera komplexa applikationer med OOP-principer och deployment av Python-applikationer."
  },
  {
    name: "Tipsvänner",
    image: tipsvannerImg,
    description: "Ett webbscrape-projekt som hämtar veckans stryktips från Svenska Spel. Tänkt att hjälpa processen att spela och lägga stryktips tillsammans.",
    link: "https://johansvenssons.github.io/tipsV/",
    github: "https://github.com/johansvenssonS/tipsV",
    detailedDescription: "Mitt första fullstack-projekt med backend på Render.com och databas på Neon. En automatiserad tjänst som använder web scraping för att hämta Stryktips-data från Svenska Spel. Projektet är fortfarande under utveckling men har fungerande backend-endpoints och databasintegration.",
    technologies: ["JavaScript", "CSS", "HTML", "Node.js", "Render.com", "Neon Database", "PostgreSQL", "Web Scraping"],
    features: [
      "Backend API med endpoints på Render.com",
      "Databas på Neon (PostgreSQL)",
      "Automatisk hämtning av Stryktips-data",
      "Web scraping från Svenska Spel",
      "Skapa API endpoints",
      "Visa odds och matcher",
      "Projekt under utveckling"
    ],
    challenges: "Mitt första försök att bygga en fullstack-applikation med egen backend och databas. Att sätta upp endpoints på Render.com, integrera med Neon-databas och bygga en robust web scraper var de största utmaningarna.",
    learnings: "Lärde mig grunderna i backend-utveckling, hur man sätter upp och deployer API:er på Render.com, databashantering med Neon/PostgreSQL, web scraping-tekniker och hur man bygger fullstack-applikationer från grunden."
  }
];

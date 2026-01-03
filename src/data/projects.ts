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
    link: "https://johansvenssons.github.io/webapp-project/"
  },
  {
    name: "Rättstavningsprogram",
    image: spellcheckerImg,
    description: "Ett rättstavningsprogram i python",
    link: "https://www.student.bth.se/~josg24/dbwebb-kurser/oopython/me/kmom10/spellchecker/app.cgi"
  },
  {
    name: "Yahtzee",
    image: yahtzeeImg,
    description: "Ett yahtzee spel i python, kan ta tid att ladda in hos render.com",
    link: "https://yahtzee-app-wyap.onrender.com"
  },
  {
    name: "Tipsvänner",
    image: tipsvannerImg,
    description: "Ett webbscrape projekt som hämtar veckans stryktips från svenska spel. Tänkt att hjälpa processen att spela och lägga stryktips tillsammans.",
    link: "https://johansvenssons.github.io/tipsV/"
  }
];

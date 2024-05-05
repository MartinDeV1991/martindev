
import backgroundImage from '../Components/background-image1.jpg';
import './projects.css';

const Projects = () => {

    const projects = `
    Welkom op mijn website! Hier wil ik graag een inkijkje geven in enkele van mijn projecten.
    Ik heb een diverse reeks projecten gerealiseerd, variërend van games tot fullstack webapplicaties.
    Klik op de link hierboven om direct naar de projecten te gaan.
    Daarnaast is hieronder meer informatie te vinden over mijn projecten.
    `;

    const jsGames = `
    Als liefhebber van game development heb ik verschillende games ontwikkeld met behulp van JavaScript en html.
    `;

    const pythonGames = `
    Ik heb ook games ontwikkeld in Python. Voor de ontwikkeling heb ik gebruik gemaakt van PyGame library.
    Voor het omzetten naar een .exe bestand zodat de spellen standalone te spelen zijn heb ik gebruikt gemaakt van PyInstaller.
    Om de games om te zetten in code die door de browser gelezen kan worden heb ik gebruik gemaakt van Pygbag.
    `;

    const fullstack = `
    Ik heb meegewerkt aan diverse fullstack projecten waarbij ik gebruikmaakte van een combinatie van SQL voor databasebeheer, Java/Springboot voor de backend-logica en JavaScript/React voor de frontend-ontwikkeling.
    Ik heb ook een project gemaakt waarbij ik gebruikmaak van Node.js voor de backend, JavaScript voor zowel de frontend als de backend, en MongoDB als de NoSQL-database.
    Deze projecten hebben mij waardevolle ervaring opgeleverd in het ontwerpen, bouwen en implementeren van complexe webapplicaties.
    `;

    const hosting = `
    Een deel van mijn projecten zijn online gehost zodat ze in de browser bekeken kunnen worden. Daarnaast is van elk project de code op Github te vinden.
    Voor de fullstack projecten in mijn portfolio zijn de frontend, backend en de database online gebracht via het Azure - cloudplatform.
    Omdat voor de backends de free tier van Azure is gebruikt kan het soms een minuutje duren voordat de applicatie werkt.Om het build - en deploymentproces van de applicatie te automatiseren heb ik gebruikgemaakt van Github Actions.
    De Python games zijn na conversie met Pygbag geüpload naar itch.io.
    De overige projecten zijn gehost op Netlify.
`;
    return (
        <div className="projects-container">

            <div style={{ position: 'fixed', opacity: 0.15, backgroundAttachment: 'fixed', zIndex: -1  }}>
                <img src={backgroundImage} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt=''></img>
            </div>
            <a className='link-to-projects' href='/projectSite'>
                Klik hier om mijn projecten te bekijken!
            </a>

            <div className="project-section">
                <div className='projects-section-name'></div>
                <div>{projects}</div>
            </div>

            <div className="project-section">
                <div className='projects-section-name'>JavaScript Games</div>
                <div>{jsGames}</div>
            </div>

            <div className="project-section">
                <div className='projects-section-name'>Python Games</div>
                <div>{pythonGames}</div>
            </div>

            <div className="project-section">
                <div className='projects-section-name'>Fullstack Projecten</div>
                <div>{fullstack}</div>
            </div>

            <div className="project-section">
                <div className='projects-section-name'>Hosting</div>
                <div>{hosting}</div>
            </div>

            <a className='link-to-projects' href='https://martin-website.netlify.app' target='_blank' rel='noopener noreferrer'>
                Klik hier om mijn projecten te bekijken!
            </a>
        </div>
    )
};

export default Projects;

import './projectSite.css'

import Project from '../Components/Project';
import { useState } from 'react';

import FlappyBird from "../Images/FlappyBird.png";
import Languagelearning from "../Images/Languagelearning.png";
import marktplaats from "../Images/marktplaats.png";
import ninjaGame from "../Images/ninja-game.png";
import pacman from "../Images/Pacman.png";
import plantsvszombies from "../Images/plantsvszombies.jpg";
import RPG from "../Images/RPG.png";
import snakeAI from "../Images/snakeAI.png";
import spaceInvaders from "../Images/spaceInvaders.png";
import spaceInvaders2 from "../Images/spaceInvaders2.png";
import Strava from "../Images/Strava.png";
import sudoku from "../Images/sudoku.png";
import tradingGui from "../Images/trading-gui.png";
import website from "../Images/website.png";
import _3Dblocks from "../Images/3Dblocks.png";
import AgeOfWarBackground from "../Images/AgeOfWarBackground.png";
import backgroundBull from "../Images/backgroundBull.png";
import backgroundFight from "../Images/backgroundFight.png";
import backgroundKing from "../Images/backgroundKing.png";
import backgroundTower from "../Images/backgroundTower.png";
import doom from "../Images/doom.png";
import duckHunt from "../Images/duckHunt.png";
import fishyBackground from "../Images/fishyBackground.jpg";

const images = {
    FlappyBird,
    Languagelearning,
    marktplaats,
    ninjaGame,
    pacman,
    plantsvszombies,
    RPG,
    snakeAI,
    spaceInvaders,
    spaceInvaders2,
    Strava,
    sudoku,
    tradingGui,
    website,
    _3Dblocks,
    AgeOfWarBackground,
    backgroundBull,
    backgroundFight,
    backgroundKing,
    backgroundTower,
    doom,
    duckHunt,
    fishyBackground
}

const ProjectSite = () => {

    const [activeBtn, setActiveBtn] = useState('js-games');

    const handleBtnClick = (id) => {
        setActiveBtn(id);
    };

    return (
        <main className="main-content">

            {activeBtn === 'js-games' && (

                <section className="section sec3" id="js-games">
                    <div className="main-title">
                        <h2>Javascript <span>Games</span><span className="bg-text">Javascript</span></h2>
                    </div>
                    <p className="port-text">

                    </p>
                    <div className="portfolios">

                        < Project
                            image={images.pacman}
                            name="Pacman"
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/Pacman', icon: 'fab fa-github' },
                                { url: 'https://martin-pacman.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                        />
                        <Project
                            image={images.backgroundFight}
                            name="Samurai fight game"
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/FightingGame', icon: 'fab fa-github' },
                                { url: 'https://martin-fighting-game.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                        />
                        <Project
                            image={images.spaceInvaders2}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/space-invaders2', icon: 'fab fa-github' },
                                { url: 'https://martin-spaceinvaders2.netlify.app', icon: 'fa-solid fa-play' }
                            ]}
                            name="Space Invaders"
                        />
                        <Project
                            image={images.backgroundBull}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/Bull', icon: 'fab fa-github' },
                                { url: 'https://martin-bull-game.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="Egg hatching game"
                        />
                        <Project
                            image={images.backgroundTower}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/TowerDefense', icon: 'fab fa-github' },
                                { url: 'https://martin-tower-defense.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="Tower defense game"
                        />
                        <Project
                            image={images.duckHunt}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/DuckHunt', icon: 'fab fa-github' },
                                { url: 'https://martin-duckhunt.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="Duck hunt game"
                        />
                        <Project
                            image={images.plantsvszombies}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/PlantsVSZombies', icon: 'fab fa-github' },
                                { url: 'https://martinplantsvszombies.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="Plants vs Zombies"
                        />
                        <Project
                            image={images.AgeOfWarBackground}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/TowerDefense2', icon: 'fab fa-github' },
                                { url: 'https://martin-towerdefense2.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="Tower defense 2"
                        />
                        <Project
                            image={images.fishyBackground}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/Fishy', icon: 'fab fa-github' },
                                { url: 'https://martin-fishy.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="Fishy"
                        />
                        <Project
                            image={images._3Dblocks}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/3Dblocks', icon: 'fab fa-github' },
                                { url: 'https://martin-3dblocks.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="3D blocks game"
                        />
                        <Project
                            image={images.FlappyBird}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/FlappyBird', icon: 'fab fa-github' },
                                { url: 'https://martin-flappybird.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="Flappy bird"
                        />
                        <Project
                            image={images.RPG}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/RPGgame', icon: 'fab fa-github' },
                                { url: 'https://martin-rpg.netlify.app/', icon: 'fa-solid fa-play' }
                            ]}
                            name="RPG"
                        />
                        <Project
                            image={images.spaceInvaders}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/space-invaders', icon: 'fab fa-github' },
                                { url: 'https://martin-spaceinvaders.netlify.app', icon: 'fa-solid fa-play' }
                            ]}
                            name="Space Invaders"
                        />
                    </div>
                </section>
            )}

            {activeBtn === 'python-code' && (

                < section className="section sec4" id="python-code">
                    <div className="main-title">
                        <h2>Python <span>Code</span><span className="bg-text">Python</span></h2>
                    </div>
                    <p className="port-text">

                    </p>
                    <div className="portfolios">
                        <Project
                            image={images.sudoku}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/SudokuSolver', icon: 'fab fa-github' }
                            ]}
                            name="Sudoku solver"
                        />
                        <Project
                            image={images.tradingGui}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/stock-market-analysis', icon: 'fab fa-github' }
                            ]}
                            name="Stock market analysis"
                        />
                        <Project
                            image={images.ninjaGame}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/ninja-game', icon: 'fab fa-github' },
                                { url: 'https://martindev1991.itch.io/ninja-game', icon: 'fa-solid fa-play' }
                            ]}
                            name="Platform game"
                        />
                        <Project
                            image={images.doom}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/Doom', icon: 'fab fa-github' },
                                { url: 'https://martindev1991.itch.io/3d-shooter', icon: 'fa-solid fa-play' }
                            ]}
                            name="3D shooter"
                        />
                        <Project
                            image={images.snakeAI}
                            hrefs={[
                                { url: 'https://github.com/MartinDeV1991/SnakeAI', icon: 'fab fa-github' }
                            ]}
                            name="Snake AI"
                        />
                    </div>
                </section>
            )
            }

            {
                activeBtn === 'fullstack' && (

                    < section className="section sec5" id="fullstack" >
                        <div className="main-title">
                            <h2>Full stack <span>projects</span><span className="bg-text">Full stack</span></h2>
                        </div>
                        <p className="port-text">

                        </p>
                        <div className="portfolios">
                            <Project
                                image={images.marktplaats}
                                hrefs={[
                                    { url: 'https://github.com/amarborz/marktplaats-frontend', icon: 'fab fa-github' },
                                    { url: 'https://github.com/MartinDeV1991/Marktplaats-backend', icon: 'fab fa-github' },
                                    { url: 'https://github.com/MartinDeV1991/marktplaats-backend-flask', icon: 'fab fa-github' },
                                    { url: 'https://ashy-water-083fee803.4.azurestaticapps.net/', icon: 'fa-solid fa-play' }
                                ]}
                                name="Online shop"
                            />
                            <Project
                                image={images.Languagelearning}
                                hrefs={[
                                    { url: 'https://github.com/MartinDeV1991/languagelearning-frontend', icon: 'fab fa-github' },
                                    { url: 'https://github.com/MartinDeV1991/languagelearning-backend', icon: 'fab fa-github' },
                                    { url: 'https://gentle-sea-0e8552b03.4.azurestaticapps.net/', icon: 'fa-solid fa-play' }
                                ]}
                                name="Language quiz"
                            />
                            <Project
                                image={images.Strava}
                                hrefs={[
                                    { url: 'https://github.com/MartinDeV1991/strava', icon: 'fab fa-github' },
                                    { url: 'https://github.com/MartinDeV1991/strava-backend', icon: 'fab fa-github' },
                                    { url: 'https://gentle-water-0079cc403.5.azurestaticapps.net/', icon: 'fa-solid fa-play' }
                                ]}
                                name="Strava frontend"
                            />
                        </div>
                    </section >
                )
            }
            <div className="controls">
                <div
                    className={`control control-3 ${activeBtn === 'js-games' ? 'active-btn' : ''}`}
                    data-id="js-games"
                    onClick={() => handleBtnClick('js-games')}
                >
                    <i className="fa-solid fa-gamepad"></i>
                </div>
                <div
                    className={`control control-4 ${activeBtn === 'python-code' ? 'active-btn' : ''}`}
                    data-id="python-code"
                    onClick={() => handleBtnClick('python-code')}
                >
                    <i className="fa-brands fa-python"></i>
                </div>
                <div
                    className={`control control-5 ${activeBtn === 'fullstack' ? 'active-btn' : ''}`}
                    data-id="fullstack"
                    onClick={() => handleBtnClick('fullstack')}
                >
                    <i className="fa-solid fa-layer-group"></i>
                </div>
            </div>

        </main >
    )
}
export default ProjectSite;
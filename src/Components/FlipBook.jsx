import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import fire from '../Assets/events_imgs/effects/fire_effect.png'
import flower from '../Assets/events_imgs/effects/flower_effect.png'
import luffy from '../Assets/events_imgs/luffy.jpg'
import naruto from '../Assets/events_imgs/naruto.png'
import lightyagami from '../Assets/events_imgs/lightYagami.png'
import saitama from '../Assets/events_imgs/saitama.png'
import bleach from '../Assets/events_imgs/bleach.png'
import stone from '../Assets/events_imgs/drStone.png'
import jinwoo from '../Assets/events_imgs/jinwoo.jpg'
import izuku from '../Assets/events_imgs/izuku.jpg'
import itachi from '../Assets/events_imgs/itachi.png'
import mikey from '../Assets/events_imgs/mikey.png'
import mikasa from '../Assets/events_imgs/mikasa.jpg'
import tanjiro from '../Assets/events_imgs/tanjiro.png'
import gojo from '../Assets/events_imgs/gojo.png'
import lelouch from '../Assets/events_imgs/lelouch.png'
import spyx from '../Assets/events_imgs/spyx.png'
import gintoki from '../Assets/events_imgs/gintoki.png'
import '../styles/eventFlip.css';



function FlipBook(){
    return(
        <HTMLFlipBook width={700} height={500}>
            <div className="firstpage">
                <div className="pageHeading">NUTPAM</div>
                <div className="pageYear">2k24</div>
            </div>
            <div className="eventSlide1">
                <div className="eventHead">PIRATES'S IDEA QUEST</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Create and pitch innovative ideas based on random problem statements. From brainstorming to powerpoint preparation and pitching with fun obstacles, set sail for creativity
                    </div>
                    <div className="eventTeam">Team Size 2-3</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Sreenidhi R - 9363450047</div>
                    <div className="eventCoord">Hemasri P - 8695730822</div>
                </div>
                <div className="eventImg">
                    <img src={luffy} alt="" className='singleImg1' height={350}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide2">
                <div className="eventHead">Shinobi's Design Quest</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Dive into a UI/UX design challenge with an online quiz and an intensive Figma design phase. Face a sabotage twist and present your final design to showcase your flair and creativity!
                    </div>
                    <div className="eventTeam">Team Size 1-3</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Varshini S 8122124447</div>
                    <div className="eventCoord">Kaviyanjali M - 8825943878</div>
                </div>
                <div className="eventImg">
                    <img src={naruto} alt="" className='singleImg2' height={500}/>
                    <img src={flower} alt="" className='flowerEffect' height={250}/>
                </div>
            </div>
            <div className="eventSlide3">
                <div className="eventHead">Shadow Code</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Test your coding skills with screens off, solving challenges and predicting pseudocode outputs. A true challenge of your coding prowess and problem-solving abilities!
                    </div>
                    <div className="eventTeam">Team Size 1</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Harisharajan R R - 9791340230</div>
                    <div className="eventCoord">Gayathri Srinivasan - 7358115950</div>
                </div>
                <div className="eventImg">
                    <img src={lightyagami} alt="" className='singleImg3' height={450}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide4">
                <div className="eventHead">Pitch with Power</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Present your groundbreaking ideas through a compelling PowerPoint pitch and prototype demonstration. Show off your vision with flair and make a lasting impression!
                    </div>
                    <div className="eventTeam">Team Size 2-3</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Thanyashree S J - 8148004756</div>
                    <div className="eventCoord">Shrikanth K S - 8754118781</div>
                </div>
                <div className="eventImg">
                    <img src={saitama} alt="" className='singleImg4' height={350}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide5">
                <div className="eventHead">Zanpakuto Capture</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Crack codes and solve mysteries through a series of hacking and analysis challenges. Uncover usernames, passwords, and hidden secrets to prove your sleuthing skills!
                    </div>
                    <div className="eventTeam">Team Size 1-2</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Muthu Priya S - 7200965530</div>
                    <div className="eventCoord">Amirthavarshini R - 9566160289</div>
                </div>
                <div className="eventImg">
                    <img src={bleach} alt="" className='singleImg5' height={430}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide6">
                <div className="eventHead">Stone Age Relay</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Compete in a relay coding challenge where team members alternate every 5 minutes between coding and performing tasks. Race against time and showcase your coding endurance!
                    </div>
                    <div className="eventTeam">Team Size 2</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Siddharth S - 9894202251</div>
                    <div className="eventCoord">Kavinshree V - 8903859061</div>
                </div>
                <div className="eventImg">
                    <img src={stone} alt="" className='singleImg6' height={450}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide7">
                <div className="eventHead">Dungeon Tech Quiz</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Test your tech knowledge across three rounds focusing on Data Structures, Computer Networks, Operating Systems, and OOPS concepts. Prove your expertise and conquer the quiz!
                    </div>
                    <div className="eventTeam">Team Size 2</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Anantha Karthigeyan M S - 8122553343</div>
                    <div className="eventCoord">Dharun Kumar - 9150442055</div>
                </div>
                <div className="eventImg">
                    <img src={jinwoo} alt="" className='singleImg7' height={420}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide8">
                <div className="eventHead">Quirk Clash: Pro VS Foe</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Engage in a dynamic role-play event where teams present on assigned topics and debate opposing viewpoints. Enhance your presentation, teamwork, and critical analysis skills to emerge as the ultimate winner!
                    </div>
                    <div className="eventTeam">Team Size 2 - 3</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Vignesh A K - 8438092603</div>
                    <div className="eventCoord">Adhirooban D - 9342045646</div>
                </div>
                <div className="eventImg">
                    <img src={izuku} alt="" className='singleImg8' height={500}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide9">
                <div className="eventHead">Sharingan Pixels</div>
                <div className="eventContent">
                    <div className="mainContent">
                    Capture the essence of your favorite anime scenes in a photograph. Use props, editing, and creativity to bring 2D anime moments into a vivid 3D reality!
                    </div>
                    <div className="eventTeam">Team Size 1</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Krushnasayi S - 6381905654</div>
                    <div className="eventCoord">Naveen Krishna B B - 6374846179</div>
                </div>
                <div className="eventImg">
                    <img src={itachi} alt="" className='singleImg9' height={380}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide10">
                <div className="eventHead">Tokyo Bid Showdown</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Engage in strategic bidding and presentation tasks in a competitive format. From online bidding to onsite presentations, use strategy and charm to win the showdown!
                    </div>
                    <div className="eventTeam">Team Size 2 - 3</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Sakthi Arunachalam S - 9786243189</div>
                    <div className="eventCoord">Sharjun A - 8838214907</div>
                </div>
                <div className="eventImg">
                    <img src={mikey} alt="" className='singleImg10' height={450}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide11">
                <div className="eventHead">Titan Tactics</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Act out clues to guess movie names and then challenge opponents in a tactical Tic Tac Toe battle. Combine your quick thinking and strategy to outsmart your rivals!
                    </div>
                    <div className="eventTeam">Team Size 2</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Esthak Jerosin K - 8610313035</div>
                    <div className="eventCoord">Mugunthan V - 6379276586</div>
                </div>
                <div className="eventImg">
                    <img src={mikasa} alt="" className='singleImg11' height={400}/>
                    <img src={flower} alt="" className='flowerEffect' height={250}/>
                </div>
            </div>
            <div className="eventSlide12">
                <div className="eventHead">Slayer Snapshot</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Test your memory and observational skills through rounds of image recall challenges. Memorize, analyze, and recall the details to win this visual memory showdown!
                    </div>
                    <div className="eventTeam">Team Size 1 - 2</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Nithya Sree R - 7397374235</div>
                    <div className="eventCoord">Harish D K - 6383501771</div>
                </div>
                <div className="eventImg">
                    <img src={tanjiro} alt="" className='singleImg12' height={500}/>
                    <img src={flower} alt="" className='flowerEffect' height={250}/>
                </div>
            </div>
            <div className="eventSlide13">
                <div className="eventHead">Shibuya Survival Clash</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Battle it out in a tactical 5v5 Valorant competition. Focus on teamwork and strategy to outplay your opponents and claim victory!
                    </div>
                    <div className="eventTeam">Team Size 5</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Gowthaman S - 7708939823</div>
                    <div className="eventCoord">Aravind Surya D - 9363184859</div>
                </div>
                <div className="eventImg">
                    <img src={gojo} alt="" className='singleImg13' height={450}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide14">
                <div className="eventHead">Lelouch's Cinematica</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Test your movie trivia skills in a quiz involving clues, identifying movie songs from frames, and rapid-fire actor and movie names. Put your cinematic knowledge to the ultimate test!
                    </div>
                    <div className="eventTeam">Team Size 2 - 3</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Siddheshwari B - 9444154989</div>
                    <div className="eventCoord">Shanmathi S - 9360390307</div>
                </div>
                <div className="eventImg">
                    <img src={lelouch} alt="" className='singleImg14' height={450}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="eventSlide15">
                <div className="eventHead">Forger's Mission</div>
                <div className="eventContent">
                    <div className="mainContent">
                        Investigate a crime scene, create a narrative summary, and engage in a Q&A session to demonstrate your analytical skills. Unravel the mystery and showcase your findings!
                    </div>
                    <div className="eventTeam">Team Size 2 - 3</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Haritha S - 9944803183</div>
                    <div className="eventCoord">Keerthana J - 8508530343</div>
                </div>
                <div className="eventImg">
                    <img src={spyx} alt="" className='singleImg15' height={400}/>
                    <img src={flower} alt="" className='flowerEffect' height={250}/>
                </div>
            </div>
            <div className="eventSlide16">
                <div className="eventHead">Ginwars: AD Rumble</div>
                <div className="eventContent">
                    <div className="mainContent">
                        A fast-paced challenge where teams create and pitch a hilarious advertisement for a given product. Showcase your creativity and humor by crafting an ad that will leave everyone laughing!
                    </div>
                    <div className="eventTeam">Team Size 2 - 3</div>
                </div>
                <div className="eventCoordinators">
                    <div className="eventCoordHead">STUDENT COORDINATORS</div>
                    <div className="eventCoord">Dharshini L - 8825464048</div>
                    <div className="eventCoord">Naveen Karthick T K - 8825785929</div>
                </div>
                <div className="eventImg">
                    <img src={gintoki} alt="" className='singleImg16' height={390}/>
                    <img src={fire} alt="" className='fireEffect' height={300}/>
                </div>
            </div>
            <div className="firstpage">
                <div className="pageHeading">NUTPAM</div>
                <div className="pageYear">2k25</div>
                <div className="pageCome">Coming Soon</div>
            </div>
        </HTMLFlipBook>
    )
}

export default FlipBook;

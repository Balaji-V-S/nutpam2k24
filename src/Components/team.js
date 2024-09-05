import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { TeamService } from './TeamService'; // Assuming you saved the team service here
import '../styles/team.css';
import Footer from './footer';
import Nav from './navbar';

const TeamCarousel = ({ teamName }) => {
    const [teamMembers, setTeamMembers] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    useEffect(() => {
        TeamService.getTeam().then((data) => {
            const filteredMembers = data.filter(member => member.team === teamName);
            setTeamMembers(filteredMembers);
        });
    }, [teamName]);

    const teamTemplate = (member) => {
        return (
            <div className="member-card">
                <div className="member-info">
                    <div className="member-image-container">
                        <img 
                            src={member.image}
                            alt={member.name} 
                            className="member-image" 
                        />
                    </div>
                    <div className="member-details">
                        <h4 className="member-name">{member.name}</h4>
                        <h6 className="member-role">{member.role}</h6>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <h3>{teamName} Ninjas</h3>
            <Carousel value={teamMembers} numScroll={1} numVisible={5} responsiveOptions={responsiveOptions} itemTemplate={teamTemplate}  autoplayInterval={3000} />
        </div>
    );
};

export default function CircularDemo() {
    return (
        <>
        <Nav/>
        <div className='team-det'>
            <TeamCarousel teamName="Core" />
            <TeamCarousel teamName="Web Developer" />
            <TeamCarousel teamName="Web Design" />
            <TeamCarousel teamName="Content Developer" />
            <TeamCarousel teamName="Office Bearer" />
            <TeamCarousel teamName="Video Editing" />
            <TeamCarousel teamName="Social Media" />
            <TeamCarousel teamName="Overall Coordinator" />
            <TeamCarousel teamName="QUIRK CLASH: PRO VS FOE" />
            <TeamCarousel teamName="Dungeon Tech Quiz" />
            <TeamCarousel teamName="Zanpakuto capture" />
            <TeamCarousel teamName="Pitch With Power" />
            <TeamCarousel teamName="Pirate’s Idea Quest" />
            <TeamCarousel teamName="Shinobi's Design Quest" />
            <TeamCarousel teamName="Stone Age Relay" />
            <TeamCarousel teamName="Shadow Code" />
            <TeamCarousel teamName="Sharingan Pixels" />
            <TeamCarousel teamName="Tokyo Bid Showdown" />
            <TeamCarousel teamName="Titan Tactics" />
            <TeamCarousel teamName="Slayer Snapshot" />
            <TeamCarousel teamName="Shibuya Survival Clash" />
            <TeamCarousel teamName="Lelouch's Cinematica" />
            <TeamCarousel teamName="Forger's Mission" />
            <TeamCarousel teamName="Ginwars: Ad Rumble" />
        </div>
        <Footer/>
        </>
    );
}

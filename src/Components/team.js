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
            <h3>{teamName}</h3>
            <Carousel value={teamMembers} numScroll={1} numVisible={5} responsiveOptions={responsiveOptions} itemTemplate={teamTemplate}  autoplayInterval={3000} />
        </div>
    );
};

export default function CircularDemo() {
    return (
        <>
        <Nav/>
        <div className='team-det'>
            <TeamCarousel teamName="Core Ninjas" />
            <TeamCarousel teamName="Web Developer Ninjas" />
            <TeamCarousel teamName="Web Design Ninjas" />
            <TeamCarousel teamName="Content Developer Ninjas" />
            <TeamCarousel teamName="Office Bearer Ninjas" />
            <TeamCarousel teamName="Video Editing Ninjas" />
            <TeamCarousel teamName="Social Media Ninjas" />
            <TeamCarousel teamName="Overall Event Coordinator Ninja" />
            <TeamCarousel teamName="QUIRK CLASH: PRO VS FOE Ninjas" />
            <TeamCarousel teamName="Dungeon Tech Quiz Ninjas" />
            <TeamCarousel teamName="Zanpakuto capture Ninjas" />
            <TeamCarousel teamName="Pitch With Power Ninjas" />
            <TeamCarousel teamName="Pirate’s Idea Quest Ninjas" />
            <TeamCarousel teamName="Shinobi's Design Quest Ninjas" />
            <TeamCarousel teamName="Stone Age Relay Ninjas" />
            <TeamCarousel teamName="Shadow Code Ninjas" />
            <TeamCarousel teamName="Sharingan Pixels Ninjas" />
            <TeamCarousel teamName="Tokyo Bid Showdown Ninjas" />
            <TeamCarousel teamName="Titan Tactics Ninjas" />
            <TeamCarousel teamName="Slayer Snapshot Ninjas" />
            <TeamCarousel teamName="Shibuya Survival Clash Ninjas" />
            <TeamCarousel teamName="Lelouch's Cinematica Ninjas" />
            <TeamCarousel teamName="Forger's Mission Ninjas" />
            <TeamCarousel teamName="Ginwars: Ad Rumble Ninjas" />
        </div>
        <Footer/>
        </>
    );
}

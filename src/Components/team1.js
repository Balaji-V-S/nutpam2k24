import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { TeamService } from './service/TeamService'; // Assuming you saved the team service here
import './team.css';

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
            // Filter team members by the teamName prop
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
                            src={`/images/members/${member.image}`} 
                            alt={member.name} 
                            className="member-image" 
                        />
                    </div>
                    <div className="member-details">
                        <h4 className="member-name">{member.name}</h4>
                        <h6 className="member-role">{member.role}</h6>
                        <p className="member-team">{member.team}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <h3>{teamName} Team</h3>
            <Carousel value={teamMembers} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={teamTemplate} />
        </div>
    );
};

export default function CircularDemo() {
    return (
        <div>
            <TeamCarousel teamName="Engineering" />
            <TeamCarousel teamName="Product" />
            <TeamCarousel teamName="Design" />
            {/* Add more TeamCarousel components as needed */}
        </div>
    );
}

"use client";

import teamData from '@data/team/team.json'; // Assuming you place your team.json in the data folder

const TeamMember = () => {
    return (
        <>
            {/* Title Section */}
            <div className="text-center mb-5">
                <h2 className="row justify-content-center mil-upper">Advisory Board</h2>
            </div>

            {/* Team Members Section */}
            <div className="row justify-content-center mil-team-grid" >
                {teamData.slice(0, 2).map((item, key) => (
                    <div className="col-sm-6 col-lg-3 mil-grid-item mil-up text-center" key={`team-item-${key}`}>
                        <div style={{
                            padding: '20px',
                            borderRadius: '5px',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '30px' // Added bottom margin
                        }}>
                            <div className="mil-avatar mil-mb-30">
                                <img src={item.image} alt={item.image.alt} style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                            </div>
                            <h6 className="mil-upper mil-mb-10">{item.name}</h6>
                            <p className="mil-dark-soft">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TeamMember;

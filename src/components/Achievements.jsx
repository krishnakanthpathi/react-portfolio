import AchievementsData from "../data/AchievementsData";
import AchievementCard from "./AchievementCard";
import React from 'react';
import { useEffect, useState } from 'react';

const Achievements = (props) => {
    const theme = props.theme ? "text-light bg-dark" : "text-dark bg-light"
    const url = "https://portfolio-backend-bs6x.onrender.com/achievements";
    const [AchievementsData, setAchievements] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setAchievements(data);
        };
        getData();
    }, []);


    const cards = AchievementsData.map((achievement, index) => {
        return ( 
            <>
                <AchievementCard 
                    key={achievement._id}
                    theme={theme}
                    title={achievement.title}
                    description={achievement.description}
                    link={achievement.link}
                    image={achievement.image}
                 />
            </>
        )
    });

    return (
        <section id="achievements" className= "container my-5 ">
            <h2 className="text-center mb-4">Achievements</h2>
            <div className="row">
                {/* repeated row */}
                {cards}
            </div>
        </section>
    )
};

export default Achievements;
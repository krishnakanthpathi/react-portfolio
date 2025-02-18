import AchievementsData from "../data/AchievementsData";
import AchievementCard from "./AchievementCard";

const Achievements = (props) => {
    const theme = props.theme ? "text-light bg-dark" : "text-dark bg-light"
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
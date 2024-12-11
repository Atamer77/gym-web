import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Discover the best workout sessions to achieve your fitness goals, curated bY TOP trainers.”
        </p>
        <img src="/img7.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Our bootcamps are designed to help you build strength, endurance, and confidence.
        </p>
        <div className="bootcamps">
          <div>
            <h4>STRENGTH TRAINING FOR BEGINNERS.</h4>
            <p>
              learn the fundemintal of weightlifting with exper guidance and support
            </p>
          </div>
          <div>
            <h4>HIGH INTENSITY INTERVAL TRAINING</h4>
            <p>
              burn calories build stamina with this fast paced results driven workout
            </p>
          </div>
          <div>
            <h4>YOGA FOR FLEXABILITY AND RELAXATION</h4>
            <p>
            improve your flexibilty and relieve stress with yoga sessions
            </p>
          </div>
          <div>
            <h4>CARDIO BOOTCAMP CHALLENGE</h4>
            <p>
              push your endurance to the max with this intense cardio workout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
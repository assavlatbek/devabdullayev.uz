import React from "react";
import CountUp, { useCountUp } from "react-countup";
import styles from "./style.module.scss";

const Statistics = () => {
  const statisticsData = {
    Projects: 10,
    Companies: 3,
    "Satisfied Clients": 5,
  };
  useCountUp({
    ref: "counter",
    end: 123456789,
    enableScrollSpy: true,
    scrollSpyDelay: 3000,
  });

  return (
    <section className={styles.statistics}>
      <div className="container">
        <div className={styles.statistics__wrapper}>
          <h1>
            My <span>Statistics</span>{" "}
          </h1>
          <div className={styles.statistics__wrapper_stats}>
            {Object.keys(statisticsData).map((stat) => (
              <div key={stat} className={styles.statistics__wrapper_stats_stat}>
                <p>{stat}</p>{" "}
                <h1>
                  <CountUp end={statisticsData[stat]} enableScrollSpy />
                  <span className={styles.plusIcon}>+</span>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

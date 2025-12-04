import React from "react";
import styles from "./About.module.css";

function About({ features }) {
    return(
        <section id="about" className={styles.aboutSection}>
            <h2 className={styles.title}>About Us</h2>
            <p>We Build simple demos to learn different styling methods in React.</p>

            <ul className={styles.featureList}>
                {features && features.map((f, i) =>(
                    <li key={i} className="styles.item">{f}</li>
                ))}

            </ul>
            </section>
    );
}

export default About;
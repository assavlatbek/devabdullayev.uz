import Image from "next/image";
import styles from "./style.module.scss";
import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about">
      <section className={styles.about}>
        <div className="container">
          <div className={styles.about_row}>
            <div className={styles.about_row_side}>
              <div className={styles.about_image} data-scroll="" data-scroll-direction="horizontal" data-scroll-speed="0.2">
                <Image
                  src={"/images/ap.png"}
                  width={490}
                  height={500}
                  alt="abdulaziz programmer"
                />
              </div>
            </div>
            <div className={styles.about_row_side}>
              <div className={styles.about_text}>
                <br />
                <h1>
                  About <span>Me</span>
                </h1>
                <br />
                <p>
                  I`m a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </p>
                <p>
                  I began my journey as a web developer in 2015, and since then,
                  I`ve continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I`m building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much
                </p>
                <p>
                  When I`m not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

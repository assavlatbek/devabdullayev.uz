import Magnetic from "@/commons/Magnetic";
import styles from "./style.module.scss";
import InputMask from "react-input-mask";
import { FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contact_row}>
            <div className={styles.contact_row_side}>
              <form
                target="_blank"
                action="https://formspree.io/f/xzbnewqr"
                method="POST"
              >
                <div className={styles.input_field}>
                  <input type="text" name="firstname" required />
                  <label>First Name</label>
                </div>
                <div className={styles.input_field}>
                  <input type="text" name="lastname" required />
                  <label>Last Name</label>
                </div>
                <div className={styles.input_field}>
                  <InputMask
                    name="phonenumber"
                    className={styles.mask_input}
                    mask="+\9\98 (99) 999 99 99"
                    placeholder="Your Phone"
                    maskChar=""
                    type="text"
                  />
                  <label>Your Phone</label>
                </div>
                <div className={styles.input_field}>
                  <textarea name="message" required />
                  <label className={styles.textarea_label}>Message</label>
                </div>
                <div className={styles.contact__wrapper_text_socials}>
                  <Magnetic>
                    <button
                      type="submit"
                      className={styles.contact_submit_button}
                    >
                      <Magnetic>
                        <span>Send</span>
                      </Magnetic>
                    </button>
                  </Magnetic>
                  <center>
                    <Magnetic>
                      <button
                        type="button"
                        className={styles.contact__wrapper_text_socials_social}
                      >
                        <Magnetic>
                          <span>
                            <AiFillInstagram />
                          </span>
                        </Magnetic>
                      </button>
                    </Magnetic>
                    <Magnetic>
                      <button
                        type="button"
                        className={styles.contact__wrapper_text_socials_social}
                      >
                        <Magnetic>
                          <span>
                            <FaTelegram />
                          </span>
                        </Magnetic>
                      </button>
                    </Magnetic>
                    <Magnetic>
                      <button
                        type="button"
                        className={styles.contact__wrapper_text_socials_social}
                      >
                        <Magnetic>
                          <span>
                            <FaYoutube />
                          </span>
                        </Magnetic>
                      </button>
                    </Magnetic>
                    <Magnetic>
                      <button
                        type="button"
                        className={styles.contact__wrapper_text_socials_social}
                      >
                        <Magnetic>
                          <span>
                            <FaLinkedin />
                          </span>
                        </Magnetic>
                      </button>
                    </Magnetic>
                  </center>
                </div>
              </form>
            </div>
            <div className={styles.contact_row_side}>
              <div className={styles.contact_text}>
                <h1>Let`s talk for Something special</h1>
                <p>
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and memorable interactive
                  experiences.
                </p>
                <b>assavlatbek@gmail.com</b>
                <b>+998 90 447 75 15</b>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;

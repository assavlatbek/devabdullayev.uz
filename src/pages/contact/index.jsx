import "./contact.css";

const ContactsPage = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title-div">
          <h1 className="section-title" data-aos="flip-right">
            Contacts
          </h1>
        </div>
        <div class="base">
          <div class="contact">
            <div className="contact-header">
              <h1>Contact me</h1>
              <p>
                I'm 24/7 online and if you text me anything I reply fast so
                contact me now!
              </p>
            </div>
            <ul class="info">
              <li>
                <a href="tel:+998904477515">
                  <i class="fas fa-phone"></i> +998 90 447 75 15
                </a>
              </li>
              <li>
                <a href="mailto:savlabtk009@gmail.com">
                  <i class="far fa-envelope"></i> savlabtk009@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-map-pin"></i> Samarkhand, Uzbekistan
                </a>
              </li>
            </ul>
            <div class="social-div">
              <ul class="social">
                <a href="https://www.instagram.com/savlatbek_coder">
                  <li>
                    <i class="fab fa-instagram"></i>
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/savlatbek-abdullayev-875933252">
                  <li>
                    <i class="fab fa-linkedin"></i>
                  </li>
                </a>
                <a href="https://github.com/Savlatbek009">
                  <li>
                    <i class="fab fa-github"></i>
                  </li>
                </a>
                <a href="https://t.me/savlatbek_coder">
                  <li>
                    <i class="fab fa-telegram"></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div class="form-div">
            <form action="https://formspree.io/f/xrgnqzda" method="POST">
              <div class="inputWithIcon">
                <label for="name">Name</label>
                <br />
                <input type="text" id="name" name="name" />
                <i class="fas fa-user"></i>
              </div>
              <div class="inputWithIcon">
                <label for="mail">E-mail</label>
                <br />
                <input type="email" id="mail"  name="email" />
                <i class="far fa-envelope"></i>
              </div>
              <div>
                <label for="message">Message</label>
                <br />
                <textarea id="message" placeholder="Message"  name="message"></textarea>
              </div>
              <center>
                <button type="submit">Send</button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./portfolio.css";
import "react-tabs/style/react-tabs.css";

import turkish_kebab from "../../images/turkish-kebab.jpg";
import libertytravel from "../../images/libertytravel.jpg";
import as_qr from "../../images/as-qr.jpg";
import voice_to_txt from "../../images/voice-to-txt.jpg";
import color_picker from "../../images/color-picker.jpg";
import mini_crm from "../../images/mini-crm.jpg";
import phone_clone from "../../images/phone-clone.jpg";
import blog from "../../images/blog.jpg";
import create_your_portfolio from "../../images/create-your-portfolio.jpg";
import portfolio from "../../images/portfolio.jpg";
import e_commerce from "../../images/e-commerce.jpg";
import PortfolioCard from "../../components/portfolio-card";
import next_e_commerce from "../../images/next-e-commerce.jpg";

const PortfolioPage = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="section-title" data-aos="flip-right">
          Portfolios
        </h1>
        <Tabs data-aos="fade-left">
          <TabList>
            <Tab>All</Tab>
            <Tab>Html Css</Tab>
            <Tab>JavaScript</Tab>
            <Tab>ReactJS</Tab>
            <Tab>NextJS</Tab>
          </TabList>
          <TabPanel>
            <div className="portfolio-row">
              <PortfolioCard
                title={"Turkish Kebab"}
                tags={["Html", "Bootstrap"]}
                img={turkish_kebab}
                link={"https://as-ap-london.netlify.app"}
                descr={
                  "it's not real Project, I created it because it was my exam!"
                }
              />
              <PortfolioCard
                title={"Liberty Travel"}
                tags={["Html", "Css", "Bootstrap", "JavaScript"]}
                img={libertytravel}
                link={"https://libertytravel.uz"}
                descr={
                  "it's real Project, Tour company ordered it to me and I finished it successfully!"
                }
              />
              <PortfolioCard
                title={"Mini CRM"}
                tags={["Html", "Css", "JavaScript", "Axios", "Axios"]}
                img={mini_crm}
                link={"https://as-teachers.netlify.app"}
                descr={
                  "It's some big project and I made it for my exam, You can visit and see mini crm project!"
                }
              />
              <PortfolioCard
                title={"QR scan | generator"}
                tags={["Html", "Css", "JavaScript"]}
                img={as_qr}
                link={"https://as-qr.netlify.app"}
                descr={
                  "So fun project, You can scan any qr code! Enter any text or url It generates qr code!"
                }
              />
              <PortfolioCard
                title={"Phone clone"}
                tags={["Html", "Css", "JavaScript", "DOM & BOM"]}
                img={phone_clone}
                link={"https://as-phone.netlify.app"}
                descr={
                  "In starting it was just clock and I made away some apps of phone!"
                }
              />
              <PortfolioCard
                title={"Color Picker"}
                tags={["Html", "Css", "JavaScript"]}
                img={color_picker}
                link={"https://as-color-picker.netlify.app"}
                descr={
                  "Find your favourite color, Just select any color and see in bg screen and copy hex code or rgb code!"
                }
              />
              <PortfolioCard
                title={"Voice to text"}
                tags={["Html", "Css", "JavaScript", "DOM & BOM"]}
                img={voice_to_txt}
                link={"https://as-voice-to-text.netlify.app"}
                descr={
                  "Just press start button and speak see result in textarea! it's so fun!?"
                }
              />
              <PortfolioCard
                title={"Create Your Portfolio"}
                tags={[
                  "ReactJS",
                  "Css",
                  "Redux toolkit & RTK",
                  "Ant Design",
                  "Axios",
                ]}
                link={"https://create-your-portfolio.vercel.app"}
                img={create_your_portfolio}
                descr={
                  "Register and create your account, when you registered your role = user if admin accept you your role = client and you can create your portfolio"
                }
              />
              <PortfolioCard
                title={"E-commerce"}
                tags={["ReactJS", "JavaScript", "Css"]}
                img={e_commerce}
                link={"https://as-ecommerce.netlify.app"}
                descr={
                  "This is my portfolio website and you're in this site :) thanks for view my portfolio website!"
                }
              />
              <PortfolioCard
                title={"Blog"}
                tags={["ReactJS", "JavaScript", "Css", "Axios"]}
                img={blog}
                link={"https://blog-gilt-five-52.vercel.app"}
                descr={
                  "This website like news site and You can see other's added posts and You can add posts!"
                }
              />
              <PortfolioCard
                title={"Portfolio"}
                tags={["ReactJS", "JavaScript", "Css", "AOS", "Gsap"]}
                img={portfolio}
                link={"https://www.devabdullayev.uz"}
                descr={
                  "This is my portfolio website and you're in this site :) thanks for view my portfolio website!"
                }
              />
              <PortfolioCard
                title={"E-commerce"}
                tags={["NextJS", "TypeScript", "Css", "Axios"]}
                img={next_e_commerce}
                link={"https://next-e-commerce-01.vercel.app"}
                descr={
                  "This is my exam and I didn't finish it now only able user page but there's must be admin page too!"
                }
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-row">
              <PortfolioCard
                title={"Turkish Kebab"}
                tags={["Html", "Bootstrap"]}
                img={turkish_kebab}
                link={"https://as-ap-london.netlify.app"}
                descr={
                  "it's not real Project, I created it because it was my exam!"
                }
              />
              <PortfolioCard
                title={"Liberty Travel"}
                tags={["Html", "Css", "Bootstrap", "JavaScript"]}
                img={libertytravel}
                link={"https://libertytravel.uz"}
                descr={
                  "it's real Project, Tour company ordered it to me and I finished it successfully!"
                }
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-row">
              <PortfolioCard
                title={"Liberty Travel"}
                tags={["Html", "Css", "Bootstrap", "JavaScript"]}
                img={libertytravel}
                link={"https://libertytravel.uz"}
                descr={
                  "it's real Project, Tour company ordered it to me and I finished it successfully!"
                }
              />
              <PortfolioCard
                title={"Mini CRM"}
                tags={["Html", "Css", "JavaScript", "Axios", "Axios"]}
                img={mini_crm}
                link={"https://as-teachers.netlify.app"}
                descr={
                  "It's some big project and I made it for my exam, You can visit and see mini crm project!"
                }
              />
              <PortfolioCard
                title={"QR scan | generator"}
                tags={["Html", "Css", "JavaScript"]}
                img={as_qr}
                link={"https://as-qr.netlify.app"}
                descr={
                  "So fun project, You can scan any qr code! Enter any text or url It generates qr code!"
                }
              />
              <PortfolioCard
                title={"Phone clone"}
                tags={["Html", "Css", "JavaScript", "DOM & BOM"]}
                img={phone_clone}
                link={"https://as-phone.netlify.app"}
                descr={
                  "In starting it was just clock and I made away some apps of phone!"
                }
              />
              <PortfolioCard
                title={"Color Picker"}
                tags={["Html", "Css", "JavaScript"]}
                img={color_picker}
                link={"https://as-color-picker.netlify.app"}
                descr={
                  "Find your favourite color, Just select any color and see in bg screen and copy hex code or rgb code!"
                }
              />
              <PortfolioCard
                title={"Voice to text"}
                tags={["Html", "Css", "JavaScript", "DOM & BOM"]}
                img={voice_to_txt}
                link={"https://as-voice-to-text.netlify.app"}
                descr={
                  "Just press start button and speak see result in textarea! it's so fun!?"
                }
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-row">
              <PortfolioCard
                title={"Create Your Portfolio"}
                tags={[
                  "ReactJS",
                  "Css",
                  "Redux toolkit & RTK",
                  "Ant Design",
                  "Axios",
                ]}
                link={"https://create-your-portfolio.vercel.app"}
                img={create_your_portfolio}
                descr={
                  "Register and create your account, when you registered your role = user if admin accept you your role = client and you can create your portfolio"
                }
              />
              <PortfolioCard
                title={"E-commerce"}
                tags={["ReactJS", "JavaScript", "Css"]}
                img={e_commerce}
                link={"https://as-ecommerce.netlify.app"}
                descr={
                  "This is my portfolio website and you're in this site :) thanks for view my portfolio website!"
                }
              />
              <PortfolioCard
                title={"Blog"}
                tags={["ReactJS", "JavaScript", "Css", "Axios"]}
                img={blog}
                link={"https://blog-gilt-five-52.vercel.app"}
                descr={
                  "This website like news site and You can see other's added posts and You can add posts!"
                }
              />
              <PortfolioCard
                title={"Portfolio"}
                tags={["ReactJS", "JavaScript", "Css", "AOS", "Gsap"]}
                img={portfolio}
                link={"https://www.devabdullayev.uz"}
                descr={
                  "This is my portfolio website and you're in this site :) thanks for view my portfolio website!"
                }
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-row">
              <PortfolioCard
                title={"E-commerce"}
                tags={["NextJS", "TypeScript", "Css", "Axios"]}
                img={next_e_commerce}
                link={"https://next-e-commerce-01.vercel.app"}
                descr={
                  "This is my exam and I didn't finish it now only able user page but there's must be admin page too!"
                }
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <br />
      <br />
    </section>
  );
};

export default PortfolioPage;

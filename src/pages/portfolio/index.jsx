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

const PortfolioPage = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="section-title" data-aos="flip-right">
          Portfolios
        </h1>
        <Tabs>
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
                descr={
                  "it's not real Project, I created it because it was my exam!"
                }
              />
              <PortfolioCard
                title={"Liberty Travel"}
                tags={["Html", "Css", "Bootstrap", "JavaScript"]}
                img={libertytravel}
                descr={
                  "it's real Project, Tour company ordered it to me and I finished it successfully!"
                }
              />
              <PortfolioCard
                title={"Mini CRM"}
                tags={["Html", "Css", "JavaScript", "Axios"]}
                img={mini_crm}
                descr={
                  "It's some big project and I made it for my exam, You can visit and see mini crm project!"
                }
              />
              <PortfolioCard
                title={"QR scan | generator"}
                tags={["Html", "Css", "JavaScript"]}
                img={as_qr}
                descr={
                  "So fun project, You can scan any qr code! Enter any text or url It generates qr code!"
                }
              />
              <PortfolioCard
                title={"Phone clone"}
                tags={["Html", "Css", "JavaScript", "DOM & BOm"]}
                img={phone_clone}
                descr={
                  "In starting it was just clock and I made away some apps of phone!"
                }
              />
              <PortfolioCard
                title={"Color Picker"}
                tags={["Html", "Css", "JavaScript"]}
                img={color_picker}
                descr={
                  "Find your favourite color, Just select any color and see in bg screen and copy hex code or rgb code!"
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
                descr={
                  "it's not real Project, I created it because it was my exam!"
                }
              />
              <PortfolioCard
                title={"Liberty Travel"}
                tags={["Html", "Css", "Bootstrap", "JavaScript"]}
                img={libertytravel}
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
                descr={
                  "it's real Project, Tour company ordered it to me and I finished it successfully!"
                }
              />
              <PortfolioCard
                title={"Mini CRM"}
                tags={["Html", "Css", "JavaScript", "Axios"]}
                img={mini_crm}
                descr={
                  "It's some big project and I made it for my exam, You can visit and see mini crm project!"
                }
              />
              <PortfolioCard
                title={"QR scan | generator"}
                tags={["Html", "Css", "JavaScript"]}
                img={as_qr}
                descr={
                  "So fun project, You can scan any qr code! Enter any text or url It generates qr code!"
                }
              />
              <PortfolioCard
                title={"Phone clone"}
                tags={["Html", "Css", "JavaScript", "DOM & BOm"]}
                img={phone_clone}
                descr={
                  "In starting it was just clock and I made away some apps of phone!"
                }
              />
              <PortfolioCard
                title={"Color Picker"}
                tags={["Html", "Css", "JavaScript"]}
                img={color_picker}
                descr={
                  "Find your favourite color, Just select any color and see in bg screen and copy hex code or rgb code!"
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

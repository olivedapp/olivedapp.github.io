import React from "react";
import ReactPlayer from "react-player";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import { translate } from "@docusaurus/Translate"; // i18n component
import useBaseUrl from "@docusaurus/useBaseUrl";

var Carousel = require("react-responsive-carousel").Carousel;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <div className="col">
            <Carousel
              showArrows={false}
              width={"100%"}
              showThumbs={false}
              stopOnHover={false}
              showStatus={false}
              autoPlay={true}
              showIndicators={false}
              infiniteLoop={true}
              interval={4000}
              transitionTime={1000}
              centerMode={true}
            >
              <div className="slide-item-box">
                <img
                  className="slide-item-light"
                  src={useBaseUrl("/img/showcase/tl1.png")}
                />
                <img
                  className="slide-item-dark"
                  src={useBaseUrl("/img/showcase/tb1.png")}
                />
              </div>
              <div className="slide-item-box">
                <img
                  className="slide-item-light"
                  src={useBaseUrl("/img/showcase/tl2.png")}
                />
                <img
                  className="slide-item-dark"
                  src={useBaseUrl("/img/showcase/tb2.png")}
                />
              </div>
              <div className="slide-item-box">
                <img
                  className="slide-item-light"
                  src={useBaseUrl("/img/showcase/tl3.png")}
                />
                <img
                  className="slide-item-dark"
                  src={useBaseUrl("/img/showcase/tb3.png")}
                />
              </div>
              <div className="slide-item-box">
                <img
                  className="slide-item-light"
                  src={useBaseUrl("/img/showcase/tl4.png")}
                />
                <img
                  className="slide-item-dark"
                  src={useBaseUrl("/img/showcase/tb4.png")}
                />
              </div>
              <div className="slide-item-box">
                <img
                  className="slide-item-light"
                  src={useBaseUrl("/img/showcase/tl1.png")}
                />
                <img
                  className="slide-item-dark"
                  src={useBaseUrl("/img/showcase/tb1.png")}
                />
              </div>
            </Carousel>
          </div>
          <div className="col">
            <p className="hero__subtitle">
              {translate({ id: "homepage.Tagline" })}
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--outline button--lg"
                to="https://pay.olived.app"
              >
                {translate({ id: "homepage.SubscribeButtonText" })}
              </Link>
              <Link
                className="button button--primary button--lg"
                to="https://app.luxcgo.com"
              >
                {translate({ id: "homepage.DownloadButtonText" })}
              </Link>
            </div>
          </div>
        </div>
      </header>
      <blockquote>
        <p>
          {translate({ id: "homepage.Intro1" })}
          <br></br>
          {translate({ id: "homepage.Intro2" })}
        </p>
      </blockquote>
      <div className={styles.video}>
        <ReactPlayer
          url={useBaseUrl("/video/intro.mp4")}
          controls={true}
          light={false}
          volume={0.15}
        />
      </div>
      <br></br>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Olived · ${tagline}`}
      description={translate({ id: "homepage.Tagline" })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

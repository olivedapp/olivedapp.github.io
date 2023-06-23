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
          终于来了！经过漫长的开发和测试阶段，OlivedPro
          版本终于正式发布了。OlivedPro
          是一款现代化的全平台直播录像机，它会时刻监控主播的直播状态，并在您喜欢的主播上线时自动开启录制。帮助您捕捉每一个直播内容，就像普通的电视录像机一样。
          <br></br>该软件可以以最佳视频质量进行录制，从 720p 到
          4K！在您的网络带宽允许的情况下，它可以同时录制任意场直播。现在，OlivedPro
          已支持录制 Youtube、Twitch、Tiktok、抖音、斗鱼、虎牙、Nimo 、Bilibili
          等平台！赶快下载使用吧！
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
      title={`The ${siteConfig.title} Project`}
      description={translate({ id: "homepage.Tagline" })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

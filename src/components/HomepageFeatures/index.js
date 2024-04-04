'use client'
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import MapComponent from './MapComponent';
const FeatureList = [
  {
    title: 'Gnars DAO',
    Svg: require('@site/static/img/thatsgnarly.svg').default,
    description: (
      <>
        The DAO that governs the Gnars, you will find our auctions, governance ...
      </>
    ),
    link: 'https://nouns.build/dao/base/0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17/5298', // Replace with your desired URL
  },
  {
    title: 'Gnars.wtf',
    Svg: require('@site/static/img/auction-chart.svg').default,
    description: (
      <>
        Our main website on ETH
      </>
    ),
    link: 'https://gnars.wtf', // Replace with your desired URL
  },
  // {
  //   title: 'ThatsGnar.ly',
  //   Svg: require('@site/static/img/thatsgnarly.svg').default,
  //   description: (
  //     <>
  //       Our 3.0 Social Media
  //     </>
  //   ),
  //   link: 'https://thatsgnar.ly', // Replace with your desired URL
  // },
  {
    title: 'Stoken.wtf',
    Svg: require('@site/static/img/unborn.svg').default,
    description: (
      <>
        Preview the next Gnar to auction before clicking Settle!      </>
    ),
    link: 'https://stoken.wtf', // Replace with your desired URL
  },
  {
    title: 'Gnarly News',
    Svg: require('@site/static/img/gnarly-news.svg').default,
    description: (
      <>
        Weekly News about Gnars
      </>
    ),
    link: 'https://gnarly.news/subscribe', // Replace with your desired URL
  },
  {
    title: 'Nounstacle',
    Svg: require('@site/static/img/oclin.svg').default,
    description: (
      <>
        Open 3D project of The Nounstacle
      </>
    ),
    link: 'https://drive.google.com/drive/folders/1fbC8TjzBXGSze6Wgn61ex-SiprJlPKnk', // Replace with your desired URL
  },
  {
    title: 'Skatehive App',
    Svg: require('@site/static/img/skatehive.svg').default,
    description: (
      <>
        The portal of web3 skateboarding
      </>
    ),
    link: 'https://skatehive.app',
  },
  {
    title: 'Quest 4 Stoken',
    Svg: require('@site/static/img/qfs.svg').default,
    description: (
      <>
        Play to earn video game on Hive Blockchain, brought to you by SKATEHIVE and Gnars DAO

      </>
    ),
    link: 'https://skatehive.app/QFS',
  },
  {
    title: 'GnarSauce',
    Svg: require('@site/static/img/gnarsauce.svg').default,
    description: (
      <>
        Spicy and Gnarly
      </>
    ),
    link: 'https://thatsgnar.ly/thatsgnarly/shop/gnarssauce',
  },
];



function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>


      <section className={styles.features}>

        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>

      </section>
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
          // Your component that includes client-specific code
          <MapComponent zIndex="-1" />
        )}
      </BrowserOnly>
      <center>
        <br />
        <h1>Nounstacles around the World</h1>
      </center >
    </>
  );
}

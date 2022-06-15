import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{'Boas vindas ao UFRPE Devs'}</h1>
        <p className="hero__subtitle">
          {
            'Nós somos uma comunidade de desenvolvimento open source da Universidade Federal Rural de Pernambuco. Juntos buscamos incentivar e praticar diariamente o compartilhamento de conhecimento e a socialização entre todos os cursos de tecnologia da UFRPE'
          }
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/community">
            {'Comunidade'}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Welcome to UFRPE Devs"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

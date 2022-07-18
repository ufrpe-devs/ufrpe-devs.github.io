import React from 'react';
// import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import DiscordLogo from '@site/static/img/discord-logo.svg'

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Discord"
      description="Participe de nossa comunidade no Discord"
    >
      <main>
        <div className={styles.content}>
        <DiscordLogo />
        <h1 className={styles.content__title}>Junte-se ao nosso Discord</h1>
        <Link href='https://discordapp.com/invite/xeEaKKG' target="_blank" className="button button--secondary button--lg">
            {'Continuar'}
          </Link>
        </div>
      </main>
    </Layout>
  );
}

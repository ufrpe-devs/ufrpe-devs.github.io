import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Uma Comunidade',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        {'Seja você veterano ou calouro, participar de uma comunidade é uma oportunidade incrível de conhecer novas pessoas e projetos além de ser um espaço para compartilhar o conhecimento'}
      </>
    ),
  },
  {
    title: 'UFRPE',
    Svg: require('@site/static/img/ufrpe.svg').default,
    description: (
      <>
        {'Uma comunidade criada por estudantes da Universidade Federal Rural de Pernambuco, também conhecida como Ruralinda'}
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open_source.svg').default,
    description: (
      <>
        {'O desenvolvimento de software nos últimos tempos só se tornou o que é graças à comunidades como a nossa, onde pessoas diferentes se unem para resolver os mais variados problemas'}
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

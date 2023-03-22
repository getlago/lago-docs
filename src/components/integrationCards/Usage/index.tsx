/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const WebDevCards = [
  {
    name: 'Segment.com',
    image: 'https://logo.clearbit.com/segment.com',
    url: {
      page: '../../docs/integrations/usage/segment',
    },
    description: (
      <Translate id="special.segment.description">
        Segment is used to track and ingest events that can be sent to Lago as usage.
      </Translate>
    ),
  },
    {
    name: 'Hightouch',
    image: 'https://logo.clearbit.com/hightouch.com',
    url: {
      page: '../../docs/integrations/usage/hightouch',
    },
    description: (
      <Translate id="special.hightouch.description">
        Reverse-ETL helping you sync data from any sources (database, warehouses, spreadsheet...) to Lago.
      </Translate>
    ),
  }
];

interface Props {
  name: string;
  image: string;
  url: {
    page?: string;
    codepen?: string;
  };
  description: JSX.Element;
}

function WebDevCard({ name, image, url, description }: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')} style={{border: "1px solid #c3c9d5"}}>
        <div className={clsx('card__image')}>
            <img src={image} style={{width: "30px", marginLeft: "15px", marginTop: "15px", borderRadius: "6px"}}></img>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="special.tryItButton">View documentation</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UsageRows(): JSX.Element {
  return (
    <div className="row">
      {WebDevCards.map((special) => (
        <WebDevCard key={special.name} {...special} />
      ))}
    </div>
  );
}

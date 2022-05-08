import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import  { Redirect } from 'react-router-dom'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Redirect to='/docs/intro'  />
  );
}

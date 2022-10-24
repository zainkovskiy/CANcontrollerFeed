import React from "react";

import { Layout } from "components/Layout";
import { Address } from "components/Address";
import { Price } from "components/Price";
import { Platforms } from "components/Platforms";
import { Fake } from "components/Fake";

import './App.scss';

export const App = () => {
  return (
    <>
      <Layout>
        <Address/>
        <Price/>
        <Fake/>
        <Platforms/>
      </Layout>
    </>
  )
}
import React, { useContext } from "react";
import { Context } from 'components/Layout';

import { PlatformItem } from "components/PlatformItem";

import './Platforms.scss';

export const Platforms = () => {
  const { platforms } = useContext(Context);

  return (
    <div>
      {
        platforms.map((item, idx) =>
          <PlatformItem settings={item} key={item.UID || idx}/>
        )
      }
    </div>
  )
}
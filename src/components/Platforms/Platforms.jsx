import React, { useContext } from "react";
import { Context } from 'components/Layout';

import { PlatformItem } from "components/PlatformItem";

import './Platforms.scss';

export const Platforms = () => {
  const { platforms, fake } = useContext(Context);

  const isActive = {
    pointerEvents: 'none',
    opacity: '0.5'
  }

  return (
    <div style={fake?.isActive ? isActive : {}}>
      {
        platforms.map((item, idx) =>
          <PlatformItem settings={item} key={item.UID || idx}/>
        )
      }
    </div>
  )
}
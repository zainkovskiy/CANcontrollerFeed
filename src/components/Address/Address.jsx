import React, { useContext } from "react";
import { Context } from 'components/Layout';

import './Address.scss';

export function Address() {
  const { address } = useContext(Context);

  return (
  <div className='address'>
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
      <span className="address__top">
        {address.reqCity ? address.reqCity : ''} {address.reqCity && '\u00A0'}
        {address.reqStreet ? `ул.${address.reqStreet} \u00A0` : ''}
        {address.reqHouseNumber ? `д.${address.reqHouseNumber} \u00A0` : ''}
      </span>
      <span className="address_bottom">
        {address.reqTypeofRealty === 'Квартира' || address.reqTypeofRealty === 'Комната' ?
          address.reqRoomCount ? `${address.reqRoomCount}к. \u00A0` : '' : ''}
        {address.reqTypeofRealty ? address.reqTypeofRealty : ''} {address.reqTypeofRealty && '\u00A0'}
        {address.reqArea ? `${address.reqArea} район` : ''}
      </span>
    </div>
  </div>)
}
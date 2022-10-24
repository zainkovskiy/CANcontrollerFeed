import React, { useContext } from "react";
import { Context } from 'components/Layout';
import './Price.scss';

export const Price = () => {
  const { price } = useContext(Context);
  return (
    <div className="price">
      <span className="text">
        Потрачено на продвижение: {price.currentPrice}&#8381;
      </span>
      <span className="text">
        Баланс: {price.balance}&#8381;
      </span>
    </div>
  )
}
import React from "react";
import './Advantages.css';
import {Advantage, AdvantageProps} from "../advantage/Advantage";


type AdvantagesProps = {
  advantages?: Array<AdvantageProps>
}

const Advantages = (
  {
    advantages = []
  }: AdvantagesProps
) => {
  return (
    <section className="advantages promo__advantages">
      <h1 className="advantages__title">Рыба на любой вкус</h1>
      <p className="advantages__tagline">Мы продаем рыбов, а не только показываем</p>
      <div className="advantages__list">
        {advantages.map((advantage, index) => <Advantage {...advantage} key={index}/>)}
      </div>
    </section>
  );
}


export default Advantages;

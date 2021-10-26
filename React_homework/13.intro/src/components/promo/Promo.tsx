import React from "react";
import './Promo.css'
import Advantages from "../advantages/Advantages";
import Populars from "../populars/Populars";
import {advantagesMock} from "../../mocks/advantages";
import withMixin from "../../hocs/with-mixin";
import {productsMock} from "../../mocks/products";


const WithMixinAdvantages = withMixin(Advantages, [`promo__advantages`]);

const Promo = () => {
  return (
    <main className="promo">
      <WithMixinAdvantages advantages={advantagesMock}/>
      <Populars products={productsMock}/>
    </main>
  );
}


export default Promo;

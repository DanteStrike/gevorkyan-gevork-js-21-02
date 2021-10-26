import React from "react";
import './Populars.css'
import {Product, ProductProps} from "../product/Product";
import withMixin from "../../hocs/with-mixin";

const WithMixinProduct = withMixin(Product, [`populars__product`]);

type PopularsProps = {
  products?: Array<{
    id: number,
    name: string,
    href: string,
    img: {
      src: string
    }
  }>
  onProductBuy?: (id: number) => void
}

const Populars = (
  {
    products = [],
    onProductBuy = () => {}
  }: PopularsProps
) => {
  return (
    <section className="populars">
      <h2 className="populars__title">Популярные</h2>
      <div className="populars__products">
        {products.map((product) => <WithMixinProduct {...product} onBuy={(id) => onProductBuy(id)}/>)}
      </div>
    </section>
  );
}


export default Populars;

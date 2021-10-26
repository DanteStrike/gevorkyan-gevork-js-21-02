import React from "react";
import './Product.css';


type ProductProps = {
  id: number
  name: string,
  href: string,
  img?: {
    src?: string,
  }
  onBuy?: (id: number) => void
}

const Product = (
  {
    id,
    name = ``,
    href = `#`,
    img = {
      src: `https://via.placeholder.com/75`
    },
    onBuy = () => {}
  }: ProductProps
) => {
  return (
    <article className="product">
      <a className="product__img-link" href={href}>
        <img className="product__img" src={img.src} width="75" height="75" alt={name}/>
      </a>
      <div className="product__wrap">
        <h3 className="product__title">
          <a className="product__link" href={href}>{name}</a>
        </h3>
        <button
          className="product__buy"
          type="button"
          onClick={() => {onBuy(id)}}>Купить</button>
      </div>
    </article>
  );
}


export default Product;

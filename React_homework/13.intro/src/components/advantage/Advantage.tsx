import React from "react";
import './Advantage.css';


export type AdvantageProps = {
  title: string,
  href: string,
  tagline: string
};

const Advantage = (
  {
    title,
    href,
    tagline
  }: AdvantageProps
) => {
  return (
    <article className="advantage">
      <h2 className="advantage__title">
        <a className="advantage__link" href={href}>{title}</a>
      </h2>
      <p className="advantage__tagline">{tagline}</p>
    </article>
  );
}


export {Advantage};

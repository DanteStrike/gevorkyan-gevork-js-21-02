import React from "react";
import "./Button.css";

export const enum ButtonVariant {
  DEFAULT = `default`,
  RED = `red`,
  GREEN = `green`,
  BLACK = `black`
}

export const enum ButtonType {
  DEFAULT = `button`,
  BUTTON = `button`,
  SUBMIT = `submit`,
  RESET = `reset`
}

interface IButtonProps {
  children?: string
  variant?: ButtonVariant,
  type?: ButtonType,
  mixins?: string[]
  onClick?: () => void
}

const Button = (
  {
    variant = ButtonVariant.DEFAULT,
    children,
    type = ButtonType.DEFAULT,
    mixins = [],
    onClick = () => {}
  }: IButtonProps
) => {
  const handleClick = () => onClick();

  const componentClass = `button`;
  const mixinsClasses = ` ` + mixins.join(` `);

  let colorMod = ``;
  switch (variant) {
    case ButtonVariant.RED:
      colorMod += ` ${componentClass}--${ButtonVariant.RED}`;
      break;

    case ButtonVariant.GREEN:
      colorMod += ` ${componentClass}--${ButtonVariant.GREEN}`;
      break;

    case ButtonVariant.BLACK:
      colorMod += ` ${componentClass}--${ButtonVariant.BLACK}`;
      break;

    default:
      break;
  }
  const className = componentClass + colorMod + mixinsClasses;

  return (
    <button className={className} type={type} onClick={handleClick}>{children}</button>
  )
}

export default Button;

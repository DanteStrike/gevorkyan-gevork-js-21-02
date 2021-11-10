import React from 'react';
import {Link, LinkProps} from 'react-router-dom';
import './CustomLink.css';

interface ICustomLink extends LinkProps {
  // eslint-disable-next-line react/require-default-props
  text?: string | null;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

function CustomLink({text = null, children = null, ...linkProps}: ICustomLink) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link className={`custom-link ${text !== null ? `custom-link--type_button` : ``}`} {...linkProps}>
      {text !== null ? <span>{text}</span> : children}
    </Link>
  );
}

export default CustomLink;

import React from 'react';
import './CustomLink.scss';
import {Link, LinkProps} from 'react-router-dom';

interface ICustomLink extends LinkProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

function CustomLink({children = ``, className = ``, ...linkProps}: ICustomLink) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link className={`custom-link ${className}`.trim()} {...linkProps}>
      {children}
    </Link>
  );
}

export default React.memo(CustomLink);

import React from 'react';
import './CustomLink.scss';

// eslint-disable-next-line react/require-default-props
function CustomLink({children = ``}: {children?: React.ReactNode}) {
  return (
    <a className="link" href="#e">
      {children}
    </a>
  );
}

export default React.memo(CustomLink);

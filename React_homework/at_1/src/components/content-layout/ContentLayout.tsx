import React from 'react';
import './ContentLayout.scss';

export enum ContentLayoutType {
  FULL = `full`,
  CONTENT = `content`,
}

interface ContentLayoutProps {
  type: ContentLayoutType;
  title: string;
  hideTitle?: boolean;
  children?: React.ReactNode;
}

function ContentLayout({type, hideTitle, title, children}: ContentLayoutProps) {
  return (
    <main className={`content-layout content-layout--${type}`}>
      <h1 className={`content-layout__title ${hideTitle ? `content-layout__title--hide` : ``}`.trim()}>{title}</h1>
      {children}
    </main>
  );
}

ContentLayout.defaultProps = {
  hideTitle: false,
  children: ``,
};

export default React.memo(ContentLayout);

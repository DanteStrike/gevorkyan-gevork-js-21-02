import React from 'react';

const getHOCDisplayName = <T>(WrappedComponent: React.ComponentType<T>, {name}: {name: string}): string =>
  `${name}(${WrappedComponent.displayName || WrappedComponent.name || `Component`})`;

export default getHOCDisplayName;

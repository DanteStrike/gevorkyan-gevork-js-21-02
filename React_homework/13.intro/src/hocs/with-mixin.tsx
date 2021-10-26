import React from "react";


const withMixin = <P extends object>(WrappedComponent: React.ComponentType<P>, mixins: Array<string>): React.ComponentType<P> => {
  return (props: any) => {
    return (
      <div className={mixins.join(` `)}>
        <WrappedComponent {...props}/>
      </div>
    )
  };
}


export default withMixin;

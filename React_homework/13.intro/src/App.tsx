import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import withMixin from "./hocs/with-mixin";
import Promo from "./components/promo/Promo";
import Sidebar from "./components/sidebar/Sidebar";


const WithMixinHeader = withMixin(Header, [`app__header`]);
const WithMixinSidebar = withMixin(Sidebar, [`app__sidebar`]);
const WithMixinPromo = withMixin(Promo, [`app__promo`]);
const WithMixinFooter = withMixin(Footer, [`app__footer`]);

const App = () => {
  return (
    <div className="app">
      <WithMixinHeader/>
      <WithMixinSidebar/>
      <WithMixinPromo/>
      <WithMixinFooter/>
    </div>
  );
}


export default App;

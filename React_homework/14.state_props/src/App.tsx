import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ToDo from "./components/todo/ToDo";
import toDoListMock from "./mocks/todo-list";
import {FilterType, SortType} from "./types";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <ToDo
        initialFilter={FilterType.DEFAULT}
        initialSort={SortType.DEFAULT}
        value={toDoListMock}
      />
      <Footer/>
    </div>
  );
}



export default App;

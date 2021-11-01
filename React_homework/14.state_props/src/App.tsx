import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ToDo from "./components/todo/ToDo";
import {FilterType, IStorageData, IToDoState, IToDoTask, IToDoTaskData, SortType} from "./types";

interface IAppProps {
  storageKey: string
}

const App = (
  {
    storageKey
  }: IAppProps
) => {
  let initialData: IStorageData = {
    filter: FilterType.DEFAULT,
    sort: SortType.DEFAULT,
    tasks: []
  }

  if (localStorage.getItem(storageKey) !== null) {
    initialData = JSON.parse(localStorage.getItem(storageKey)!);
  }

  const handleDataChange = (data: IToDoState) => {
    const normalizedData: IStorageData = {
      filter: data.filter,
      sort: data.sort,
      tasks: data.tasks.map((task: IToDoTask): IToDoTaskData =>
        Object.assign({}, task, {tags: Array.from(task.tags)}))
    };
    localStorage.setItem(storageKey, JSON.stringify(normalizedData));
  }

  return (
    <div className="app">
      <Header/>
      <ToDo
        initialFilter={initialData.filter}
        initialSort={initialData.sort}
        value={initialData.tasks
          .map((task: IToDoTaskData): IToDoTask =>
            Object.assign({}, task, {tags: new Set(task.tags)}))}
        onChange={handleDataChange}
      />
      <Footer/>
    </div>
  );
}

export default App;

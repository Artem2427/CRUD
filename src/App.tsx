import React, { Component } from 'react';
import classNames from 'classnames';

import AppInfo from './Components/app-info';
import SearchPanel from './Components/search-panel';
import AppFilter from './Components/app-filter';
import EmployeesList from './Components/employees-list';
import EmployeesAddForm from './Components/employees-add-form';

import './App.css';
interface stateProps {
  data: DataProps[];
  maxId: number;
  tern: string;
  filter: string;
}

class App extends Component<{}, stateProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
        { name: 'Alex D.', salary: 1000, increase: false, rise: true, id: 2 },
        { name: 'Carl W.', salary: 300, increase: false, rise: false, id: 3 },
      ],
      tern: '',
      filter: 'all',
      maxId: 4,
    };
  }

  onDelete = (id: number): void => {
    // 1 вариант
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));

    // 2 вариант
    // const copyState = { ...this.state };
    // copyState.data.splice(index, 1);

    // this.setState(copyState);
  };

  handleAddWorker = (worker: DataProps, maxId: number): void => {
    const copyArr = { ...this.state };

    copyArr.data.push(worker);
    copyArr.maxId = maxId;

    this.setState(copyArr);
  };

  onToggleProp = (id: number, prop: any) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          switch (prop) {
            case 'rise':
              return { ...item, rise: !item.rise };
            case 'increase':
              return { ...item, increase: !item.increase };
          }
        }
        return item;
      }),
    }));
  };

  searchEmp = (items: DataProps[], tern: string) => {
    if (tern.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(tern) > -1;
    });
  };

  onUpdateSearch = (tern: string) => {
    this.setState({ tern: tern });
  };

  filterPost = (items: DataProps[], filter: string) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);

      default:
        return items;
    }
  };

  onFilterSelect = (filter: string) => {
    this.setState({ filter: filter });
  };

  render() {
    const { data, maxId, tern, filter } = this.state;

    const emploees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, tern), filter);

    return (
      <div className={classNames('App')}>
        <AppInfo countWorker={emploees} countWorkerWithRise={increased} />
        <div className="search__panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.onDelete}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm
          handleAddWorker={this.handleAddWorker}
          maxId={maxId}
        />
      </div>
    );
  }
}

export default App;

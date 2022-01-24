import classNames from 'classnames';
import React, { Component } from 'react';

import './app-filter.css';

interface AppFilterProps {
  filter: string;
  onFilterSelect: (filter: string) => void;
}

interface stateProps {
  label: string;
  name: string;
}

interface State {
  btns: stateProps[];
}

class AppFilter extends Component<AppFilterProps, State> {
  constructor(props: AppFilterProps) {
    super(props);
    this.state = {
      btns: [
        { label: 'Все сотрудники', name: 'all' },
        {
          label: 'На повышение',
          name: 'rise',
        },
        {
          label: 'З/П больше 1000$',
          name: 'moreThen1000',
        },
      ],
    };
  }

  handleChangeActiveButton = (
    e: React.MouseEvent<HTMLButtonElement>,
    i: number
  ) => {};

  render() {
    const { btns } = this.state;

    return (
      <div className={classNames('btn-group')}>
        {btns.map((item, i) => {
          const active = item.name === this.props.filter;
          return (
            <button
              type="button"
              key={i}
              onClick={() => this.props.onFilterSelect(item.name)}
              className={classNames(
                'btn',
                active ? 'btn-light' : 'btn-outline-light'
              )}
            >
              {item.label}
            </button>
          );
        })}
        {/* <button type="button" className="btn btn-light">
          Все сотрудники
        </button>
        <button type="button" className="btn btn-outline-light">
          На повышение
        </button>
        <button type="button" className="btn btn-outline-light">
          З/П больше 1000$
        </button> */}
      </div>
    );
  }
}

export default AppFilter;

import classNames from 'classnames';
import React, { Component } from 'react';

import './search-panel.css';
// import useStyles from './style';

interface SearchPanelProps {
  onUpdateSearch: (tern: string) => void;
}

interface StateProps {
  tern: string;
}

class SearchPanel extends Component<SearchPanelProps, StateProps> {
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = {
      tern: '',
    };
  }

  handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ tern: e.target.value });

    this.props.onUpdateSearch(e.target.value.toLowerCase());
  };

  render() {
    return (
      <div className="search-block">
        <input
          placeholder="Найти сотрудника"
          type="text"
          value={this.state.tern}
          onChange={this.handleChangeSearch}
          className={classNames('form-control', 'search-input')}
        />
      </div>
    );
  }
}

export default SearchPanel;

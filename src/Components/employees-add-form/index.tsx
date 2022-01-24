import classNames from 'classnames';
import React, { Component } from 'react';

import './employees-add-form.css';

interface EmployeesAddFormProps {
  handleAddWorker: (worker: DataProps, maxId: number) => void;
  maxId: number;
}

interface StateProps {
  name: string;
  salary: string;
}

class EmployeesAddForm extends Component<EmployeesAddFormProps, StateProps> {
  constructor(props: EmployeesAddFormProps) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        this.setState(() => ({ name: e.target.value }));
        break;

      case 'salary':
        this.setState(() => ({
          salary: e.target.value,
        }));
        break;
    }
  };

  handleAddNewWorker = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { handleAddWorker, maxId } = this.props;

    if (this.state.name.length > 3 && this.state.salary) {
      handleAddWorker(
        { ...this.state, increase: false, rise: false, id: maxId + 1 },
        maxId + 1
      );

      this.setState({
        name: '',
        salary: '',
      });
    }
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className={classNames('app-add-form')}>
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.handleAddNewWorker}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onChangeValue}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onChangeValue}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;

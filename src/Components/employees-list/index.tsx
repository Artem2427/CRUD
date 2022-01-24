import React, { FC } from 'react';
import EmployeesListItem from '../employees-list-item';

import useStyles from './style';

interface EmployeesListProps {
  data: DataProps[];
  onDelete: (a: number) => void;
  onToggleProp: (id: number, prop: string | null) => void;
}

const EmployeesList: FC<EmployeesListProps> = ({
  data,
  onDelete,
  onToggleProp,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className="app-list list-group">
        {data.map((item, i) => (
          <EmployeesListItem
            {...item}
            key={item.id}
            onDelete={() => onDelete(item.id)}
            onToggleProp={(e: React.MouseEvent) =>
              onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default EmployeesList;

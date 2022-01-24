import React, { FC } from 'react';

import useStyles from './style';

interface AppInfoProps {
  countWorker: number;
  countWorkerWithRise: number;
}

const AppInfo: FC<AppInfoProps> = ({ countWorker, countWorkerWithRise }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className="info__title-main">Учет сотруднико в компании N</h1>
      <h2 className="info__title-minor">
        Общее число сотрудников: {countWorker}
      </h2>
      <h2 className="info__title-minor">
        Премию получат: {countWorkerWithRise}
      </h2>
    </div>
  );
};

export default AppInfo;

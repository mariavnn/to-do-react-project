import DonutChart from 'react-donut-chart';
import './graph.css';
import React from 'react';
import { TodoContext } from '../../main/Context/AppContext';

function Graph() {
  const customColors = ['#FF651E', '#F5A801', '#0059FF'];
  const {completedTodos,  onGoingTodos} = React.useContext(TodoContext);
  return (
      <DonutChart
        data={[
            {
            label: 'On going Tasks',
            value: onGoingTodos,
            },
            {
            label: 'Completed Tasks',
            value: completedTodos,
            },
        ]}
        width={280}
        height={280}
        legend={false}
        colors={customColors}
        strokeColor='none'
      />
  );
}

export { Graph }
 
import {useState} from 'react';

// const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

// export const MyComponent = (props) => {
//   const [currentDate, setCurrentDate] = useState(new Date())

//   setTimeout(() => {
//     setCurrentDate(new Date());
//   }, 1000);

//   return <div>{getTimeFromDate(currentDate)}</div>
// };

export const MyComponent = (props) => {
  const [currentDate, setCurrentDate] = useState(Math.random())

  setTimeout(() => {
    setCurrentDate(Math.random());
  }, 1000);

  return <div>{currentDate}</div>
};

// Состояние компонента — это какие-то данные, которые актуальны в определённый момент времени.
// Для работы с состоянием в функциональных компонентах используется хук useState().
// Хук useState() принимает первым параметром начальное значение состояния и возвращает массив из двух элементов: текущее значение состояния и функцию для установки нового значения.
// Состояние и функцию для его обновления называют одинаково, но для функции в начало подставляется слово set и следующая буква пишется в верхнем регистре: state, setState(), value, setValue() и так далее.
// Состояние внутри компонента создается собственное, отдельное, независимое от других компонентов.

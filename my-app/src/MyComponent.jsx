import { useState } from 'react';
import styles from './MyComponent.module.css';

export const MyComponent = (props) => {
  const [showRedText, setShowRedText] = useState(false);

  const onClick = () => {
    setShowRedText(!showRedText)
  };

  const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>

	return (
    <>
      {text}
      <button onClick={onClick}>Изменить цвет текста</button>
    </>
  );
};

// styled-components — это популярная библиотека для стилизации React-компонентов с использованием подхода CSS-in-JS. Она позволяет писать CSS-код непосредственно в JS-файле компонента, что упрощает управление стилями и помогает избежать конфликтов имен.
// Tailwind — ещё один из способов для работы со стилями, использующий подход Atomic CSS. Он заключается в том, чтобы разбить все стили на небольшие, независимые классы, которые могут быть многократно использованы в разных частях приложения.
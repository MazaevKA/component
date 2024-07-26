// import { Fragment } from "react";

const getValue = () => 123;


export const MyComponent = (props) => {
	const tagName = 'div';

	return (
		<>
			<label htmlFor="label">Значение</label>
			<div
				className={tagName + 'Element'}
				style={{ fontSize: '50px', fontWeight: 'bold' }}
			>
				{getValue()}
			</div>
		</>
	);
};

// Из компонента контент выводится в виде JSX-разметки.
// Фигурные скобки {} используются для вставки JavaScript-выражений внутри разметки.
// Для атрибута style значение передается в виде объекта с CSS-свойствами, названия которых следует записывать в camelCase.
// Функции, не использующие данные компонента, лучше определять вне функции компонента.
// В возвращаемой компонентом разметке должен быть один родительский элемент.
// Для того, чтобы обернуть несколько элементов, не добавляя дополнительных HTML-тегов, можно использовать <Fragment>.
// Для фрагментов можно использовать короткий синтаксис — <>...</>.
// Чтобы компонент ничего не вывел, можно вернуть из него null.
// В JSX все теги должны закрываться с помощью слэша. Сделать это можно либо вторым закрывающим тегом (</tag>), либо в виде самозакрывающегося тега (<tag />).
// Для именования атрибутов в React-компонентах используется camelCase, а не kebab-case, как в обычном HTML.
// Атрибут class заменяется на className.
// Атрибуты aria-* и data-* оставляем без изменений в kebab-case.

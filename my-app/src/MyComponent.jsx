import { useState } from 'react';

const products = [
	{ id: 'qwe', name: 'Чайник' },
	{ id: 'rty', name: 'Утюг' },
];

export const MyComponent = (props) => {
	return (
		<ul>
			{products.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	);
};

// Списки можно выводить, преобразуя данные из какого-то массива в JSX, обычно с помощью метода map().
// React имеет оптимизацию работы со списками элементов.
// Для того, чтобы избежать лишней работы по перерисовке, каждый элемент списка должен быть помечен уникальным атрибутом key, который должен быть уникален в рамках конкретного списка.
// Ключи помогают React понимать, какие элементы были изменены, добавлены или удалены из списка, и обновлять только необходимые без перерисовки всего списка.
// Лучший кандидат на уникальный атрибут — поле id.
// Если поля id в данных нет, то можно каким-то образом из имеющихся данных элемента сгенерировать уникальное стабильное значение и установить его в key.
// Не рекомендуется ставить в key индекс элемента массива, так как это может привести к проблемам при изменении порядка или удалении / добавлении элементов списка.

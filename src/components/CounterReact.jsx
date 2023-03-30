import { useStore } from '@nanostores/react';
import { counter, increaseCounter, decreaseCounter } from '../stores/counter';

export default function React() {
	const count = useStore(counter);
	const name = 'React';
	return (
		<>
			<p> {name} のコンポーネント</p>
			<button onClick={decreaseCounter}>-</button>
			<pre>{count}</pre>
			<button onClick={increaseCounter}>+</button>
		</>
	);
}

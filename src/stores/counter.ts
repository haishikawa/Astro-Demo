import { persistentAtom } from '@nanostores/persistent';

const initialValue = { value: 0 };

const counter = persistentAtom<number>('counter', initialValue.value, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

const increaseCounter = () => counter.set(counter.get() + 1);

const decreaseCounter = () => counter.set(counter.get() - 1);
const cleanCounter = () => counter.set(initialValue.value);
export { counter, increaseCounter, decreaseCounter, cleanCounter };

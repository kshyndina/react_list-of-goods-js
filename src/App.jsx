import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const ALPHABET = 'Sort alphabetically';
const LENGTH = 'Sort by length';
const REVERSE = 'Reverse';
const RESET = 'Reset';

export const App = () => {
  let sorted = [...goodsFromServer];
  const [type, setType] = useState('');
  const sortBy = () => {
    switch (type) {
      case ALPHABET:
        return sorted.sort((a, b) => a.localeCompare(b));

      case LENGTH:
        return sorted.sort((a, b) => a.length - b.length);

      case REVERSE:
        return sorted.reverse();

      case '':
      default:
        sorted = [...goodsFromServer];

        return sorted;
    }
  };

  if (type) {
    sortBy();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', { 'is-light': type !== ALPHABET })}
          onClick={() => {
            setType(ALPHABET);
          }}
        >
          {ALPHABET}
        </button>

        <button
          type="button"
          className={cn('button is-success', { 'is-light': type !== LENGTH })}
          onClick={() => {
            setType(LENGTH);
          }}
        >
          {LENGTH}
        </button>

        <button
          type="button"
          className={cn('button is-warning', { 'is-light': type !== REVERSE })}
          onClick={() => {
            setType(REVERSE);
          }}
        >
          {REVERSE}
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          style={type ? { display: '' } : { display: 'none' }}
          onClick={() => {
            setType('');
          }}
        >
          {RESET}
        </button>
      </div>

      <ul>
        {sorted.map(a => (
          <li data-cy="Good" key={a}>
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
};

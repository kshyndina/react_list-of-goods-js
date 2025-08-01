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

let sorted;
let reversed;

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', {
            'is-light': sorted !== 'ALPHABET',
          })}
          onClick={() => {
            if (reversed) {
              setGoods([...goods].sort((b, a) => a.localeCompare(b)));
            } else {
              setGoods([...goods].sort((a, b) => a.localeCompare(b)));
            }

            sorted = 'ALPHABET';
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-success', {
            'is-light': sorted !== 'LENGTH',
          })}
          onClick={() => {
            if (reversed) {
              setGoods([...goods].sort((b, a) => a.length - b.length));
            } else {
              setGoods([...goods].sort((a, b) => a.length - b.length));
            }

            sorted = 'LENGTH';
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning', {
            'is-light': !reversed,
          })}
          onClick={() => {
            setGoods([...goods].reverse());
            if (reversed === true) {
              reversed = false;
              if (sorted === 'REVERSE') {
                sorted = '';
              }
            } else {
              reversed = true;
              if (!sorted) {
                sorted = 'REVERSE';
              }
            }
          }}
        >
          Reverse
        </button>

        {sorted && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setGoods(goodsFromServer);
              sorted = '';
              reversed = false;
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(a => (
          <li data-cy="Good" key={a}>
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from 'react';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/slices/filterSlices';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

import closedInput from '../../assets/img/211651_close_round_icon.svg';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState();
  const inputRef = React.useRef();

  const testDebounce = React.useCallback(
    debounce(() => {
      console.log('HELLO');
    }, 1000),
    [],
  );

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  React.useEffect(() => {
    document.querySelector('input');
  }, []);

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.closedInput}
          src={closedInput}
          alt="closedInput"
        />
      )}
    </div>
  );
};

export default Search;

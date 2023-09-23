import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, value, setValue, placeholder }) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;

import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ to, herf, login, follow, children, onClick, ...passprops }) {
  let Card = 'button';
  const props = {
    onClick,
    ...passprops,
  };
  if (to) {
    props.to = to;
    Card = 'Link';
  } else if (herf) {
    props.herf = herf;
    Card = 'a';
  }
  return (
    <Card className={cx('wrapper', { login, follow })} {...props}>
      {children}
    </Card>
  );
}

export default Button;

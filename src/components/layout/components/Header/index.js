import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import img from '~/asset';
import Popper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
  const [dataSearch, setDataSearch] = useState([]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={img.logo} alt="logo" />
        </div>
        <Tippy
          interactive={true}
          visible={dataSearch.length > 0 && true}
          render={(attrs) => (
            <Popper>
              <div className={cx('result')} tabIndex="-1" {...attrs}>
                <div className={cx('account')}>Account</div>
                <AccountItem />
              </div>
            </Popper>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck="false" />
            <button className={cx('btn-clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button className={cx('spinner')}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
            <button className={cx('btn-search')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('control')}>
          <Button children="Upload" herf="https://tiktok.com" className={cx('Upload')}></Button>
          <Button children="Log in" login></Button>
          <i className={cx('more')}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;

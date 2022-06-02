import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem({ children }) {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('image-user')}
        alt="img user"
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1652601600&x-signature=pKCcSDAXYJk%2BBDpj7psB8dA764c%3D"
      />
      <div className={cx('infor-user')}>
        <h5 className={cx('account-user')}>
          hoaa.hanassii
          <span className={cx('iconcheck')}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        </h5>
        <p className={cx('name-user')}>Đào Lê Phương Hoa</p>
      </div>
    </div>
  );
}

export default AccountItem;

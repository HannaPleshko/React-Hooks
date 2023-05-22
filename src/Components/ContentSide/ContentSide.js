import React from 'react';
import storage from '../../storage/storage.json';
import style from './style.module.scss';
import { Pagination } from 'antd';

function ContentSide({ eventKey }) {

    const found = storage[eventKey]

    return (
        <div>
            {found?.title && <h1 >{found.title}</h1>}
            {found?.description && <p className={style['text']}>{found.description}</p>}

            <p>Преимущества:</p>
            {found?.advantages && found.advantages.map((el, index) => <p className={style['text']}>{index}. {el}</p>)}

            <Pagination className={style['pagination']} defaultCurrent={1} total={50} />
        </div>
    )
}

export default ContentSide;

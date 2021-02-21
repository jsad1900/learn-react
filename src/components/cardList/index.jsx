import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

CardList.propTypes = {

};

function CardList({ dataSearch }) {
    return (
        <div className="list-wiki">
            <h2>Danh sách tìm kiếm</h2>
            {dataSearch.map(item => {
                return (
                    <Card
                        itemSearch={item}
                    />
                )
            })}
        </div>
    );
}

export default CardList;
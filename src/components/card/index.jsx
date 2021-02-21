import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Card.propTypes = {

};

function Card({ itemSearch }) {
    const directLink = `https://vi.wikipedia.org/?curid=${itemSearch.pageid}`
    return (
        <div className="item-wiki">
            <h3 className="title-item"><a href={directLink} target="_blank">{itemSearch.title}</a></h3>
            <p className="content-item" dangerouslySetInnerHTML={{ __html: itemSearch.snippet }} ></p>
        </div>
    );
}

export default Card;
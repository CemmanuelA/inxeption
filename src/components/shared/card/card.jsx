import React from 'react'
import PropTypes from 'prop-types';
import './card.scss';
const Card = ({place}) => {
    const { title, description, photo} = place;
    return (
        <div className="card">
            <div className="card-image">
                <img src={photo} alt="image" />
            </div>
            <div className="card-description">
                <h2> {title} </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

Card.PropType = {
    place: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
}

export default Card;

import React from 'react';
import Card from '../shared/card/card';
import MyContext from '../../appContext/context';

import './gallery.scss';
const Gallery  = () => {
    const context = React.useContext(MyContext);
    const gallery = context.gallery;
    return (
    <div className="gallery-container"> 
        {
           gallery.length ? 
            gallery.map( place => <Card key={place.id} place={place} />) 
            : 
            (<h4> There aren't any place to show</h4>)
        }
    </div>
    )
}

export default Gallery;
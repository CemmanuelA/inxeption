import React from 'react';
const MyContext = React.createContext({
    gallery: [],
    addPlace: () => {}

});

export default MyContext;
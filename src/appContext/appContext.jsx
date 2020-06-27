import React from 'react';
import MyContext from './context';
import Layout from '../components/shared/layout/layout';

class AppContext extends React.Component {
    addPlace = place => {
        console.log(place)
        const gallery = this.state.gallery;
        gallery.push(place);
        this.setState({gallery})
    }
    state = {
        gallery: JSON.parse(localStorage.getItem('gallery')) || [],
        addPlace: this.addPlace
    }

    render() {
        const { children } = this.props;
        return(
            <MyContext.Provider value={{...this.state}}>
               {children}
            </MyContext.Provider>
        )
    }
}

export default AppContext;
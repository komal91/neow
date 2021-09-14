import React from 'react';
import './Description.css';

function Description(props) {

    const {
        handleCloseDescription,
        descriptionClose
    } = props

    let className1

    if(descriptionClose === true){
        className1 = 'app__description__close'
    } else{
        className1 = 'description'
    }
    return (
        <div className={className1}>
            <div>
            neowa is an application I designed after hearing about NASA's collection of apis. Pulling directly from nasa's database, my web app allows you to search for asteroids based on their closest approach date to Earth. 
            </div>

            <button onClick={handleCloseDescription}>
                Cool!
            </button>
        </div>
    )
}

export default Description

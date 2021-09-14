import React, { useState } from 'react';
import View from './View';
import './Results.css';

function Results(props) {

const {
    apiData
} = props

const [selectedNeo, setSelectedNeo] = useState()

const handleSelectNeo = (neo) =>{
    setSelectedNeo(neo)
}
const handleUnselectNeo = () =>{
    setSelectedNeo()
}

if(apiData !== undefined){
    return (
        <div className="results">
            <div className="results__box">
            {
                Object.values(apiData.near_earth_objects).map(array =>{
                    return (
                        array.map(neObject =>{
                        return (
                            <div key={neObject.name}
                            className="results__box__div">
                                <div>
                                <span>Name: {neObject.name}</span>
                                </div>
                                <div>
                                <span>Approach Date: {neObject.close_approach_data[0].close_approach_date}</span>
                                </div>
                                <div id="link">
                                <a href="#" onClick={() => handleSelectNeo(neObject)}>More</a>
                                </div>

                            </div>
                        )
                    }))
                })
            }
            </div>
            <View
            selectedNeo={selectedNeo}
            handleUnselectNeo={handleUnselectNeo}
            />
        </div>
    )
} else {
    return(
        <div className="results">
            Select your date and search!
        </div>
    )
}
   
}

export default Results

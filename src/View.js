import React from 'react';
import './View.css';

function View(props) {
    const {
        selectedNeo,
        handleUnselectNeo
    } = props


    if(selectedNeo !== undefined){
        let hazardous
        if(selectedNeo.is_potentially_hazardous_asteroid === true){
            hazardous = 'Yes'
        } else{
            hazardous = 'No'
        }


        const ShortenNum = (number) =>{
            let minDiameter = number
            let minDiameterString = `${minDiameter}`
            let minDiameterArray = [minDiameterString]
            let minDiameterArraySplit = minDiameterArray[0].split('')
            let newMinDiameterArray = [minDiameterArraySplit[0], minDiameterArraySplit[1], minDiameterArraySplit[2], minDiameterArraySplit[3]]
            let returnedNum = newMinDiameterArray.join('')
            return returnedNum
        }

        const shortenToDecimalPoint = (number) =>{
            console.log(number)
            let string = `${number}`
            console.log(string)
            let array = [string]
            console.log(array)
             let arraySplit = array[0].split('')
            console.log(arraySplit)
            let numOfIs = (arraySplit.indexOf('.') + 3)
            console.log(numOfIs)
            let newArray = arraySplit.slice(0 ,numOfIs)
            console.log(newArray)
            let returnAnswer = newArray.join('')
            console.log(returnAnswer)
            return returnAnswer
        }
        
        shortenToDecimalPoint(selectedNeo.close_approach_data[0].miss_distance.miles)

        return (
            <div className="view">

                <div className="view__header">
                    <h2>{selectedNeo.name}</h2>
                </div>
                <div className="view__div">
                    <strong>Estimated Object Diameter: </strong>{ShortenNum(selectedNeo.estimated_diameter.miles.estimated_diameter_min)} miles - {ShortenNum(selectedNeo.estimated_diameter.miles.estimated_diameter_max)} miles
                </div>

                <div className="view__div">
                    <strong>Distance NEO Will Miss Earth By: </strong>{shortenToDecimalPoint(selectedNeo.close_approach_data[0].miss_distance.miles)} miles
                </div>
                <div className="view__div">
                    <strong>Potentially Hazardous: </strong>{hazardous}
                </div>
                <div className="view__div">
                    <strong>NEO Speed: </strong>{shortenToDecimalPoint(selectedNeo.close_approach_data[0].relative_velocity.miles_per_hour)} mph
                </div>

                <button onClick={handleUnselectNeo}>Close</button>
            </div>
        )
    } else {
        return(<div></div>)
    } 

}

export default View

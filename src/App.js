import { useState } from 'react';
import Results from './Results';
import SearchForm from './SearchForm';

import './App.css';

function App() {

const [apiData, setApiData] = useState()
const [startDate, setStartDate] = useState()
const [noSearch, setNoSearch] = useState(true)

const handleSetStartDate = (e) =>{
  setStartDate(e.target.value)
}

let noSearchClass

if(noSearch === true){
  noSearchClass = 'Date'
} else{
  noSearchClass = 'noDate'
}

const handleSearchApi = (e) =>{
  e.preventDefault()
  if(startDate !== undefined){
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=DEMO_KEY`)
    .then(response => response.json())
    .then(data => setApiData(data))
    setNoSearch(true)
  } else{
    console.log('no api pull')
    setNoSearch(false)
  }


}
  return (
    <div className="App">
    <div className="app">
      <h1>NASA Near Earth Object Web Service</h1>
      
      <SearchForm
      startDate={startDate}
      handleSetStartDate={handleSetStartDate}
      handleSearchApi={handleSearchApi}
      />
      <div className={noSearchClass}>
        please select a date
      </div>
      <Results
      apiData={apiData}
      />
    </div>

    </div>
  ); 

}

export default App;
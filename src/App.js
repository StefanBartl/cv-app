import React from 'react';
import Dates from './components/Dates';
import './App.css';

export default function App() {

  const [ submittedData, setSubmittedData] = React.useState({
    firstName: "", 
    lastName: "", 
    adress: "", 
    postCode: 0, 
    city: "", 
    phone: 0,
    email: ""  
  })
  // console.log(submittedData);

  function collectData(data){

    // ? Get submitted data from 'Dates'
    if(data.firstName){
      setSubmittedData(prevData => {
        return {
          ...prevData,
          firstName: data.firstName, 
          lastName: data.lastName, 
          adress: data.adress, 
          postCode: data.postCode, 
          city: data.city, 
          phone: data.phone,
          email: data.email  
        }
      })
      // console.log("Data from Dates receivedl");
    };

};


  return (
    <div className="App">
      <h1 className='title'>WKD Steve's CV-APP</h1>
      <Dates sendData={collectData}/>
    </div>
  );
}
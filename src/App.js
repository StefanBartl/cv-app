import React from 'react';
import GeneralInformations from './components/GeneralInformations';
import EducationalExperience from './components/EducationalExperience';
import './App.css';

/* 
todo Instructions at first visit 
 */

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
    // Get array with submitted keys
    let keyArray =  Object.keys(data);

    //  Test if 'firstName'-key is in sended data. If so, push it to the data object
    if(keyArray.indexOf("firstName") !== -1){
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
       console.log("Data from GeneralInformations received.");
    };

};


  return (
    <div className="App">
      <h1 className='title'>WKD Steve's CV-APP</h1>
      <GeneralInformations sendData={collectData} />
      <EducationalExperience  />
      <input type='button' name='add' value="add"  />
    </div>
  );
}
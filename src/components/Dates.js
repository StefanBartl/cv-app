import React from 'react';

export default function Dates(props){

    const [ dates, setDates ] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            adress: "", 
            postCode: 0, 
            city: "", 
            phone: 0,
            email: ""  
      }
    );

    function datesEvent(event){
            const { name, value} = event.target;

            setDates(prevDates => {
                return {
                            ...prevDates,
                            [name]: value
                }
            });
    };

    function handleSubmit(event){
        // ? Send actual values from the input fields to App component
        event.preventDefault();
        props.sendData(dates)
    };

    let editState = false;
    function edit(event){

        // Toggle edit state
        editState === false ? editState = true : editState = false;
        // Get all elements
       let inputsArray =  document.querySelectorAll('.inputFields');
       inputsArray.forEach(element => {
           // Enable editing (via css-rule pointer-events: all) or lock it depending on the editState boolean 
        editState === true ? element.classList.add("editInputFields") : element.classList.remove("editInputFields");
       });
       

    // console.log(editState)
    };

    return (
        <div className='dates'>

            <div className='datesInputs'>

                <div className='namesDiv'>
                    <p htmlFor='firstName'>First name</p>
                    <input type='text' name='firstName' className='inputFields' placeholder='John' value={dates.firstName} onChange={datesEvent}  />
                    <p htmlFor='firstName'>Last name</p>
                    <input type='text' name='lastName' className='inputFields' placeholder='Doe' value={dates.lastName} onChange={datesEvent} />
                </div>

                <div className='adressDiv'>
                    <p htmlFor='adress'>Adress</p>
                    <input type='text' name='adress' className='inputFields' placeholder='Empty Street 10' value={dates.adress} onChange={datesEvent} />
                    <p htmlFor='postCode'>Post code</p>
                    <input type='number' name='postCode' className='inputFields'  placeholder='10909' value={dates.postCode} onChange={datesEvent} />
                    <p htmlFor='city'>City</p>
                    <input type='text' name='city' className='inputFields' placeholder='Gotham City' value={dates.city} onChange={datesEvent} />
                </div>

                <div className='contactDiv'>
                    <p htmlFor='phone'>Phone</p>
                    <input type='number' name='phone' className='inputFields' placeholder='43 664 7878111' value={dates.phone} onChange={datesEvent}/>
                    <p htmlFor='email'>Email</p>
                    <input type='email' name='email' className='inputFields' placeholder='joe.doe@mail.com' value={dates.email} onChange={datesEvent} />
                </div>  

                <input type='button' name='edit' value="edit" onClick={edit} />
                <input type='submit' name='submit' value="ok" onClick={handleSubmit} />
            
            </div>
        </div>
        )
};


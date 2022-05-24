import React from 'react';

export default function Dates(){

    const [ dates, setDates ] = React.useState([]);

    function datesEvent(event){
            setDates(prevState => 
                [
                    prevState[0]= event.target.value
                ]
            )
            console.log(dates)
    };


    return (
        <div className='dates'>

            <div className='datesInputs'>
                <div className='namesDiv'>
                    <p htmlFor='firstName'>First name</p>
                    <input type='text' name='firstName' placeholder='John' onChange={datesEvent} value={dates[0]}></input>
                    <p htmlFor='firstName'>Last name</p>
                    <input type='text' name='lastName' placeholder='Doe'></input>
                </div>

                <div className='adressDiv'>
                    <p htmlFor='adress'>Adress</p>
                    <input type='text' name='adress' placeholder='Empty Street 10'></input>
                    <p htmlFor='postCode'>Post code</p>
                    <input type='number' name='postCode' placeholder='10909'></input>
                    <p htmlFor='city'>City</p>
                    <input type='text' name='city' placeholder='Gotham City'></input>
                </div>

                <div className='contactDiv'>
                    <p htmlFor='phone'>Phone</p>
                    <input type='number' name='phone' placeholder='43 664 7878111'></input>
                    <p htmlFor='email'>Email</p>
                    <input type='email' name='email' placeholder='joe.doe@mail.com'></input>
                </div>  
                <input type='submit' name='submit'></input>
            </div>
            <h1>{dates.firstName}</h1>
        </div>
    )

};


import React from 'react';

export default function Dates(){

    return (
        <div className='dates'>

            <div className='namesDiv'>
                <p htmlFor='firstName'>First name</p>
                <input type='text' name='firstName'></input>
                <p htmlFor='firstName'>Last name</p>
                <input type='text' name='lastName'></input>
            </div>

            <div className='adressDiv'>
                <p htmlFor='adress'>Adress</p>
                <input type='text' name='adress'></input>
                <p htmlFor='postCode'>Post code</p>
                <input type='number' name='postCode'></input>
                <p htmlFor='city'>City</p>
                <input type='text' name='city'></input>
            </div>

            <div className='contactDiv'>
                <p htmlFor='phone'>Phone</p>
                <input type='number' name='phone'></input>
                <p htmlFor='email'>Email</p>
                <input type='email' name='email'></input>
            </div>  
            <input type='submit' name='submit'></input>
        </div>
    )

};


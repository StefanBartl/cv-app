import React from 'react';

export default function GeneralInformations(props){

    const [ infos, setInfos ] = React.useState(
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

    function infosEvent(event){
            const { name, value} = event.target;

            setInfos(prevInfos => {
                return {
                            ...prevInfos,
                            [name]: value
                }
            });
    };

    function handleSubmit(event){
        // ? Send actual values from the input fields to App component
        event.preventDefault(); 
        props.sendData(infos)
    };

    let editState = false;
    function edit(){

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
        <div className='generalInfos'>

            <div className='generalInfosInputs'>

                <div className='namesDiv'>
                    <p htmlFor='firstName'>First name</p>
                    <input type='text' name='firstName' className='inputFields' placeholder='John' value={infos.firstName} onChange={infosEvent}  />
                    <p htmlFor='firstName'>Last name</p>
                    <input type='text' name='lastName' className='inputFields' placeholder='Doe' value={infos.lastName} onChange={infosEvent} />
                </div>

                <div className='adressDiv'>
                    <p htmlFor='adress'>Adress</p>
                    <input type='text' name='adress' className='inputFields' placeholder='Empty Street 10' value={infos.adress} onChange={infosEvent} />
                    <p htmlFor='postCode'>Post code</p>
                    <input type='number' name='postCode' className='inputFields'  placeholder='10909' value={infos.postCode} onChange={infosEvent} />
                    <p htmlFor='city'>City</p>
                    <input type='text' name='city' className='inputFields' placeholder='Gotham City' value={infos.city} onChange={infosEvent} />
                </div>

                <div className='contactDiv'>
                    <p htmlFor='phone'>Phone</p>
                    <input type='number' name='phone' className='inputFields' placeholder='43 664 7878111' value={infos.phone} onChange={infosEvent}/>
                    <p htmlFor='email'>Email</p>
                    <input type='email' name='email' className='inputFields' placeholder='joe.doe@mail.com' value={infos.email} onChange={infosEvent} />
                </div>  

                <input type='button' name='edit' value="edit" onClick={edit} />
                <input type='submit' name='submit' value="ok" onClick={handleSubmit} />
            
            </div>
        </div>
        )
};


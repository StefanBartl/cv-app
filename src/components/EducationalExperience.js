import React from 'react';

export default function EducationalExperience(props){

    const [ edus, setEdus ] = React.useState(
        {
            school: "", 
            degree: "", 
            start: "", 
            end: "", 
            location: "", 
            minor: "",
            description: ""  
      }
    );

    function infosEvent(event){
            const { name, value} = event.target;

            setEdus(prevInfos => {
                return {
                            ...prevInfos,
                            [name]: value
                }
            });
    };

    function handleSubmit(event){
        // ? Send actual values from the input fields to App component
        event.preventDefault(); 
        props.sendData(edus)
    };

    let editState = false;
    function handleEdit(){

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

    function handleAdd(){
        
    }

    function addVisibility(){
         document.querySelector(".eduAddBtn").classList.remove('hideElement')
    }
    function removeVisibility(){
        document.querySelector(".eduAddBtn").classList.add('hideElement')
   }


    return (
        <div className='educationalExp' onMouseEnter={addVisibility} onMouseLeave={removeVisibility}>

            <h2 className='eduTitle'>Education</h2>
            <input type='button' name='add' value="add" className='eduAddBtn hideElement' onClick={handleAdd} />
            
            <div className='educationalFields'>

                <div className='eduSection1'>
                <p className='eduDate'>{edus.start} - {edus.end}</p> 
                <h3 className='eduMinor'>{edus.minor}</h3>
                </div>

                <div className='eduSection2'>
                <h3>{edus.school}</h3>
                <p className='eduLocation'>{edus.location}</p> 
                <p className='eduMinor'>{edus.minor}</p> 
                <p className='eduDegree'>{edus.degree}</p> 
                </div>

            </div>
                <input type='button' name='edit' value="edit" onClick={handleEdit} />
                <input type='submit' name='submit' value="submit" onClick={handleSubmit} />
        </div>
        )
};


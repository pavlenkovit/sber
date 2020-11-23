import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../mine.css'

function useInoutValue(defaultValue=''){
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}){

    const input = useInoutValue()

    function submitHandler(event){
        event.preventDefault()

         if (input.value().trim()){
            onCreate(input.value());
            input.clear();
            
        }
    }

    return (
        <form onSubmit = {submitHandler}   >
            <div className = "form_group">
            <h1>Add your todo</h1>
            <input {...input.bind}
            className = "form_input"
            />
            </div>
            <button 
            className="form_button"
            type = "submit"
            >Add me!</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
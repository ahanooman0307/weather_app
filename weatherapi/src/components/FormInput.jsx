import '../styles/forminput.css'

const FormInput = (props) => {
    return (
        <div className="formInput">
            <label>Location</label>
         <input name ={  props.name  } placeholder='Location' ></input>
        </div>
    )
}

export default FormInput
import React from 'react'

const Input = ({ name, label, error, classStyle, ...rest })  =>{
    return(
        <div className={classStyle}>
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} className="form-control form-control-lg" id={name}/>
            {error && <div className="alert alert-danger">{error}</div> }          
        </div>
    )
}

export default Input
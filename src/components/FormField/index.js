import React from 'react';

function FormField({id, type, label, value, onChangeHandler}){
    if(type === "textarea"){
        return(
            <div>
                
                <label>
                {label}: 
                <textarea id={id} value={value} onChange={onChangeHandler}
                />
                </label>
            </div>
        )

    }else{    
        return(
            <div>
                
                <label>
                {label}: 
                <input id={id}
                    type={type} value={value} onChange={onChangeHandler}
                />
                </label>
            </div>
        )
    }
}

export default FormField;
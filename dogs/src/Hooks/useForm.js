import React from 'react';

const types = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
        message: "Preencha um email válido."
    },
    number: {
        regex: /^\d+$/,
        message: "Utilize apenas numeros."
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);

    const validate = (value)=>{
        if(type === false) return true;
        if(value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        }else{
            setError(null);
            return true;
        }
    }

    const onChange = ({target}) =>{
        if(error) validate(target.value);
        setValue(target.value);
    }
  return (
    {
        value, 
        setValue, 
        onChange, 
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
  )
}

export default useForm;

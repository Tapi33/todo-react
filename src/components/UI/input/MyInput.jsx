import React from 'react';
import cl from './MyInput.module.css'

const MyInput = (props) => {
    return (
            <input className={cl.myInput} type="text" {...props} />
    );
};

export default MyInput;
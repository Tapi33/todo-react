import React from 'react';
import cl from './MyButton.module.css';

const MyButtonUnderLine = ({children, ...props}) => {
    return (
        <button className={cl.myButtonUnderLine} {...props}>{children}</button>
    );
};

export default MyButtonUnderLine;
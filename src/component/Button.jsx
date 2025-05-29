import React from 'react';

const Button = ({children, isActive, ...props}) => {
    return (
        <button 
        {...props}
        className={`px-4 py-2 rounded-lg bg-white/80 border-[1px]
            ${
            isActive
                ? 'text-[#76B7E0] border-[1px] border-[#76B7E0] outline-1'
                : 'hover:bg-[#e3f1fd] text-gray-500'
            }`}>            
        {children}
        </button>
    );
};

export default Button;
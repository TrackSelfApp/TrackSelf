import React from 'react';

function InputField(props) {
    return (
        <input
          id={props.id}
          className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none"
          type="text"
          placeholder={props.placeholder}/>
    );
}

export default InputField;
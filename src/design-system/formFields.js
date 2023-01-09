import React from 'react';
///import { useForm } from "react-hook-form";

/*export function Form({ defaultValues, children, onSubmit }) {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-6 mt-8 max-w-md'>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name
                  }
                })
              : child;
          })
        : children}
    </form>
  );
}*/

/*export function Input({ label, id, name, register, ...rest }) {
  return (
  <div>
  <label htmlFor={id} className='text-gray-700'> {label} </label>
  <input {...register(name)} {...rest} id={id} className='form-control mt-1
  w-full
  rounded-md
  bg-gray-100
  border-transparent
  focus:border-gray-500 focus:bg-white focus:ring-0' />
  </div>
  );
}*/





export function Input({ label, id, name, ...rest }) {
    return (
    <div>
    <label htmlFor={id} className='text-gray-700'> {label} </label>
    <input ref={null} name={name} {...rest} id={id} className='form-control mt-1
    w-full
    rounded-md
    bg-gray-100
    border-transparent
    focus:border-gray-500 focus:bg-white focus:ring-0' />
    </div>
    );
  }

  export function Selection({ label, id, name, arrayOfData, ...rest }) {
    let options = arrayOfData.map((data, index) =>
                <option 
                    key={index}
                    value={data}
                >
                    {data}
                </option>
            );

    return (
    <div>
    <label htmlFor={id} className='block mb-2 text-gray-700'> {label} </label>
    <select name={name} id={id} className="block w-full p-2 mb-6 text-sm text-gray-700 border border-gray-300 rounded-md  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" {...rest}>
                <option>Select Item</option>
                {options}
    </select>
    </div>
    );
  }

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

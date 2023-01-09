import {React } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Input, Selection } from "../design-system/formFields"



//const HandleFormSubmission = async (data) => {
  /*const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };*/

  //const response = await fetch('http://127.0.0.1/data.json', requestOptions);
  //const jsonData = await response.json();
  const HandleFormSubmission = (data) => {
  //const [clientStyle, setClientStyle] = useState([]);
   // window.localStorage.setItem('clientStyles', JSON.stringify(data));

  console.log(data);
}
const ControlledInputs = () => {
  const { control, handleSubmit } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields:colorFields, append:colorAppend, remove:colorRemove } = useFieldArray({
    control,
    name: "style.colour"
  });

  const { fields:typoFields, append:typoAppend, remove:typoRemove } = useFieldArray({
    control,
    name: "style.typography"
  });


  const ColorSetting = ()=> {
    const colourNames = ['Primary', 'Secondary', 'Neutral', 'Warning', 'Success', 'Error', 'LinkColour']
    return (
      <>
      {colorFields.map((item, index) => (
        <fieldset key={item.id} className='border-solid border-2 border-gray-900 py-3 px-3 mb-7 mt-7'>
          <Controller
            render={({ field, ref}) => <Selection {...field} name='colourName' label='Colour Name:' id='colourName' arrayOfData={colourNames} ref={ref}  />}
            name={`style.colour.${index}.colourName`}
            control={control}
            defaultValue = ''
           />
          <Controller
            render={({ field, ref }) => <Input {...field} name='colourValue' label='Colour Value:' id='colourValue' type='color' ref={ref}  />}
            name={`style.colour.${index}.colourCode`}
            control={control}
            defaultValue = ''
           />
          <button type="button" className="ml-auto mt-4 bg-red text-white hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-red-100 inline-flex h-8 w-8 dark:text-white dark:hover:text-white dark:bg-red-600 dark:hover:bg-red-700"  aria-label="Close" onClick={() => colorRemove(index)}>
          <span className="sr-only">Close</span>
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
          </button>
        </fieldset>
      ))}
       <button className='mr-4 bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded mt-4'
        type="button"
        onClick={() => colorAppend()}
      >
        Add Colour 
      </button>
      </>
    )
  }


  const TypographySetting = ()=> {
    const textDecorationOptions = ['underline', 'none'];
    const typographyNames = ['Heading1', 'Heading2', 'Heading3', 'Heading4', 'Heading5', 'Heading6', 'Link', 'Blockquoute', 'Paragraph', 'Figcaption'];
    return (
      <>
      {typoFields.map((item, index) => (
        <fieldset key={item.id} className='border-solid border-2 border-gray-900 py-3 px-3 mb-7 mt-7'>
          <Controller
            render={({ field, ref}) => <Selection {...field} name='typoName' label='Typography Name:' id='typeName' arrayOfData={typographyNames} ref={ref}  />}
            name={`style.colour.${index}.colourName`}
            control={control}
            defaultValue = ''
           />
            <Controller
            render={({ field, ref}) => <Input {...field} name='fontFamily' label='Font Family:' id='fontFamily' type='textfield' placeholder='Font name' ref={ref}  />}
            name={`style.typography.${index}.font-family`}
            control={control}
            defaultValue = ''
           />
          <Controller
            render={({ field, ref }) => <Input {...field} name='fontSize' label='Font Size:' id='fontSize' type='number' ref={ref}  />}
            name={`style.typography.${index}.font-size`}
            control={control}
            defaultValue = ''
           />
            <Controller
            render={({ field, ref }) => <Selection {...field} name='textDecoration' label='Text Decoration:' id='textDecoration' arrayOfData={textDecorationOptions} ref={ref}  />}
            name={`style.typography.${index}.text-decoration`}
            control={control}
            defaultValue = ''
           />
          <button type="button" className="ml-auto mt-4 bg-red text-white hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-red-100 inline-flex h-8 w-8 dark:text-white dark:hover:text-white dark:bg-red-600 dark:hover:bg-red-700"  aria-label="Close" onClick={() => typoRemove(index)}>
          <span className="sr-only">Close</span>
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
          </button>
        </fieldset>
      ))}
       <button className='bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded mt-4'
        type="button"
        onClick={() => typoAppend()}
      >
        Add Typography
      </button>
      </>
    )
  }
 
  return (
    <form className='grid grid-cols-1 gap-6 mt-8 max-w-md' onSubmit={handleSubmit(data => HandleFormSubmission(data))}>
      <div className='md:absolute' style={{left:'200px'}}>
      <Controller
              render={({ field, ref }) => <Input {...field} name="clientName" label="Client:" id='clientName' type='textfield' placeholder='client' ref={ref}/>}
              name={`clientName`}
              control={control}
              defaultValue = ''
        />
       <ColorSetting/>
       <TypographySetting/>
     
      </div>
      <input className='bg-pink-500 hover:bg-pink-400  md:w-30 md:fixed md:left-10  text-white mx-auto rounded-sm py-2 px-4 ' type="submit" value="Create Style" />
    </form>
  );
}


export default ControlledInputs;
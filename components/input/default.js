


const InputDefault = (props) => {

  return (
    <input
      className={'rounded-xl h-14 w-full bg-transparent border-2 border-gray-400 p-4 focus-visible:outline-vicm-green-500 mb-4' + (props?.className || '')}
      placeholder={props?.placeholder}
      id={props?.id}
      name={props?.name}
      type={props?.type}
      value={props?.value}
      required={props?.required}
      onChange={props?.onChange}
    />
  );
}


export default InputDefault

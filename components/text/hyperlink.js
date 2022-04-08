const HyperLink = ({children, className, path}) => {

    return (
      <a
        className={'text-vicm-green-500 underline ' + (className || '')} 
        href={path}>
          {children}
      </a>
    );
  }
  
  
  export default HyperLink
  
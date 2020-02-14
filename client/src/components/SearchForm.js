import React from 'react'
import useLocalstorage from './hooks/useLocalstorage';

handleSubmit = e => {
  e.preventDefault();
  
}


export default SearchForm = () => {
  
  const [value, setValue] = useLocalstorage(key, initialValue);
  
  return (
    <div>
      <form
        onSubmit = {handleSubmit}
      >

        <label> Search <input type='text' value='search'></input></label>
        <input 
          type ='Submit' 
          value='Submit'
        />
      </form>
    </div>
  )
}

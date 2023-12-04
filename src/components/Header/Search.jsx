import { useState } from 'react';

import { FaSearch } from 'react-icons/fa'
import { SearchResults } from './SearchResults';

export default function Search() {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(json => {
      const results = json.filter((user) => {
        return (
          value &&
          user &&
          user.name &&
          user.name.toLowerCase().includes(value)
        );  
      });
      setResults(results);
  });
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  const [results, setResults] = useState([])

  return (
    <div >
      <form className='bg-white shadow-md md:w-[380px] lg:w-[550px] md:mr-[32px] lg:mr-[200px] rounded-md h-12 pl-4 flex items-center '>
      <FaSearch  className='mr-1.5 -ml-1'/>
      
      <input type="search" name="search" id="search" value={input} onChange={(e) => handleChange(e.target.value)} className="p-1 pb-2 text-md font-bold w-[550px] h-12 focus:outline-none rounded-md border-none bg-transparent" placeholder=" Buscar"/>
      </form>
      <SearchResults results={results}/>
    </div>
  )
}


export const SearchList = ({ result }) => {
  return <div 
  className='pt-2.5 pr-2.5 hover:bg-gray-300'
  onClick={(e) => alert(`you clicked on ${result}`)}
  >{result.name}</div>;
  
}

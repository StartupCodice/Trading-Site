import { SearchList } from "./SearchList"


export function SearchResults({ results, fetchData }) {
  return (
    <div className='w-[550px] max-h-28 overflow-y-scroll bg-white fixed flex-col rounded-sm mt-4'>
      {results.map((result, id) => {
        return <SearchList result={result} key={id} fetchData={fetchData} />;
      })}
    </div>
  );
}

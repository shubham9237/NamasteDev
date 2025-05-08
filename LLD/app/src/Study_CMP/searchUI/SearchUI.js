import { useEffect, useState } from "react";

const SearchUI = () => {

    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [listVisible, setListVisible] = useState(true);
    const [cache, setCache] = useState({})

    useEffect(() => {
        const s= setTimeout(() => {
            fetchData();
        }, 300)
        return () => {
            clearTimeout(s);
        }
    }, [searchText])

    const fetchData = async () => {
        if(cache[searchText]) {
            setSearchResults(searchResults => {
                const newSearchResults = [...cache[searchText]];
                return newSearchResults;
            })    
        }else {
            const data = await fetch(`https://www.google.com/complete/search?client=firefox&q=${searchText}`)
            const json = await data.json();
            setSearchResults(searchResults => {
                const newSearchResults = [...json[1]];
                return newSearchResults;
            });
            cache[searchText] = json[1];
        }
    }

    return (
        <div className="m-10">
            <input className="p-1 mx-2 w-96 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" 
            onFocus={() => setListVisible(true)} 
            onBlur={() => setListVisible(true)} 
            name="search" placeholder="" 
            type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            {searchResults.length > 0 && listVisible &&
                <ul className="z-50 border border-black p-1 mx-2 w-96 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1">
                    {searchResults.map((r, i) => <li className="hover:bg-gray-200 cursor-pointer" key={`${i}${r}`}>{r}</li>)}
                </ul>
            }
            <p>search done</p>
        </div>
    )
}
export default SearchUI;
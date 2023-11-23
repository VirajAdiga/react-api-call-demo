import "../css/SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }){

    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchTerm);
    }

    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleOnChange} />
            </form>
        </div>
    );
}

export default SearchBar;
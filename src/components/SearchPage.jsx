import React, { useState, useEffect } from "react";
import headphoneData from "/mock.json"; // Make sure the path is correct
import { BsSearch } from "react-icons/bs";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const search = () => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    // const filteredHeadphones = headphoneData.filter(
    //   (headphone) =>
    //     headphone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     headphone.description.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    setSearchResults();
  };

  useEffect(() => {
    search(); // Initial search when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  console.log(searchTerm, searchResults); // Debugging output

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchInput}
        placeholder="Search For HeadPhones"
      />
      <div onClick={search} className="search-icon mt-2">
        <BsSearch />
      </div>

      <div>
        {searchResults.length === 0 ? (
          <p></p>
        ) : (
          headphoneData.map((headphone) => (
            <div key={headphone.id}>
              <h3>{headphone.name}</h3>
              <p>{headphone.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;

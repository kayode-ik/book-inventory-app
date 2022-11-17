// import { Card } from "@mui/material";
import React, {useEffect, useState } from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import ListCard from "./ListCard";
import CharacterCard from "./CharacterCard";
// import WithListLoading from "../Hoc/withListLoading";

interface reposType {
  repos: {
    id: number;
    publisher: string;
    name: string;
    isbn: string;
    authors: string;
  }[];
}

interface CType {
  characterData: {
    id: number;
    name: string;
    gender: string;
    culture: string;
    books: Array<[]>;
  }[];
}


const ListCards: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<reposType["repos"]>([]);

  const [characterData, setCharacterData] = useState<CType["characterData"]>(
    []
  );
  const [query, setQuery] = useState<string>("");

  const testOptions = {
    method: "GET",
  };

  // Call Book Endpoint
  useEffect(() => {
    setIsLoading(true);
    const apiUrl = `https://www.anapioficeandfire.com/api/books`;
    fetch(apiUrl, testOptions)
      .then((res) => res.json())
      .then((repos) => {
        setIsLoading(false);
        setRepos(repos);
      });
  }, [setRepos]);

  // call Character endpoint
  useEffect(() => {
    setIsLoading(true);
    const apiUrl = "https://www.anapioficeandfire.com/api/characters";
    fetch(apiUrl, testOptions)
      .then((res) => res.json())
      .then((characterData) => {
        setIsLoading(false);
        setCharacterData(characterData);
      });
  }, [setCharacterData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setQuery(lowerCase);
  };


  return (
    <div data-testid="todo-1" className="listContainer">
      {/* Search Bar */}
      <div className="search__bar">
        <form className="form">
          <input
            data-test="query-input"
            className="search-input"
            type="text"
            name="query"
            placeholder="Search for books"
            value={query}
            onChange={handleChange}
          />
        </form>
      </div>

      {isLoading ? (
        <> Loading ... </>
      ) : (
        <>
          <ListCard repos={repos} query={query} />
        <br />
          {query ? (
            <CharacterCard characterData={characterData} query={query} />
          ) : null}
        </>
      )}
    </div>
  );
};

export default ListCards;


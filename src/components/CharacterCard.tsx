import React from 'react'
import { Card } from 'react-bootstrap';

interface Iprops {
    characterData: {
        id: number;
        name: string;
        gender: string;
        culture: string;
        books: Array<[]>;
      }[];
    query: string;
  }



const CharacterCard: React.FC<Iprops> = ({characterData , query}) => {
  return (
    <>
    <h3>Characters</h3>

    <ul>
      <>
        {characterData
          .filter((el) => {
            // if no input
            if (query === "" && query === null) {
              return "No Records";
            } else if(query) {
              return el.name.toLowerCase().includes(query) 
              || el.culture.toLowerCase().includes(query)
            }
             return "No Records"
          })
          .map((character) => {
            return (
              <Card key={character.id} className="listCard">
                <label>Name :</label> &nbsp;
                {character.name ? character.name : "---"} <br />
                <label>Gender :</label> &nbsp;
                {character.gender ? character.gender : "---"} <br />
                <label>Culture:</label> &nbsp;
                {character.culture ? character.culture : "---"} <br />
                {/* <label>Book:</label> &nbsp; */}
                {/* {character.books ? (
                <span>{character.books }<br /></span>
                ): "---"} */}
              </Card>
            );
          })}
      </>
    </ul>
    </>
  )
}

export default CharacterCard
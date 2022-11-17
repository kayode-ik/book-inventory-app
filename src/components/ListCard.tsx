import React from "react";
import { Card } from "react-bootstrap";

interface Iprops {
  repos: {
    id: number;
    publisher: string;
    name: string;
    isbn: string;
    authors: string;
  }[];
  query: string;
}

const ListCard: React.FC<Iprops> = ({ repos, query }) => {

  return (
    <>
    <h3>Books</h3>
    <ul>
      <>
        {repos
          .filter((el) => {
            // if no input
            if (query === "" && query === null) {
              return el;
            } else if(query) {
              return el.publisher.toLowerCase().includes(query) 
              || el.name.toLowerCase().includes(query) 
              || el.isbn.toLowerCase().includes(query) ;
            }
             return "No Records"
          })
          .map((repo) => {
            return (
              <Card key={repo.id} className="listCard">
                {/* <div className="cardFlex"> */}
                <label>Book Publisher :</label> &nbsp;
                {repo.publisher} <br />
                <label>Book Name :</label> &nbsp;
                {repo.name} <br />
                <label>Book Isbn :</label> &nbsp;
                {repo.isbn} <br />
                <label>Book Authors :</label> &nbsp;
                {repo.authors}
                {/* </div> */}
              </Card>
            );
          })}
      </>
    </ul>
    </>
  );
};

export default ListCard;



import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Js
import { bookList } from "./bookList";

// React Components
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {bookList.map((val) => (
        <Book {...val} key={val.id}></Book>
      ))}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));

/*
const Greeting = () => {
  return React.createElement("div", {}, React.createElement("h1", {}, "hello"));
};
*/

// const Image = () => <img src={img} alt="" />;

// const Title = () => {
//   return <h1>{title.toUpperCase()}</h1>;
// };

// function Author() {
//   return (
//     <h3 style={{ color: "red" }}>
//       {name} {5 + 5}
//     </h3>
//   );
// }

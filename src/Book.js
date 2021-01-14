import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  // const {img,title,author} = props;
  const clickHandler = (e) => {
    alert("Alert button");
    console.log(e);
  };

  function complexExample(author) {
    console.log(author);
  }

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      {/* {children} */}
      <button type="button" onClick={clickHandler}>
        Click Here
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Click 2
      </button>
    </article>
  );
};

export default Book;

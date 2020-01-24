import React from "react";

const styles = {
  bookListItem: {
    display: 'flex',
    margin: "15px 0"
  },
  booksCover: {
    flexShrink: "0",
    width: "120px",
    marginRight: "30px"
  },
  booksCoverImage: {
    maxWidth: "100%",
  },
  booksDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: "10px",
    alignItems: "flex-start"
  },
  bookTitle: {
    fontSize: "1.2rem"
  },
  bookAuthor: {},
  bookPrice: {
    fontSize: "1.4rem"
  }
};

const BookListItem = ({ book }) => {
  const {
    bookListItem,
    booksCover,
    booksDetails,
    bookTitle,
    bookAuthor,
    bookPrice, booksCoverImage
  } = styles;


  const { title, author, price, coverImage } = book;
  return (
    <div style={bookListItem}>
      <div style={booksCover}>
        <img src={coverImage} alt="cover" style={booksCoverImage} />
      </div>
      <div style={booksDetails}>
        <a href="#" style={bookTitle}>{title}</a>
        <div style={bookAuthor}>{author}</div>
        <div style={bookPrice}>$ {price}</div>
        <button className="btn btn-info add-to-cart">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default BookListItem;

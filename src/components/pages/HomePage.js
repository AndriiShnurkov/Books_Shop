import React from "react";
import BookList from "../book-list/BookList";
import ShoppingCartTable from "../shoppingCartTable/ShoppingCartTable";

const HomePage = props => {
  console.log("props", props);
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};
export default HomePage;

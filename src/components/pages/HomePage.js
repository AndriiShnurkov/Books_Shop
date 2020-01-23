import React from "react";
import BookList from "../book-list/BookList";

const HomePage = props => {
    console.log('props', props);
    return (
        <div>
            <BookList />
        </div>
    );
};
export default HomePage;

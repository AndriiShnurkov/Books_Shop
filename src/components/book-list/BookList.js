import React, { Component } from "react";
import BookListItem from "./book-list-item/BookListItem";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc/withBookstoreService";
import { booksLoaded } from "../../actions/index";
import compose from "../../utils/compose";

const styles = {
    bookList: {
        listStyleType: "none"
    }
};
class BookList extends Component {
    state = {};

    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const { bookList } = styles;

        const { books } = this.props;
        return (
            <ul style={bookList}>
                {books.map(book => (
                    <li key={book.id}>
                        <BookListItem book={book} />
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = ({ books }, ownProps) => {
    return {
        books
    };
};
const mapDispatchToProps = { booksLoaded };

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

const initialState = {
    books: [],
    // [
    //     { id: 1, title: "Острее шпаги", author: "Александр Казанцев" },
    //     { id: 2, title: "Рекламное бюро господина Кочека", author: "Тавекелян Варткес" },
    //     { id: 3, title: "Добрый э-э-эх", author: "Александр Саакаяц" },
    // ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOOKS_LOADED":
            return {
                books: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
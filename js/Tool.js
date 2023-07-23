const Add = (a, b) => {
    return a + b;
};

//export只能用const的變數丟出，export可以有很多個，但default只能有一個
export const Name = "Mike";
export const age = 12;
export const Remove = (a, b) => {
    return a - b;
};
export default Add;
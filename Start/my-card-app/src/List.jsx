
function List(){
    const fruits=[{id: 1, name: "apples", calories: 95}, 
                {id: 2, name: "oranges", calories: 45}, 
                {id: 3, name: "banana", calories: 105}, 
                {id: 4, name: "coconut", calories: 159}, 
                {id: 5, name: "pineapple", calories: 37}];
     
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
    //fruits.sort((a, b) => a.calories - b.calories) //Numeric
    //fruits.sort((a, b) => b.calories - a.calories) //Reverse Numeric

    const lowCalFruits = fruits.filter(fruits => fruits.calories < 100); //filter fruits

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            {fruit.calories}
                                            </li>)

    return(<ol>{listItems}</ol>);
}

export default List
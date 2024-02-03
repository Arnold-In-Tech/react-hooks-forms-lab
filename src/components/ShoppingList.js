import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState('')

  const [filteredState, setFilteredState] = useState({
    queryInput: '',
    list: []
  })  // Keep track of filtered data in the state

  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  function onSearchChange(event) {
    setSearch(event.target.value);    
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {   // Chain the search filter to select category
    return item.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} filteredItems = {filteredState} />      
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

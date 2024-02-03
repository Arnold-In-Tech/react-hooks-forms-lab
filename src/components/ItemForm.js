import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [queryNewItem, setQueryNewItem] = useState("");

  const [selectNewCategory, setSelectNewCategory] = useState("Produce");

  //const [submittedData, setSubmittedData] = useState([]);	// Will keep track of the original list, and data previously submitted                                                                     

  function onQueryChange(event){
    setQueryNewItem(event.target.value)
  }

  function onNewCategoryChange(event){
    setSelectNewCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    let itemName = queryNewItem;
    let itemCategory = selectNewCategory;
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);

    // // update the array of submitted data with new item
    // const dataArray = [...submittedData, newItem];
    // // set state
    // setSubmittedData(dataArray);
  }



  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={queryNewItem} onChange={onQueryChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={selectNewCategory} onChange={onNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

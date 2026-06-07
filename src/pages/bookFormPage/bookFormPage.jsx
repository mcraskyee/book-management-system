import React from "react";

const languages = [
  {id:1, name:"English", isSelected:true},
  {id:2, name:"French", isSelected:false},
  {id:3, name:"Spanish", isSelected:false},
  {id:4, name:"German", isSelected:false},
  {id:5, name:"Arabic", isSelected:false},
  {id:6, name:"Chinese", isSelected:false},
  {id:7, name:"Japanese", isSelected:false},
  {id:8, name:"Korean", isSelected:false},
  {id:9, name:"others", isSelected:false}
]

function  BookFormPage() {
  return (
    <form>
      <div>
        <lable for="book-title">Book Title:</lable><br/>
        <input type="text" placeholder='Book Title' name="book-title"/>
      </div>
      <br/>
      <div>
        <lable for="author">Author:</lable><br/>
        <input type="text" placeholder='Author' name="author"/>
      </div>
      <br/>
      <div>
        <lable for="isbn">ISBN:</lable><br/>
        <input type="text" placeholder='ISBN' name="isbn"/>
      </div>
      <br/>
      <div>
        <lable for="publisher">Publisher:</lable><br/>
        <input type="text" placeholder='Publisher' name="publisher"/>
      </div>
      <br/>
      <div>
        <lable for="publication-year">Publication Year:</lable><br/>
        <input type="text" placeholder='Publication Year' name="publication-year"/>
      </div>
      <br/>
      <div>
        <lable for="category">Category:</lable><br/>
        <input type="text" placeholder='Category' name="category"/>
      </div>
      <br/>
      <div>
        <lable for="">Language:</lable>
        <select id="languages" name="languages">
          {languages.map((language)=>(<option key={language.id} value={language.name} isSelected={language.isSelected}>{language.name}</option>))}
        </select>
      </div>
      <br/>
      <div>
        <lable for="quantity">Quantity:</lable><br/>
        <input type="number" name="quantity"/>
      </div>
      <div>
        <lable for="discription">Discription:</lable><br/>
        <textarea placeholder='Dircription'></textarea>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default BookFormPage;
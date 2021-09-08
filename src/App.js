import './App.css';
import { useState } from "react";

function App() {

  const [list, setList] = useState([]);
  const [list2, setList2] = useState([])
  const [name, setName] = useState('recipe-name')
  const [instruct, setInstruct] = useState('recipe-instructions')

  const [showing, setShowing] = useState(false);
  
  function handleChange(event) {
      setName(event.target.value);
    }

  function handleChange2(event) {
      setInstruct(event.target.value);
  }

  function handleAdd() {
      const newList = list.concat({ name });
      const newList2 = list2.concat({ instruct })
      setList(newList);
      setList2(newList2);
      setName('')
      setInstruct('')
    }

  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <h1>My Recipes</h1>
      <div>
        {list.length > 0 ? (        
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
            {/* {list2.map((item) => (
                <li key={item.id}>{item.instruct}</li>
            ))} */}
        </ul>) :
        <div>
            There are no recipes to list    
        </div>}
        </div>
           {!showing ? <button onClick={() => setShowing({ showing: !showing })}>Add Recipe</button> : null}
                { showing ?  <form>
                                <label>recipe-name
                                <textarea type="text" value={name} name="recipe-name" onChange={handleChange} />
                                </label>
                                <label>recipe-instructions
                                <textarea type="text" value={instruct} name="recipe-instructions" onChange={handleChange2} />
                                </label>
                                    <button type="button" onClick={handleAdd}>
                                        Submit
                                    </button>
                            </form> 
                : null
                }   
    </div>
  );
}

export default App;

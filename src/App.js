import './App.css';
import Recipes from './components/Recipes';

function App() {
  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <h1>My Recipes</h1>
      <Recipes />
    </div>
  );
}

export default App;

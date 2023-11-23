import './css/App.css';
import SearchBar from './components/SearchBar';

function App() {

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

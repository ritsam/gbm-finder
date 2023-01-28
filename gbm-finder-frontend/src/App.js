import './App.css';
// components
import PostRow from './components/postRow'

function App() {
    const rows = [
        { name: "Today" },
        { name: "This week" },
    ]
  return (
    <div className="App">
        <PostRow metadata={rows[0]}/>
        <PostRow metadata={rows[1]}/>
    </div>
  );
}

export default App;

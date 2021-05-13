import './App.css';
import { useEffect } from 'react'
import { getMaximumPosts } from './Services/Posts.service';
import Dashboard from './Components/Dashboard';

function App() {

  useEffect(() => {
    async function fetchData() {
      getMaximumPosts();
    }

    fetchData();
  }, [])
  return (
    <div className="App">
     <Dashboard> </Dashboard>
    </div>
  );
}

export default App;

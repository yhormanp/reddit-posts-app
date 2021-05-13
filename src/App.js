import "./App.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import Dashboard from "./Components/Dashboard";

function App({ store }) {
  useEffect(() => {
    async function fetchData() {
      // getMaximumPosts();
    }

    fetchData();
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard> </Dashboard>
      </div>
    </Provider>
  );
}

export default App;

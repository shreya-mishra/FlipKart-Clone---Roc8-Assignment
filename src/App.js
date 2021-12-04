import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='layout'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

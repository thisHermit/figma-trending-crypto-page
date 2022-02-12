import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Landing />
      <Products />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import LearnMore from "./components/LearnMore";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Landing />
      <Products />
      <LearnMore />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import LearnMore from "./components/LearnMore";
import Team from "./components/Team";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="p-6">
        <Landing />
        <Products />
        <LearnMore />
        <Team />
        <CTA />
      </div>
    </div>
  );
}

export default App;

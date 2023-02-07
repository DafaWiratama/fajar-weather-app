import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { city } from "./city";

function App() {
  return (
    <>
      <Section1 city={city} />
      <Section2 />
      <Section3 />
    </>
  );
}

export default App;

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import GridContainer from "./components/Container/GridContainer";
import LogoAnimation from "./components/items/LogoAnimation";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <LogoAnimation onFinish={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="">
          <GridContainer />
        </div>
      )}
    </>
  );
}

export default App;

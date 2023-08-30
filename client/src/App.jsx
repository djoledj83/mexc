import React, { useState } from "react";
import Router from "./components/Router";
import "./app.css"
import { StyledContainer } from './components/Styles';



function App() {

  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <StyledContainer>
      <>
        <div className="app">
          <div className="container">
            <Router />
          </div>
        </div>
      </>
    </StyledContainer>
  )
}

export default App;
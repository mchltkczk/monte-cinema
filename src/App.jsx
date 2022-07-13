import { Register } from "./routes/Register";
import { StyledHeader } from "./routes/Register.Styled";
import logo from "./assets/logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='page-wrapper'>
      <StyledHeader>
        <a href='/'>
          <img src={logo} />
        </a>
      </StyledHeader>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

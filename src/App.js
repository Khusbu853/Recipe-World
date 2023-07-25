import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import { Logo, Nav, Box } from "./pages/style";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Recipe World</Logo>
        </Nav>
        <Box>
          <Search />
          <Category />
        </Box>
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;

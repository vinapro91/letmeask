import { Routes as Switch, Route } from "react-router";
import { NewRoom } from "./pages/newRoom";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />}></Route>
      </Switch>
    </>
  );
};

export default App;

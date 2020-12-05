import "./App.css";
import { createStore } from "redux";
import { reducer } from "./reducers/userReducers";
import { Provider } from "react-redux";
import Event from "./screens/Event";
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Event />
    </Provider>
  );
}

export default App;

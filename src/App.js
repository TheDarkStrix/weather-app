import "./App.css";
import Container from "./components/Container/Container";
import Heading from "./components/Heading";

function App() {
  return (
    <div>
      <Heading />
      <Container>
        <Heading name="kavya" />
      </Container>
    </div>
  );
}

export default App;

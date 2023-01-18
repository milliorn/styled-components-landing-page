import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <>
      <Header />
      <Container className="App">
        <h1>Hello world</h1>
      </Container>
    </>
  );
}

export default App;

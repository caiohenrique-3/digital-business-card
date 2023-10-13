import Info from "./components/Info";
import TextContent from "./components/TextContent";
import SocialMedia from "./components/SocialMedia";
import Header from "./components/Header";
import './styles/index.css'

function App() {
  return (
    <>
      <Header></Header>
      <main className="card">
        <div className="container">
          <Info></Info>
          <TextContent></TextContent>
          <SocialMedia></SocialMedia>
        </div>
      </main>
    </>
  );
}

export default App;

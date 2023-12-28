import Posts from "./components/Posts";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Post from "./components/Post";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Posts />
      <Post/>
      <Footer/>
    </div>
  );
}

export default App;

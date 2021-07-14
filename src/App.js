import Banner from "./components/Banner";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import GlobalStyle from "./globalStyles";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner/>
      <Newsletter/>
      <Produtos/>
      <Footer/>
    </>

  );
}

export default App;

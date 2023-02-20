import MainBlock from "./components/MainBlock/MainBlock";
import SpeakersBlock from "./components/SpeakersBlock/SpeakersBlock";
import StyledAppWrap from "./components/AppWrap/StyledAppWrap";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <StyledAppWrap>
      <MainBlock />
      <SpeakersBlock />
      <Footer />
    </StyledAppWrap>
  );
}

export default App;

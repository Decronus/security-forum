import MainBlock from "./components/MainBlock/MainBlock";
import SpeakersBlock from "./components/SpeakersBlock/SpeakersBlock";
import StyledAppWrap from "./components/AppWrap/StyledAppWrap";


function App() {
  return (
    <StyledAppWrap>
      <MainBlock />
      <SpeakersBlock />
    </StyledAppWrap>
  );
}

export default App;

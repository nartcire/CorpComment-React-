import Container from "./layout/Container";
import FeedbackItemsContextProvider from "./contexts/FeedbackItemsContextProvider";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";

function App() {
  return (
    <div className="app">
      <Footer />

      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;

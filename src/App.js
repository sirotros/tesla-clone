import s from "./App.module.scss";
import Header from "./components/Header";
import datas from "./data/data.json";
import ContentItem from "./components/ContentItem";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      {datas && datas.map((data) => <ContentItem data={data} key={data.id}/>)}
      <Footer/>
    </>
  );
}

export default App;

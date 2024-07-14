import FAQContainer from './Components/FAQContainer';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SecondContainer from './Components/SecondContainer';
import Third from './Components/Third';
import TableContain from './Components/TableContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SecondContainer />
      <Third />
      <TableContain />
      <FAQContainer />
      <Footer />
    </div>
  );
};

export default App;

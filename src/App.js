import './App.css';
import CustomerReviewSection from './components/customer-review/CustomerReviewSection';
import Layout from './components/pageLayout/Layout';
import Regulation from './components/regulation/Regulation';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Regulation/>
      <CustomerReviewSection/>
    </div>
  );
}

export default App;

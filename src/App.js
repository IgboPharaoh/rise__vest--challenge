import './App.css';
import CustomerReviewSection from './components/customer-review/CustomerReviewSection';
import Layout from './components/pageLayout/Layout';
import LayoutTwo from './components/pageLayout/LayoutTwo';
import Regulation from './components/regulation/Regulation';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Regulation/>
      <CustomerReviewSection/>
      <LayoutTwo/>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Nav from './Components/homePages/Nav';
import OfferBar from './Components/homePages/OfferBar';
import Hero from './Components/homePages/Hero';
import FeaturedCollection from './Components/homePages/FeaturedCollection';
import SaleCollection from './Components/homePages/SaleCollection';
import Footer from './Components/homePages/Footer';
import PageBuyCart from './Components/PagesReusable/PageBuyCart';
import PageLoader from './Components/Loader'; // Ensure consistency in naming


function App() {
  const [loading, setLoading] = useState(true); // Declare loading state

  // Simulate loading (e.g., fetching data, etc.)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader /> // Consistent naming with the import
      ) : (
        <>
          {/* Main content */}
          <Hero />
          <FeaturedCollection />
          <SaleCollection />
        </>
      )}
    </>
  );
}

export default App;

import UserProfile from './components/UserProfile';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile 
  name="Alice" 
  age={25} 
  bio="Loves hiking and photography" 
/>

      <Footer />
    </>
  );
}

export default App;

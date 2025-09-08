// src/App.jsx
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <div>
      <Header />
      <MainContent />
      
      {/* Provide context to ProfilePage */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <Counter />
      <Footer />
    </div>
  );
}

export default App;

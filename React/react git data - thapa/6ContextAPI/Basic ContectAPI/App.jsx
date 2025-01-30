const { createContext, useContext, useState } = require("react");

// Create Context
const UserContext = createContext();

// Welcome Banner Component
function WelcomeBanner() {
  const { userName, userLevel } = useContext(UserContext);

  return (
    <div className="welcome-banner">
      <h2>Welcome, {userName}!</h2>
      <p>Membership Level: {userLevel}</p>
    </div>
  );
}

// User Management Panel
function UserPanel() {
  const { userName, userLevel, setUserName, setUserLevel } =
    useContext(UserContext);

  return (
    <div className="panel">
      <h3>Update Profile</h3>
      <div>
        <label>
          Name:
          <br />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Level (1-3):
          <br />
          <input
            type="number"
            min="1"
            max="3"
            value={userLevel}
            onChange={(e) => {
              const value = Math.min(
                3,
                Math.max(1, parseInt(e.target.value) || 1)
              );
              setUserLevel(value);
            }}
          />
        </label>
      </div>
    </div>
  );
}

// Offers Panel
function OffersPanel() {
  const { userName, userLevel } = useContext(UserContext);
  const discount = userLevel * 5;

  return (
    <div className="panel">
      <h3>Your Special Offers</h3>
      <p>Current Benefits for {userName}:</p>
      <p className="discount">Membership Discount: {discount}%</p>
      <ul>
        <li>Free shipping over $50</li>
        <li>Birthday special bonus</li>
      </ul>
    </div>
  );
}

// Admin Section
function AdminSection() {
  return (
    <div className="admin-section">
      <h2>Account Management</h2>
      <div className="panels-container">
        <UserPanel />
        <OffersPanel />
      </div>
    </div>
  );
}

// Main App Component
export function App() {
  const [userName, setUserName] = useState("John Doe");
  const [userLevel, setUserLevel] = useState(1);

  return (
    <UserContext.Provider
      value={{ userName, userLevel, setUserName, setUserLevel }}
    >
      <div className="app">
        <WelcomeBanner />
        <AdminSection />
      </div>
    </UserContext.Provider>
  );
}

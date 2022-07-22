import React, { useContext } from "react";
import Header from "./Header";
import { UserProvider } from "../context/user";
import { ThemeContext } from "../context/theme";
import Profile from "./Profile";


function App() {
  // const [theme, setTheme] = useState("dark");
  const { theme } = useContext(ThemeContext)

  return (
    <main className={theme}>
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>      
    </main>    
  );
}

export default App;

import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ToDo from "./components/ToDo/ToDo.jsx";

function App() {

  const [isDark, setIsDark] = useState(true);

  const changeTheme = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    isDark? (document.querySelector('html').classList.remove('light'),
            document.querySelector('html').classList.add('dark'))
          :
            (document.querySelector('html').classList.remove('dark'),
            document.querySelector('html').classList.add('light'))
    
  },[isDark])

  return (
    <ThemeProvider value={{isDark, changeTheme}}>
      <ToDo />
    </ThemeProvider>
  );
}

export default App;

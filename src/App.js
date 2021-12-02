import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import UsersSection from './components/UsersSection';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Lighttheme = createTheme({
  palette: {
    background: {
      default: "white"
    }
  },
});


const Darktheme = createTheme({
  palette: {
    background: {
      default: "black"
    },
    text: {
      primary: "#ffffff"
    },
  }
})


function App() {
  const [light, setLight] = React.useState(true);
  return (
    <div>
      <ThemeProvider theme={light ? Lighttheme : Darktheme} >
        <CssBaseline />
        <div style={{ width: "400px", height: "600px", margin: "auto", marginTop: "15px" }}>

          My Dashboard
          <Switch {...label} onClick={() => setLight(prev => !prev)} />
          <UsersSection />
        </div>
      </ThemeProvider>
    </div>

  );


}

export default App;

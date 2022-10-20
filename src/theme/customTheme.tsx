import { createTheme } from '@mui/material/styles';
import palette from './palette';

const customTheme = createTheme({
  palette: palette,
  components: {
    // // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem'
        }
      },
      defaultProps: {
        // The props to change the default for.
        variant: 'contained' // No more ripple, on the whole application 💣!
      }
    }
  }
});

export default customTheme;

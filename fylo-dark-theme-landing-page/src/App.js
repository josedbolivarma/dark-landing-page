import {makeStyles} from "@material-ui/core"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Home />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'hsl(218, 28%, 13%)',
    color: 'hsl(0, 0%, 100%)'
  }
}))

export default App;

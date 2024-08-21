
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import  React , {useState} from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode]= useState(`light`);
  const [alert, setalert] = useState(null);

  const showalert = (message,type) => {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },2000);

  }

  const toggleMode = () => {
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enabled","success")
    }
  }
  return (
    <> 
      <Navbar title = "Textutils" aboutText = "About Us" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Textform heading = " Tution - Word counter,Character Countrer,Remove extra spaces " mode = {mode} showalert = {showalert} />
      </div>
    </>
  );
}

export default App;

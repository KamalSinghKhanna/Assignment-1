import './App.css';
import Timer from './component/Timer';
import {signInWithGoogle} from "./Firebase";
import {isLoggedIn} from "./Firebase"
function App() {
  
  return (
  
     <>
     
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
     <div class="d-flex">
     <img class="rounded-circle" src={localStorage.getItem("profilePic")} />
     <p class="mt-4 mx-2 text-white">{localStorage.getItem("name")}</p>
      
     </div>
    
    </div>
    <button class='btn btn-danger mx-5' onClick={signInWithGoogle}>
      {!isLoggedIn ? "Sign In" : "Sign Out"}
     </button>
  </div>
</nav>
    
    <Timer />  
    </>
  );
}

export default App;

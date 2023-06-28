import './App.css';
import Greeting from './components/greeting'
import Logo from './components/Logo';
import Counter from './components/counter'
function App() {
  const Username = "Bryan";
  return (
<div class="center">
  <Greeting name={Username}/>
  <Logo />
  <Counter />
</div>
  );
}

export default App;

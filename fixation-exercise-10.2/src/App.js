import logo from './logo.svg';
import './App.css';
import Image from './Image';
const staringCat = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
function App() {
  return (
    <div>
      <Image source={staringCat} alternativeText="Cute cat staring"/>
    </div>
  );
}

export default App;

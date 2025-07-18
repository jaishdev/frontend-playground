
import './App.css'
import CubeScene from './components/accordian/CubeScene';


function MyBox() {
return (
  <mesh>
    <boxGeometry />
    <meshStandardMaterial color="hotpink" />
  </mesh>
);
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <CubeScene/>
    </>
  )
}

export default App

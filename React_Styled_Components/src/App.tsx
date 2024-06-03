import styled from "styled-components"
import Cabecalho from "./components/Head"
import EstilosGlobais from "./components/GlobalStyles"
import SideBar from "./components/SideBar"

const BackgroundGradient = styled.div`
    background: linear-gradient(#041833 100%,#04244F 100%,#154580 100%);
    width : 100% ;
    min-height : 100vh;
  `
function App() {
  return (

    <BackgroundGradient>
      <EstilosGlobais />
      <Cabecalho />
      <SideBar></SideBar>
    </BackgroundGradient>

  )
}

export default App

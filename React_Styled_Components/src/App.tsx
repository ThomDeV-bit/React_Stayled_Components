import styled from "styled-components"
import Cabecalho from "./components/Head"
import EstilosGlobais from "./components/GlobalStyles"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import fotos from './picturs.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"



const BackgroundGradient = styled.div`
    background: linear-gradient(#041833 100%,#04244F 100%,#154580 100%);
    width : 100% ;
    min-height : 100vh;
  `

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;

`

const MainContainer = styled.main`
  width : 100%;    
  display: flex;
  justify-content: space-between;

`
const GaleriaSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`


const App = () => {
  const [pictureOfGallery, setPictureOfGallery] = useState(fotos)
  const [selectedPicture, setSelectedPicture] = useState(null)


  return (

    <BackgroundGradient>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <SideBar />
          < GaleriaSection>
            <Banner />
            <Galeria
              pictures={pictureOfGallery}
              onSelectPicture={(foto: any) => setSelectedPicture(foto)}
            />
          </GaleriaSection>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={selectedPicture} onClose={() => setSelectedPicture(selectedPicture)}></ModalZoom>
    </BackgroundGradient >

  )
}

export default App

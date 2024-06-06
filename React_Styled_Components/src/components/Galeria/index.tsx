import styled from "styled-components"
import Populares from "./Popular"
import Tags from "./Tags"
import Title from "./Title"
import Imagem from "./Image"
interface Pictures {
    titulo: string,
    fonte: string,
    path: string,
    id: string,
    tagId: number,
    alt: string
}

interface Props {
    pictures: Pictures[]
    onSelectPicture: (foto: Pictures) => void

}
const GaleriaContainer = styled.div`
    display: flex;
    margin-right: 25px;

`
const SecaoFluida = styled.section`
    display: flex;
    flex-direction: column;
`

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`
const Galeria = ({ pictures, onSelectPicture, }: Props) => {
    return (
        <>
            <Tags></Tags>
            <GaleriaContainer>
                <SecaoFluida>
                    <Title>Navegue Pela Galeria</Title>
                    <ImagensContainer>
                        {pictures.map(picture => <Imagem
                            expanded={false}
                            onZoom={onSelectPicture}
                            key={picture.id}
                            foto={picture}
                        />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>

    )
}

export default Galeria
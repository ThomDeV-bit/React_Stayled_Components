import styled from "styled-components"
import Populares from "./Populares"
import Tags from "./Tags"
import Title from "./Title"
import Imagem from "./Image"
interface Fotos {
    titulo: string,
    fonte: string,
    path: string,
    id: string,
    tagId: number,
    alt: string
}

interface Props {
    fotos: Fotos[]
    aoFotoSelecionada: (foto: Fotos) => void
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
const Galeria = ({ fotos, aoFotoSelecionada }: Props) => {
    return (
        <>
            <Tags></Tags>
            <GaleriaContainer>
                <SecaoFluida>
                    <Title>Navegue Pela Galeria</Title>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem
                            expandida={false}
                            aoZoomSolicitado={aoFotoSelecionada}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>

    )
}

export default Galeria
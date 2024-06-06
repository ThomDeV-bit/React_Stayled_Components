import styled from "styled-components"
import Title from "../Title"
import populares from '../../../popular.json'


const PopularesImagen = styled.figure`
    width : 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > img {
        max-width : 100%;
        border-radius: 20px;    
    }
`
const PopularesContainer = styled.div`
    display: flex;
    align-items : center;
    flex-direction: column;
`

const PopularesBotoao = styled.button`
    background-color : transparent;
    color: white;
    border-color : #C98CF1;
    border-radius : 10px;
    width : 212px;
    padding : 10px;
    cursor: pointer;
`

const Populares = () => {
    return (
        <PopularesContainer>
            <Title $align="center">Populares</Title>
            <PopularesImagen>
                {populares.map(foto =>
                    <img src={foto.path} key={foto.id}></img>
                )}
            </PopularesImagen>
            <PopularesBotoao>Ver mais</PopularesBotoao>
        </PopularesContainer>

    )
}

export default Populares
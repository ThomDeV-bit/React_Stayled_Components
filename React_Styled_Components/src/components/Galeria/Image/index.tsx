import styled from "styled-components";
import BotaoIcone from "../../IconButton";
import { useEffect, useState } from "react";
import IconButton from "../../IconButton";

interface Fotos {
    titulo: string,
    fonte: string,
    path: string,
    id: string,
    tagId: number
    alt: string
}

interface Props {
    foto: Fotos
    onZoom: (fotos: Fotos) => void
    expanded: Boolean

}

interface PropsImage {
    $expanded: Boolean
}


const Figure = styled.figure<PropsImage>`
    width: ${(props: PropsImage) => (props.$expanded ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
       
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
`
const Imagem = ({ foto, expanded = false, onZoom }: Props) => {

    const [favorite, setFavorite] = useState(false)
    const addFavorito = () => {
        if (favorite == true) {
            setFavorite(false)
        } else {
            setFavorite(true)
        }
    }

    return (<Figure $expanded={expanded} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Footer>
                <h4>{foto.fonte}</h4>
                <IconButton onClick={() => addFavorito()} >
                    {!favorite ?
                        <img src="/icones/favorite_outline.png"></img>
                        : <img src="/icones/favorito.png"></img>
                    }
                </IconButton>
                {!expanded && <IconButton aria-hidden={expanded} onClick={() => onZoom(foto)}>
                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                </IconButton>}
            </Footer>
        </figcaption>
    </Figure>)
}

export default Imagem


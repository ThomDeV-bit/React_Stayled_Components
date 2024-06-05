import styled from "styled-components"
import Imagem from "../Galeria/Image"
import BotaoIcone from "../BotaoIcone"
import { useEffect, useState } from "react"

interface Fotos {
    titulo: string,
    fonte: string,
    path: string,
    id: string,
    tagId: number
    alt: string

}

interface Props {
    foto: Fotos | null
    aoZoomSolicitado?: any
    expandida?: Boolean
    aoFechar: () => void
}

const Overlay = styled.div`
    background-color: transparent;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const ModalZoom = ({ foto }: Props) => {

    const [modalAberto, setModalAberto] = useState(false)

    useEffect(() => {
        if (foto) {
            setModalAberto(true)
        }
    }, [foto])

    const modalFechado = () => {
        setModalAberto(false)
    }
    return (
        <>
            {foto && modalAberto &&
                <>
                    <Overlay>
                        <DialogEstilizado open={!!foto} >
                            <Imagem foto={foto} expandida={true} key={foto.id}></Imagem>
                            <form method="dialog">
                                <BotaoIcone onClick={modalFechado}>
                                    <img src="/icones/close.png" alt="icone de fechar"></img>
                                </BotaoIcone >
                            </form>
                        </DialogEstilizado>
                    </Overlay>
                </>
            }
        </>

    )
}

export default ModalZoom
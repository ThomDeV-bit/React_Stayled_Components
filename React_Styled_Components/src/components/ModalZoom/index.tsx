import Imagem from "../Galeria/Image"

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
    aoZoomSolicitado?: any
    expandida?: Boolean
}
const ModalZoom = ({ foto, aoZoomSolicitado, expandida }: Props) => {
    console.log(!!foto)
    return (
        <>
            {foto && <dialog open={!!foto}>
                <Imagem foto={foto} aoZoomSolicitado={foto} expandida={true} key={foto.id}></Imagem>
                <form method="dialog">
                    <button type="submit">ok</button>
                </form>
            </dialog>}
        </>

    )
}

export default ModalZoom
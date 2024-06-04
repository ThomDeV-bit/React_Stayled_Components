import styled from "styled-components"

interface Props {
    iconeAtivo: string
    iconeInativo: string
    ativo: Boolean
    text: string
}

interface ColorProps {
    $ative: Boolean
}

const StylezedItemsLists = styled.li<ColorProps>`

    color : white;
    font-size: 22px;
    line-height: 20px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${(props: ColorProps) => props.$ative ? '#7B78E5' : '#D9D9D9'};
    display: flex;
    align-items: center;
    gap: 22px;
`


const ItemNavigation = ({ text, iconeAtivo, iconeInativo, ativo = false }: Props) => {
    return (
        <StylezedItemsLists $ative={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt=""></img>
            {text}
        </StylezedItemsLists>

    )
}

export default ItemNavigation
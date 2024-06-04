import styled from "styled-components"

interface Props {
    iconeAtivo: string
    iconeInativo: string
    ativo: Boolean
    text: string
}

interface ColorProps {
    ativo : Boolean
}

const StylezedItemsLists = styled.li<ColorProps>`
    color : white;
    font-size: 24px;
    line-height: 10px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${(props: ColorProps) => props.ativo ? '#7B78E5' : '#D9D9D9'};
    display: flex;
    align-items: center;
    gap: 22px;
`


const ItemNavigation = ({ text, iconeAtivo, iconeInativo, ativo = false }: Props) => {
    return (
        <StylezedItemsLists ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt=""></img>
            {text}
        </StylezedItemsLists>

    )
}

export default ItemNavigation
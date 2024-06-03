import styled from "styled-components"
import Input from "../Input"

const HeaderEstyle = styled.header`
    padding : 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
        height: 65px;
        margin-left: 30px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstyle>
            <img src='/images/logo.png' alt="" />
            <Input text="O que você procura?"></Input>
        </HeaderEstyle>
    )
}
export default Cabecalho
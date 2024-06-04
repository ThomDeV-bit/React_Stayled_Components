import styled from "styled-components"
interface Props {
    text: string
};
const StylezedContainer = styled.div`
    position: relative;
    display: inline-block;
    right: 30px;
    width: 50%;
`;


const StylezedTextField = styled.input`
    height: 56px;
    padding: 12px 16px;
    right: 100px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconLupa = styled.img`
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 32px;
    height: 32px;
    cursor:pointer;
`

const Input = ({ text }: Props) => {
    return (
        <StylezedContainer>
            <StylezedTextField placeholder={text} />
            <IconLupa src='/images/search.svg' alt="ícone de lupa" />
        </StylezedContainer>
    )
}

export default Input
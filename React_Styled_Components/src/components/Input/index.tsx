import styled from "styled-components"
interface Props {
    text: string
};
const InputStyle = styled.input`
    width: 602px;
    height : 56px;
    margin-right: 30px;
    background-color : transparent;
    color: black;
    border-color: #C98CF1;
    border-radius : 10px;
    background: url("/images/search.svg");
    background-repeat: no-repeat;
    background-size: 38px 38px;
    background-position: right;
`;

const Input = ({ text }: Props) => {
    return (
        <InputStyle placeholder={text}></InputStyle>
    )
}

export default Input
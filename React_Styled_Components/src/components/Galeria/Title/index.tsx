import styled from "styled-components";

interface Props {
    $align?: string
}

const Title = styled.h2<Props>`
    color: #7B78E5;
    font-size: 32px;
    text-align: ${(props: Props) => props.$align ? props.$align : 'left'};
`

export default Title
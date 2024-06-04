import styled from "styled-components"

const BannerStylezed = styled.figure`
    opacity: 90%;
    margin-top: 0px;
    height: 328px;
    margin-right: 30px;
    border-radius: 20px;
    background-image: url("/images/Foto-destaque.png");
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    background-position: center;
    display: flex;

    `


const Label = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 36px;
`


const Banner = () => {
    return (
        <BannerStylezed>
            <Label>A galeria mais completa de fotos do espaço!</Label>
        </BannerStylezed>
    )
}

export default Banner
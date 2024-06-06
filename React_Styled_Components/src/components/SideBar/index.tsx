import styled from "styled-components"
import ItemNavigation from "./ItemNavigation"

const StylizedList = styled.ul`
    list-style : none;
    padding:0;
    margin: 0;
    width: 200;
`


const SideBar = () => {
    return (
        <aside>
            <nav>
                <StylizedList>
                    <ItemNavigation
                        ativo={true}
                        iconeAtivo="/images/home-ativo.png"
                        iconeInativo="/images/home-inativo.png"
                        text={"Home"}>
                    </ItemNavigation>
                    <ItemNavigation
                        ativo={true}
                        iconeAtivo="/images/mais-vistas-ativo.png"
                        iconeInativo="/images/mais-vistas-inativo.png"
                        text={"Mais Vistas"}>
                    </ItemNavigation>
                    <ItemNavigation
                        ativo={true}
                        iconeAtivo="/images/mais-curtidas-ativo.png"
                        iconeInativo="/images/mais-curtidas-inativo.png"
                        text={"Mais Curtidas"}>
                    </ItemNavigation>
                    <ItemNavigation
                        ativo={true}
                        iconeAtivo="/images/novas-ativo.png"
                        iconeInativo="/images/novas-inativo.png"
                        text={"Novas"}>
                    </ItemNavigation>
                    <ItemNavigation
                        ativo={true}
                        iconeAtivo="/images/surpreenda-me-ativo.png"
                        iconeInativo="/images/surpreenda-me-inativo.png"
                        text={"Surpreenda-me"}>
                    </ItemNavigation>
                </StylizedList>
            </nav>
        </aside>


    )
}


export default SideBar
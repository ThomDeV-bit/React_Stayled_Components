import styled from "styled-components"

const StylizedList = styled.ul`
    list-style : none;
    padding:0;
    margin: 0;
   width: 212;
`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            Inicio
                        </a>

                    </li>
                    <li>
                        <a href="">
                            Mais Vistas
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Mais Curtidas
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Novas
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Surprenda-me
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}


export default SideBar
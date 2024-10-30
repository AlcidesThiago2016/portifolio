import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";

import { Descricao, BotaoTema, SidebarContainer } from "./styles";

type Props = {
  trocaTema: () => void;
}

/* eslint-disable jsx-a11y/alt-text */
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Alcides Thiago</Titulo>
      <Paragrafo fontSize={16}>
        AlcidesThiago2016
      </Paragrafo>
      <Descricao fontSize={12}>Desenvolvedor FullStack Java</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;

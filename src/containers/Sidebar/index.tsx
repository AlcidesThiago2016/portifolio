import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";

import { Descricao, BotaoTema, SidebarContainer } from "./styles";

/* eslint-disable jsx-a11y/alt-text */
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Alcides Thiago</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        AlcidesThiago2016
      </Paragrafo>
      <Descricao fontSize={12}>Desenvolvedor FullStack Java</Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;

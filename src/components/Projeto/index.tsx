import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import { Card, LinkBotao } from './styles';

export const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <LinkBotao>Vizualizar</LinkBotao>
    </Card>
  );
};

export default Projeto;

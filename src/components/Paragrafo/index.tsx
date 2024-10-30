import { P } from "./styles";

export type Props = {
  children: string;
  fontSize?: number
};

const Paragrafo = ({ children, fontSize }: Props) => (
  <P fontSize={fontSize}>{children}</P>
);

export default Paragrafo;


/* eslint-disable jsx-a11y/alt-text */
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GitHubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem
      officia, quo repellendus exercitationem in velit alias error asperiores id
      sit, animi accusamus, quos quisquam cumque fugit earum nemo ad.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFTdcW2W9NofAWpuWmQZOjY8RTyOLJ6_9AQ&s"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=alcidesthiago2016&layout=compact&langs_count=7&theme=dark"/>
      <img src="https://keyholesoftware.com/wp-content/uploads/Spring-Boot.png"/>
    </GitHubSecao>
  </section>
);

export default Sobre;

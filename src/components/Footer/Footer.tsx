import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { FooterContainer } from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <p>Paulo César Fordelone - Web developer & Digital Designer</p>
        <div>
          <GithubLogo size={32} />
          <LinkedinLogo size={32} />
        </div>
      </div>
    </FooterContainer>
  );
};

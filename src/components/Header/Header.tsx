import WhatsAppEditorLogo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={WhatsAppEditorLogo} alt="Logo WhatsApp Editor" />
    </HeaderContainer>
  );
};

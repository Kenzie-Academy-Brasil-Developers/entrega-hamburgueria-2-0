import { useHistory } from "react-router-dom";
import { Button, MainContainer, RedFont } from "./styles";

const Home = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const goToSignup = () => {
    history.push("/signup");
  };

  return (
    <MainContainer>
      <h1>
        Kenzie <RedFont>burger</RedFont>
      </h1>
      <div>
        <Button onClick={goToLogin}>Login</Button>
        <Button onClick={goToSignup}>Cadastro</Button>
      </div>
    </MainContainer>
  );
};

export default Home;

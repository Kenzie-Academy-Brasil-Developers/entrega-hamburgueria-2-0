import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import {
  Button,
  FormContainer,
  FormInput,
  InfoContainer,
  InfoDisplay,
  MainContainer,
  RedFont,
} from "./styles";

interface UserData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserData) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormInput>
          <input placeholder=" " {...register("email")} />
          <span className="placeholder">Email *</span>
          <span>{errors.email?.message}</span>
        </FormInput>
        <FormInput>
          <input type="password" placeholder=" " {...register("password")} />
          <span className="placeholder">Senha *</span>
          <span>{errors.password?.message}</span>
        </FormInput>
        <Button type="submit">Entrar</Button>
      </FormContainer>
      <InfoContainer>
        <h1>
          Kenzie <RedFont>Burger</RedFont>
        </h1>
        <InfoDisplay />
      </InfoContainer>
    </MainContainer>
  );
};

export default LoginForm;

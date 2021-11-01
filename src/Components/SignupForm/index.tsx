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
import { useHistory } from "react-router-dom";

interface UserData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Email obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: UserData) => {
    api
      .post("/signup", data)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContainer>
      <InfoContainer>
        <h1>
          Kenzie <RedFont>Burger</RedFont>
        </h1>
        <InfoDisplay />
      </InfoContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormInput>
          <input placeholder=" " {...register("name")} />
          <span className="placeholder">Nome *</span>
          <span>{errors.name?.message}</span>
        </FormInput>
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
        <FormInput>
          <input
            type="password"
            placeholder=" "
            {...register("confirmPassword")}
          />
          <span className="placeholder">Confirme a senha *</span>
          <span>{errors.confirmPassword?.message}</span>
        </FormInput>
        <Button type="submit">Cadastrar-se</Button>
      </FormContainer>
    </MainContainer>
  );
};

export default SignupForm;

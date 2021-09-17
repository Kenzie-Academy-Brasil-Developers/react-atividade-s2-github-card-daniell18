import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import logo_github from "./logo-github.png";
import Search from "../Search";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    color: "#F0F0F0",
  },
  //a
  input: {
    width: "250px",
    marginBottom: "5vh",
    height: "4vh",
  },
  form: {
    marginTop: "2vh",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    height: "5vh",
    borderRadius: "10px",
  },
  img: {
    textAlign: "center",
    width: "300px",
  },
}));
const Form = () => {
  const { handleSubmit } = useForm({});
  const [search, setSearch] = useState("");
  const [istrue, setIsTrue] = useState(false);
  const [repo, setRepo] = useState("");
  const classe = useStyles();
  const onHandleSubmit = () => {
    setRepo(search);
    setIsTrue(true);
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
        className={classe.root}
      >
        {istrue ? (
          <div>
            <Search repo={repo} setIstrue={setIsTrue} setSearch={setSearch} />
          </div>
        ) : (
          <Grid item>
            <div className={classe.logo}></div>
            <img className={classe.img} src={logo_github} alt="github" />
            <form
              className={classe.form}
              onSubmit={handleSubmit(onHandleSubmit)}
            >
              <input
                placeholder="Digite o repositorio que deseja acessar"
                className={classe.input}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button
                color={"primary"}
                className={classe.button}
                variant={"contained"}
                type="submit"
              >
                Pesquisar
              </Button>
            </form>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default Form;

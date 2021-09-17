import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    color: "#F0F0F0",
  },
  button: {
    color: "#F0F0F0",
    marginTop: "5vh",
    padding: "10px",
  },
  paper: {
    backgroundColor: "black",
    color: "#F0F0F0",
    padding: "10px",
    textAlign: "center",
  },
  img: {
    width: "50px",
  },
  erro: {
    textAlign: "center",
    color: "black",
  },
}));
const Search = ({ repo, setIstrue, setSearch }) => {
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((Response) => Response.json())
      .then((Response) => setResult(Response));
  }, [repo]);
  const handleClick = () => {
    setIstrue(false);
    setSearch("");
  };
  const classe = useStyles();
  const [result, setResult] = useState("");
  console.log(result);
  return (
    <>
      {result.id ? (
        <Grid
          className={classe.root}
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid item xs={6}>
            <Paper className={classe.paper}>
              <img
                className={classe.img}
                src={result.owner.avatar_url}
                alt="avatar"
              />
              <h3>{result.full_name}</h3>
              <p>{result.description}</p>
              <details>
                <a href={result.svn_url}>Clique aqui</a>
                <summary>
                  Para ter acesso ao repositorio do {result.name}
                </summary>
              </details>
              <Button
                variant={"contained"}
                color={"primary"}
                onClick={() => handleClick()}
                className={classe.button}
              >
                Pesquisar novo repositorio
              </Button>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Grid
          className={classe.erro}
          direction="column"
          container
          justifyContent="center"
        >
          <h3>{result.message}</h3>
          <p>Repositorio invalido pesquise novamente </p>
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={() => handleClick()}
            className={classe.button}
          >
            Pesquisar novamente
          </Button>
        </Grid>
      )}
    </>
  );
};
export default Search;

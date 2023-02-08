import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUnidades from "../hooks/useUnidades";
import { TextField } from "@mui/material";

export default function Table() {
  const { state } = useParams();
  const {
    filteredUnidades,
    filterUnidadesByState,
    filterUnidadesByNameUnidade,
    unidades
  } = useUnidades();
  const [inputText, setInputText] = useState("");
  const pattern = /^[a-zA-Z\s]*$/;

  useEffect(() => {
    filterUnidadesByState(state);
  }, []);

  let inputHandler = (text) => {
    // convert input text to lower case
    let upperCase = text.target.value.toUpperCase();
    setInputText(upperCase);
    // if we don't have an input, then return the original array
    filterUnidadesByNameUnidade(upperCase, state);

  };

  const isValidChar = (char) => {
    if (pattern.test(inputText) || inputText === "") {
      return true;
    }
    return false;
  };

  useEffect(()=> {
    console.log(filteredUnidades)

  }, [filteredUnidades])


  return (
    <div style={{ margin: "25px" }}>
      <h1>Unidades - {state}</h1>
      <div id="search-bar-container" className="py-4 text-dark">
        <div className="search" style={{ width: "100%" }}>
          <TextField
            id="outlined-basic-error-helper"
            onChange={inputHandler}
            variant="filled"
            fullWidth
            label="Digite o nome da unidade aqui"
          />
          <span>{isValidChar() ? "" : "Digite apenas letras."}</span>
        </div>
      </div>
      <table className="table table-bordered table-light">
        <thead className="">
          <tr>
            <th scope="col">ANYDESK</th>
            <th scope="col">NOME</th>
            <th scope="col">MUNICÍPIO</th>
            <th scope="col">LOCALIZAÇÃO</th>
            <th scope="col">CONTATO</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredUnidades.map((unidade, index) => (
              <tr key={index}>
                <th scope="row">{unidade.ANYDESK}</th>
                <th scope="row">{unidade.UNIDADES}</th>
                <th scope="row">{unidade.MUNICIPIOS}</th>
                <th scope="row"><a target="_blank" href={unidade.LOCALIZACAO}>Maps</a></th>
                <th scope="row"><a target="_blank" href={unidade.CONTATO}>LINK</a></th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

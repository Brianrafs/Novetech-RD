import React, { useEffect, useState } from "react";

export default function useUnidades() {
  const [unidades, setUnidades] = useState([]);
  const states = ["PB", "SP", "PE", "RJ", "CE", "RN", "MA", "PI", "BA", "PA", "AM", "GO", "MT", "MS", "DF", "SC", "RS", "PR", "MG", "ES", "RO", "AC", "RR", "AP", "AL", "SE", "TO"];
  const [listUnidades, setListUnidades] = useState([]);
  const [filteredUnidades, setFilteredUnidades] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/stateFlags")
    .then((res) => res.json())
    .then((data) => setUnidades(data));
  }, []);

  useEffect(() => {
    setListUnidades(states
    .map(state => unidades.find(object => object.UF == state))
    .filter(state => state !== undefined))

  }, [unidades]);

  const filterUnidadesByState = (input) => {
    fetch("http://localhost:3000/stateFlags")
    .then((res) => res.json())
    .then((data) => {

      setFilteredUnidades(data.filter((unidade) => unidade.UF == input))
    })

  }

  const filterUnidadesByNameUnidade = (input) => {
   
      if(input != "") {

        setFilteredUnidades(unidades.filter((unidade) => unidade.UNIDADES.toUpperCase().includes(input)))
      }
    

  }

  return { listUnidades, filterUnidadesByState, filterUnidadesByNameUnidade, unidades, filteredUnidades };
}

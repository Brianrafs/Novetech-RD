import React, { useCallback, useEffect, useState } from "react";

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

  const filterUnidadesByNameUnidade = useCallback((input, state) => {
    const filterData =
        unidades !== undefined && input.length > 0
          ? unidades.filter(value =>
              value.UNIDADES.toUpperCase().includes(input.toUpperCase()),
            )
          : [];

          setFilteredUnidades(input.length > 0 ? filterData : unidades.filter((unidade) => unidade.UF == state));
  }, [setFilteredUnidades]);

  return { listUnidades, filterUnidadesByState, filterUnidadesByNameUnidade, unidades, filteredUnidades };
}

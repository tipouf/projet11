import { useMemo } from "react";
import Logements from "../data/logements.json";

const useFetchLogements = () => {
  return useMemo(() => Logements, []);
};

const useFetchLogementById = (id) => {
  return useMemo(() => Logements.find((logement) => logement.id === id), [id]);
};

export { useFetchLogements, useFetchLogementById }
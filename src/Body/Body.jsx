import * as React from 'react';
import Cards from "../component/Cards";
import LineGraph from '../Graphs/LineGraph'

export default function Body() {
    const drawer = 240
  return (
  <>
   <Cards />
   <LineGraph />
  </>
  );
}

import React, {useState, useEffect} from 'react';
import Card from './Card';

function SearchList({ filteredComponents }) {
  const [counterList, setCounterList] = [0]




  const filtered = filteredComponents.map( (component, index) =>  <Card  component={component}/>); 
  // const filtered = filteredPersons.map( (component, index) =>  <Card key={component.id} component={component} />); 

  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;
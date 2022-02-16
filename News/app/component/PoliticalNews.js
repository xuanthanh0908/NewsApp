import React from 'react';
import VerticalList from './List/VerticalList';
export default function PoliticalNews({data}) {
  return (
    <VerticalList title = "Political News" data={data}/>
  );
}

import React from 'react';
import VerticalList from './List/VerticalList';
export default function EntertainmentNews({data}) {
  return (
    <VerticalList title = "Entertainment News" data={data}/>
  );
}

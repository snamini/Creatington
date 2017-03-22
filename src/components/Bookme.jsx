import React from 'react';
import { Button } from 'react-materialize';

var style = {
  color: "#FFF"
}

export default class Bookme extends React.Component {

  render() {
    return (
    <Button><a style={style} href="javascript:void( window.open( 'https://form.jotform.us/70796806968174', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) ">Book Me</a></Button>
    );
  }
}

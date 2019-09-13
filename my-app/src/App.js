import React, { Component } from "react";
import { SheetsuRead } from './components/wiwi.js'
import { Button } from './components/Button.js'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      categories: []
    };
  }
  render() {
    return (
      <div className="ctn" >
        <div className="ctn-btn">
          <Button title="Generar banners" />
          <Button title="Generar categorías" />
        </div>
        <SheetsuRead />
      </div>
    );
  }
}

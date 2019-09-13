// Read whole spreadsheet
import React from 'react';
import { Category } from './Category.js'
export class SheetsuRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      categories: []
    };
  }
  componentDidMount() {
    fetch("https://sheetsu.com/apis/v1.0su/08bd24a748e0")
      .then((response) => {
        return response.json();
      }).then((json) => {
        console.log('json', json)
        this.setState({ banners: json });
      });
    fetch("https://sheetsu.com/apis/v1.0su/42ab22f99056")
      .then((response) => {
        return response.json();
      }).then((json) => {
        console.log('json', json)
        this.setState({ categories: json });
      });
  }

  renderData() {
    console.log('this.state.data.map', this.state.data)
    return <Category data={this.state.categories} />
  }

  render() {
    return (
      <div className="wiwi">
        {this.renderData()}
      </div>
    );
  }
}


// Read first two rows from sheet "Sheet1"
//export class SheetsuRead extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://sheetsu.com/apis/v1.0su/42ab22f99056/sheets/Sheet1?limit=2")
//       .then((response) => {
//         return response.json()
//       }).then((json) => {
//         this.setState({ data: json });
//       });
//   }

//   renderData() {
//     return this.state.data.map((row) =>
//       <div key={row.id}>{row.name} {row.score}</div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         {this.renderData()}
//       </div>
//     );
//   }
// }
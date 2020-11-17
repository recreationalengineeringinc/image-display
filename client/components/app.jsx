import React from 'react';
import Image from './image.jsx';
import Info from './info.jsx';
import Colors from './colors.jsx';
import Sizes from './sizes.jsx';
import Checkout from './checkout.jsx';
import dummyData from '../dummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullInventory: [],
      name: '',
      colorDisplayed: '',
      category: '',
      mainDisplay: {},
      colors: [],
      colorsHex: {},
      imagePreview: [],
      imageDescription: []
    };

    this.getImagesByColor = this.getImagesByColor.bind(this);
    this.getColors = this.getColors.bind(this);
  }

  componentDidMount() {

    this.setState({
      fullInventory: dummyData,
      name: dummyData[0].name,
      colorDisplayed: dummyData[0].color,
      category: dummyData[0].category,
    }, () => {
      this.getImagesByColor(this.state.colorDisplayed);
      this.getColors();
    });
  }

  getImagesByColor (color) {
    let imageUrls = [];
    let imageDescription = [];
    let colors = [];
    this.state.fullInventory.forEach(data => {
      if (data.color === color) {
        imageUrls.push(data.url);
        imageDescription.push(data.description);
      }
    });
    this.setState({
      imagePreview: imageUrls,
      mainDisplay: {
        url: imageUrls[0],
        key: 0,
        description: imageDescription[0]
      }
    });
  }

  getColors () {
    let colors = [];
    let colorsHex = {};
    this.state.fullInventory.forEach(data => {
      if (colorsHex[data.color] === undefined) {
        colorsHex[data.color] = data.hex;
      }
      if (colors.indexOf(data.color) === -1) {
        colors.push(data.color);
      }
    });
    this.setState({
      colors: colors,
      colorHex: colorsHex
    }, () => {
      console.log('updated state: ', this.state);
    });
  }


  render() {
    return (
      <div>
        <h1>REI WEBSITE</h1>
        <div id='body'>
          <Image previews={this.state.imagePreview} showing={this.state.mainDisplay}/>
          <div id="info">
            <Info />
            <Colors />
            <Sizes />
            <Checkout />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
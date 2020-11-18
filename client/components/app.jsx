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
      info: {},
      colorDisplayed: '',
      priceDisplayed: 0,
      mainDisplay: {},
      colors: [],
      colorsHex: {},
      prices: {},
      imagePreview: [],
      imageDescription: []
    };

    this.getImagesByColor = this.getImagesByColor.bind(this);
    this.getColors = this.getColors.bind(this);
    this.padID = this.padID.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    let padding = '';
    while (padding.length + dummyData[0].id.toString().length < 6) {
      padding += '0';
    }

    this.setState({
      fullInventory: dummyData,
      info: {
        name: dummyData[0].name,
        category: dummyData[0].category,
        id: padding + dummyData[0].id,
        rating: dummyData[0].rating,
      },
      priceDisplayed: dummyData[0].price.toFixed(2),
      colorDisplayed: dummyData[0].color,

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
    let colorsPrices = {};
    this.state.fullInventory.forEach(data => {
      if (colorsHex[data.color] === undefined) {
        colorsHex[data.color] = data.hex;
      }
      if (colorsPrices[data.color] === undefined) {
        colorsPrices[data.color] = data.price;
      }
      if (colors.indexOf(data.color) === -1) {
        colors.push(data.color);
      }
    });
    this.setState({
      colors: colors,
      colorsHex: colorsHex,
      prices: colorsPrices
    });
  }

  padID (id) {
    let returnid = '';
    while (returnid.length + id.toString().length !== 6) {
      returnid += '0';
    }
    return Number(returnid + id);
  }

  addToCart (quantity, subtotal) {
    alert(`Zach add this to the cart:  \nitem: ${this.state.info.name}, \nProduct ID: #${this.state.info.id}, \ncolor: ${this.state.colorDisplayed}, \nquantity: ${quantity}, \nprice (per item): $${this.state.priceDisplayed}, \nsubtotal: $${subtotal}`);
  }

  render() {
    return (
      <div>
        <h1>REI WEBSITE</h1>
        <div id='body'>
          <Image previews={this.state.imagePreview} showing={this.state.mainDisplay}/>
          <div id="info">
            <Info price={this.state.priceDisplayed} info={this.state.info} color={this.state.colorDisplayed}/>
            <Colors colors={this.state.colors} hex={this.state.colorsHex} displayedColor={this.state.colorDisplayed} prices={this.state.prices}/>
            <div />
            <Sizes category={this.state.info.category}/>
            <Checkout price={this.state.priceDisplayed} checkout={this.addToCart}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
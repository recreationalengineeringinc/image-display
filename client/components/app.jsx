import React from 'react';
import Images from './imageDisplay/images.jsx';
import ClothingImages from './imageDisplay/ClothingImages.jsx';
import Info from './productInfo/info.jsx';
import Colors from './colorButtons/colors.jsx';
import Sizes from './productInfo/sizes.jsx';
import Checkout from './productInfo/checkout.jsx';
import '../icons';
const axios = require('axios');

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
      imageDescription: [],
      usOrEu: undefined,
      sizeSelected: undefined,
      hover: false,
      cursor: {
        x: undefined,
        y: undefined
      }
    };

    this.getImagesByColor = this.getImagesByColor.bind(this);
    this.getColors = this.getColors.bind(this);
    this.padID = this.padID.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseIn = this.handleMouseIn.bind(this);
  }

  componentDidMount() {

    let data = [];
    axios.get(`/api${window.location.pathname}images`)
      .then((response) => {
        data = response.data;

        let padding = '';
        while (padding.length + data[0].id.toString().length < 6) {
          padding += '0';
        }

        let usOrEu;
        if (data[0].category === 'shoes') {
          usOrEu = Math.random();
        }

        this.setState({
          fullInventory: data,
          info: {
            name: data[0].name,
            brand: data[0].brand,
            category: data[0].category,
            id: padding + data[0].id,
            rating: data[0].rating,
          },
          colorDisplayed: data[0].color,
          usOrEu: usOrEu
        }, () => {
          this.getImagesByColor(this.state.colorDisplayed);
          this.getColors();
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }

  getImagesByColor (color) {
    let imageUrls = [];
    let imageDescription = [];
    let colors = [];
    let price;
    this.state.fullInventory.forEach(data => {
      if (data.color === color) {
        imageUrls.push(data.url);
        imageDescription.push(data.description);
      }
      if (price === undefined) {
        price = data.price.toFixed(2);
      }
    });
    this.setState({
      priceDisplayed: price,
      imagePreview: imageUrls,
      imageDescription: imageDescription,
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
    alert(`Zach add this to the cart:  \nitem: ${this.state.info.name}, \nProduct ID: #${this.state.info.id}, \ncolor: ${this.state.colorDisplayed}, \nsize: ${this.state.sizeSelected} \nquantity: ${quantity}, \nprice (per item): $${this.state.priceDisplayed}, \nsubtotal: $${subtotal}`);
  }

  changeImage (key) {
    let index = Number(key);
    this.setState({
      mainDisplay: {
        key: key,
        url: this.state.imagePreview[index],
        description: this.state.imageDescription[index]
      }
    });
  }

  changeColor (key) {
    this.setState({
      colorDisplayed: this.state.colors[key]
    }, () => {
      this.getImagesByColor(this.state.colorDisplayed);
    });
  }
  selectSize (size) {
    this.setState({
      sizeSelected: size
    });
  }
  handleMouseOver(relX, relY, width, height) {
    console.log(width, height);
    this.setState({
      cursor: {
        x: relX,
        y: relY,
        width: width,
        height: height
      }
    });
  }

  handleMouseOut() {
    console.log('mouse out');
    this.setState({
      hover: false
    });
  }
  handleMouseIn() {
    console.log('mouse in');
    this.setState({
      hover: true
    });
  }

  render() {
    return (
      <div id='whole'>
        <div id='header'>
          <div id='header-content' style={this.state.info.category === 'clothing' ? {width: '1005px'} : {width: '1167px'}}>
            <h2><img class="svg-logo" src="//satchel.rei.com/media/img/header/rei-co-op-logo-white.svg" alt="Go to REI.com Home Page"></img></h2>
          </div>
        </div>
        <div id='body'>
          <div id='imageComp'>
            {this.state.info.category === 'clothing' ? <ClothingImages previews={this.state.imagePreview} showing={this.state.mainDisplay} changeImage={this.changeImage} hoverState={this.state.hover} mousePosition={this.state.cursor} hover={this.handleMouseOver} hoverOut={this.handleMouseOut} hoverIn={this.handleMouseIn}/> : <Images previews={this.state.imagePreview} showing={this.state.mainDisplay} changeImage={this.changeImage} hoverState ={this.state.hover} hoverIn={this.handleMouseIn} hoverOut={this.handleMouseOut} hover={this.handleMouseOver}/>}
          </div>

          <div id="info">
            {this.state.hover ? <div id={this.state.info.category === 'clothing' ? 'zoom-clothing' : 'zoom-cursor'}><img id='zoomed-image' src={this.state.mainDisplay.url} style={this.state.info.category === 'clothing' ? {top: (-2 * (this.state.cursor.y + ((0.516 * this.state.cursor.height) - 150))), right: ((this.state.cursor.x - ((1.4723 * this.state.cursor.width) - 84.945) ) * 2), height: (this.state.cursor.height * 2), width: (this.state.cursor.width * 2)} : {top: (-2 * (this.state.cursor.y + ((0.516 * this.state.cursor.height) - 133.74))), right: ((this.state.cursor.x - ((1.4723 * this.state.cursor.width) - 84.945) ) * 2), height: (this.state.cursor.height * 2), width: (this.state.cursor.width * 2)}}/></div> : null}
            <div id='details'>
              <Info price={this.state.priceDisplayed} info={this.state.info} color={this.state.colorDisplayed} icon={this.props.icon}/>
              <Colors colors={this.state.colors} hex={this.state.colorsHex} displayedColor={this.state.colorDisplayed} prices={this.state.prices} changeColor={this.changeColor}/>
              <div className='size'>
                <Sizes sizeSelected={this.state.sizeSelected} selectSize={this.selectSize} category={this.state.info.category} usOrEu={this.state.usOrEu}/>
              </div>
              <Checkout price={this.state.priceDisplayed} checkout={this.addToCart}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
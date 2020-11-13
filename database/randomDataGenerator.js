/* eslint-disable max-len */
/* eslint-disable no-plusplus */
// input:
// output: object filled with info
// constaints: none
// edge: images

// object constructor function

const faker = require('faker');

const categories = ['clothing', 'tents', 'shoes', 'sleeping bags', 'accessories'];
const rating = [0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.0, 4.25, 4.5, 4.75, 5];
const sizes = {
  clothing: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  tent: ['one-size'],
  shoes: {
    US: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5],
    EU: [41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 45.5, 46, 46.5, 47, 47.5, 48, 48.5, 49, 49.5],
  },
  'sleeping bags': ['long', 'regular', 'short'],
  accessories: ['one-size'],
};

function randomImageGenerator(category) {
  const images = {};
  const numberImages = Math.floor(Math.random() * 5);
  for (let i = 0; i < numberImages; i++) {
    images[i].url = `https://source.unsplash.com/1600x900/?${category}`;
    images[i].description = faker.commerce.productDescription();
  }
  return images;
}

function randomSizesGenerator(category) {
  const inventory = {};
  if (category === 'clothing') {
    for (let i = 0; i < sizes.clothing.length; i++) {
      inventory[sizes.clothing[i]] = Math.floor(Math.random() * 100);
    }
  } else if (category === 'tents' || category === 'accessories') {
    inventory[sizes.tents[0]] = Math.floor(Math.random() * 100);
  } else if (category === 'shoes') {
    if (Math.random() > 0.5) {
      for (let i = 0; i < sizes.shoes.US.length; i++) {
        inventory[sizes.shoes.US[i]] = Math.floor(Math.random() * 100);
      }
    } else {
      for (let i = 0; i < sizes.shoes.EU.length; i++) {
        inventory[sizes.shoes.EU[i]] = Math.floor(Math.random() * 100);
      }
    }
  } else if (category === 'sleeping bags') {
    for (let i = 0; i < sizes['sleeping bags'].length; i++) {
      inventory[sizes['sleeping bags'][i]] = Math.floor(Math.random() * 100);
    }
  }
  return inventory;
}

function randomInventoryGenerator(category) {
  const color = {};
  // maximum 6 colors
  const randomImages = randomImageGenerator(category);
  const randomSizes = randomSizesGenerator(category);
  const differentColors = Math.floor(Math.random() * 6);
  for (let i = 0; i < differentColors; i++) {
    const randomColor = faker.commerce.color();
    color[randomColor].price = faker.commerce.price();
    color[randomColor].images = randomImages;
    color[randomColor].sizes = randomSizes;
  }
  return color;
}

function seeder() {
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomInventory = randomInventoryGenerator(randomCategory);
  const product = {
    name: faker.commerce.productName(),
    rating: rating[Math.floor(Math.random() * rating.length)],
    category: randomCategory,
    colors: randomInventory,
  };

  return product;
}

module.exports.seeder = seeder;

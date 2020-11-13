// pay attention to sleeping bag prices -> different sizes
// ask group about one-size items -> size notes?

const dummmyData = [{
  id: 1,
  name: "Arc'teryx Andessa Down Jacket - Women's",
  rating: 3.75,
  category: 'clothing',
  colors: {
    'Dark Inertia': {
      price: 949.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/1/Dark+Inertia/image_1.jpeg',
          description: 'dark inertia',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/1/Dark+Inertia/image_2.jpeg',
          description: 'dark inertia',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/1/Dark+Inertia/image_3.jpeg',
          description: 'dark inertia',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/1/Dark+Inertia/image_4.jpeg',
          description: 'dark inertia',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/1/Dark+Inertia/image_5.jpeg',
          description: 'dark inertia',
        },
        6: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/1/Dark+Inertia/image_1.jpeg',
          description: 'dark inertia',
        },
      },
      sizes: {
        xs: 20,
        s: 15,
        m: 10,
        l: 4,
        xl: 0,
        xxl: 0,
        xxxl: 0,
      },
    },
  },
},
{
  id: 2,
  name: "Patagonia Nano Puff Insulated Hoddie - Men's",
  rating: 4.25,
  category: 'clothing',
  colors: {
    Black: {
      price: 249.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Black/image_1.jpeg',
          description: 'Model info: Height: 6\' 1" | Chest: 40" | Waist: 32" | Wearing size M',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Black/image_2.jpeg',
          description: 'Model info: Height: 6\' 1" | Chest: 40" | Waist: 32" | Wearing size M',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Black/image_3.jpeg',
          description: 'Model info: Height: 6\' 1.5" | Waist: 31" | Wearing size M',
        },

        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Black/image_4.jpeg',
          description: 'Model info: Height: 6\' 1.5" | Waist: 31" | Wearing size M',
        },
      },
      sizes: {
        xs: 0,
        s: 12,
        m: 13,
        l: 9,
        xl: 12,
        xxl: 15,
        xxxl: 0,
      },
    },
    'Forge Grey': {
      price: 249.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Forge+Grey/image_1.jpeg',
          description: 'forge grey',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Forge+Grey/image_2.jpeg',
          description: 'forge grey',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Forge+Grey/image_3.jpeg',
          description: 'forge grey',
        },

        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Forge+Grey/image_4.jpeg',
          description: 'forge grey',
        },
      },
      sizes: {
        xs: 0,
        s: 12,
        m: 13,
        l: 9,
        xl: 12,
        xxl: 15,
        xxxl: 0,
      },
    },
    'Classic Navy': {
      price: 249.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Classic+Navy/image_1.jpeg',
          description: 'Model info: Height: 6\' 1" | Waist: 32" | Wearing size M',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Classic+Navy/image_2.jpeg',
          description: 'Model info: Height: 6\' 1" | Waist: 32" | Wearing size M',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Classic+Navy/image_3.jpeg',
          description: 'classic navy',
        },

        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Classic+Navy/image_4.jpeg',
          description: 'classic navy',
        },
      },
      sizes: {
        xs: 0,
        s: 12,
        m: 13,
        l: 9,
        xl: 12,
        xxl: 15,
        xxxl: 0,
      },
    },
    'Andes Blue': {
      price: 249.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Andes+Blue/image_1.jpeg',
          description: 'andes blue',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Andes+Blue/image_2.jpeg',
          description: 'andes blue',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Andes+Blue/image_3.jpeg',
          description: 'andes blue',
        },
      },
      sizes: {
        xs: 0,
        s: 12,
        m: 13,
        l: 9,
        xl: 12,
        xxl: 15,
        xxxl: 0,
      },
    },
    'Coriander Brown/River Delta': {
      price: 249.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Coriander+Brown%3A+River+Delta/image_1.jpeg',
          description: 'coriander brown/river delta',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Coriander+Brown%3A+River+Delta/image_2.jpeg',
          description: 'coriander brown/river delta',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Coriander+Brown%3A+River+Delta/image_3.jpeg',
          description: 'coriander brown/river delta',
        },

        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Coriander+Brown%3A+River+Delta/image_4.jpeg',
          description: 'coriander brown/river delta',
        },
      },
      sizes: {
        xs: 0,
        s: 12,
        m: 0,
        l: 9,
        xl: 0,
        xxl: 15,
        xxxl: 0,
      },
    },
    'Kelp Forest': {
      price: 249.00,
      images: {
        image_1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/2/Kelp+Forest/image_1.jpeg',
          description: 'kelp forest',
        },
      },
      sizes: {
        xs: 0,
        s: 12,
        m: 0,
        l: 9,
        xl: 12,
        xxl: 15,
        xxxl: 0,
      },
    },
  },
},
{
  id: 3,
  name: 'Outdoor Research Bug Bivy',
  rating: 3.75,
  category: 'tent',
  colors: {
    Black: {
      price: 89.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/3/Black/image_1.jpeg',
          description: 'black',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/3/Black/image_2.jpeg',
          description: 'black',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/3/Black/image_3.jpeg',
          description: 'black',
        },
      },
      sizes: {
        'one-size': 100,
      },
    },
  },
},
{
  id: 4,
  name: 'REI Co-op Kingdom 6 Tent',
  rating: 3.5,
  category: 'tent',
  colors: {
    'Forest Floor': {
      price: 499.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/4/Forest+Floor/image_1.jpeg',
          description: '3/4 front view no fly (Forest Floor)',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/4/Forest+Floor/image_2.jpeg',
          description: '3/4 rear view no rainfly (Forest Floor)',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/4/Forest+Floor/image_3.jpeg',
          description: 'Straight on fly off (Forest Floor)',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/4/Forest+Floor/image_4.jpeg',
          description: '3/4 rear view with rainfly (Forest Floor)',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/4/Forest+Floor/image_5.jpeg',
          description: 'forest floor',
        },
        6: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/4/Forest+Floor/image_6.jpeg',
          description: 'Vestibule open (Forest Floor)',
        },
      },
      sizes: {
        'one-size': 100,
      },
    },
  },
},
{
  id: 5,
  name: "Black Diamond Momentum Climbing Shoes - Ash - Men's",
  rating: 4.5,
  category: 'shoes',
  colors: {
    Ash: {
      price: 94.95,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/5/Ash/image_1.jpeg',
          description: 'Side view (Ash)',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/5/Ash/image_2.jpeg',
          description: 'ash',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/5/Ash/image_3.jpeg',
          description: 'Front view (Ash)',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/5/Ash/image_4.jpeg',
          description: 'Side view (Ash)',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/5/Ash/image_5.jpeg',
          description: 'Back view (Ash)',
        },
        6: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/5/Ash/image_6.jpeg',
          description: 'Back view (Ash)',
        },
      },
      sizes: {
        6: 10,
        6.5: 12,
        7: 18,
        7.5: 21,
        8: 14,
        8.5: 21,
        9: 12,
        9.5: 12,
        10: 2,
        10.5: 12,
        11: 15,
        11.5: 23,
        12: 10,
        12.5: 3,
        13: 4,
        13.5: 2,
        14: 1,
      },
    },
  },
},
{
  id: 6,
  name: "Black Diamond Momentum Vegan Climbing Shoes - Men's",
  rating: 4.5,
  category: 'shoes',
  colors: {
    Gray: {
      price: 94.95,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/6/Gray/image_1.jpeg',
          description: 'gray',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/6/Gray/image_2.jpeg',
          description: '3/4 front view (Gray)',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/6/Gray/image_3.jpeg',
          description: 'Left view (Gray)',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/6/Gray/image_4.jpeg',
          description: 'Back view (Gray)',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/6/Gray/image_5.jpeg',
          description: 'Sole view (Gray)',
        },
      },
      sizes: {
        8: 14,
        8.5: 21,
        9: 12,
        9.5: 12,
        10: 2,
        10.5: 12,
        11: 15,
        11.5: 23,
        12: 10,
        12.5: 3,
        13: 4,
        13.5: 2,
        14: 1,
      },
    },
  },
},
{
  id: 7,
  name: "REI Co-op Trailbreak 20 Sleeping Bag - Men's",
  rating: 4.25,
  category: 'sleeping bags',
  colors: {
    'Blue Nights': {
      price: 109.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/7/Blue+Nights/image_1.jpeg',
          description: 'blue nights',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/7/Blue+Nights/image_2.jpeg',
          description: 'Stuff sack (32oz. water bottle sold separately) (Blue Nights)',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/7/Blue+Nights/image_3.jpeg',
          description: '? head view (Blue Nights)',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/7/Blue+Nights/image_4.jpeg',
          description: '? foot view (Blue Nights)',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/7/Blue+Nights/image_5.jpeg',
          description: 'Zipper detail (Blue Nights)',
        },
        6: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/7/Blue+Nights/image_6.jpeg',
          description: 'Hood detail (Blue Nights)',
        },
      },
      sizes: {
        long: 100,
        regular: 34,
      },
    },
  },
},
{
  id: 8,
  name: "NEMO Disco 15 Sleeping Bag - Men's",
  rating: 4.75,
  category: 'sleeping bags',
  colors: {
    'Torch/ Stormy Night': {
      price: 319.95,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/8/Torch%3AStormy+Night/image_1.jpeg',
          description: 'torch/ stormy night',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/8/Torch%3AStormy+Night/image_2.jpeg',
          description: 'Interior head (Torch/Stormy Night)',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/8/Torch%3AStormy+Night/image_3.jpeg',
          description: 'Hood with zipper (Torch/Stormy Night)',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/8/Torch%3AStormy+Night/image_4.jpeg',
          description: 'Zipped (Torch/Stormy Night)',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/8/Torch%3AStormy+Night/image_5.jpeg',
          description: 'Zipper plow (Torch/Stormy Night)',
        },
        6: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/8/Torch%3AStormy+Night/image_6.jpeg',
          description: 'Neck blanket (Torch/Stormy Night)',
        },
      },
      sizes: {
        long: 100,
        regular: 34,
      },
    },
  },
},
{
  id: 9,
  name: 'Pau Hana Malibu Classic Stand Up Paddle Board with Paddle - 10\'6"',
  rating: 5,
  category: 'accessories',
  colors: {
    Wood: {
      price: 899.00,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/9/Wood/image_1.jpeg',
          description: 'wood',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/9/Wood/image_2.jpeg',
          description: 'wood',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/9/Wood/image_3.jpeg',
          description: 'wood',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/9/Wood/image_4.jpeg',
          description: 'wood',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/9/Wood/image_5.jpeg',
          description: 'wood',
        },
      },
      sizes: {
        'one-size': 1000,
      },
    },
  },
},
{
  id: 10,
  name: 'Nalgene Wide-Mouth Water Bottle - 32 fl. oz.',
  rating: 4.75,
  category: 'accessories',
  colors: {
    Gray: {
      price: 11.95,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Gray/image_1.jpeg',
          description: 'gray',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Gray/image_2.jpeg',
          description: 'Back view (Gray)',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Gray/image_3.jpeg',
          description: 'Bottle cap (Gray)',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Gray/image_4.jpeg',
          description: '',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Gray/image_5.jpeg',
          description: '',
        },
      },
      sizes: {
        'one-size': 10,
      },
    },
    Seafoam: {
      price: 11.95,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Seafoam/image_1.jpeg',
          description: 'seafoam',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Seafoam/image_2.jpeg',
          description: 'Back view (Seafoam)',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Seafoam/image_3.jpeg',
          description: '',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Seafoam/image_4.jpeg',
          description: '',
        },
      },
      sizes: {
        'one-size': 10,
      },
    },
    'Slate Blue': {
      price: 11.95,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Slate+Blue/image_1.jpeg',
          description: 'slate blue',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Slate+Blue/image_2.jpeg',
          description: 'Back view (Slate blue)',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Slate+Blue/image_3.jpeg',
          description: 'Bottle cap (Slate blue)',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Slate+Blue/image_4.jpeg',
          description: '',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Slate+Blue/image_5.jpeg',
          description: '',
        },
      },
      sizes: {
        'one-size': 17,
      },
    },
    'Trout Green': {
      price: 11.95,
      images: {
        1: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Trout+Green/image_1.jpeg',
          description: 'trout green',
        },
        2: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Trout+Green/image_2.jpeg',
          description: 'Back view (Trout green)',
        },
        3: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Trout+Green/image_3.jpeg',
          description: 'Bottle cap (Trout green)',
        },
        4: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Trout+Green/image_4.jpeg',
          description: '',
        },
        5: {
          url: 'htps://rei-product.s3-us-west-1.amazonaws.com/10/Trout+Green/image_5.jpeg',
          description: '',
        },
      },
      sizes: {
        'one-size': 14,
      },
    },
  },
}];

module.exports.dummyData = dummmyData;

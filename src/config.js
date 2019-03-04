var DEFAULT_STYLE = {
	backgroundColor: '#ff0000',
	width: 100,
	height: 100,
	borderRadius: 10
}

var CONFIG = {
  newElement: {
    id: 0,
    style: {
      backgroundColor: '#ff0000',
      width: 100,
      height: 100,
      borderRadius: 10
    }
  },
  defaultFilter: {
    backgroundColor: { //only equals mode
      active: false,
      value: 0
    },
    width: {
      active: false,
      greater: true,
      value: 100
    },
    height: {
      active: false,
      greater: true,
      value: 100
    },
    borderRadius: {
      active: false,
      greater: true,
      value: 10
    }
  },
  defaultSort: {
    order: null,
    direction: null
  },
  sortingOptions: [
    {order: null, direction: null},
    {order: 'id', direction: 'desc'},
    {order: 'square', direction: null},
    {order: 'square', direction: 'desc'},
    {order: 'radius', direction: null},
    {order: 'radius', direction: 'desc'}
  ],
  colorsTable: [
    {
      hueStart: 0,
      hueEnd: 19,
      name: 'Red'
    },
    {
      hueStart: 20,
      hueEnd: 39,
      name: 'Orange'
    },
    {
      hueStart: 40,
      hueEnd: 70,
      name: 'Yellow'
    },
    {
      hueStart: 71,
      hueEnd: 165,
      name: 'Green'
    }, 
    {
      hueStart: 166,
      hueEnd: 199,
      name: 'Cyan'
    },
    {
      hueStart: 200,
      hueEnd: 269,
      name: 'Blue'
    },
    {
      hueStart: 270,
      hueEnd: 289,
      name: 'Purple'
    },
    {
      hueStart: 290,
      hueEnd: 309,
      name: 'Magenta'
    },
    {
      hueStart: 310,
      hueEnd: 339,
      name: 'Pink'
    },
    {
      hueStart: 340,
      hueEnd: 360,
      name: 'Red'
    },
  ],
};

export default CONFIG;
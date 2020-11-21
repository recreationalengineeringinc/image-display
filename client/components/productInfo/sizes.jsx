import React from 'react';

const Sizes = (props) => {
  if (props.category === 'clothing') {
    return (
      <div>
        {props.sizeSelected === undefined ? <p>Size</p> : <p>Size: {props.sizeSelected}</p>}
        <form onClick={()=>{ props.selectSize(event.target.value); }}>
          <input type="button" id="size" value="XS"/>
          <input type="button" id="size" value="S" />
          <input type="button" id="size" value="M" />
          <input type="button" id="size" value="L" />
          <input type="button" id="size" value="XL" />
        </form>
      </div>
    );
  } else if (props.category === 'sleeping bags') {
    return (
      <div>
        {props.sizeSelected === undefined ? <p>Size</p> : <p>Size: {props.sizeSelected}</p>}
        <form onClick={()=>{ props.selectSize(event.target.value); }}>
          <input type="button" id="size" value="Long" />
          <input type="button" id="size" value="Regular" />
          <input type="button" id="size" value="Short" />
        </form>
      </div>
    );
  } else if (props.category === 'shoes') {
    if (props.usOrEu > 0.5) {
      return (
        <div>
          {props.sizeSelected === undefined ? <p>Size</p> : <p>Size: {props.sizeSelected}</p>}
          <form onClick={()=>{ props.selectSize(event.target.value); }}>
            <input type="button" id="size" value="6" />
            <input type="button" id="size" value="7" />
            <input type="button" id="size" value="7.5" />
            <input type="button" id="size" value="8" />
            <input type="button" id="size" value="9" />
            <input type="button" id="size" value="9.5" />
            <input type="button" id="size" value="10" />
            <input type="button" id="size" value="10.5" />
            <input type="button" id="size" value="11" />
            <input type="button" id="size" value="12" />
            <input type="button" id="size" value="13" />
          </form>
        </div>
      );
    } else {
      return (
        <div>
          {props.sizeSelected === undefined ? <p>Size</p> : <p>Size: {props.sizeSelected}</p>}
          <form onClick={()=>{ props.selectSize(event.target.value); }}>
            <input type="button" id="size" value="44" />
            <input type="button" id="size" value="44.5" />
            <input type="button" id="size" value="44.5" />
            <input type="button" id="size" value="46" />
            <input type="button" id="size" value="47" />
            <input type="button" id="size" value="48.5" />
            <input type="button" id="size" value="49.5" />
            <input type="button" id="size" value="50" />
            <input type="button" id="size" value="50.5" />
            <input type="button" id="size" value="51" />
            <input type="button" id="size" value="52" />
          </form>
        </div>
      );
    }
  } else {
    return (
      <div>
        {props.sizeSelected === undefined ? <p>Size:</p> : <p>Size: {props.sizeSelected}</p>}
        <form onClick={()=>{ props.selectSize(event.target.value); }}>
          <input type="button" id="size" value="One-Size" />
        </form>
      </div>
    );
  }
};


export default Sizes;
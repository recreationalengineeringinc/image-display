import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      error: false
    };
    this.subtract = this.subtract.bind(this);
    this.add = this.add.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  subtract () {
    if (Number(this.state.quantity) > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  }
  add () {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  handleInput (event) {
    this.setState({
      quantity: event.target.value
    }, () => {
      if (!Number(this.state.quantity) || Number(this.state.quantity) < 1) {
        this.setState({
          error: true
        });
      } else {
        this.setState({
          error: false
        });
      }
    });
  }
  updateSubtotal () {
    const newSubtotal = Number(this.state.quantity) * Number(this.props.price);
    this.setState({
      subtotal: newSubtotal
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const subtotal = (this.state.quantity * Number(this.props.price)).toFixed(2);
    this.props.checkout(this.state.quantity, subtotal);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br /><br />
        <label>Quantity</label><br />
        <div id="quantityForm">
          <input type="button" id="subtract" className="quantity" value="-" onClick={this.subtract}/>
          <input type="text" id="quantity" value={this.state.quantity} onChange={this.handleInput}/>
          <input type="button" id="subtract" className="quantity" value="+" onClick={this.add}/>
        </div>
        <div>
          {this.state.error ?	<div style={{color: 'red'}}> Enter a quantity of 1 or more </div> : <br />}
        </div>
        {Number(this.state.quantity) ? <input type="submit" id="addCart" value={`Add to Cart - $${(this.props.price * Number(this.state.quantity)).toFixed(2)}`} /> : <input type="submit" id="addCart" value={`Add to Cart - $${this.props.price}`} />}
      </form>
    );
  }
}

export default Checkout;
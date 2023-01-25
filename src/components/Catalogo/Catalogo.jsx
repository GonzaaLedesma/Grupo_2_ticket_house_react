import React, { Component } from "react";

class Catalogo extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("http://localhost:3001/api/usuarios", {
        Method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: 'no-cors', 
                    credentials: 'include'
    });
    console.log(data);
    const products = await data.json();
    console.log(products);
    this.setState({ products });
  }

  render() {
    return (
      <>
        {/* <p>hola</p> */}
      </>
    );
  }
}

export default Catalogo;

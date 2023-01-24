import React, { Component } from 'react';

class Catalogo extends Component {
    constructor() {
        super()
        this.state = {
            products : []
        }
    }

    componentDidMount () {
        fetch('http://localhost:3001/api/productos')
         .then(response => response.json())
         .then(products => {
            this.setState({products : products})
         })
         .catch(error => console.log(error));
    }

    render () {
        return (
            <>
                {/* <p> holis</p> */}
            </>
        )
    }


}

export default Catalogo;

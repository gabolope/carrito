import  { Component } from 'react';
import ProductCard from './ProductCard';

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            coffeeTypes: ['Colombia', 'Brasil', 'México'],
         }
    }

    render() { 
        const items = this.state.coffeeTypes.map (t => (
            <ProductCard tipe={ t }/>
        ));
        return ( 
            <>
                <div>
                    <h2>Tipos de Café disponibles:</h2>
                    <ul>{items}</ul>
                </div>
            </>
         );
    }
}
 
export default Catalogo;
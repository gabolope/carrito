import  { Component } from 'react';
import Title from './title/Title';
import Item from './item/Item';

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Coffee Queen",
            coffeeTypes: ['Colombia', 'Brasil', 'México'],
         }
    }
    render() { 
        const items = this.state.coffeeTypes.map (t => (
            <Item tipo={ t }/>
        ));
        return ( 
            <div>
                <Title name={this.state.name}/>
            <ul>{items}</ul>
            </div>
         );
    }
}
 
export default Catalogo;
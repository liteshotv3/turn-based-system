import React from 'react';
import { cards } from "./constants/cardDatabase";

export default class Card extends React.Component {
    componentDidMount() {
        const gotCard = cards.find(card => card._id === this.props.id);
        this.setState(gotCard)
    }

    card = () => this.props.gameCards[this.props.cardNumber];

    name = () => {

    }
    render() {
        // console.log('loading card:', this.props.id)
        // console.log('state:', this.state)
        return (
            <div className="card">
                <span className="name">{this.card().name}</span>
            </div>
        )
    }
}
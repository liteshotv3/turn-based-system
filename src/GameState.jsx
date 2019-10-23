import React from "react";

export default class GameState extends React.Component {
    printCardsJsonList = (list, keyName) => {
        return list.map((card, index) => <span key={`${keyName}-${index}`}>{card.name}, </span>)
    }

    printCards = (list, keyName) => {
        const { gameCards } = this.props.gameState;
        return list.map(cardNumber => <span key={`${keyName}-${cardNumber}`}>{/*cardNumber*/}{gameCards[cardNumber].name}, </span>)
    }

    render() {
        console.log("gameState", this.props.gameState)
        const { gameState } = this.props
        return (<div>
            <div>gameCards: {this.printCardsJsonList(gameState.gameCards, "game-cards")}</div>
            <div>Current Player: {gameState.activePlayer}</div>
            <div>Phase: {gameState.phase}</div>
            <div>players Deck: {this.printCards(gameState.pDeck)}</div>
            <div>opponents Deck: {this.printCards(gameState.oDeck)}</div>
            <div>players Hand: {this.printCards(gameState.pHand)}</div>
            <div>opponents Hand: {this.printCards(gameState.oHand)}</div>
        </div>)
    }
}
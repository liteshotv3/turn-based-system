import React from "react";

export default class GameState extends React.Component {
    printCardsJsonList = (list, keyName) => {
        return list.map((card, index) => <span key={`${keyName}-${index}`}>{card.name}, </span>)
    }

    printCards = (list, keyName) => {
        const { gameCards } = this.props.gameState;
        return list.map(cardNumber => <span key={cardNumber}>{gameCards[cardNumber].name}, </span>)
    }

    render() {
        console.log("gameState", this.props.gameState)
        const { gameState } = this.props
        return (<div className="game-state-debug-window">
            <div>gameCards: {this.printCardsJsonList(gameState.gameCards, "game-cards")}</div>
            <div>Current Player: {gameState.activePlayer}</div>
            <div>Phase: {gameState.phase}</div>
            <div>players Deck: {this.printCards(gameState.p1.deck)}</div>
            <div>opponents Deck: {this.printCards(gameState.p2.deck)}</div>
            <div>players Hand: {this.printCards(gameState.p1.hand)}</div>
            <div>opponents Hand: {this.printCards(gameState.p2.hand)}</div>
            <div className="turn-number">turn: {gameState.turn}</div>

            <div className="controls">
                <div>
                    <div className="end-turn">
                        <button onClick={this.props.shuffleDecks}>Shuffle Decks</button>
                    </div>
                    <div className="end-turn">
                        <button onClick={() => this.props.draw(2)}>Draw</button>
                    </div>
                    <div className="end-turn">
                        <button onClick={this.props.nextPhase}>Next Phase</button>
                    </div>
                    <div className="end-turn">
                        <button onClick={this.props.endTurn}>End Turn</button>
                    </div>

                </div>
            </div>
        </div>)
    }
}
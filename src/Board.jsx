import React from 'react'
import './styles/board.css'
import { cards as AllCards } from './constants/cardDatabase'
import GameState from './GameState'
import Card from './Card'

export default class Board extends React.Component {
    state = {
        turn: null,
        numberOfPlayers: null,
        activePlayer: null,
        phase: null,
        gameCards: [],
        wounds: [],
        plus1s: [],
        minus1s: [],
    }

    endTurn = () => {
        this.setState({
            turn: this.state.turn + 1,
            phase: this.phaseOrder()[0], // resets phases
            activePlayer: this.nextPlayer(),
        })
    }

    nextPlayer = () => {
        const players = this.players()
        const nextPlayerIndex = players.findIndex((player) => player === this.state.activePlayer) + 1
        return nextPlayerIndex >= players.length ? players[0] : players[nextPlayerIndex]
    }

    startGame = () => {
        // populate decks with 2 cards
        this.setState({
            turn: 0,
            phase: this.phaseOrder()[0],
            activePlayer: this.players()[0],
        })
        this.setUpGame()
    }
    phaseOrder = () => ['Draw', 'Recovery', 'Build', 'Main']
    players = () => ['Peter', 'Norman']
    nextPhase = () => {
        const phaseOrder = this.phaseOrder()
        const phaseIndex = phaseOrder.findIndex((phaseName) => phaseName === this.state.phase) + 1
        if (phaseIndex > phaseOrder.length - 1) {
            this.endTurn()
        } else this.setState({ phase: phaseOrder[phaseIndex] })
    }

    draw = (requestedNumberOfCards = 1) => {
        const deck = this.state.p1.deck
        const cardsToDraw = requestedNumberOfCards > deck.length ? deck.length : requestedNumberOfCards
        const drawnCards = deck.slice(0, cardsToDraw)
        const remainingDeck = deck.slice(cardsToDraw)
        const p1State = { ...this.state.p1, deck: remainingDeck, hand: [...this.state.p1.hand, ...drawnCards] }
        this.setState({
            p1: p1State,
        })
    }

    setUpGame = (numberOfPlayers = 2) => {
        const defaultPlayerState = () => {
            return {
                deck: [],
                hand: [],
                resource: [],
                backRow: [],
                frontRow: [],
            }
        }
        const playerState = {}
        for (let i = 1; i < numberOfPlayers + 1; i++) {
            playerState[`p${i}`] = { ...defaultPlayerState() }
        }

        // temp set up decks, game cards need to contain all cards in the game
        const p1MainIndex = AllCards.findIndex((card) => card._id === 'MNB-7')
        const p2MainIndex = AllCards.findIndex((card) => card._id === 'MNB-79')
        const player1sDeck = [...AllCards.filter((card) => card.affiliation === 'Avengers' && !card.isMC)]
        const player2sDeck = [...AllCards.filter((card) => card.affiliation === 'Villains' && !card.isMC)]
        const gameCards = [...player1sDeck, ...player2sDeck, AllCards[p1MainIndex], AllCards[p2MainIndex]]

        for (let i = 0; i < player1sDeck.length; i++) {
            playerState.p1.deck.push(i)
        }
        for (let i = 0; i < player2sDeck.length; i++) {
            playerState.p2.deck.push(i + player1sDeck.length)
        }

        this.setState({ gameCards, ...playerState, turn: 1, numberOfPlayers })
        // // console.log({ pDeck, oDeck, gameCards})

        // //give cards gameIds
        // this.setState({
        //     gameCards,
        //     pDeck,
        //     oDeck,
        //     pHand: [gameCards.length - 2],
        //     oHand: [gameCards.length - 1],
        // })
    }

    shuffleZone = (zone) => {
        const array = zone
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    shuffleDecks = () => {
        const p1 = {
            ...this.state.p1,
            deck: this.shuffleZone(this.state.p1.deck),
        }
        const p2 = {
            ...this.state.p2,
            deck: this.shuffleZone(this.state.p2.deck),
        }
        this.setState({ p1, p2 })
    }

    render() {
        return (
            <div className="flex-container">
                <div className="board">
                    <div
                        className="end-turn"
                        style={{ position: 'absolute' }}
                    >
                        <button onClick={this.startGame}>Start Game</button>
                    </div>
                    <div className="resource row">
                        {this.state.p1 &&
                            this.state.p2.deck.map((cardNumber) => (
                                <Card
                                    cardNumber={cardNumber}
                                    gameCards={this.state.gameCards}
                                />
                            ))}
                    </div>
                    <div className="back row">
                        {this.state.p1 &&
                            this.state.p2.deck.map((cardNumber) => (
                                <Card
                                    cardNumber={cardNumber}
                                    gameCards={this.state.gameCards}
                                />
                            ))}
                    </div>
                    <div className="front row">
                        {this.state.p1 &&
                            this.state.p2.deck.map((cardNumber) => (
                                <Card
                                    cardNumber={cardNumber}
                                    gameCards={this.state.gameCards}
                                />
                            ))}
                    </div>
                    <div className="front row">
                        {this.state.p1 &&
                            this.state.p1.hand.map((cardNumber) => (
                                <Card
                                    cardNumber={cardNumber}
                                    gameCards={this.state.gameCards}
                                />
                            ))}
                    </div>
                    <div className="back row">
                        {this.state.p1 &&
                            [].map((cardNumber) => (
                                <Card
                                    cardNumber={cardNumber}
                                    gameCards={this.state.gameCards}
                                />
                            ))}
                    </div>
                    <div className="resource row">
                        {this.state.p1 &&
                            this.state.p1.deck.map((cardNumber) => (
                                <Card
                                    cardNumber={cardNumber}
                                    gameCards={this.state.gameCards}
                                />
                            ))}
                    </div>
                </div>
                {this.state.turn && (
                    <GameState
                        gameState={this.state}
                        shuffleDecks={this.shuffleDecks}
                        draw={this.draw}
                        nextPhase={this.nextPhase}
                        endTurn={this.endTurn}
                    />
                )}
            </div>
        )
    }
}

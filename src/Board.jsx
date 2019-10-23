import React from 'react';
import "./styles/board.css";
import { cards as AllCards} from "./constants/cardDatabase";
import GameState from "./GameState";
// import Card from "./Card";

export default class Board extends React.Component {
    state = {
        turn: 0,
        activePlayer: null,
        phase: null,
        gameCards: [],
        pDeck: [],
        pHand: [],
        pResource: [],
        pBackRow: [],
        pFrontRow: [],
        oResource: [],
        oBackRow: [],
        oFrontRow: [],
        oHand: [],
        oDeck: [],
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
        const players = this.players();
        const nextPlayerIndex = players.findIndex(player => player === this.state.activePlayer) + 1;
        return nextPlayerIndex >= players.length ? players[0] : players[nextPlayerIndex];
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
    phaseOrder = () => ["Draw", "Recovery", "Build", "Main"]
    players = () => ["Peter", "Norman"];
    nextPhase = () => {
        const phaseOrder = this.phaseOrder();
        const phaseIndex = phaseOrder.findIndex(phaseName => phaseName === this.state.phase) + 1
        if(phaseIndex > phaseOrder.length - 1) {
            this.endTurn();
        }
        else this.setState({ phase: phaseOrder[phaseIndex]})
    }

    draw = (requestedNumberOfCards = 1) => {
        const deck = this.state.pDeck;
        const cardsToDraw = requestedNumberOfCards > deck.length ? deck.length : requestedNumberOfCards;
        const drawnCards = deck.slice(0, cardsToDraw);
        const remainingDeck = deck.slice(cardsToDraw);
        this.setState({
            pDeck: remainingDeck,
            pHand: [...this.state.pHand, ...drawnCards]
        })
    }

    setUpGame = () => {
        const p1MainIndex = AllCards.findIndex(card => card._id === "MNB-7");
        const p2MainIndex = AllCards.findIndex(card => card._id === "MNB-79");
        const player1sDeck = [...AllCards.filter(card => card.affiliation === "Avengers" && !card.isMC)]
        const player2sDeck = [...AllCards.filter(card => card.affiliation === "Villains" && !card.isMC)]
        const gameCards = [...player1sDeck, ...player2sDeck, AllCards[p1MainIndex], AllCards[p2MainIndex]]

        const pDeck = [];
        const oDeck = [];

        for (let i = 0; i < player1sDeck.length; i++) {
            pDeck.push(i)
        }
        for (let i = 0; i < player2sDeck.length; i++) {
            oDeck.push(i + player1sDeck.length)
        }
        // console.log({ pDeck, oDeck, gameCards})
        
        //give cards gameIds
        this.setState({
            gameCards,
            pDeck,
            oDeck,
            pHand: [gameCards.length - 2],
            oHand: [gameCards.length - 1],
        })
    }
    
    shuffleZone = zone => {
        const array = zone;
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    shuffleDecks = () => {
        this.setState({
            pDeck: this.shuffleZone(this.state.pDeck),
            oDeck: this.shuffleZone(this.state.oDeck),
        })
    }
    
    
    render() {
        return <div className="board">
            <div className="turn-number">turn: { this.state.turn }</div>
            <GameState gameState={this.state}/>
            <div className="end-turn">
                <button onClick={this.startGame}>Start Game</button>
            </div>
            <div className="end-turn">
                <button onClick={this.shuffleDecks}>Shuffle Decks</button>
            </div>
            <div className="end-turn">
                <button onClick={() => this.draw(2)}>Draw</button>
            </div>
            <div className="end-turn">
                <button onClick={this.nextPhase}>Next Phase</button>
            </div>
            <div className="end-turn"> 
                <button onClick={this.endTurn}>End Turn</button>
            </div>
        </div>
    }
}
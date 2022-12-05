import React from 'react'
import { useState } from 'react';
import Cards from "./Cards"
import styled from 'styled-components';
import Backface from './Backface';


export default function Section({ done, aux, setDone, setAux, setError }) {

    const cardsRender = Cards.map((card, index) => {
        return <CardPost
            key={index + 1}
            num={index + 1}
            quest={card.quest}
            answer={card.answer}
            aux={aux}
            done={done}
            setDone={setDone}
            setAux={setAux}
            setError={setError} />
    })

    return (
        <Table>
            {cardsRender}
        </Table>
    );
}

function CardPost(props) {

    const [clicked, setClicked] = useState(false);
    const [turn, setTurn] = useState(false);
    const [status, setStatus] = useState("none");
    const [result, setResult] = useState();
    const colors = { zap: "#2fbe34", forgotten: "#ff3030", partial: "#FF922E" };
    const playable = status === "none";

    return (
        <Flashcard data-test="flashcard" clicked={clicked ? 1 : 0}>
            <FrontFaceDiv clicked={clicked ? 1 : 0} turn={turn ? 1 : 0}>
                <Question textColor={colors[status]} status={playable ? 0 : 1} clicked={clicked ? 1 : 0}>
                    <h1 data-test="flashcard-text">Question {props.num}</h1>
                    {playable ? <img data-test="play-btn" onClick={() => setClicked(!clicked)} src="assets/seta_play.png" alt="play" /> : result}
                </Question>
                <Front clicked={clicked ? 1 : 0}>
                    <p data-test="flashcard-text">{props.quest}</p>
                    <Turn data-test="turn-btn" onClick={() => setTurn(!turn)} src="assets/seta_virar.png" alt="Virar" />
                </Front>
            </FrontFaceDiv>

            <BackFaceDiv clicked={clicked ? 1 : 0} turn={turn ? 1 : 0}>
                <Backface
                    clicked={clicked}
                    setClicked={setClicked}
                    answer={props.answer}
                    setTurn={setTurn}
                    turn={turn}
                    setStatus={setStatus}
                    setDone={props.setDone}
                    done={props.done}
                    setResult={setResult}
                    aux={props.aux}
                    setAux={props.setAux}
                    setError={props.setError}
                />
            </BackFaceDiv>
        </Flashcard>
    );
}

const Table = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
`

const Flashcard = styled.div`
    width: 80%;
    min-height: ${props => props.clicked ? "120px" : "65px"};
    background: ${props => props.clicked ? "transparent" : "#fff"};
    border-radius: 5px;
    transition: all 0.5s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    position: relative;
    margin: 10px 0;
    box-sizing: border-box;
`;

const FrontFaceDiv= styled.div`
    background: ${props => props.clicked ? "#ffffd5" : "#fff"};
    transform: ${props => props.turn ? "rotateY(180deg)" : "rotateY(0deg)"};
    position: absolute;
    width: 100%;
    min-height: 100%;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
    transition: all 0.5s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    box-sizing: border-box;
`;

const BackFaceDiv = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: #ffffd5;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
    transition: all 0.5s;
    transform-style: preserve-3d;
    transform: ${props => props.turn ? "rotateY(0deg)" : "rotateY(180deg)"};
    backface-visibility: hidden;
    box-sizing: border-box;
`;

const Question = styled.div`
    display: ${props => (props.clicked ? 'none' : 'flex')};
    width: 100%;
    min-height: 100%;
    background-color: #FFFFFF;
    padding: 21px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    > h1 
    {    
        text-decoration: ${props => props.status ? 'line-through' : 'none'};
        color: ${props => props.status ? props.textColor : "#000"};
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    > img
    {
        cursor: pointer;
    }
`;

const Front = styled.div`
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    display: ${props => (props.clicked ? 'flex' : 'none')};
    > p
    {
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        margin: 15px;
    }
`;

const Turn = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    cursor: pointer;
`;


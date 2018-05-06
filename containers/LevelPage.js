import React, {Component} from 'react';

import styled from 'styled-components';

import NashyNum from '../components/NashyNum';
import NashyInput from '../components/NashyInput';
import NashyButton from '../components/NashyButton';

const NashyNumContainer = styled.div `
    width: 100vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const NashyInputListContainer = styled.div `
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-wrap: wrap;

    transition: all 3s;
`;

const NashyCheckingContainer = styled.div `
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
`;


const NashyInputContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    color: white;
    margin: 1em;
    span {
        margin-right: 1em;
    }
    input {
        width: 30em;
    }
`;

export default class LevelPage extends Component {
    constructor(props) {
        super(props);

        const listOfRandoms = [1123, 4124, 1241, 12312, 4214, 1241 ,14, 123, 123, 1231, 213, 5,24,515,12412,1251,2151,4,5346,476,75,858,65,8];

        const playerNumber = listOfRandoms[2];

        this.state = {
            playerNumber,
            listOfRandoms
        };
    }

    render() {
        return (<div>
            <NashyNumContainer className="FireWatch">
                <NashyNum>
                    <h1>{this.state.playerNumber}</h1>
                    <h2>is your key</h2>
                    <h3>{this.props.session.levelNumber}</h3> 
                </NashyNum>
            </NashyNumContainer>
            <NashyInputListContainer className="Mauve">
                {this.state.listOfRandoms.map((n, i) => <NashyInputContainer key={i}>
                    <span>Key {i}:</span> <NashyInput key={i} number={n}/>
                </NashyInputContainer>)}
            </NashyInputListContainer>
            <NashyCheckingContainer className="Royal">
                <NashyButton>Check</NashyButton>
            </NashyCheckingContainer>
        </div>);
    }

}

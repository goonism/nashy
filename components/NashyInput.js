import styled from 'styled-components';

export default styled.input `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    border-radius: 5px;

    opacity: 0.5;

    transition: 0.3s width;
    height: 3em;

    color: white;

    background: gray;

    border: none;

    :hover {
        opacity: 1;
    }
`

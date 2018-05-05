import styled, {keyframes} from 'styled-components';

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
`

export default styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${zoomIn} 1s forwards;

    h1, h2 {
        margin: 0;
        padding: 0;
    }
    h1 {
        font-size: 3.6em;
    }

    h2 {
        font-size: 0.9em;
    }
`

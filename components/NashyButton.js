import styled from 'styled-components';

export default styled.button `
    width: 180px;
    font-size: 1em;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;

    transition: all .4s ease-in-out;
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);

    :hover {
        background-position: 100% 0;

        transition: all .1s ease-in-out;
    }

    :active, :focus {
    	outline:none;
    }

    :active {
      width: 200px;
    }
`;

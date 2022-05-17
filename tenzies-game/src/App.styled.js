import styled from 'styled-components';

export const StyledApp = styled.div`
    background-color: #0B2434;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container {
        height: 320px;
        max-width: 320px;
        background-color: #F5F5F5;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        .content {
            display: flex;
            flex-direction: column;
            margin: 33.28px 34.56px 33.92px 34.56px;
        }
    }
`

export const Dice = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 36px);
    grid-template-rows: repeat(2, 36px);
    gap: 17.92px 18.56px;

`

export const StyledDie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35.84px;
    height: 35.84px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 3.81277px;
    font-family: 'Karla', sans-serif;
    font-size: 20.59px;
    color: #2B283A;
    cursor: pointer;
`
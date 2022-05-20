import { StyledDie } from "./App.styled";

export default function Die (props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }

    return (
        <StyledDie style={styles}>
            <h2>{props.value}</h2>
        </StyledDie>
    )
}
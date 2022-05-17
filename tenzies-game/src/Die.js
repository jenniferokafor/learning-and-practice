import { StyledDie } from "./App.styled";

export default function Die (props) {
    return (
        <StyledDie>
            <h2>{props.value}</h2>
        </StyledDie>
    )
}
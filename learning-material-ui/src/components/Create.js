import { Typography, Button, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create () {
    return (
        <Container>
            <Typography
                variant='h6'
                component='h2'
                gutterBottom
                color='textSecondary'
            >Create a New Note
            </Typography>

            <Button
                onClick={() => console.log('clicked!')}
                type='submit'
                color='secondary'
                variant='contained'
                endIcon={<KeyboardArrowRightIcon />}
            >Submit</Button>

            
            
        </Container>
    )
}
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box'

import Paper from '@mui/material/Paper'

export default function CardService(props) {
    return (
        <>
            <Paper elevation={20} sx={{
            
                padding: 2,
                margin:3,
                borderRadius: 6,
                color: "black",
            }}>
                <Typography variant="h4">
                    {props.titolo}
                </Typography> <br/><br/>
                <Typography variant="h6">
                    {props.descrizione}
                </Typography>
            </Paper>
        </>

    )
}
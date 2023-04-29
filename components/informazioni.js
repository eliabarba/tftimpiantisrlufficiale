import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { border, borderRadius } from '@mui/system'

export default function Info(props) {
    return (
        <Box sx={{ backgroundColor: "white", marginTop: '100px' }}>
            <Paper elevation={15}
             sx={{
                padding:3,
                borderRadius:20
            }}>
                <Typography>
                    {props.scritta}
                </Typography>
            </Paper>

        </Box>
    )
}
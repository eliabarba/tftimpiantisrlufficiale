import Layout from "./Layout"
import Typography from '@mui/material/Typography'
import Container from "@mui/material/Container"

export default function BackGround(props){
    return(
       <Container 
       maxWidth={false}
       sx={{
    
        marginTop:'0px',
        height:'400vh',
        width:'100%',
        backgroundRepeat:'no-repeat',
        backgroundImage:'url("https://i.redd.it/a4e1cafzdnzy.jpg")'
       }}>
        <Typography>
            
        </Typography>
       </Container>
          
             
       
    )
}
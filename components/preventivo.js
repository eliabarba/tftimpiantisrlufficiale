import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { margin, positions } from "@mui/system"
import { Button, Grid } from "@mui/material"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Layers } from "@mui/icons-material";
import Layout from "./Layout";
import Container from "@mui/material/Container";



export default function Preventivo() {
    return (
        <Layout>
            <Container sx={{ marginTop: "100px", border: "solid", borderBlockColor: "grey", borderRadius: "20px" }}>
                <Grid container spacing={0}>
                    <Grid lg={10} md={10} sm={10} xs={10}>
                        <Typography variant="h3" margin={3} color="rgb(100,0,0x)">
                            Preventivo
                        </Typography>
                    </Grid>
                    <Grid lg={10} md={10} sm={10} xs={10}>
                        <Typography variant="h5" marginLeft={3} color="rgb(100,0,0x)">
                            Sottotitolo
                        </Typography>
                    </Grid>
                    <Grid lg={10} md={10} sm={10} xs={10}>
                        <Typography variant="h6" marginLeft={3} marginTop={4} color="rgb(100,0,0x)">
                            Per richiedere un preventivo:
                        </Typography>
                        <Button color="success" href="/preventivo" sx={{marginLeft:"1rem", marginTop:"20px"}}>
                            Richiedi
                        </Button>

                    </Grid>
                </Grid>

            </Container>

        </Layout>
    )
} 
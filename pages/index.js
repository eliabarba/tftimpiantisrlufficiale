import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LandingHero from '../components/landinghero';
import Layout from '../components/Layout';
import BackGround from '../components/landing';
import Info from '../components/informazioni';
import Container from '@mui/material/Container'
import CardService from '../components/cardservizi';
import Grid from '@mui/material/Grid';
import { Girl } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
import Preventivo from '../components/preventivo';

export default function Home() {
  return (
    <Layout>
      <LandingHero
        titolo="TFT IMPIANTI SRL"
      />
      <Container >
        <Info
          scritta="I nostri Servizi"
        />
        <Grid container spacing={0} sx={{marginTop:"40px"}}>
          <Grid lg={17} md={17} sm={17}>
            <CardService 
            titolo="Ristrutturazione Bagno"
            descrizione="Mettiamo in atto le tue idee realizzando così il bagno dei tuoi sogni"
            />
            <center>
              <Button sx={{
                width:"100%"
              }}>
                Scopri
              </Button>
            </center>
          </Grid>
          
          <Grid lg={17} md={17} sm={17}>
            <CardService 
            titolo="Impianto Termoidraulico"
            descrizione="Impianto termoidraulico di case e appartamenti, con le tecnologie all'avanguardia"
            />
            <center>
              <Button sx={{
                width:"100%"
              }}>
                Scopri
              </Button>
            </center>
          </Grid>
          <Grid lg={17} md={17} sm={17}>
            <CardService 
            titolo="Impianti Pannelli Solari"
            descrizione="Riparazione, Sostituzione e Installazione di Pannelli Solari"
            />
            <center>
              <Button sx={{
                width:"100%"
              }}>
                Scopri
              </Button>
            </center>
          </Grid>
        </Grid>
      </Container>  
      <Preventivo />


      
    </Layout>
  )
}

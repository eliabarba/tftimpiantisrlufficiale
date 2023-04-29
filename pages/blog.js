import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LandingHero from '../components/landinghero';
import Layout from '../components/Layout';
import BackGround from '../components/landing';


export default function Blog(){
    return(
        <Layout>
        <LandingHero
        titolo="TFT IMPIANTI SRL"
        />
        
        
      </Layout>
    )
}
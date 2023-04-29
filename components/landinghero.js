import Typography from '@mui/material/Typography'
import Layout from './Layout'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import ResponsiveAppBar from './navbar'
import Landing from './landing'
import { Lan } from '@mui/icons-material'

export default function LandingHero(props) {
    return (
        <Layout>
            <ResponsiveAppBar
                titolo={props.titolo} />
            
        </Layout>
    )
}
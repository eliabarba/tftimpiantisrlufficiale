import Head from 'next/head'
import Link from 'next/link'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'

import styles from './Layout.module.css'



export const siteTitle = 'TFTIMPIANTISRL - Motta Di Livenza';

const theme = createTheme()

const sezioni = [
    { title: 'Informatico', url: '/informatico' },
    { title: 'Energie', url: '/energie' },
    { title: 'Elettrico', url: '/elettrico' },
    { title: 'Trasparenza', url: '/trasparenza' },
]

let socials = [
    { title: 'Facebook', imageUrl: 'https://www.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https://www.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://www.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://www.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
]


export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={styles.container}>
                <Head>
                    <title>{siteTitle}</title>
                    <meta name="description" content="TFT IMPIANTI SRL a Motta di Livenza" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSKlcInGBRi6_HnlP2lSOsU1Dx7llfW8lO5a6Q8XpGQ&s" />
                    <meta
                        property="og:image"
                        content={`https://og-image.vercel.app/${encodeURI(
                            siteTitle,
                        )}.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSKlcInGBRi6_HnlP2lSOsU1Dx7llfW8lO5a6Q8XpGQ&s`}
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>

                <main>
                    {children}
                </main>
                
            </div>
        </ThemeProvider>
    )
}

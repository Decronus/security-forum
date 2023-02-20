import { createGlobalStyle } from "styled-components";

import IBMPlexMonoRegularWoff2 from './fonts/IBMPlexMono-Regular.woff2'
import IBMPlexMonoRegularWoff from './fonts/IBMPlexMono-Regular.woff2'
import IBMPlexMonoRegularTtf from './fonts/IBMPlexMono-Regular.ttf'

import JetBrainsMonoExtraLightWoff2 from './fonts/JetBrainsMono-ExtraLight.woff2'
import JetBrainsMonoExtraLightWoff from './fonts/JetBrainsMono-ExtraLight.woff'
import JetBrainsMonoExtraLightTtf from './fonts/JetBrainsMono-ExtraLight.ttf'

import JetBrainsMonoLightWoff2 from './fonts/JetBrainsMono-Light.woff2'
import JetBrainsMonoLightWoff from './fonts/JetBrainsMono-Light.woff'
import JetBrainsMonoLightTtf from './fonts/JetBrainsMono-Light.ttf'

import JetBrainsMonoRegularWoff2 from './fonts/JetBrainsMono-Regular.woff2'
import JetBrainsMonoRegularWoff from './fonts/JetBrainsMono-Regular.woff'
import JetBrainsMonoRegularTtf from './fonts/JetBrainsMono-Regular.ttf'

import JetBrainsMonoMediumWoff2 from './fonts/JetBrainsMono-Medium.woff2'
import JetBrainsMonoMediumWoff from './fonts/JetBrainsMono-Medium.woff'
import JetBrainsMonoMediumTtf from './fonts/JetBrainsMono-Medium.ttf'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'IBM Plex Mono';
        src: url(${IBMPlexMonoRegularWoff2}) format('woff2'),
            url(${IBMPlexMonoRegularWoff}) format('woff'),
            url(${IBMPlexMonoRegularTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url(${JetBrainsMonoExtraLightWoff2}) format('woff2'),
            url(${JetBrainsMonoExtraLightWoff}) format('woff'),
            url(${JetBrainsMonoExtraLightTtf}) format('truetype');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url(${JetBrainsMonoLightWoff2}) format('woff2'),
            url(${JetBrainsMonoLightWoff}) format('woff'),
            url(${JetBrainsMonoLightTtf}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url(${JetBrainsMonoRegularWoff2}) format('woff2'),
            url(${JetBrainsMonoRegularWoff}) format('woff'),
            url(${JetBrainsMonoRegularTtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'JetBrains Mono';
        src: url(${JetBrainsMonoMediumWoff2}) format('woff2'),
            url(${JetBrainsMonoMediumWoff}) format('woff'),
            url(${JetBrainsMonoMediumTtf}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'JetBrains Mono';
        background: #060606;
        color: #C2BCD2
    }

    h1 {
        font-size: 53px;
        font-family: 'IBM Plex Mono';
        font-weight: 400;
        max-width: 740px;
    }

    h2 {
        font-weight: 400;
        font-size: 37px;
        margin-bottom: 70px;
    }

    h3 {
        font-weight: 300;
        font-size: 20px;
        max-width: 955px;
    }

    p {
        font-size: 16px;
        font-weight: 200;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 32px;
        }

        h2 {
            font-size: 29px;
            margin-bottom: 40px;
        }

        h3 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
        }
    }
`

export default GlobalStyles;
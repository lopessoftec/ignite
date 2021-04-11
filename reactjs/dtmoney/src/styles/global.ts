import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* font-size: 16px (desktop) */
    html {
        /* estier com a tela até 1080 */
        @media(max-width: 1080px){
            /* 16*0,9375 = 15 */
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    //REM = 1 rem = 16px

    body {
        background: var(--background);
        /* deixar as fontes mais detalhadas */
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
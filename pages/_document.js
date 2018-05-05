import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet, injectGlobal} from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props}/>))
        const styleTags = sheet.getStyleElement()
        return {
            ...page,
            styleTags
        }
    }

    render() {
        return (<html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {this.props.styleTags}
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </html>)
    }
}

// console.log('document theme: '+this.props.theme);

// Global style
// eslint-disable-next-line
injectGlobal `
  html{box-sizing:border-box;} *,*:before,*:after{box-sizing:inherit;}

  body{margin:0;font-family:'Nunito',sans-serif;line-height:1.6;}

  button,input[type=submit]{cursor:pointer;font-family:inherit;}

  p{line-height:1.5;}

  select{padding:8px;}

  h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{text-rendering:optimizelegibility;margin:0;}

  input,select,textarea{
      padding:4px;border-radius:4px;border:solid 1px #ccc;font-size:16px;font-family:inherit;
  }
  select{
      -webkit-appearance:menulist;height:32px;
  }

  table{border-collapse:collapse;}

  .ReactModalPortal > div {opacity:0;}

  .ReactModalPortal .ReactModal__Overlay {
    transition: opacity 200ms ease-in-out;
    &--after-open {opacity:1;}
    &--before-close {opacity:0;}
  }

  .ReactModalPortal .ReactModal__Content {
    transition: margin-top 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.15);
    &--after-open {margin-top:-20px;}
    &--before-close {margin-top:200px;}
  }

  .FireWatch {
      opacity: 0;
      background: #cb2d3e;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #ef473a, #cb2d3e);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #ef473a, #cb2d3e);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      animation: FadeIn 1s forwards;
  }

  .Lust {
      opacity: 0;
      background: #56ab2f;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to top, #a8e063, #56ab2f);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #a8e063, #56ab2f);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      animation: FadeIn 1s forwards;
  }

  .Frost {
      opacity: 0;
      background: #000428;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to top, #004e92, #000428);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #004e92, #000428);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      animation: FadeIn 1s forwards;
  }

  .Mauve {
      opacity: 0;
      background: #42275a;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to top, #734b6d, #42275a);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #734b6d, #42275a);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      animation: FadeIn 1s forwards;
  }

  .Royal {
      opacity: 0;
      background: #141E30;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to top, #243B55, #141E30);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #243B55, #141E30);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      animation: FadeIn 1s forwards;
  }


  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`

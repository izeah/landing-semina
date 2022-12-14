import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head></Head>
            <body>
                <Main />
                <NextScript />

                <Script
                    src="/js/popper.min.js"
                    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                    crossOrigin="anonymous"
                    strategy="beforeInteractive"></Script>
                <Script
                    src="/js/bootstrap.min.js"
                    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                    crossOrigin="anonymous"
                    strategy="beforeInteractive"></Script>
            </body>
        </Html>
    );
}

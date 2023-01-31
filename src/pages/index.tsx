import styles from "@/styles/pages/Landing.module.scss";
import { Footer } from "../components/landing/footer/Footer";
import { Header } from "../components/landing/header/Header";
import { Section1 } from "../components/landing/section1/Section1";
import { Section2 } from "../components/landing/section2/Section2";
import { Section3 } from "../components/landing/section3/Section3";
import { Section4 } from "../components/landing/section4/Section4";
import { Section5 } from "../components/landing/section5/Section5";

export default function LandingPage() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </main>

            <Footer />
        </>
    );
}

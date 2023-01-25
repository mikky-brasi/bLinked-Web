import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import { IoMdMenu } from "react-icons/io";
import bLinkedLogo from "../../../../public/img/bLinkedLogo.svg";
import styles from "./Header.module.scss";
import { CustomToggle } from "../../CustomToggle";

export function Header() {
    return (
        <header className={styles.header}>
            <Image src={bLinkedLogo} alt="bLinked Logo" className={styles.logo} />

            <nav className={styles.nav}>
                <Dropdown alignRight className={styles.dropdown}>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                        <div className="filter my-3 my-md-0">
                            <IoMdMenu size={32} />
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2">
                        <Dropdown.Item className={styles.dropdownMenuItem} href="/#">
                            About Us
                        </Dropdown.Item>
                        <Dropdown.Item className={styles.dropdownMenuItem} href="/#">
                            How It Works
                        </Dropdown.Item>
                        <Dropdown.Item className={styles.dropdownMenuItem} href="/#">
                            FAQs
                        </Dropdown.Item>
                        <Dropdown.Item className={styles.dropdownMenuItem} href="/login">
                            Log In
                        </Dropdown.Item>
                        <Dropdown.Item className={styles.dropdownMenuItem} href="/auth/sign_up1">
                            Sign up
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Link href="/#" className={styles.navLink}>
                    About Us
                </Link>
                <Link href="/#" className={styles.navLink}>
                    How It Works
                </Link>
                <Link href="/#" className={styles.navLink}>
                    FAQs
                </Link>
                <Link href="/login" className={styles.navLink}>
                    Log In
                </Link>

                <button
                    className={styles.signUpButton}
                    onClick={() => window.location.assign("/auth/sign_up1")}
                >
                    Sign up
                </button>
            </nav>
        </header>
    );
}

import Link from "next/link";
import { useRouter } from "next/router";

function SettingsMenu() {
    const router = useRouter();
    return (
        <>
            {/* <li className={router.pathname == "/" ? "active" : ""}>
                            <Link href="/">
                                <a>
                                    <span>
                                        <i className="bi bi-house"></i>
                                    </span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </Link>
                            </li> */}

            <ul className="settings-menu">
                <li
                    className={
                        router.pathname == "/settings-profile" ? "active" : ""
                    }
                >
                    <Link href="/settings-profile">
                        <a>All</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-application"
                            ? "active"
                            : ""
                    }
                >
                    <Link href="/settings-application">
                        <a>Avatars</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-security" ? "active" : ""
                    }
                >
                    <Link href="/settings-security">
                        <a>Cars</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
export default SettingsMenu;

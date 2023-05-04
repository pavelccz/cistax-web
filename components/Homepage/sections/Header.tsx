import React, {FC, useEffect, useState} from "react";
import {ImageData, NavigationData} from "~/types/prismic";
import {useRouter} from "next/router";
import {Locale} from "~/types/locales";
import css from "~/components/Homepage/sections/Header.module.scss";
import classNames from "classnames";

interface HeaderProps {
    logo: ImageData;
    navigation: NavigationData[];
    language_switch: string;
    show_language_switch?: boolean;
}

const Header: FC<HeaderProps> = ({ logo, navigation, language_switch, show_language_switch }) => {
    const { push, asPath, locale } = useRouter();
    const [scrolled, setScrolled] = useState<boolean>(false);

    const handleSetScrolled = () => {
        setScrolled(window.pageYOffset > 10);
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", handleSetScrolled);
        }
        watchScroll();

        return () => {
            window.removeEventListener("scroll", handleSetScrolled);
        };
    }, []);

    return (
        <header className={classNames(css.header, !scrolled && css.topPosition)}>
            <img src={logo.url} />
            <nav>
                <ul className={css.navigation}>
                    {navigation.map((item, idx) => (
                        <li className={css.navLink} key={"navigation" + idx}>
                            <a className={css.link} href={"#" + item.link}>{item.text}</a>
                        </li>
                    ))}
                    {show_language_switch &&
                        <li className={css.language}>
                            <button className={css.link} onClick={() => push(asPath, asPath, { locale: locale === Locale.CS ? Locale.EN : Locale.CS })}>
                                {language_switch}
                            </button>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;

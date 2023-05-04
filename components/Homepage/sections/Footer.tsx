import React, {FC} from "react";

interface FooterProps {
    copyright: string;
}

const Footer: FC<FooterProps> = ({ copyright }) => {
    const year = new Date().getFullYear();

    return (
        <footer className="p-6 mt-0 text-center">
            <span className="text-lg">&copy; {year} {copyright}</span>
        </footer>
    );
}

export default Footer;

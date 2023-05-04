import React, { FC } from 'react';
import {CompanyData, GdprLinkData, RichTextType} from "~/types/prismic";
import css from "~/components/Homepage/sections/CompaniesSection.module.scss";
import classNames from "classnames";

interface CompaniesSectionProps {
    gdpr: string;
    gdpr_links: GdprLinkData[];
    companies: CompanyData[];
}

const CompaniesSection: FC<CompaniesSectionProps> = ({ gdpr, gdpr_links, companies}) => {
    return (
        <section className={css.companiesSection}>
            <div className={css.holder}>
                <div className={css.companies}>
                    {companies.map((item, idx) => (
                        <div className={css.company} key={"company-"+idx}>
                            <div className="mb-2">
                                <span className="text-2xl">{item.name}</span>
                            </div>
                            {item.info.map((line, i) => (
                                <div key={"company-info-" + idx + "-" + i} className={line.type === RichTextType.H6 ? "" : "mt-3"}>
                                    <span className={line.type === RichTextType.H6 ? "text-lg" : "text-sm"}>{line.text}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={css.gdpr}>
                    <span className="text-2xl">{gdpr}</span>
                    <ul>
                        {gdpr_links.map((item, idx) => (
                            <li key={"gdpr-link-" + idx}>
                                <a className={css.gdprLink} href={item.document.url} target="_blank">
                                    <span className="text-sm sm:text-base">{item.text}</span>
                                    <span className={classNames("material-icons", css.icon)}>chevron_right</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CompaniesSection;

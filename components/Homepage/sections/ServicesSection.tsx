import React, { FC } from 'react';
import {H2, H3} from "~/components/shared/Typography";
import {ImageData, ServiceData} from "~/types/prismic";
import css from "~/components/Homepage/sections/ServicesSection.module.scss";
import classNames from "classnames";

interface ServicesSectionProps {
    our_services: string;
    services_image: ImageData;
    services: ServiceData[]
}

const ServicesSection: FC<ServicesSectionProps> = ({ our_services, services_image, services}) => {
    return (
        <section id="services" className={css.section}>
            <H2>{our_services}</H2>
            <div className={css.mainImage}>
                {services_image?.url &&
                    <div className={css.image} style={{ backgroundImage: `url(${services_image.url})`}} />
                }
                <div className={css.overlay} />
                <ul className={css.servicesLinks}>
                    {services.map((item, idx) => (
                        <li key={"service-link-" + idx}>
                            <a className={css.link} href={"#service-anchor-" + idx}>
                                <span className={classNames("material-icons", css.icon)}>chevron_right</span>
                                <span className={css.text}>{item.primary.button_text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {services.map((item, idx) => (
                    <div className={css.service} key={"service-content-" + idx} id={"service-anchor-" + idx}>
                        <div className={css.content}>
                            <div className={css.holder}>
                                <div className="mb-8">
                                    <H3>{item.primary.title}</H3>
                                    {item.primary.subtitle && <div className="mt-4">{item.primary.subtitle}</div>}
                                </div>
                                <ul className={css.list}>
                                    {item.items.map((line, i) => (
                                        <li className="mb-4" key={"service-line-" + idx + "-" + i}>
                                            <div className={css.listItem}>
                                                <span className={classNames("material-icons", css.chevron)}>chevron_right</span>
                                                <span className={classNames(css.text, "text-2xl")}>{line.main_item}</span>
                                            </div>
                                            <ul>
                                                {line.sub_items.map((subLine, ii) => (
                                                    <li className={css.listItem} key={"service-subLine-" + idx + "-" + i + "-" + ii}>
                                                        <span className={classNames("material-icons", css.arrow)}>arrow_right</span>
                                                        <span className={classNames(css.text, "text-lg")}>{subLine.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={css.image} style={{ backgroundImage: `url(${item.primary.image.url})`}}></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServicesSection;

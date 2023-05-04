import React, { FC } from 'react';
import {H2} from "~/components/shared/Typography";
import {PersonData} from "~/types/prismic";
import css from "~/components/Homepage/sections/AboutSection.module.scss";
import classNames from "classnames";

interface AboutSectionProps {
    about_us: string;
    team: PersonData[];
}

const getNameInitials = (name: string) => name.charAt(0) + name.charAt(name.indexOf(" ")+1);

const AboutSection: FC<AboutSectionProps> = ({ about_us, team}) => {
    return (
        <section id="about" className={css.section}>
            <H2>{about_us}</H2>
            <div className={css.team}>
                {team.map((item, idx) => (
                    <div key={"person-" + idx} className={css.person}>
                        {item.image?.url ?
                            <img src={item.image.url}/>
                            :
                            <div className={classNames(css.initials, item.placeholder_color || css.withBorder)} style={item.placeholder_color ? {backgroundColor: item.placeholder_color} : undefined}>
                                {getNameInitials(item.name)}
                            </div>
                        }
                        <span className="text-2xl mt-6">{item.name}</span>
                        <span className="text-sm mt-2">{item.position}</span>
                        <span className="text-xs">{item.certification}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutSection;

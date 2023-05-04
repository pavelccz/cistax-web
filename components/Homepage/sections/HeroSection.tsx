import React, {FC} from "react";
import {ImageData, MainTitleData} from "~/types/prismic";
import css from "~/components/Homepage/sections/HeroSection.module.scss";

interface HeroSectionProps {
    main_image: ImageData;
    main_title: MainTitleData[];
}

const HeroSection: FC<HeroSectionProps> = ({ main_image, main_title }) => (
    <div className={css.heroSection}>
        {main_image?.url &&
            <div className={css.image} style={{ backgroundImage: `url(${main_image.url})`}} />
        }
        <div className={css.overlay} />
        <div className={css.heroText}>
            <div className={css.big}>
                {main_title[0] && <div>{main_title[0].text}</div>}
                <div className={css.divider}/>
                {main_title[1] && <div>{main_title[1].text}</div>}
            </div>
            <div className={css.small}>
                {main_title[2] && <div>{main_title[2].text}</div>}
                <div className={css.divider}/>
                {main_title[3] && <div>{main_title[3].text}</div>}
            </div>
        </div>
    </div>
);

export default HeroSection;

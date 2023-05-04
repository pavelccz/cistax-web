import React, { FC } from 'react';
import css from "~/components/shared/Typography/Typography.module.scss";

const H3: FC = ({children}) => (
    <h3 className={css.h3}>{children}</h3>
)

export default H3;

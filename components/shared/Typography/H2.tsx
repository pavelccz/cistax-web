import React, { FC } from 'react';
import css from "~/components/shared/Typography/Typography.module.scss";

const H2: FC = ({children}) => (
  <h2 className={css.h2}>{children}</h2>
)

export default H2;

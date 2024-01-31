import { IconType } from 'react-icons/lib';

/* #region Layout */

export type THeaderLink = {
  coordinates: number;
  id: number;
  path: string;
  title: string;
};

export type TSocialIcon = {
  id: number;
  icon: IconType;
  url: string;
};

/* #endregion */

/* #region Technologies */

export type TTechStack = {
  color: string;
  id: number;
  icon: IconType;
};

/* #endregion */

/* #region Projects */

export type TProject = {
  alt: string;
  description?: string;
  id: number;
  icon?: IconType;
  path: string;
  style?: string;
  url?: string;
};

export type TCardVariant = {
  y: number;
  opacity: number;
};

/* #endregion */

/* #region Projects */

export type TInputData = {
  id?: number;
  label: string;
  name: string;
  placeHolder: string;
};

/* #endregion */

/* #region Sroll Option */

export type TScrollOpt = {
  duration: number,
  smooth: boolean,  
};

/* #endregion */

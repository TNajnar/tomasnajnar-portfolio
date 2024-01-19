import { IconType } from 'react-icons/lib';

/* #region Layout */

export type THeaderLinks = {
  id: number;
  path: string;
  title: string;
};

export type TSocialIcons = {
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

export type TMyProjects = {
  alt: string;
  description?: string;
  id: number;
  icon?: IconType;
  path: string;
  style?: string;
  url?: string;
};

/* #endregion */

/* #region Projects */

export type TInputData = {
  id?: number;
  label: string;
  name: string;
  placeHolder: string;
}


/* #endregion */

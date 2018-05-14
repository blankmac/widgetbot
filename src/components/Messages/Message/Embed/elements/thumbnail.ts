import ExpandableImage from 'styled-elements/ExpandableImage'

import styled, { css } from '../ThemeContext'

interface Props {
  rich?: boolean
}
export const Thumbnail = styled<Props, any>(ExpandableImage)`
  border-radius: 3px;
  object-fit: contain;
  flex-shrink: 0;
  cursor: pointer;

  ${({ rich, theme }) =>
    rich
      ? css`
          margin: 5px 0;
        `
      : /^article|image$/.test(theme.embed.type)
        ? css`
            margin-top: 8px;
          `
        : css`
            margin-left: 20px;
          `};
`

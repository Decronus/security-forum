import { css } from "styled-components";

export const BlockPadding = css`
    padding-left: calc(50% - 525px);
    padding-right: calc(50% - 525px);
    @media (max-width: 1090px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`
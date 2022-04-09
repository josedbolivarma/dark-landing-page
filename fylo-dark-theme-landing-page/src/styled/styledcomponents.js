import styled from "styled-components";
import { Button, Input } from "@material-ui/core";

export const ButtonStyled = styled(Button)`
    background-color: hsl(198, 60%, 50%);
    color: #FFF;
    border-radius: 20px;
    width: 240px;
`;

export const InputStyled = styled(Input)`
    background-color: hsl(0, 0%, 100%);
    color: #D2D2D2;
    border-radius: 20px;
    width: 240px;
    padding: .3rem;
    padding-left: 1.4rem;
    text-decoration: none;
`;
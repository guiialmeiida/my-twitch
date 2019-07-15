import styled from "styled-components";

import { TextField as MUITextField } from "@material-ui/core";

export const form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100vw;
`;

export const buttonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`

export const TextField = styled(MUITextField)`
  width: 100%;
  height: 60px;
  background-color: #F1EFE8 !important
`;

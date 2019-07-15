import styled from "styled-components";

import { Paper as MUIPaper } from "@material-ui/core";

export const Paper = styled(MUIPaper)`
  padding: 5px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  background-color: #2D373A !important;
`;

export const Info = styled.div`
  margin-left: 1vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100vw;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  width: 60%;
  flex-direction: column;
`;

import { Table } from "@buffetjs/core";
import { Header } from "@buffetjs/custom";
import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 18px 30px;
`;

const headers = [
  {
    name: "Name",
    value: "name",
  },
  {
    name: "Description",
    value: "description",
  },
  {
    name: "Url",
    value: "html_url",
  },
];

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/React-avancado/repos")
      .then((res) => setRows(res.data))
      .catch((e) => strapi.notification.error(`Ops...github API error, ${e}`));
  });

  return (
    <Wrapper>
      <Header
        title={{ label: "React Avançado Repositories Plugin" }}
        content="A list of repositories in React Avançado course"
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);

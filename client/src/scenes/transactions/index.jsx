import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "../../state/api";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";


useState;

const Transactions = () => {
  const theme = useTheme();

  // values to be sent to the backend

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  console.log({ data });
  return <div>Transactions</div>;
};

export default Transactions;

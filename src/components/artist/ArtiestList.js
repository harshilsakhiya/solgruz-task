import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { toast } from "react-toastify";
import ArtistServices from "../../services/artistServices";
import ViewDrawer from "../drawer/ViewDrawer";

export default function ArtiestList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [artiestInfoData, setArtiestInfoData] = useState();
  const [open, setOpen] = useState(false);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
  });

  useEffect(() => {
    fetchData();
  }, [pagination.current]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await ArtistServices.artiestList(pagination);
      setData(response.data);
      setLoading(false);
      setPagination({ ...pagination, total: response.totalRecords });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (data) => {
    try {
      const res = await ArtistServices.artiestDelete(data?._id);
      toast.success(res?.message);
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const artiestInfo = async (data) => {
    try {
      const res = await ArtistServices.artiestListById(data?._id);
      if (res?.success === true) {
        setArtiestInfoData(res?.data);
        setOpen(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img
          src={"https://test.solz.me/" + record.image}
          alt={record.name}
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    { title: "Name", dataIndex: "artistname", key: "artistname" },
    { title: "Biography", dataIndex: "biography", key: "biography" },
    { title: "Artist Role", dataIndex: "artistrole", key: "artistrole" },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex ">
          <Button
            type="primary"
            onClick={() => artiestInfo(record)}
            className="mx-2 bg-yellow-400"
          >
            Info{" "}
          </Button>
          <Button
            type="primary"
            // onClick={() => handleActionClick(record)}
            className="mx-2 "
          >
            Update
          </Button>
          <Button
            type="primary"
            onClick={() => handleDelete(record)}
            className="mx-2 bg-red-500"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        loading={loading}
        pagination={pagination}
        onChange={(pagination) => setPagination(pagination)}
      />

      <ViewDrawer open={open} setOpen={setOpen} data={artiestInfoData} />
    </>
  );
}

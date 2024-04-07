import React, { useState } from "react";
import { Input, Select, Button, DatePicker } from "antd";
import AddEditDrawer from "../drawer/AddEditDrawer";
import ArtiestList from "./ArtiestList";
const { Search } = Input;
function Artiest() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full p-5">
      <div className="bg-white p-4 rounded-sm">
        <div className="flex gap-3 items-center">
          <Search
            className="w-1/2"
            placeholder="Search by title and city"
            size="large"
          />
          <Select
            size="large"
            className="w-1/5"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
          <DatePicker size="large" />
          <Button type="primary" size="large" onClick={() => setOpen(true)}>
            Create
          </Button>
        </div>
        <ArtiestList />
      </div>
      <AddEditDrawer open={open} setOpen={setOpen} />
    </div>
  );
}

export default Artiest;

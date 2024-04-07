import React, { useState } from "react";
import { Input, Select, Button, DatePicker } from "antd";
import AddEditDrawer from "../drawer/AddEditDrawer";
import ArtiestList from "./ArtiestList";
const { Search } = Input;
function Artiest() {
  const [open, setOpen] = useState(false);
  const [addFlag, setAddFlag] = useState(false)


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
              { value: "Artist", label: "Artist" },
              { value: "Other", label: "Other" },
            ]}
          />
          <DatePicker size="large" />
          <Button type="primary" size="large" onClick={() => setOpen(true)}>
            Create
          </Button>
        </div>
        <ArtiestList addFlag={addFlag}  />
      </div>
      <AddEditDrawer open={open} setOpen={setOpen} setEditFlag={setAddFlag}  />
    </div>
  );
}

export default Artiest;

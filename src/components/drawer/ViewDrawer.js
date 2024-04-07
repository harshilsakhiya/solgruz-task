import React from "react";
import { Button, Drawer } from "antd";

function ViewDrawer({ open, setOpen, data }) {
  return (
    <Drawer
      title="Artiest Info"
      onClose={() => setOpen(false)}
      open={open}
      width={500}
    >
      <div className="flex flex-col gap-4 p-4 bg-[#f5f5f5] h-[calc(100vh-57px)]">
        <div className=" gap-1 items-center">
          <img
            src={"https://test.solz.me/" + data?.image}
            style={{ width: 100, height: 100 }}
          />
        </div>
        <div className=" gap-1">
          <label className="text-md text-[#b4b7bf] min-w-[120px] py-1.5 px-1.5 max-w-[120px]">
            Artist Name : {data?.artistname}
          </label>
        </div>

        <div className=" gap-1">
          <label className="text-md text-[#b4b7bf] min-w-[120px] py-1.5 px-1.5 max-w-[120px]">
            Biography : {data?.biography}
          </label>
        </div>
        <div className=" gap-1">
          <label className="text-md text-[#b4b7bf] min-w-[120px] py-1.5 px-1.5 max-w-[120px]">
            Artist Role : {data?.artistrole}
          </label>
        </div>

        <div className="flex gap-2.5 justify-center">
          <Button
            type="default"
            className=" h-10 text-md min-w-[100px]"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default ViewDrawer;

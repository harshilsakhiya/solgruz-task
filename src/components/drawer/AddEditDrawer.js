import React, { useEffect, useState } from "react";
import { Input, Button, Drawer, Checkbox } from "antd";
import ArtistServices from "../../services/artistServices";
import { toast } from "react-toastify";

function AddEditDrawer({
  open,
  setOpen,
  data,
  setArtiestInfoData,
  setEditFlag,
}) {
  const [inputValue, setInputValue] = useState({});
  const [coverImage, setCoverImage] = useState();
  const [roleChecked, setRoleChecked] = useState(false);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    if (e.target.name.trim()) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const imageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  useEffect(() => {
    if (data) {
      setInputValue({
        artistname: data?.artistname,
        biography: data?.biography,
      });
      setCoverImage(data?.image);
      setRoleChecked(data?.artistrole === "Artist" ? true : false);
    }
  }, [data]);

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (inputValue && !inputValue.artistname) {
      formIsValid = false;
      errors["artistname"] = "*Please enter artist name!";
    }
    if (inputValue && !inputValue.biography) {
      formIsValid = false;
      errors["biography"] = "*Please enter biography!";
    }
    if (!coverImage) {
      formIsValid = false;
      errors["image"] = "*Please select image!";
    }

    setErrors(errors);
    return formIsValid;
  };

  const addArtiest = async () => {
    if (validateForm()) {
      setLoading(true);

      const Artist = new FormData();
      Artist.append("artistname", inputValue.artistname);
      Artist.append("biography", inputValue.biography);
      Artist.append("image", coverImage);
      Artist.append("artistroles", roleChecked ? "Artist" : "Other");

      try {
        const res =
          data === undefined
            ? await ArtistServices.addArtiest(Artist)
            : await ArtistServices.updateArtiest(Artist, data?._id);
        if (res?.success === true) {
          setEditFlag?.(true);
          toast.success(res?.message);
          setLoading(false);
          setOpen(false);
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <Drawer
      title="Create Event"
      onClose={() => setOpen(false)}
      open={open}
      width={500}
    >
      <div className="flex flex-col gap-4 p-4 bg-[#f5f5f5] h-[calc(100vh-57px)]">
        <div className="flex gap-1">
          <label className="text-md text-[#b4b7bf] min-w-[120px] py-1.5 px-1.5 max-w-[120px]">
            Artist Name
          </label>
          <Input
            size="large"
            placeholder="Enter Artist Name"
            name="artistname"
            value={inputValue.artistname}
            onChange={handleChange}
          />
          <span className="text-red-500"> {errors["artistname"]}</span>
        </div>
        <div className="flex gap-1 items-center">
          <label className="text-md text-[#b4b7bf] min-w-[120px] py-1.5 px-1.5 max-w-[120px]">
            Cover Image
          </label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={(e) => imageChange(e)}
          />
          {data && (
            <img
              className="col-4"
              src={"https://test.solz.me/" + coverImage}
              alt="coverImage"
              width={50}
            />
          )}

          <span className="text-red-500"> {errors["image"]}</span>
        </div>
        <div className="flex gap-1">
          <label className="text-md text-[#b4b7bf] min-w-[120px] py-1.5 px-1.5 max-w-[120px]">
            Biography
          </label>
          <Input
            size="large"
            placeholder="Enter Artist Biography"
            name="biography"
            value={inputValue.biography}
            onChange={handleChange}
          />
          <span className="text-red-500"> {errors["biography"]}</span>
        </div>
        <div className="flex gap-1">
          <Checkbox
            onChange={(e) => setRoleChecked(e.target.checked)}
            checked={roleChecked}
          >
            Artist
          </Checkbox>
        </div>
        <div className="flex gap-2.5 justify-center">
          <Button
            type="default"
            className=" h-10 text-md min-w-[100px]"
            onClick={() => {
              setOpen(false);
              setArtiestInfoData?.("");
            }}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            className="bg-[#283791] h-10 text-md min-w-[100px]"
            onClick={() => {
              addArtiest();
            }}
            disabled={loading}
          >
            {data ? "Update" : "Save"}
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default AddEditDrawer;

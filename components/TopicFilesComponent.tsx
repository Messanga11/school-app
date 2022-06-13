import { ApplicationState, Book, FileRequest, Topic } from "@/store/types";
import { handleImages } from "@/utils/common";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useSelector } from "react-redux";
import Input from "./basics/Input";
import Typo from "./basics/Typo";
import Button from "./basics/Button";

interface Props {
  _key: string;
  notes: any[];
  hideData?: boolean;
  libBooks: any[];
  videos: any[];
  topicToShow: Topic | null;
  setFileToDelete: Dispatch<SetStateAction<Book | null>>;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  setFilesForm: Dispatch<
    SetStateAction<{
      note: any;
      book: any;
      video: any;
      video_vip: any;
    }>
  >;
  saveFile: Function;
  fetchFiles: Function;
  inputForm: any;
}

const TopicFilesComponent: React.FC<Props> = ({
  _key,
  notes,
  libBooks,
  videos,
  fetchFiles,
  topicToShow,
  handleInputChange,
  setFilesForm,
  saveFile,
  inputForm,
  setFileToDelete,
  hideData
}) => {
  // Store
  const {
    book: { book_data },
  } = useSelector((state: ApplicationState) => state);

  // Effects
  useEffect(() => {
    fetchFiles()
  }, [fetchFiles])
  

  return (
    <div>
      <div className="flex flex-wrap gap-4 my-2">
        {/* @ts-ignore */}
        {!hideData && book_data.data.filter(
          (item) => item?.topic_id === topicToShow?.uuid && item?.type === _key
        )
        ?.map((f, i) => (
          <div
            key={`${_key}_${f?.title}_${i}`}
            className="px-8 py-6 rounded-md border border-[#eee] bg-black text-black relative"
          >
            <button
            className="text-sm absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white font-semibold flex justify-center items-center"
            onClick={() => setFileToDelete(f)}>x</button>
            <p className="capitalize text-white">{f?.title}</p>
          </div>
        ))}
      </div>
      <div className="border border-[#eee] rounded-md px-8 py-6">
        <Typo type="small" className={`text-black capitalize ${(_key === "note" || _key === "video_vip") ? "text-red-500" : ""} ${(_key === "book" || _key === "video") ? "text-blue-500" : ""}`}>
          {_key === "lib_book" ?  "Library book" : _key === "video" ?  "Video (for every one)" : _key === "video_vip" ?  "Video (for VIPs)" : _key === "note" ? "Notes (For VIPs)" : _key === "book" ? "Notes (For everyone)" : _key}
        </Typo>
        <div className="my-4">
          <Typo type="small" className="text-black text-xs">Title</Typo>
          <Input
            name={`current_${_key}_title`}
            onChange={handleInputChange}
            //@ts-ignore
            value={inputForm[`current_${_key}_title`]}
            className="flex-grow"
          />
        </div>
        <Typo type="small" className="text-black capitalize">File</Typo>
        <Input
          type="file"
          onChange={(e) => {
            setFilesForm(state => ({
              ...state,
              [_key]: e.target.files?.[0]
            }))}
          }
          className="flex-grow"
        />
        <Button
          type="button"
          onClick={() => saveFile(_key)}
          className="text-center mt-4 w-full"
        >
          <span>Add</span>
        </Button>
      </div>
    </div>
  );
};

export default TopicFilesComponent;

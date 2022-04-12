import { ApplicationState, FileRequest, Topic } from "@/store/types";
import { handleImages } from "@/utils/common";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useSelector } from "react-redux";
import Input from "./basics/Input";
import Typo from "./basics/Typo";
import Button from "./Button";

interface Props {
  _key: string;
  notes: any[];
  libBooks: any[];
  videos: any[];
  topicToShow: Topic;
  setFileToDelete: Dispatch<SetStateAction<FileRequest | null>>;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  setFilesForm: Dispatch<
    SetStateAction<{
      note: string;
      book: string;
      lib_book: string;
      video: string;
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
  setFileToDelete
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
        {book_data.data.filter(
          (item) => item?.topic_uuid === topicToShow?.uuid && item?.type === _key
        )
        ?.map((f, i) => (
          <div
            key={`${_key}_${f?.title}_${i}`}
            className="px-3 py-2 rounded-md border bg-black text-white relative"
          >
            <button
            className="text-sm absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 font-semibold flex justify-center items-center"
            onClick={() => setFileToDelete(f)}>x</button>
            <p className="font-semibold">{f?.title}</p>
          </div>
        ))}
      </div>
      <div className="border rounded-md p-2">
        <Typo type="small" className="font-semibold">
          {_key}
        </Typo>
        <div className="">
          <Typo type="small">Title</Typo>
          <Input
            name={`current_${_key}_title`}
            onChange={handleInputChange}
            //@ts-ignore
            value={inputForm[`current_${_key}_title`]}
            className="flex-grow"
          />
        </div>
        <Typo type="small">File</Typo>
        <Input
          type="file"
          onChange={(e) =>
            handleImages(
              {
                target: {
                  files: [e.target.files?.[0]],
                },
              },
              (data: string) => {
                setFilesForm((state) => ({
                  ...state,
                  [_key]: data,
                }));
              }
            )
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

import { toBase64 } from '@/utils/common';
import { useTranslation } from '@/utils/hooks';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
    field: any
}

const InputImage:React.FC<Props> = ({field}) => {
    const t = useTranslation()

    const [image, setImage] = useState("");

  return <div className="flex flex-col align-center">
  <label htmlFor={field.name} className="flex justify-center items-center cursor-pointer h-14 w-full bg-[#fafafa] rounded-md shadow-sm">
      <p>{t("click_here_to_select_an_image")}</p>
  </label>
  {image && <Image className="object-contain mt-2" width={"auto"} height={"3.5rem"} layout="fill" src={image} alt="Image to upload" />}
  <input className="hidden" id={field.name} type="file" onChange={async (e) => {
      const data = await toBase64(e.target.files![0]) as string
      setImage(data)
      field.onChange(data)
  }}/>
</div>;
};

export default InputImage;

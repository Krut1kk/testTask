import { ChangeEvent, FC } from "react";

interface FileInputProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}

export const FileInput: FC<FileInputProps> = ({ setSelectedImage }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
        setSelectedImage(readerEvent.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

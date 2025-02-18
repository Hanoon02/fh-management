import { useState } from "react";

function useDialogues() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSave = (data) => {
    console.log("Saved Data:", data);
    setIsDialogOpen(false);
  };

  return { isDialogOpen, setIsDialogOpen, handleSave };
}
export default useDialogues;

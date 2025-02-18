import toast from "react-hot-toast";

export const showToast = (message, type = "success") => {
  if (type === "success") {
    toast.success(message, {
      position: "top-center",
      duration: 3000,
      className: "text-sm"
    });
  } else if (type === "error") {
    toast.error(message, {
      position: "top-center",
      duration: 3000,
      className: "text-sm"
    });
  }
};

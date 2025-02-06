import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "../../assets/svgs/chevronLeftIcon.svg";

function BackButton() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div className=" my-4 mx-2">
      <button
        onClick={back}
        className=" flex gap-2  justify-center items-center text-xs text-gray-800 font-bold rounded-md px-2 py-2 bg-[#3fada8] hover:bg-[#338a86]"
      >
        <img src={ChevronLeftIcon} alt="" className="h-5" />
        Back
      </button>
    </div>
  );
}
export default BackButton;

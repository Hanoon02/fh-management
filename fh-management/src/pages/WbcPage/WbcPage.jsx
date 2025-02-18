import BackButton from "../../components/CustomButtons/BackButton";
import CustomDialog from "../../components/dialogue/CustomDialogue";
import WithLoader from "../../components/Loader/WithLoader";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/Table";
import { ISSUES_DATA } from "../../constants/issues";
import { TABLE_DATA } from "../../constants/tableData";
import { URLS } from "../../constants/urls";
import useDialogues from "../../hooks/useDialogues";

function WbcPage() {
  const { isDialogOpen, setIsDialogOpen, handleSave } = useDialogues();
  return (
    <>
      <NavBar title={URLS.wbc.name} />
      <div className="pt-20">
        <WithLoader>
          <BackButton />
          <div className="mb-4">
            <h3 className="text-2xl text-gray-500 font-bold px-3 py-2">
              General Table
            </h3>
            <Table data={TABLE_DATA.wbc} />
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center py-3">
              <h3 className="text-2xl text-gray-500 font-bold px-3">
                Issues Table
              </h3>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="bg-[#3fada8] font-bold text-white px-4 py-2 mr-2 md:mr-8 rounded-md text-xs hover:bg-[#338a86]"
              >
                Add issues
              </button>
            </div>
            <Table data={ISSUES_DATA.wbc} transpose={true} />
          </div>
        </WithLoader>
        <CustomDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onSave={handleSave}
          title="Add an Issue"
          options={["Completed", "Not Completed"]}
          inputText="Issue name"
          inputPlaceholder="Write an issue"
          dateTitle="Issue Date"
          selectTitle="Status"
          selectPlaceholder="Choose the status"
        />
      </div>
    </>
  );
}
export default WbcPage;

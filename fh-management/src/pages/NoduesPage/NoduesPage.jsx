import BackButton from "../../components/CustomButtons/BackButton";
import WithLoader from "../../components/Loader/WithLoader";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/Table";
import { TABLE_DATA } from "../../constants/tableData";
import { URLS } from "../../constants/urls";

function NoduesPage() {
  return (
    <>
      <NavBar title={URLS.nodues.name} />
      <div className="pt-20">
        <WithLoader>
          <BackButton />
          <Table data={TABLE_DATA.nodues} />
        </WithLoader>
      </div>
    </>
  );
}
export default NoduesPage;

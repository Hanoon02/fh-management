import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/Table";
import { URLS } from "../../constants/urls";
import { TABLE_DATA } from "../../constants/tableData";
import BackButton from "../../components/CustomButtons/BackButton";
import WithLoader from "../../components/Loader/WithLoader";

function FmsPage() {
  return (
    <>
      <NavBar title={URLS.fms.name} />
      <div className="pt-20">
        <WithLoader>
          <BackButton />
          <Table data={TABLE_DATA.FMS} />
        </WithLoader>
      </div>
    </>
  );
}
export default FmsPage;

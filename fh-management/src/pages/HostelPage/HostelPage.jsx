import BackButton from "../../components/CustomButtons/BackButton";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/Table";
import { URLS } from "../../constants/urls";
import { TABLE_DATA } from "../../constants/tableData";
import WithLoader from "../../components/Loader/WithLoader";

function HostelPage() {
  return (
    <>
      <NavBar title={URLS.hostel.name} />
      <div className="pt-20">
        <WithLoader>
          <BackButton />
          <Table data={TABLE_DATA.hostel} />
        </WithLoader>
      </div>
    </>
  );
}
export default HostelPage;

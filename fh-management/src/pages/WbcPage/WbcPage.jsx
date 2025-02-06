import BackButton from "../../components/CustomButtons/BackButton";
import WithLoader from "../../components/Loader/WithLoader";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/table";
import { TABLE_DATA } from "../../constants/tableData";
import { URLS } from "../../constants/urls";

function WbcPage() {
  return (
    <>
      <NavBar title={URLS.wbc.name} />
      <div className="pt-20">
        <WithLoader>
          <BackButton />
          <Table data={TABLE_DATA.wbc} />
        </WithLoader>
      </div>
    </>
  );
}
export default WbcPage;

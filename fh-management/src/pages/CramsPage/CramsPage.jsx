import BackButton from "../../components/CustomButtons/BackButton";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/table";
import { URLS } from "../../constants/urls";
import { TABLE_DATA } from "../../constants/tableData";
import WithLoader from "../../components/Loader/WithLoader";

function CramsPage() {
  return (
    <>
      <NavBar title={URLS.crams.name} />
      <div className="pt-20">
        <WithLoader>
          <BackButton />
          <Table data={TABLE_DATA.crams} />
        </WithLoader>
      </div>
    </>
  );
}
export default CramsPage;

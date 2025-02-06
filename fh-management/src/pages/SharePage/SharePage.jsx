import BackButton from "../../components/CustomButtons/BackButton";
import WithLoader from "../../components/Loader/WithLoader";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/table";
import { TABLE_DATA } from "../../constants/tableData";
import { URLS } from "../../constants/urls";

function SharePage() {
  return (
    <>
      <NavBar title={URLS.share.name} />
      <div className="pt-20">
        <WithLoader>
          <BackButton />
          <Table data={TABLE_DATA.share} />
        </WithLoader>
      </div>
    </>
  );
}
export default SharePage;

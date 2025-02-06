import BackButton from "../../components/CustomButtons/BackButton";
import NavBar from "../../components/navbar/NavBar";
import Table from "../../components/table/table";
import { TABLE_DATA } from "../../constants/tableData";
import { URLS } from "../../constants/urls";
import WithLoader from "../../components/Loader/WithLoader";

function AchievePage() {
  return (
    <>
      <NavBar title={URLS.achieve.name} />
      <div className="pt-20">
        <WithLoader>
          <BackButton />
          <Table data={TABLE_DATA.achieve} />
        </WithLoader>
      </div>
    </>
  );
}

export default AchievePage;

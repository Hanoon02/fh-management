import FMS from "../../../assets/svgs/fms.svg";
import HOSTEL from "../../../assets/svgs/hostel.svg";
import SHARE from "../../../assets/svgs/share.svg";
import BOOK from "../../../assets/svgs/book.svg";
import ACHIEVE from "../../../assets/svgs/achieve.svg";
import WBC from "../../../assets/svgs/wbc.svg";
import NODUES from "../../../assets/svgs/nodues.svg";
import CRAMS from "../../../assets/svgs/crams.svg";
import Cards from "../../../components/cards/Cards";
import { CARD_DISCLAMER } from "../../../constants/cardDisclamer";
import { URLS } from "../../../constants/urls";

function AllCards() {
  const path = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4 px-6 my-7 justify-center">
      <Cards
        src={FMS}
        alt="fms portal"
        disclosureText={CARD_DISCLAMER.fms.title}
        onClick={() => path(URLS.fms.url)}
      />
      <Cards
        src={HOSTEL}
        alt="hostel"
        disclosureText={CARD_DISCLAMER.hostel.title}
        onClick={() => path(URLS.hostel.url)}
      />
      <Cards
        src={SHARE}
        alt="share"
        disclosureText={CARD_DISCLAMER.share.title}
        onClick={() => path(URLS.share.url)}
      />
      <Cards
        src={BOOK}
        alt="book"
        disclosureText={CARD_DISCLAMER.book.title}
        onClick={() => path(URLS.book.url)}
      />
      <Cards
        src={ACHIEVE}
        alt="achieve"
        disclosureText={CARD_DISCLAMER.achieve.title}
        onClick={() => path(URLS.achieve.url)}
      />
      <Cards
        src={WBC}
        alt="wbc"
        disclosureText={CARD_DISCLAMER.wbc.title}
        onClick={() => path(URLS.wbc.url)}
      />
      <Cards
        src={NODUES}
        alt="nodues"
        disclosureText={CARD_DISCLAMER.nodues.title}
        onClick={() => path(URLS.nodues.url)}
      />
      <Cards
        src={CRAMS}
        alt="crams"
        disclosureText={CARD_DISCLAMER.crams.title}
        onClick={() => path(URLS.crams.url)}
      />
    </div>
  );
}
export default AllCards;

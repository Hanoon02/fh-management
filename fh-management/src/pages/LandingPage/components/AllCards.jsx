import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FMS from "../../../assets/svgs/fms.svg";
import HOSTEL from "../../../assets/svgs/hostel.svg";
import SHARE from "../../../assets/svgs/share.svg";
import BOOK from "../../../assets/svgs/book.svg";
import ACHIEVE from "../../../assets/svgs/achieve.svg";
import WBC from "../../../assets/svgs/wbc.svg";
import NODUES from "../../../assets/svgs/nodues.svg";
import CRAMS from "../../../assets/svgs/crams.svg";
import Cards from "../../../components/cards/Cards";
import { URLS } from "../../../constants/urls";

function AllCards() {
    const navigate = useNavigate();
    const [status, setStatus] = useState({});

    useEffect(() => {
        const checkUrls = async () => {
            const results = {};

            await Promise.all(
                Object.entries(URLS).map(async ([key, value]) => {
                    try {
                        const controller = new AbortController();
                        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 sec timeout

                        const response = await fetch(value.url, { method: "HEAD", signal: controller.signal });

                        clearTimeout(timeoutId);

                        // ✅ Only mark as "Up" if status is 200
                        if (response.status === 200) {
                            results[key] = "Up";
                        } else {
                            results[key] = "Down";
                        }
                    } catch {
                        results[key] = "Down"; // If request fails or times out, assume Down
                    }
                })
            );
            setStatus(results);
        };

        checkUrls();
    }, []);

    const path = (url) => {
        window.open(url, "_blank");
    };

    const onSettings = (route) => {
        navigate(route);
    };

    return (
        <div className="p-6">
            {/* Status Display Section */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6 shadow-lg">
                <h2 className="text-xl font-bold text-center mb-3 text-gray-700">Website Status</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(URLS).map(([key, value]) => (
                        <div
                            key={key}
                            className={`p-3 rounded-md text-center text-white font-semibold ${
                                status[key] === "Up" ? "bg-green-500" : "bg-red-500"
                            }`}
                        >
                            {value.name}: {status[key] || "Checking..."}
                        </div>
                    ))}
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 px-6 my-7 justify-center">
                <Cards
                    src={FMS}
                    alt="fms portal"
                    disclosureText={URLS.fms.title}
                    onClick={() => path(URLS.fms.url)}
                    onSettings={() => onSettings(URLS.fms.route)}
                />
                <Cards
                    src={HOSTEL}
                    alt="hostel"
                    disclosureText={URLS.hostel.title}
                    onClick={() => path(URLS.hostel.url)}
                    onSettings={() => onSettings(URLS.hostel.route)}
                />
                <Cards
                    src={SHARE}
                    alt="share"
                    disclosureText={URLS.share.title}
                    onClick={() => path(URLS.share.url)}
                    onSettings={() => onSettings(URLS.share.route)}
                />
                <Cards
                    src={BOOK}
                    alt="book"
                    disclosureText={URLS.book.title}
                    onClick={() => path(URLS.book.url)}
                    onSettings={() => onSettings(URLS.book.route)}
                />
                <Cards
                    src={ACHIEVE}
                    alt="achieve"
                    disclosureText={URLS.achieve.title}
                    onClick={() => path(URLS.achieve.url)}
                    onSettings={() => onSettings(URLS.achieve.route)}
                />
                <Cards
                    src={WBC}
                    alt="wbc"
                    disclosureText={URLS.wbc.title}
                    onClick={() => path(URLS.wbc.url)}
                    onSettings={() => onSettings(URLS.wbc.route)}
                />
                <Cards
                    src={NODUES}
                    alt="nodues"
                    disclosureText={URLS.nodues.title}
                    onClick={() => path(URLS.nodues.url)}
                    onSettings={() => onSettings(URLS.nodues.route)}
                />
                <Cards
                    src={CRAMS}
                    alt="crams"
                    disclosureText={URLS.crams.title}
                    onClick={() => path(URLS.crams.url)}
                    onSettings={() => onSettings(URLS.crams.route)}
                />
            </div>
        </div>
    );
}

export default AllCards;
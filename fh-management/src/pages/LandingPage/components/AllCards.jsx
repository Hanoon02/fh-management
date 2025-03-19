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

const API_URL = "https://fh-managament-backend.vercel.app/api/check-status";

function AllCards() {
    const navigate = useNavigate();
    const [status, setStatus] = useState({});

    useEffect(() => {
        const checkUrls = async () => {
            const results = {};

            await Promise.all(
                Object.entries(URLS).map(async ([key, value]) => {
                    try {
                        const response = await fetch(`${API_URL}?url=${encodeURIComponent(value.url)}`);
                        const data = await response.json();
                        results[key] = data.status.includes("200 OK") ? "UP" : "DOWN"; // ✅ Convert status to UP/DOWN
                    } catch {
                        results[key] = "DOWN"; // ❌ Default to DOWN if API fails
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
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6 px-6 my-7 justify-center">
                {Object.entries(URLS).map(([key, value]) => (
                    <div key={key} className="flex flex-col items-center">
                        {/* Status Box on Top */}
                        <div
                            className={`w-full text-center text-white font-semibold p-2 rounded-lg mb-2 ${
                                status[key] === "UP" ? "bg-green-500" : "bg-red-500"
                            }`}
                        >
                            Status: {status[key] || "Checking..."}
                        </div>

                        {/* Card Below Status Box */}
                        <Cards
                            src={
                                key === "fms" ? FMS :
                                    key === "hostel" ? HOSTEL :
                                        key === "share" ? SHARE :
                                            key === "book" ? BOOK :
                                                key === "achieve" ? ACHIEVE :
                                                    key === "wbc" ? WBC :
                                                        key === "nodues" ? NODUES :
                                                            CRAMS
                            }
                            alt={value.name}
                            disclosureText={value.title}
                            onClick={() => path(value.url)}
                            onSettings={() => onSettings(value.route)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllCards;
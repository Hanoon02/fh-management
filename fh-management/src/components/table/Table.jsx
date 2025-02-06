import React from "react";

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500 text-center">No data available</p>;
  }

  return (
    <div className="relative overflow-x-auto border-t shadow-md sm:rounded-lg">
      <table className="w-full text-left text-gray-500">
        <tbody>
          {data.map((col, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-50  border-b  border-gray-200"
            >
    
              <th
                scope="row"
                className="px-6 py-4 text-sm text-gray-700 bg-gray-100"
              >
                {col.title}
              </th>


              <td className="px-6 py-4 text-xs font-bold">
                {col.values.length > 0 ? col.values[0] : "-"}
              </td>

              <td className="px-6 py-4">
                <button className="text-gray-100 font-extrabold px-4 py-2 text-xs rounded-md bg-[#3fada8] hover:bg-[#338a86]">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React from "react";
import { useState } from "react";

const Table = ({ data }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValues, setEditedValues] = useState(
    data.map((col) => col.values[0] || "")
  );

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleInputChange = (index, event) => {
    const newValues = [...editedValues];
    newValues[index] = event.target.value;
    setEditedValues(newValues);
  };

  const handleSave = () => {
    setEditingIndex(null);
  };

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
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editedValues[index]}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border border-gray-400 rounded px-2 py-2 text-gray-700 w-full focus:ring-1 focus:ring-[#3fada8] focus:outline-none"
                  />
                ) : (
                  editedValues[index]
                )}
              </td>

              <td className="px-6 py-4 flex flex-wrap gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  disabled={editingIndex === index}
                  className={`text-gray-100 font-extrabold px-4 py-2 text-xs rounded-md bg-[#3fada8] hover:bg-[#338a86] ${
                    editingIndex === index
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Edit
                </button>
                {editingIndex === index ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="text-gray-100 font-extrabold px-4 py-2 text-xs rounded-md bg-green-500 hover:bg-green-600"
                    >
                      Save
                    </button>
                  </>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

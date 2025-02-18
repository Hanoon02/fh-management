import React, { useState } from "react";

const Table = ({ data, transpose = false }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [editedValues, setEditedValues] = useState(
    data.map((col) => col.values.map((value) => value || ""))
  );

  const handleEdit = (rowIndex) => {
    setEditingRow(rowIndex);
  };

  const handleInputChange = (rowIndex, colIndex, event) => {
    const newValues = editedValues.map((row, i) =>
      i === colIndex
        ? row.map((val, j) => (j === rowIndex ? event.target.value : val))
        : row
    );
    setEditedValues(newValues);
  };

  const handleSave = () => {
    setEditingRow(null);
  };

  if (!data || data.length === 0) {
    return <p className="text-gray-500 text-center">No data available</p>;
  }

  return (
    <div className="relative overflow-x-auto border-t shadow-md sm:rounded-lg">
      <table className="w-full text-left text-gray-500">
        <tbody>
          {transpose ? (
            // Transposed Table: Column titles in the first row
            <>
              <tr className="bg-gray-100">
                {data.map((col, index) => (
                  <th key={index} className="px-6 py-4 text-sm text-gray-700">
                    {col.title}
                  </th>
                ))}
                <th className="px-6 py-4 text-sm text-gray-700">Actions</th>
              </tr>
              {data[0].values.map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-200">
                  {data.map((col, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 text-xs font-bold">
                      {editingRow === rowIndex ? (
                        <input
                          type="text"
                          value={editedValues[colIndex][rowIndex]}
                          onChange={(e) =>
                            handleInputChange(rowIndex, colIndex, e)
                          }
                          className="border border-gray-400 rounded px-2 py-2 text-gray-700 w-full focus:ring-1 focus:ring-[#3fada8] focus:outline-none"
                        />
                      ) : (
                        editedValues[colIndex][rowIndex]
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => handleEdit(rowIndex)}
                      disabled={editingRow === rowIndex}
                      className={`text-gray-100 font-extrabold px-4 py-2 text-xs rounded-md bg-[#3fada8] hover:bg-[#338a86] ${
                        editingRow === rowIndex
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      Edit
                    </button>
                    {editingRow === rowIndex && (
                      <button
                        onClick={handleSave}
                        className="text-gray-100 font-extrabold px-4 py-2 text-xs rounded-md bg-green-500 hover:bg-green-600"
                      >
                        Save
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            // Default Table: Column titles in the first column
            data.map((col, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-50 border-b border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 text-sm text-gray-700 bg-gray-100"
                >
                  {col.title}
                </th>
                <td className="px-6 py-4 text-xs font-bold">
                  {editingRow === index ? (
                    <input
                      type="text"
                      value={editedValues[index][0]}
                      onChange={(e) => handleInputChange(0, index, e)}
                      className="border border-gray-400 rounded px-2 py-2 text-gray-700 w-full focus:ring-1 focus:ring-[#3fada8] focus:outline-none"
                    />
                  ) : (
                    editedValues[index][0]
                  )}
                </td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    disabled={editingRow === index}
                    className={`text-gray-100 font-extrabold px-4 py-2 text-xs rounded-md bg-[#3fada8] hover:bg-[#338a86] ${
                      editingRow === index
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    Edit
                  </button>
                  {editingRow === index && (
                    <button
                      onClick={handleSave}
                      className="text-gray-100 font-extrabold px-4 py-2 text-xs rounded-md bg-green-500 hover:bg-green-600"
                    >
                      Save
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const CustomDialog = ({
  isOpen,
  onClose,
  onSave,
  title,
  options,
  inputText,
  inputPlaceholder,
  dateTitle,
  selectTitle,
  selectPlaceholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
              <Dialog.Title className="flex justify-center text-2xl font-bold text-[#3fada8]">
                {title}
              </Dialog.Title>

              {/* Input Field */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-500">
                  {inputText}
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-gray-900 shadow-sm focus:border-[#3fada8] focus:ring-[#3fada8] focus:outline-none"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={inputPlaceholder}
                />
              </div>

              {/* Date Picker */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-500">
                  {dateTitle}
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-gray-900 shadow-sm focus:border-[#3fada8] focus:ring-[#3fada8] focus:outline-none"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              {/* Select Box */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-500">
                  {selectTitle}
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-gray-900 shadow-sm focus:border-[#3fada8] focus:ring-[#3fada8] focus:outline-none"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="" disabled>
                    {selectPlaceholder}
                  </option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="rounded-lg text-sm bg-[#3fada8] px-4 py-2 text-white hover:bg-[#3f86a6]"
                  onClick={() =>
                    onSave({ inputValue, selectedDate, selectedOption })
                  }
                >
                  Save
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CustomDialog;

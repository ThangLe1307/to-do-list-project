import { useState } from "react";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openDialog}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Dialog
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
              onClick={closeDialog}
            ></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-full shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">Dialog Title</p>
                  <button
                    onClick={closeDialog}
                    className="text-gray-500 hover:text-gray-400 focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.707 10l4.147-4.146a.5.5 0 01.707.707L11.414 10l4.147 4.146a.5.5 0 11-.707.707L10 10.707l-4.146 4.147a.5.5 0 11-.707-.707L9.293 10 5.146 5.854a.5.5 0 11.707-.707L10 9.293l4.146-4.147a.5.5 0 11.707.707L10.707 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="my-5">
                  <p>This is the content of the dialog.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;

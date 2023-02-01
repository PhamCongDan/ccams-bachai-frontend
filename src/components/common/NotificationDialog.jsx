import React from "react";
import Dialog from "./Dialog";

export const NotificationDialog = (props) => {
  const { isShow, closeModal, message } = props;
  return (
    <Dialog isShow={isShow} closeModal={closeModal} size="sm">
      <div className="bg-slate-50 h-full p-4 mb-4 flex flex-col items-center justify-center gap-16">
        <label className="text-center text-lg font-bold">{message}</label>
        <button
          className="
            text-gray-900
            bg-gray-300 border
            border-gray-300
            focus:outline-none
            hover:bg-gray-100 focus:ring-4
            focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm px-5
            py-2.5
            transition
            ease-in-out
            hidden
            md:block"
          onClick={closeModal}
        >
          OK
        </button>
      </div>
    </Dialog>
  );
};

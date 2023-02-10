import React from "react";
import Dialog from "./Dialog";

export const NotificationDialog = (props) => {
  const { isShow, closeModal, message } = props;
  return (
    <Dialog isShow={isShow} closeModal={closeModal} size="sm">
      <div className="bg-slate-50 h-full p-4 mb-4 flex flex-col items-center justify-center gap-16">
        <label className="text-center text-lg font-bold">{message}</label>
        <button
          className="btn-primary--contained"
          onClick={closeModal}
        >
          OK
        </button>
      </div>
    </Dialog>
  );
};

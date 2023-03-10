// -------------------------------------------------------------------------------
// Libraries
// -------------------------------------------------------------------------------
import React from "react";
import { Modal as AntdModal } from "antd";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledModal from "./styles";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const Modal = ({ open, setOpen, title, width, maskClosable, children }) => {
  return (
    <AntdModal
      title={title}
      centered
      closable={false}
      width={width || "fit-content"}
      footer={null}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      maskClosable={maskClosable}
    >
      <StyledModal className="th-modal">{children}</StyledModal>
    </AntdModal>
  );
};

export default Modal;

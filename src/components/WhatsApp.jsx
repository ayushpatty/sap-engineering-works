import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/918919923633"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontSize: "34px",
        zIndex: 9999,
        boxShadow: "0 12px 25px rgba(0,0,0,.25)",
      }}
    >
      <FaWhatsapp />
    </a>
  );
}
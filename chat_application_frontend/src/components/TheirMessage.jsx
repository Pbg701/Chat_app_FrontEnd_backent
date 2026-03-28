
const TheirMessage = ({ message }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-start",
      margin: "6px"
    }}>
      <div style={{
        background: "#fff",
        padding: "10px 14px",
        borderRadius: "18px",
        maxWidth: "60%",
        border: "1px solid #ddd"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "12px" }}>
          {message.user}
        </div>
        {message.text}
        <div style={{ fontSize: "10px", marginTop: "4px" }}>
          {message.time}
        </div>
      </div>
    </div>
  );
};

export default TheirMessage;
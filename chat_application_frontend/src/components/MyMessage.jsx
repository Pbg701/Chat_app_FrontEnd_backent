
const MyMessage = ({ message }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-end",
      margin: "6px"
    }}>
      <div style={{
        background: "#25D366",
        color: "white",
        padding: "10px 14px",
        borderRadius: "18px",
        maxWidth: "60%"
      }}>
        {message.text}
        <div style={{ fontSize: "10px", marginTop: "4px" }}>
          {message.time}
        </div>
      </div>
    </div>
  );
};


export default MyMessage;
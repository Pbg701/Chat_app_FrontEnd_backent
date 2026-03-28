
import { useState } from "react";

const MessageForm = ({ sendMessage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      sendMessage(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      padding: "10px",
      background: "#f0f0f0"
    }}>
      <input
        value={value}
        placeholder="Type a message..."
        onChange={(e) => setValue(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          outline: "none"
        }}
      />
      <button style={{
        marginLeft: "10px",
        padding: "10px 15px",
        borderRadius: "20px",
        background: "#075e54",
        color: "#fff",
        border: "none"
      }}>
        Send
      </button>
    </form>
  );
};

export default MessageForm;
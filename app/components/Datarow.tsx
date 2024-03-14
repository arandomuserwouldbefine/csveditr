import { useState,useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiMinus } from "react-icons/fi";
import PartySocket from "partysocket";

const socket = new PartySocket({
  host: "192.168.42.217:1999",
  room: "fasdf",
})
type DataRowProps = {
  data: {
    id: string;
    start: string;
    end: string;
    imageUrl: string;
  };
};

export default function Datarow(props: DataRowProps) {
  const [id, setId] = useState(props.data.id || "");
  const [start, setStart] = useState(props.data.start || "");
  const [end, setEnd] = useState(props.data.end || "");
  const handleChange = (value: string | undefined) => {
    if (value === undefined) return;

    socket.send(value);
  };
  const onIncomingMessage = (message: MessageEvent) => {
    setId(message.data);
  };

  useEffect(() => {
    socket.addEventListener("message", onIncomingMessage);

    return () => socket.removeEventListener("message", onIncomingMessage);
  }, []);
  return (
    <div className="grid data-row">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="123D783"
          onChange={(e) => {
            socket.send(`id:${e.target.value}`)
            setId(e.target.value)
          }}
          value={id}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="0"
          
          onChange={(e) => {
            socket.send(`start:${e.target.value}`)
            setStart(e.target.value)
          }}
          value={start}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="11:50"
          onChange={(e) => {
            socket.send(`end: ${e.target.value}`)
            setEnd(e.target.value)}}
          value={end}
        />
      </div>
      <div className="action-container">
        <img src="/Assets/image.jpg" className="row-image" />
        <div className="row-buttons">
          <button className="ud-arrow">
            <FiChevronUp />
          </button>
          <button className="min-button">
            <FiMinus />
          </button>
          <button className="ud-arrow">
            <FiChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const WebSocketDemo = ({ onDataReceived }) => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState(
    "ws://localhost:8000/ws/last_data/"
  );
  
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (lastMessage !== null) {
      setData(lastMessage);
      // Call the callback function with the received data
      onDataReceived(lastMessage);
    }
  }, [lastMessage, onDataReceived]);

  useEffect(() => {
    // Set up an interval to send a message every 10 seconds
    const interval = setInterval(() => {
      if (readyState === ReadyState.OPEN) {
        console.log("talking to the moon!");
        sendMessage("");
      }
    }, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [readyState, sendMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  };

  useEffect(() => {
    // Log a message when the connection status changes
    console.log('WebSocket connection status changed to : ' + connectionStatus[readyState] );
  }, [readyState]);

  return (
    <div></div>
  );
};

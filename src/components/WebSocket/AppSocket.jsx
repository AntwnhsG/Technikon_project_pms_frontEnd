import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const useNotification = () => {
    const [notifications, setNotifications] = useState([]);

    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        if (!stompClient || !stompClient.connected) {

            const socket = new SockJS("http://localhost:8080/ws");

            const client = Stomp.over(socket);

            client.connect({}, () => {
                client.subscribe("/topic/notifications", (message) => {
                    setNotifications((prevNotifications) => [
                        ...prevNotifications,
                        message.body,
                    ]);
                });
            });
            setStompClient(client);
        }

        return () => {
            if (stompClient && stompClient.connected) {
                stompClient.disconnect();
            }
        };
    }, []);

    const sendNotification = (url, body) => {
        if (stompClient) {
            stompClient.send(url, {}, body);
        }
    };


    return [notifications, sendNotification];
};

export default useNotification;
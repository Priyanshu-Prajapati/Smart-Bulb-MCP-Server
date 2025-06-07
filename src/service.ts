import dgram from "dgram";

const BULB_IP = process.env.BULB_IP;
const BULB_PORT = process.env.BULB_PORT;

export async function turnOnBulb() {
    const client = dgram.createSocket("udp4");
    const message = JSON.stringify({
        method: "setState",
        params: {
            state: true,
        }
    })

    client.send(message, Number(BULB_PORT), BULB_IP, (err) => {
        if (err) {
            console.error("Error sending message:", err);
        }
        client.close();
    })
}

export async function turnOffBulb() {
    const client = dgram.createSocket("udp4");
    const message = JSON.stringify({
        method: "setState",
        params: {
            state: false,
        }
    })

    client.send(message, Number(BULB_PORT), BULB_IP, (err) => {
        if (err) {
            console.error("Error sending message:", err);
        }
        client.close();
    })
}

export async function changeColor({r, g, b, dimming}: {r: number, g: number, b: number, dimming: number}) {
    const client = dgram.createSocket("udp4");
    const message = JSON.stringify({
        method: "setState",
        params: {
            state: true,
            r,
            g,
            b,
            dimming,
        }
    })

    client.send(message, Number(BULB_PORT), BULB_IP, (err) => {
        if (err) {
            console.error("Error sending message:", err);
        }
        client.close();
    })
}
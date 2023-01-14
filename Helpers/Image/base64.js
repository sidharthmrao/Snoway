export async function GenBase64(filepath) {
    let returnVal = false;

    await fetch(filepath)
        .then((res) => res.arrayBuffer())
        .then((buf) => {
            let binary = "";
            let bytes = new Uint8Array(buf);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        })
        .then((base64) => {
            returnVal = base64;
        })
        .catch((err) => {
            console.log(err.message);
        });

    console.log(returnVal);
    console.log("DEBUG");
    return returnVal;
}

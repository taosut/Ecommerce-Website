export default function() {
    if (process.server) {
        console.log("middleware from client side");
    }
}
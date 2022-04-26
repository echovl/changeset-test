function start() {
  const message = getMessage();

  console.log(message);
}

function getMessage() {
  return "Some new mssage";
}

function notifyPeers() {
  console.log("Notifying peers...");
  console.log("Linking peers");
  console.log("Done !");
}

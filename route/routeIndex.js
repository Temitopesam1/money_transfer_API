const { Router } = require("express");
const history = require("../controller/history");
const recipient = require("../controller/recipient");
const transfer = require("../controller/transfer")
const router = Router();

router.get("/get_transfer/:transferID", history.getTransfer);
router.get("/list_transfers", history.listTransfers);
router.get("/verify_transfer/:reference", history.verifyTransfer);

router.post("/create_recipient", recipient.createRecipient);
router.get("/list_recipients", recipient.listRecipients);
router.put("/update_recipient/:RecipientCode", recipient.updateRecipient);
router.get("/fetch_recipient/:code", recipient.getRecipient);
router.delete("/remove_recipient/:code", recipient.deleteRecipient);

router.post("/transfer", transfer.finalizeTransfer);
router.post("/initiate_transfer", transfer.initiateTransfer);

module.exports = router;



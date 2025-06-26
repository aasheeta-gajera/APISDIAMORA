import express from "express";
import {verifyPayment,respondToInquiry,deletePurchasedDiamond,patchPurchasedDiamond,getAllInquiries,createInquiry,getSalesReport, getAllSuppliers, supplier, getAllPurchasedDiamonds, purchaseDiamond } from "../Controllers/AdminController.js";

const adminRouter = express.Router();

adminRouter.post('/purchaseDiamond', purchaseDiamond);

adminRouter.get('/getAllPurchasedDiamonds', getAllPurchasedDiamonds);

adminRouter.post('/supplier', supplier);

adminRouter.get('/getAllSuppliers', getAllSuppliers);

adminRouter.get('/getSalesReport', getSalesReport);

adminRouter.post("/inquiry" , createInquiry); 

adminRouter.post("/inquiry/:id/respond", respondToInquiry); 

adminRouter.post("/updatePurchasedDiamond/:id", patchPurchasedDiamond); 

adminRouter.delete('/deletePurchasedDiamond/:id', deletePurchasedDiamond);

adminRouter.get("/inquiries", getAllInquiries);

// adminRouter.post("/Payment", Payment);

adminRouter.post("/verifyPayment", verifyPayment);

export default adminRouter;
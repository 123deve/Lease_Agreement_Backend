import mongoose from "mongoose";

const rentLeaseSchema = new mongoose.Schema({
  landlord_name: {type:String},
  tenant_name: {type:String},
  address: {type:String},
  rent_amount: {type:Number},
  duration: {type:Number},
  furnished_status: {type:String},
  maintenance_charges: {type:Number},
  utilities: [{type:String}],
  notice_period: {type:Number},
  leaseText: {type:String},
  notes: [{type:String}],
  createdAt: { type: Date, default: Date.now },
});

const rentLease = mongoose.model("Lease", rentLeaseSchema);
export default rentLease;

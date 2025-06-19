export function generateRentLease(data) {
    const {
      landlord_name,
      tenant_name,
      address,
      rent_amount,
      duration,
      furnished_status,
      maintenance_charges,
      utilities,
      notice_period,
    } = data;
  
    const notes = [];
  
    if (rent_amount < 5000) {
      notes.push("Warning: Rent amount seems unusually low. Please verify the entered value.");
    }
  
    if (duration > 24) {
      notes.push("Note: Lease duration exceeds 24 months. It's advised to add a renewal clause.");
    }
  
    if (/PG|Hostel/i.test(address)) {
      notes.push("Info: The address appears to be shared accommodation (PG/Hostel).");
    }
  
    if (furnished_status === "Unfurnished" && rent_amount > 25000) {
      notes.push("Caution: High rent for unfurnished property. Please review the market rate.");
    }
  
    if (maintenance_charges > 0 && !utilities.includes("Maintenance")) {
      notes.push("Alert: Maintenance charge entered but utility not selected. Please confirm.");
    }
  
    if (notice_period < 1) {
      notes.push("Notice: Short notice period may lead to disputes.");
    }
  
    const rentleaseText = `
  RENTAL AGREEMENT
  
  This rental agreement is made between ${landlord_name} (Landlord) and ${tenant_name} (Tenant).
  The property located at ${address} will be rented at ₹${rent_amount} per month for a duration of ${duration} months.
  
  ${notes.join("\n\n")}
  `;
  
    return { rentleaseText, notes };
  }
  
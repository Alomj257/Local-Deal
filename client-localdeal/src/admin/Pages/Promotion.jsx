import React from "react";
import UserTable from "../components/UserTable/UserTable";

const PromotionAdmin = () => {
  const columns = ["businessName", "locatio", "promotionType", "offer"];
  return (
    <div>
      <UserTable url="/promotions/" type="permotion" columns={columns} />
    </div>
  );
};

export default PromotionAdmin;

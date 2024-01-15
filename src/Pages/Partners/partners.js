import React from "react";
import "./partners.css";

const partners = () => {
  return (
    <div className="partnerContainer">
      <div className="PartnerHeader">{/* <h1>Header</h1> */}</div>

      <div className="partnerMainContainer">
        <div className="partnerTopHeading">Partners</div>

        <div className="partnerMidContainer">
          <div className="TitleSponsor sponsor">
            <div className="TitleSponsorHeading">Title Sponsors</div>
            <div className="TitleSponsorContent">Sahil</div>
          </div>

          <div className="MixCoSponser">
            <span className="CoSponser sponsor MixCoSponserBox">
              <div className="MixCoSponserHeading">CoSponser</div>
              <div className="MixCoSponserContent">Sahil</div>
            </span>
            <span className="AssociaeCoSpoanser sponsor MixCoSponserBox">
              <div className="MixCoSponserHeading">AssociaeCoSpoanser</div>
              <div className="MixCoSponserContent">Sahil</div>
            </span>
          </div>
          <div className="eventSponser sponsor">Sahil</div>
        </div>
      </div>
    </div>
  );
};

export default partners;

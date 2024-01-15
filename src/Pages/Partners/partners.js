import React from "react";
import "./partners.css";
import image from "./../../i/sponsor.png";

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
          <div className="MixCoSponser">
            <span className="CoSponser sponsor MixCoSponserBox">
              <div className="MixCoSponserHeading">fashion Partner</div>
              <div className="MixCoSponserContent">Harsh</div>
            </span>
            <span className="AssociaeCoSpoanser sponsor MixCoSponserBox">
              <div className="MixCoSponserHeading">Social Media Partner</div>
              <div className="MixCoSponserContent">Sahil</div>
            </span>
          </div>

          <div className="MixEventSponser sponsor">
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
              <div className="eventSponsorName">SpiddyTheDon</div>
            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
            <div className="eventSponsor">
              <img src={image} alt="logo" className="eventSponsers"></img>
                            <div className="eventSponsorName">SpiddyTheDon</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default partners;

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <div>
      {/* Helmet Provider Must be included not to show error on the client side */}
      <HelmetProvider>
        <div>
          <Helmet>
            <title>{`${title} || FoodCaB`}</title>
          </Helmet>
        </div>
      </HelmetProvider>
    </div>
  );
};

export default PageTitle;

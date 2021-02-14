import React from "react";
import { Route } from "react-router-dom";

//COMPONENTS
import ColletionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={ColletionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

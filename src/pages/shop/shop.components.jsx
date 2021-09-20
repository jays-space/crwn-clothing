import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//ACTIONS
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

//SELECTORS
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

//COMPONENTS
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPage from "../collection/collection.page";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//WITH-SPINNER COMPONENTS
const ColletionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match, isCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer} // container pattern
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <ColletionPageWithSpinner
              isLoading={!isCollectionsLoaded} //HOC only pattern
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

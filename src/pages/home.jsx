import React, { Fragment } from "react";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>
    <div className="jumbotron">
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header">Item 3</div>
          <div className="card-body">
            <h4 className="card-title">Some title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header">Item 2</div>
          <div className="card-body">
            <h4 className="card-title">Some title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header">Item 3</div>
          <div className="card-body">
            <h4 className="card-title">Some title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

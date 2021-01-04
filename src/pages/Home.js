import React from "react";

const Home = () => {
  return (
    <div>
      {" "}
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-cog"></i> Home
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#addPostModal"
              >
                <i className="fas fa-plus"></i> Add Post
              </a>
            </div>
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-success btn-block"
                data-toggle="modal"
                data-target="#addCategoryModal"
              >
                <i className="fas fa-plus"></i> Add Category
              </a>
            </div>
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-warning btn-block"
                data-toggle="modal"
                data-target="#addUserModal"
              >
                <i className="fas fa-plus"></i> Add User
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Posts</h4>
                </div>

                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center bg-primary text-white mb-3">
                <div className="card-body">
                  <h3>Posts</h3>
                  <h4 className="display-4">
                    <i className="fas fa-pencil-alt"></i> 6
                  </h4>
                  <a href="posts.html" className="btn btn-outline-light btn-sm">
                    View
                  </a>
                </div>
              </div>

              <div className="card text-center bg-success text-white mb-3">
                <div className="card-body">
                  <h3>Categories</h3>
                  <h4 className="display-4">
                    <i className="fas fa-folder"></i> 4
                  </h4>
                  <a
                    href="categories.html"
                    className="btn btn-outline-light btn-sm"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="card text-center bg-warning text-white mb-3">
                <div className="card-body">
                  <h3>Users</h3>
                  <h4 className="display-4">
                    <i className="fas fa-users"></i> 4
                  </h4>
                  <a href="users.html" className="btn btn-outline-light btn-sm">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

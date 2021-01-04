import React from "react";

const SideMenu = () => {
  return (
    <div>
      <div>
        <div className="modal fade" id="addPostModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Add Post</h5>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select className="form-control">
                      <option value="">Web Development</option>
                      <option value="">Tech Gadgets</option>
                      <option value="">Business</option>
                      <option value="">Health & Wellness</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Upload Image</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="image"
                      />
                      <label htmlFor="image" className="custom-file-label">
                        Choose File
                      </label>
                    </div>
                    <small className="form-text text-muted">Max Size 3mb</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea
                      name="editor1"
                      className="form-control"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" data-dismiss="modal">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="addCategoryModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Add Category</h5>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" data-dismiss="modal">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="addUserModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-warning text-white">
                <h5 className="modal-title">Add User</h5>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" className="form-control" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-warning" data-dismiss="modal">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

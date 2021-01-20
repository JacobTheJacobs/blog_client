import React from "react";
import { useState, useEffect } from "react";
import { listBlogsWithCategoriesAndTags } from "../actions/blog";
import { withRouter, useHistory, Link } from "react-router-dom";
import renderHTML from "react-render-html";
import moment from "moment";
import { DOMAIN, APP_NAME } from "../App";

import { Helmet } from "react-helmet";
const BASE_URL = process.env.REACT_APP_DEVELOPMENT_API;
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(0);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [loadedBlogs, setLoadedBlogs] = useState([]);
  //META
  const headMeta = () => (
    <div className="application">
      <Helmet>
        <title>{APP_NAME}</title>
        <meta
          name="description"
          content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
        />
        <link rel="canonical" href={`${DOMAIN}`} />
        <meta
          property="og:title"
          content={`Latest web developoment tutorials | ${APP_NAME}`}
        />
        <meta
          property="og:description"
          content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta
          property="og:image"
          content={`${DOMAIN}/static/images/seoblog.jpg`}
        />
        <meta
          property="og:image:secure_url"
          ccontent={`${DOMAIN}/static/images/seoblog.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
      </Helmet>
    </div>
  );

  //init
  useEffect(() => {
    showAllBlogs();
  }, []);

  //init size blogs
  const showAllBlogs = () => {
    let skip = 0;
    let limit = 3;
    listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.data.error);
      } else {
        const blogsArray = data.data.blogs;
        const categoryArray = data.data.categories;
        const blogsSize = data.data.size;

        setSkip(skip);
        setLimit(limit);
        setBlogs({ ...blogs, blogsArray });
        setCategories({ ...categories, categoryArray });
        setSize(blogsSize);
      }
    });
  };
  //load more blogs
  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.data.error);
      } else {
        const blogsArray = data.data.blogs;
        const blogsSize = data.data.size;
        setLoadedBlogs([...loadedBlogs, ...blogsArray]);
        setSize(blogsSize);
        setSkip(toSkip);

        console.log(blogsSize, "blogsSize");
      }
    });
  };

  const loadMoreButton = () => {
    console.log(size, "size");
    console.log(limit, "limit");
    return (
      size > 0 && //2
      size >= limit && ( //2 2 4 2
        <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
          Load mmore
        </button>
      )
    );
  };
  //list all categories
  const showCategories = () => (
    <div className="row">
      {categories.categoryArray
        ? categories.categoryArray.map((cat) => (
            <div
              key={cat._id}
              className="col-md-3 col-sm-3 col-3"
              style={{ margin: "1em" }}
            >
              <Link
                to={`/categories/${cat.name}`}
                className="btn btn-success btn-block"
                data-toggle="modal"
                data-target="#addCategoryModal"
                style={{
                  width: "100%",
                  height: "40px",
                  fontWeight: "900",
                  borderRadius: "15px",
                }}
              >
                {cat.name}
              </Link>
            </div>
          ))
        : ""}
    </div>
  );
  //show size categories
  const showBlogs = () => (
    <div className="row">
      {blogs.blogsArray
        ? blogs.blogsArray.map((blog) => (
            <div className="card" key={blog._id} style={{ margin: ".5em" }}>
              <p>
                Written by {blog.postedBy.name} | Published{" "}
                {moment(blog.updatedAt).fromNow()}
              </p>
              <img
                style={{ maxHeight: "250px", width: "auto" }}
                src={`${BASE_URL}/blog/photo/${blog.slug}`}
                alt={blog.title}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{renderHTML(String(blog.excerpt))}</p>
                <Link to={`/blog/${blog.slug}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          ))
        : ""}
    </div>
  );

  const stringRegex = (blog) => {
    var str = blog.split("");
    console.log(blog);
    var nth = 4; // the nth character you want to replace
    var replaceWith = "|"; // the character you want to replace the nth value
    for (var i = nth - 1; i < str.length - 1; i += nth) {
      str[i] = replaceWith;
    }
    console.log(str.join(""));
    return <div>{str.join("")}</div>;
  };
  //show all loaded categories
  const showLoadedBlogs = () => (
    <div className="row">
      {loadedBlogs.length > 1
        ? loadedBlogs.map((blog) => (
            <div className="card" key={blog._id} style={{ margin: ".5em" }}>
              <p>
                Written by {blog.postedBy.name} | Published{" "}
                {moment(blog.updatedAt).fromNow()}
              </p>
              גדשגגגגגגגגגגג
              <img
                style={{ maxHeight: "250px", width: "auto" }}
                src={`${BASE_URL}/blog/photo/${blog.slug}`}
                alt={blog.title}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{renderHTML(String(blog.excerpt))}</p>
                <Link to={`/blog/${blog.slug}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          ))
        : ""}
    </div>
  );

  return (
    <React.Fragment>
      {headMeta()}
      <div>
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>MAKE BLOG NOT WAR</h1>
              </div>
            </div>
          </div>
        </header>
        <section id="actions" className="py-4 mb-4 bg-light">
          <div className="container">{showCategories()}</div>
        </section>
        <section id="posts">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header" style={{ textAlign: "center" }}>
                    <h4>Latest Posts</h4>
                  </div>
                </div>
                <br></br>

                {showBlogs()}
                {showLoadedBlogs()}
                {loadMoreButton()}
              </div>
              <div className="col-md-3">
                <div className="card text-center bg-primary text-white mb-3">
                  <div className="card-body">
                    <h3>Posts</h3>
                    <h4 className="display-4">
                      <i className="fas fa-pencil-alt"></i> {size}
                    </h4>
                    <a
                      href="posts.html"
                      className="btn btn-outline-light btn-sm"
                    >
                      View
                    </a>
                  </div>
                </div>

                <div className="card text-center bg-warning text-white mb-3">
                  <div className="card-body">
                    <h3>Categories</h3>
                    <h4 className="display-4">
                      <i className="fas fa-folder"></i> {size}
                    </h4>
                    <a
                      href="categories.html"
                      className="btn btn-outline-light btn-sm"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;

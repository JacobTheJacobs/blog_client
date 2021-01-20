import {
  withRouter,
  useHistory,
  Link,
  RouteComponentProps,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { singleBlog, listRelated } from "../actions/blog";
import { DOMAIN, APP_NAME } from "../App";
import { Helmet } from "react-helmet";
import renderHTML from "react-render-html";
import moment from "moment";
import queryString from "query-string";
const BASE_URL = process.env.REACT_APP_DEVELOPMENT_API;

const SingleBlog = (props) => {
  const [related, setRelated] = useState([]);
  const [blog, setBlog] = useState(null);
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(false);
  //get ralated
  const loadRelated = (query) => {
    listRelated(query).then((data) => {
      console.log(data.data);
      if (data.error) {
        console.log(data.error);
      } else {
        const relate = data.data;

        setRelated([...related, relate]);
        setLoaded(true);
      }
    });
  };
  //init blog
  const getSingleBlog = () => {
    const query = props.history.location.pathname.substring(6);
    singleBlog(query).then((data) => {
      console.log(query);
      if (data.error) {
        console.log(data.error);
      } else {
        // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
        setBlog(data.data);
        setQuery(query);
        setLoaded(true);
        loadRelated(data.data);
      }
    });
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

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

  //show all loaded categories
  const showBlogCategories = (blog) => (
    <div>
      {blog != null
        ? blog.categories.map((c, i) => (
            <Link
              key={i}
              to={`/categories/${c.slug}`}
              style={{ margin: "10px" }}
            >
              <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
          ))
        : null}
    </div>
  );
  //show all realated blogs
  const showRelatedBlog = () => (
    <div>
      {related.length > 1
        ? related.map((blog, i) => (
            <div className="col-3" key={i}>
              <article>
                <div className="card">
                  <section>
                    <Link href={`/blogs/${blog.slug}`}>
                      <a>
                        <img
                          className="img img-fluid"
                          style={{ maxHeight: "auto", width: "100%" }}
                          src={`${BASE_URL}/blog/photo/${blog.slug}`}
                          alt={blog.title}
                        />
                      </a>
                    </Link>
                  </section>

                  <div className="card-body">
                    <section>
                      <Link href={`/blogs/${blog.slug}`}>
                        <a>
                          <h5 className="card-title">{blog.title}</h5>
                        </a>
                      </Link>
                      <p className="card-text">{renderHTML(blog.excerpt)}</p>
                    </section>
                  </div>

                  <div className="card-body">
                    Posted {moment(blog.updatedAt).fromNow()} by{" "}
                    <Link href={`/`}>
                      <a className="float-right">{blog.postedBy.name}</a>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))
        : null}
    </div>
  );

  //show blog
  const showBlog = (blog) => (
    <div>
      {loaded ? (
        <main>
          <article>
            <div className="">
              <section>
                <div className="row" style={{ marginTop: "30px" }}>
                  <img
                    src={`${BASE_URL}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                    style={{
                      maxHeight: "500px",
                      width: "100%",
                    }}
                  />
                </div>
              </section>

              <section>
                <div className="container">
                  <h1
                    className="display-2 pb-3 pt-3 text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    {blog.title}
                  </h1>
                  <p className="lead mt-3 mark">
                    Written by {blog.postedBy.name} | Published{" "}
                    {moment(blog.updatedAt).fromNow()}
                  </p>

                  <div className="pb-3">
                    {showBlogCategories(blog)}

                    <br />
                    <br />
                  </div>
                </div>
              </section>
            </div>

            <p className="container" style={{ wordWrap: "break-word" }}>
              {renderHTML(String(blog.body))}
            </p>

            <div className="container">
              <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
              <div className="row">{showRelatedBlog()}</div>
            </div>

            <div className="container pb-5">
              <p>show comments</p>
            </div>
          </article>
        </main>
      ) : null}
    </div>
  );

  return (
    <div className="application">
      {headMeta()}
      <div>{showBlog(blog)}</div>
    </div>
  );
};

export default withRouter(SingleBlog);

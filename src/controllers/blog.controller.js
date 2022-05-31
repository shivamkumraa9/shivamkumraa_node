const Blog = require('../models/Blog');

module.exports = {
  async blog(req, res) {
    let page = parseInt(req.params.number, 10);
    if (!page || page < 1) {
      page = 1;
    }
    const limit = 10;
    const blogs = await Blog.find()
      .skip((page - 1) * limit)
      .limit(limit);

    if (blogs.length < 1) {
      return res.status(404).send('Not found');
    }
    const total = await Blog.count();
    return res.render('blog', { blogs, page, total: Math.ceil(total / limit) });
  },
  async single(req, res) {
    const blog = await Blog.findOne({ url: req.params.url });

    if (!blog) {
      return res.status(404).send('Not found');
    }
    return res.render('single', { blog });
  },
};

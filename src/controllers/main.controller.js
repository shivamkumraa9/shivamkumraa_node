module.exports = {
  home(req, res) {
    res.render('index', { index: true, title: 'Full Stack Developer' });
  },
  contact(req, res) {
    res.render('contact', { title: 'Contact Us' });
  },
  terms(req, res) {
    res.render('terms', { title: 'Terms and Conditions' });
  },
  privacy(req, res) {
    res.render('privacy', { title: 'Privacy Policy' });
  },
  sitemap(req, res) {
    res.json({ msg: 'success' });
  },
};

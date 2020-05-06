class ErrorController {
  error(req, res) {
    return res.status(400).json({ error: 'route not found' });
  }
}

module.exports = new ErrorController();

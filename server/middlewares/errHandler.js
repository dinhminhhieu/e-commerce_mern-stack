// Bắt lỗi 404 và chuyển tiếp đến trình xử lý lỗi
const notFound = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} is not found!`);
  err.status(404);
  next(err);
};

// Xử lý lỗi 404
const errHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  return res.status(statusCode).json({
    success: false,
    message: err?.message,
  });
};

module.exports = {
  notFound,
  errHandler,
};

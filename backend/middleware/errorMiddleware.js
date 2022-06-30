const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode;
  if (statusCode === 404) {
    return res.json({
      message: "Task not found",
    });
  } else if (statusCode === 500) {
    return res.json({
      message: "Internal server error",
      error: err.message,
    });
  }
  next();
};

module.exports = {
  errorHandler,
};

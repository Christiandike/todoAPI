//this middleware handles 404 and 500 status errors only. To avoid repetition throughout the code base

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

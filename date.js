//EnglishDates

exports.getNormalFullDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleString("en-US", options);
};

exports.getFullDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return today.toLocaleString("en-US", options);
};

exports.getDate = function () {
  let today = new Date();
  let options = {
    day: "numeric",
  };
  return today.toLocaleString("en-US", options);
};

exports.getDay = function () {
  let today = new Date();
  let options = {
    weekday: "long",
  };
  return today.toLocaleString("en-US", options);
};

exports.getYear = function () {
  let today = new Date();
  let options = {
    year: "numeric",
  };
  return today.toLocaleString("en-US", options);
};

exports.getMonth = function () {
  let today = new Date();
  let options = {
    month: "long",
  };
  return today.toLocaleString("en-US", options);
};

//Hindi/Nepali Dates

exports.getNormalFullInDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleString("hi-IN", options);
};

exports.getFullInDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return today.toLocaleString("hi-IN", options);
};

exports.getInDate = function () {
  let today = new Date();
  let options = {
    day: "numeric",
  };
  return today.toLocaleString("hi-IN", options);
};

exports.getInDay = function () {
  let today = new Date();
  let options = {
    weekday: "long",
  };
  return today.toLocaleString("hi-IN", options);
};

exports.getInYear = function () {
  let today = new Date();
  let options = {
    year: "numeric",
  };
  return today.toLocaleString("hi-IN", options);
};

exports.getInMonth = function () {
  let today = new Date();
  let options = {
    month: "long",
  };
  return today.toLocaleString("hi-IN", options);
};

// Time
exports.getTime = function () {
  let today = new Date();
  let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return today.toLocaleString("en-US", options);
};

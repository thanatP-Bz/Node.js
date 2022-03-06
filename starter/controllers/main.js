const jwt = require("jsonwebtoken");
const customAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password) {
    throw new customAPIError("Please provide email and password", 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: `user created`, token });
};

const dasboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new customAPIError("No token Provided", 401);
  }
  const luckyNumber = Math.floor(Math.random() * 99);
  res.status(200).json({
    smg: `Hello`,
    secret: `Here is your authorized Data ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dasboard,
};

import userModel from "../models/user.model.js";

const insertUser = async (req, res) => {
  var { username, usermobile, useremail, usercity, userstate, userpass } =
    req.body;
  var dataToInsert = {
    username: username,
    usermobile: usermobile,
    useremail: useremail,
    usercity: usercity,
    userstate: userstate,
    userpass: userpass,
  };
  try {
    var instance = new userModel(dataToInsert);
    var ans_insert = await instance.save();
    res.status(200).send({ msg: "User Inserted", data: ans_insert });
    console.log("User inserted");
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg:"Something Went Wrong !" });
  }
  //res.send({msg:'Add location Function Called'})
};

const showUser = async (req, res) => {
  try {
    var ans_Get = await userModel.find();
    res.status(200).send({ msg: "Data Shown", data: ans_Get });
  } catch (err) {
    console.log(err);
    res.status(403).send({ error: err });
  }
  //res.send({msg:'Show location Function Called'})
};
export { insertUser, showUser };

const user = require("../models/useSchema");
const User = require("../models/useSchema");

//post user data
async function adduser(req, res) {
  const user = new User(req.body);
  await user.save();
  res.send(user);
}

async function updateuser(req, res) {
  try {
    //console.log("body",req.body);
    const _id = req.body;
    console.log(_id);
    const updatedata = await User.findByIdAndUpdate(_id, req.body);
    //    await updatebike.save()
    //console.log(updatebike)
    res.status(200).send(updatedata);
    console.log("updated");
    //    console.log(updatebike);
  } catch (e) {
    res.status(400).send({ meassge: " id is not match" });
  }
}

async function deleteuser(req, res) {
  try {
    console.log(req.body);
    const _id = req.body;
    console.log(_id);
    const deletedata = await User.findByIdAndDelete(_id);
    //    await updatebike.save()
    //console.log(updatebike)
    res.status(200).send(deletedata);
    //    console.log(updatebike);
  } catch (e) {
    res.status(400).send({ meassge: " id is not match" });
  }
}

//delete all user
async function deletealluser(req, res) {
  try {
    console.log(req.body);
    const _id = req.body;
    console.log(_id);
    const deletedata = await User.deleteMany();
    //    await updatebike.save()
    //console.log(updatebike)
    res.status(200).send(deletedata);
    //    console.log(updatebike);
  } catch (e) {
    res.status(400).send(e);
  }
}

//get all user data
async function getuseralldata(req, res) {
  try {
    // let {page,limit}=req.query;
    let page = +req.query.page;
    let limit = +req.query.limit;
   
    // console.log(req.query);
    // console.log(page,limit);
    if (!page) page = 0;
    if (!limit) limit = 10;
    // const skip = (page) * 10;
    const skip = page * limit

    const userdata = await User.find().skip(skip).limit(limit);
    // const count=userdata.length;
    // console.log(count);
    const count = await User.count()
    console.log(count);
    res.status(200).json({ limit: limit, page: page, user: userdata ,count});
    
    //   res.send(userdata.length)
  } catch (e) {
    res.status(500).send(e);
    res.send(e);
  }
}

module.exports = {
  adduser,
  updateuser,
  deleteuser,
  deletealluser,
  getuseralldata,
};

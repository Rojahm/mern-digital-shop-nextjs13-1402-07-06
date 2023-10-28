const MiddleBanner = require("../models/MiddleBanner");

const getAllMiddleBanners = async (req, res) => {
  try {
    const AllMiddleBanners = await MiddleBanner.find();
    res.status(200).json(AllMiddleBanners);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "error" });
  }
};
module.exports.getAllMiddleBanners = getAllMiddleBanners;

const newMiddleBanner = async (req, res) => {
  try {
    const newMiddleBanner = new MiddleBanner({
      image: req.body.image,
      imageAlt: req.body.imageAlt,
      mode: req.body.mode,
      link: req.body.link,
      publishDate: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    newMiddleBanner
      .save()
      .then((d) => {
        res.status(200).json({ msg: "بنر میانی با موفقیت دخیره شد🎉" });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: "خطا در ذخیره بنر میانی👎" });
      });
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "error" });
  }
};
module.exports.newMiddleBanner = newMiddleBanner;

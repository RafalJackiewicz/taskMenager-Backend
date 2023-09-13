// const { Router } = require('express');
// const { GiftRecord } = require('../records/gift.record');
//
// const giftRouter = Router();
//
// giftRouter
//   .get('/', async (req, res) => {
//     const giftsList = await GiftRecord.listAll();
//     // Przekazujemy giftsList
//     res.render('gift/list', { giftsList });
//   })
//   .post('/', async (req, res) => {
//     const data = {
//       ...req.body,
//       count: Number(req.body.count),
//     };
//
//     const newGift = new GiftRecord(data);
//     await newGift.insert();
//
//     res.redirect('/gift');
//   });
//
// module.exports = {
//   giftRouter,
// };

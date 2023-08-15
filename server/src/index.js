/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';
import productRouter from './route/product.js';
import videoRouter from './route/video.js';
import commentRouter from './route/comment.js';
import { VideoModel } from './model/video.js';
import { ProductModel } from './model/product.js';
import { CommentModel } from './model/comment.js';
import DB_URI from './config/dbconfig.js';

const seedDatabase = async () => {
  console.log('seeding database');
  const videos = [
    {
      videoUrl: 'https://www.youtube.com/embed/vmeFYa7bko8?si=gy4hvaS-R1k3JlEo',
      thumbnail: 'https://img.youtube.com/vi/vmeFYa7bko8/maxresdefault.jpg',
      title: 'Review laptop yang banyak dipake orang kaya - ThinkPad X1 Nano',
      viewCount: 0,
      comments: [],
      products: [],
    },
    {
      videoUrl: 'https://www.youtube.com/embed/ryeoRO7RZag',
      thumbnail: 'https://img.youtube.com/vi/ryeoRO7RZag/maxresdefault.jpg',
      title: 'Rp3 JUTAAN! laptop bekas yang terjual ribuan unit di toko online.',
      viewCount: 0,
      comments: [],
      products: [],
    },
    {
      videoUrl: 'https://www.youtube.com/embed/680dzyltMR4',
      thumbnail: 'https://img.youtube.com/vi/680dzyltMR4/maxresdefault.jpg',
      title: 'Which Lenovo ThinkPad Is The One For You?',
      viewCount: 0,
      comments: [],
      products: [],
    },
    {
      videoUrl: 'https://www.youtube.com/embed/mYABLe0xKbE',
      thumbnail: 'https://img.youtube.com/vi/mYABLe0xKbE/maxresdefault.jpg',
      title:
        'Laptop Bisnis Kelas Atas yang Kami Suka: Review ThinkPad X1 Carbon Gen 10 - 21CB00A0ID',
      viewCount: 0,
      comments: [],
      products: [],
    },
  ];
  const videosDb = await VideoModel.insertMany(videos);
  console.log(`videosDb : ${videosDb}`);

  videosDb.forEach(async (video) => {
    try {
      const product = [
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          image:
            'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/24/29375bba-86cf-463d-a47e-44edbe164433.jpg.webp?ect=4g',
          linkProduct:
            'https://www.tokopedia.com/trinitycomp/core-i7-gen-8-termurah-lenovo-thinkpad-x280-laptop-setipis-x1-carbon-i3-gen-8-4gb-ssd-128?extParam=ivf%3Dfalse',
          title:
            'CORE i7 GEN 8 TERMURAH ! LENOVO THINKPAD X280 LAPTOP SETIPIS X1 CARBON - i3 GEN 8, 4GB, SSD 128',
          price: 2_100_000,
        },
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          image:
            'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/24/29375bba-86cf-463d-a47e-44edbe164433.jpg.webp?ect=4g',
          linkProduct:
            'https://www.tokopedia.com/trinitycomp/core-i7-gen-8-termurah-lenovo-thinkpad-x280-laptop-setipis-x1-carbon-i3-gen-8-4gb-ssd-128?extParam=ivf%3Dfalse',
          title:
            'CORE i7 GEN 8 TERMURAH ! LENOVO THINKPAD X280 LAPTOP SETIPIS X1 CARBON - i3 GEN 8, 4GB, SSD 128',
          price: 2_100_000,
        },
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          image:
            'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/24/29375bba-86cf-463d-a47e-44edbe164433.jpg.webp?ect=4g',
          linkProduct:
            'https://www.tokopedia.com/trinitycomp/core-i7-gen-8-termurah-lenovo-thinkpad-x280-laptop-setipis-x1-carbon-i3-gen-8-4gb-ssd-128?extParam=ivf%3Dfalse',
          title:
            'CORE i7 GEN 8 TERMURAH ! LENOVO THINKPAD X280 LAPTOP SETIPIS X1 CARBON - i3 GEN 8, 4GB, SSD 128',
          price: 2_100_000,
        },
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          image:
            'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/24/29375bba-86cf-463d-a47e-44edbe164433.jpg.webp?ect=4g',
          linkProduct:
            'https://www.tokopedia.com/trinitycomp/core-i7-gen-8-termurah-lenovo-thinkpad-x280-laptop-setipis-x1-carbon-i3-gen-8-4gb-ssd-128?extParam=ivf%3Dfalse',
          title:
            'CORE i7 GEN 8 TERMURAH ! LENOVO THINKPAD X280 LAPTOP SETIPIS X1 CARBON - i3 GEN 8, 4GB, SSD 128',
          price: 2_100_000,
        },
      ];
      const resultProduct = await ProductModel.create(product);
      console.log(`resultProduct: ${resultProduct}`);

      const comment = [
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          username: 'Cahyo',
          comment: ' barang mulusss. performa oke. barang tepat waktu. recomended seller ',
        },
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          username: 'Cahyo',
          comment: ' barang mulusss. performa oke. barang tepat waktu. recomended seller ',
        },
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          username: 'Cahyo',
          comment: ' barang mulusss. performa oke. barang tepat waktu. recomended seller ',
        },
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          username: 'Cahyo',
          comment: ' barang mulusss. performa oke. barang tepat waktu. recomended seller ',
        },
        {
          videoId: new mongoose.Types.ObjectId(video._id.toString()),
          username: 'Cahyo',
          comment: ' barang mulusss. performa oke. barang tepat waktu. recomended seller ',
        },
      ];
      const resultComment = await CommentModel.insertMany(comment);
      console.log(`resultComment: ${resultComment}`);

      const resultVideo = await VideoModel.findByIdAndUpdate(
        video._id,
        {
          $push: {
            comments: resultComment.map((c) => c._id),
            products: resultProduct.map((p) => p._id),
          },
        },
        { new: true, useFindAndModify: false },
      );
      console.log(`resultVideo: ${resultVideo}`);
      console.log('finish seeding database');
    } catch (e) {
      console.error(e);
    }
  });
};

const app = express();
const port = 3000;

app.use(express.json());
app.use(productRouter);
app.use(videoRouter);
app.use(commentRouter);

app.listen(port, async () => {
  try {
    console.log(DB_URI);
    await mongoose.connect(DB_URI);

    console.log(`Server start at ${port}`);

    await seedDatabase();
  } catch (e) {
    console.error(e);
    console.error(DB_URI);
  }
});

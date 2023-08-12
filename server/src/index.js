/* eslint-disable import/extensions */
import express from 'express';
import mongoose, { ObjectId } from 'mongoose';
import productRouter from './route/product.js';
import videoRouter from './route/video.js';
import commentRouter from './route/comment.js';
import DB_URI from './config/dbconfig.js';
import { ProductModel } from './model/product.js';
import { CommentModel } from './model/comment.js';
import { VideoModel } from './model/video.js';

const app = express();
const port = 3000;

app.use(productRouter);
app.use(videoRouter);
app.use(commentRouter);

const seedDatabase = async () => {
  console.log('seeding database');
  const videos = [
    {
      urlImage: 'https://www.gamereactor.asia/media/29/_3112903b.jpg',
      thumbnail: 'https://www.gamereactor.asia/media/29/_3112903b.jpg',
      title: 'Video 1',
      comments: [],
      products: [],
    },
    {
      urlImage: 'https://www.gamereactor.asia/media/29/_3112903b.jpg',
      thumbnail: 'https://www.gamereactor.asia/media/29/_3112903b.jpg',
      title: 'Video 2',
      comments: [],
      products: [],
    },
    {
      urlImage: 'https://www.gamereactor.asia/media/29/_3112903b.jpg',
      thumbnail: 'https://www.gamereactor.asia/media/29/_3112903b.jpg',
      title: 'Video 3',
      comments: [],
      products: [],
    },
  ];
  const videosDb = await VideoModel.insertMany(videos);
  console.log(`videosDb : ${videosDb}`);

  videosDb.forEach(async (video) => {
    try {
      const product = {
        videoId: new mongoose.Types.ObjectId(video._id.toString()),
        linkProduct:
          'https://www.tokopedia.com/arthamotorsby/karet-u-list-helm-list-pintu-mobil-list-jok-list-kursi-sintetis?source=homepage.top_carousel.0.38456',
        title: 'Product 1',
        price: 10000,
      };
      const resultProduct = await ProductModel.create(product);
      console.log(`resultProduct: ${resultProduct}`);

      const comment = {
        videoId: new mongoose.Types.ObjectId(video._id.toString()),
        username: 'Username 1',
        comment:
          'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      };
      const resultComment = await CommentModel.create(comment);
      console.log(`resultComment: ${resultComment}`);
      const resultVideo = await VideoModel.findByIdAndUpdate(
        video._id,
        {
          $push: {
            comments: resultComment._id,
            products: resultProduct._id,
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

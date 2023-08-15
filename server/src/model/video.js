import mongoose from 'mongoose';
import { checkSchema } from 'express-validator';

const videoSchema = new mongoose.Schema({
  videoUrl: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  viewCount: {
    required: true,
    type: Number,
  },
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Comment',
    },
  ],
  products: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
    },
  ],
});

export const VideoModel = mongoose.model('Video', videoSchema);

export const videoCreationValidatorSchema = checkSchema(
  {
    videoUrl: {
      optional: false,
      notEmpty: true,
      isURL: true,
    },
    thumbnail: {
      optional: false,
      notEmpty: true,
      isURL: true,
    },
    title: {
      optional: false,
      notEmpty: true,
      isString: true,
      isLength: {
        options: { min: 8 },
      },
    },
    viewCount: {
      optional: false,
      notEmpty: true,
      isNumeric: true,
    },
    comments: {
      optional: true,
      isArray: true,
    },
    products: {
      optional: true,
      isArray: true,
    },
  },
  ['body'],
);

export const videoDeletionValidatorSchema = checkSchema(
  {
    videoId: {
      optional: false,
      notEmpty: true,
      isMongoId: true,
    },
  },
  ['body'],
);

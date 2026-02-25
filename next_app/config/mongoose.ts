import { Schema, model } from 'mongoose';

const DialogueOptionSchema = new Schema({
  text: { type: String, required: true },
  points: { type: Number, required: true },
  tag: String
});

const RankResponseSchema = new Schema({
  response: { type: Number, required: true },
  options: [DialogueOptionSchema]
});

const RankSchema = new Schema({
  rank: { type: Number, required: true },
  responses: [RankResponseSchema]
});

const SocialLinkSchema = new Schema({
  gameId: { type: String, required: true, index: true },
  id: { type: String, required: true },
  arcanaNumber: String,
  arcanaName: String,
  characterName: String,
  image: String,
  ranks: [RankSchema]
});

export const SocialLinkModel = model('SocialLink', SocialLinkSchema);
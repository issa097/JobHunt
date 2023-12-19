import mongoose, { Schema, Document } from 'mongoose';

interface IConnection extends Document {
  user1: mongoose.Types.ObjectId;
  user2: mongoose.Types.ObjectId;
  status: 'pending' | 'accepted' | 'rejected';
  
}

const connectionSchema: Schema = new Schema({
  user1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  user2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
  
});

const ConnectionModel = mongoose.model<IConnection>('Connection', connectionSchema);

export default ConnectionModel;

import express from 'express';
import video from '../models/video.js';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  try {
    const newVideo = new video(req.body);
    await newVideo.save();
    res.status(201).json({ message: 'Video uploaded', video: newVideo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read all
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Updated', video: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Video.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

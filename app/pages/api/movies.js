import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const collection = db.collection('movies');

    const movies = await collection.find({}).limit(10).toArray();
    res.status(200).json(movies);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

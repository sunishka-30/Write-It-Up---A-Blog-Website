import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-leewfph-shard-00-00.wdbm1zw.mongodb.net:27017,ac-leewfph-shard-00-01.wdbm1zw.mongodb.net:27017,ac-leewfph-shard-00-02.wdbm1zw.mongodb.net:27017/?ssl=true&replicaSet=atlas-e4jlkd-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
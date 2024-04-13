import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://atharvak8023:8ODzB3dtMAlWhUe4@mergeconflict.thy4pad.mongodb.net/mergeConflict";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(MONGO_URI, {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
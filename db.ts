// db.ts
import mongoose from 'mongoose';
// Remplacez les valeurs entre < > par vos informations
const connectionString = 'mongodb+srv://RaifKhodri:HjlGTZ4srLM7Vo5r@raifkhodri.wccs5yb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(connectionString, {
    });
    console.log('Connecté à MongoDB Atlas');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB :', error);
    process.exit(1); // Quitte l'application en cas d'erreur de connexion
  }
};

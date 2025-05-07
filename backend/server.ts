import app from './app';
import sequelize from './src/config/database';
import { setupAssociations } from './src/models/associations';

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log('DB connected & synced');
  setupAssociations();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

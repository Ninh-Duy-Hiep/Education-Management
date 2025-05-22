import { error } from 'console';
import app from './app';
import sequelize from './src/config/database';
import { setupAssociations } from './src/models/associations';

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: false }).then(() => {
  console.log('DB connected & synced');
  setupAssociations();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API documentation is available at http://localhost:${PORT}/api-docs`);
  });
})
.catch((error) => {
  console.error('Lỗi kết nối database:',error);
});

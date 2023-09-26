const db = require("../../database");

class CategoryRepository {
  async findAll() {
    const rows = await db.query("SELECT * FROM categories ORDER BY name");
    return rows;
  }

  async create({ name }) {
    const [row] = await db.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );
  }
}

module.exports = new CategoryRepository();

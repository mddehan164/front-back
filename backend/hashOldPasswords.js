const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");

// ✅ তোমার DB কানেকশন ডিটেইলস
const dbConfig = {
  host: "localhost",
  user: "root",           // তোমার MySQL ইউজারনেম
  password: "",           // যদি local mysql হয়, তাহলে ফাঁকা
  database: "practise_auth", // ⬅️ তোমার ডাটাবেজের নাম বসাও
};

const hashOldPasswords = async () => {
  try {
    // ✅ DB কানেকশন তৈরি
    const connection = await mysql.createConnection(dbConfig);
    console.log("📡 Connected to DB");

    // ✅ সব ইউজার পড়ো
    const [users] = await connection.execute("SELECT id, password FROM users");

    for (const user of users) {
      const { id, password } = user;

      // ✅ যদি password আগে থেকে hashed না হয়
      if (!password.startsWith("$2b$")) {
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ DB তে আপডেট করো
        await connection.execute(
          "UPDATE users SET password = ? WHERE id = ?",
          [hashedPassword, id]
        );

        console.log(`✅ User ID ${id} password hashed`);
      } else {
        console.log(`✅ User ID ${id} already hashed`);
      }
    }

    console.log("🎉 All applicable passwords have been hashed");
    await connection.end();
  } catch (err) {
    console.error("❌ Error:", err);
  }
};

hashOldPasswords();

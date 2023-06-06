// https://stackoverflow.com/questions/42912755/how-to-create-a-db-for-mongodb-container-on-start-up
db.auth('nico', 123)

db = db.getSiblingDB('supermercadoDB')

db.createUser(
  {
      user: "nico",
      pwd: 123,
      roles: [
          {
              role: "readWrite",
              db: "supermercadoDB"
          }
      ]
  }
);
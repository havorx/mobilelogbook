import { openDB } from 'idb'
import { Property } from './models';

const DATABASE_NAME = "RentalZDB";

initDB().then(() => {
  console.log('database initialize!')
})


async function initDB() {
  const db = await openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      // Create a store of objects
      const store = db.createObjectStore('property', {
        // The 'id' property of the object will be the key.
        keyPath: 'id',
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
    },
  });
}

export async function insertRecord(property: Property) {
  const db = await openDB(DATABASE_NAME, 1)
  const tx = db.transaction('property', 'readwrite');
  const store = tx.objectStore('property');
  await store.put(property)
}

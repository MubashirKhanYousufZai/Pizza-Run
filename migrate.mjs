import sanityClient from "@sanity/client";
import axios from "axios";

const sanity = sanityClient({
  projectId: "your_project_id", // Replace with your actual Sanity project ID
  dataset: "production",
  useCdn: false,
  token: "your_sanity_token", // Replace with your actual Sanity API token
});

async function migrateData() {
  try {
    const { data } = await axios.get("https://678d784ef067bf9e24ea6063.mockapi.io/Pizza");

    for (const item of data) {
      await sanity.create({
        _type: "pizza",
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
      });
      console.log(`✅ Migrated: ${item.name}`);
    }
    console.log("🎉 Data migration complete!");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
}

migrateData();
